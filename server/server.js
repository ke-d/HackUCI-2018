var express = require("express");
var app = express();
var cors = require('cors');
var request = require('request');
const yelp = require('yelp-fusion');
const client = yelp.client('Ic0tWvEOzB9fGAUPFeL4y9hQv6jbDd7ACqSy5-2bI9JGLH92qNCOuLRt203kcO7pETQWjQGGEAKLINaHCyd284LUEn3SkdMb0iUHotj3lQ0h11cQD3YsGkSrsWB1WnYx');
app.use(cors());

//User Input
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
  
  





app.get('/result',(req,res) => res.send(prioritylist.name))


app.listen(8080);
