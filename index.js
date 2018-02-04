var express = require("express");
var app = express();
var cors = require('cors');
var request = require('request');
var path = require("path");
const yelp = require('yelp-fusion');
var SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
var YELP_API_KEY = process.env.YELP_API_KEY

if (process.env.SENDGRID_API_KEY && process.env.YELP_API_KEY) {
  console.log('It is set!');
}
else {
  console.log('No set!');
}
const client = yelp.client(YELP_API_KEY);
//app.use(cors());

var helmet = require('helmet')
const sgMail = require('@sendgrid/mail'); // used to send mail

sgMail.setApiKey(SENDGRID_API_KEY);
app.use(helmet());

/******************************* Sends an email with the receipt ************************/
var orderList = {
  "restaurant_name": "Panda Express",
  "orders": [
    {
      "oid": 1,
      "item": "Chicken Bowl",
      "calories": 500,
      "quantity": 1,
      "price": 8
    },
    {
      "oid": 2,
      "item": "Beef Teriyaki",
      "calories": 1000,
      "quantity": 2,
      "price": 11
    },
    {
      "oid": 3,
      "item": "Chicken Caesar Salad",
      "calories": 300,
      "quantity": 1,
      "price": 6
    }
  ]
}

function createReceipt(oList) {
  var orders = "<tr><th><strong>Item</strong></th><th><strong>Calories</th><th><strong>Quantity</strong></th><th><strong>Price</strong></th><tr>";
  for(var i = 0; i < oList.orders.length; i++) {
    orders += "<tr><td>" + oList.orders[i].item + "</td><td>" +oList.orders[i].calories + "</td><td>" + oList.orders[i].quantity + "</td><td>" + oList.orders[i].price + "</td></tr>"
  }
  return orders;
}

app.get("/sendReceipt/", (req, res) => {
  const { query:
    { to = 'lordkass@gmail.com',
      from = 'order@teamsudoku.tech' } } = req;

  var msg = {
    "template_id": "0df82605-c239-42bc-a07b-f00b2abb737d",
    to: `Haydn <${to}>`,
    from: `Team Sudoku <${from}>`,
    subject: `Receipt from ${orderList.restaurant_name}`,
    substitutions: {
      "orders": createReceipt(orderList)
    }, 
    content: [
      {
        "type": "text/html",
        "value": "<p>Hello, world!</p>"
      }
    ]
  };

  sgMail.send(msg).then(() => {
    createReceipt(orderList);
    console.log("Message sent!")
    //var test = "<table>" + msg.substitutions.orders + "</table>";
    //res.send(test);
    res.status(200).send(orderList).end();
  }).catch(e => {
    console.error(e.toString());
    res.status(500).end();
  });
});

/******************** Promo Email (Includes random coupons, random restaurant) ****************/
var promo_coupons = {
  "coupons": [
    {
      "cpid": 1,
      "restaurant_name": "Panda Express",
      "menu_item": "Chicken Bowl",
      "category": ["entree", "bowl", "meat"]
    },
    {
      "cpid": 2,
      "restaurant_name": "Class 302",
      "menu_item": "Pork Chop Lunch Box",
      "category": ["entree", "meat"]
    },
    {
      "cpid": 3,
      "restaurant_name": "Cha For Tea",
      "menu_item": "Popcorn Chicken",
      "category": ["appetizer", "meat"]
    }
  ]
};

var promo_choice = Math.floor(Math.random() * promo_coupons.length)

app.get("/sendPromo", (req, res) => {
  var msg = {
    to: 'Haydn <lordkass@gmail.com>',
    from: 'Team Sudoku <promo@teamsudoku.tech>',
    subject: 'Time Sensitive Deals!',
    text: `$2 Off a ${promo_coupons.coupons[promo_choice].menu_item} at ${promo_coupons.coupons[promo_choice].restaurant_name}!`,
    html: `<p>$2 Off a ${promo_coupons.coupons[promo_choice].menu_item} at ${promo_coupons.coupons[promo_choice].restaurant_name}!</p>`,
  };

  sgMail.send(msg).then(() => {
    console.log("Promo sent!")
    res.status(200).send(`Promotional Email sent to ${msg.to}`).end();
  });
});

/********************************************** Email Statistics ************************************/
app.get("/emailStats", (req, res) => {
  var emailStats = {
    method: 'GET',
    url: 'https://api.sendgrid.com/v3/stats',
    qs: { start_date: '2018-02-02', aggregated_by: 'day' },
    headers: { authorization: `Bearer ${SENDGRID_API_KEY}` },
    body: '{}'
  };

  request(emailStats, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      console.log("Email Statistics loaded")
      res.send(body);
    }
  });
});


// User Input
var latitude = 33.648803;
var longitude = -117.842813;
var price = 1;

var user = {
  favorites: ['Cha For Tea', 'ImpaCafe'],
}

  var output = [];
  var prioritylist = [];

  client.search({
    latitude: latitude,
    longitude: longitude,
    categories: 'food,All',
    price: price,
    sort_by: 'distance',
    radius: 9656, //6 miles
    open_now: 'false'
  }).then(response=>{
    for(i = 0; i<10; i++){
      //console.log(response.jsonBody.businesses[i].name);

      output.push(response.jsonBody.businesses[i]);
      for(i2 = 0; i2< (user.favorites.length);i2++){

        if(response.jsonBody.businesses[i].name == user.favorites[i2]){
          prioritylist.push(response.jsonBody.businesses[i]);

        }
      }

    }
    //console.log('PRIORITY');
    for(i = 0; i<prioritylist.length;i++){
      //console.log(prioritylist[i].name);
    }
    //console.log('NEW LIST');
    var add;
    for(i = 0; i<(output.length);i++){
      add = true;
      for(i2 = 0; i2 < (prioritylist.length); i2++){

        if ((output[i] == prioritylist[i2]) || ((prioritylist.length) >= 10) ){
          add = false;
        }
      }
      if (add == true){
        prioritylist.push(output[i]);
      }
    }
    for(i = 0; i<10; i++){
      console.log(prioritylist[i].name);
      console.log(prioritylist[i].price);
      console.log(prioritylist[i].rating);
      console.log(prioritylist[i].distance);
      console.log(prioritylist[i].image_url);

    }
  })


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

/****************************************** Yelp API **************************************/
var zip = [90802, 90703, 98105, 92844, 92602, 91768, 53075, 90001, 90029, 90063]
var zip_choice = Math.floor(Math.random() * zip.length);
  setInterval(function() {
     zip_choice = Math.floor(Math.random() * zip.length);
     //console.log("HERE")
  },1000);
/*if(typeof(window) !== 'undefined') {
  var timer = setTimeout(function() {
    var zip_choice = Math.floor(Math.random() * zip.length)
    console.log(zip_choice)
  }, 500);*/
  //zip_choice = Math.floor(Math.random() * zip.length)
//}

//zip_choice = zipRandom(zip)

app.get("/testData", (req, res) => {
  request({url: `https://api.yelp.com/v3/businesses/search?location=${zip[zip_choice]}&results=restaurants`, headers: {"Access-Control-Allow-Origin": "*", Authorization: `Bearer ${YELP_API_KEY}`}}, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      console.log(body);
      res.send(body);
    }
  })

});


//app.get('/result',(req,res) => res.send(prioritylist.name))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


const port = process.env.PORT || 3000;
app.listen(port);

console.log(`Listening on ${port}`);
