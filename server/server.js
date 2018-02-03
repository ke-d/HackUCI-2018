var express = require("express");
var app = express();
var cors = require('cors');
var request = require('request');

app.use(cors());
const testData = {
  "total": 8228,
  "businesses": [
    {
      "rating": 4,
      "price": "$",
      "phone": "+14152520800",
      "id": "four-barrel-coffee-san-francisco",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 1738,
      "name": "Four Barrel Coffee",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    },
    // ...
  ],
  "region": {
    "center": {
      "latitude": 37.767413217936834,
      "longitude": -122.42820739746094
    }
  }
};

app.get("/testData", (req, res) => {
  request({url: "https://api.yelp.com/v3/businesses/search?location=90802&results=restaurants", headers: {"Access-Control-Allow-Origin": "*", Authorization: `Bearer Ic0tWvEOzB9fGAUPFeL4y9hQv6jbDd7ACqSy5-2bI9JGLH92qNCOuLRt203kcO7pETQWjQGGEAKLINaHCyd284LUEn3SkdMb0iUHotj3lQ0h11cQD3YsGkSrsWB1WnYx`}}, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      console.log(body);
      res.send(body);
    }
  })

});

app.listen(8080);
