const express = require('express');
const app = express.Router();
const cors = require("cors");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const MY_TOKEN = 'c03398ab9d36a03521735b4508d8be4acaee8c6799394cf02ae3b92bf5309d55'; // météo next hours daily limit 10 calls

/* GET home page. */
app.get('/home', function(req, res, next) {
  res.send({code: 200, message: "Welcome to METEO FRANCE API"});
});


app.get("/", async (req, res) => {
  console.log("/nextHours endpoint called");
  const url = `https://api.meteo-concept.com/api/forecast/nextHours?token=${MY_TOKEN}`;
  const options = { 
    "method": "GET",
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .catch(e => {
      console.error ({
        "message": "sorry not good",
        error: e
      });
    });
  console.log(response);
  res.header('Access-Control-Allow-Origin', '*')
  res.json(response.url); 
}); 

app.get("/eph", async (req, res) => {
    console.log("/ephemeride endpoint called");
    const url = 'http://api.meteo-concept.com/api/ephemeride/0?token=c03398ab9d36a03521735b4508d8be4acaee8c6799394cf02ae3b92bf5309d55';
    const options = { 
      "method": "GET",
    };
    const response = await fetch(url, options)
      .then(res => res.json())
      .catch(e => {
        console.error ({
          "message": "sorry not good",
          error: e
        });
      });
    console.log(response);
    res.header('Access-Control-Allow-Origin', '*')
    res.json(response); 
  }); 




  app.get("/city", async (req, res) => {
    console.log("/city endpoint called");
    let city = 'Nice';
    const url = `https://api.meteo-concept.com/api/location/cities?token=${MY_TOKEN}&search=${city}`;
    const options = { 
      "method": "GET",
    };
    const response = await fetch(url, options)
      .then(res => res.json())
      .catch(e => {
        console.error ({
          "message": "sorry not good",
          error: e
        });
      });
    console.log(response);
    res.header('Access-Control-Allow-Origin', '*')
    res.json(response.url); 
  }); 



// prévisions sur 14 jours tmin tmax
  app.get("/daily", async (req, res) => {
    console.log("/daily endpoint called");
    let city = 'Nice';
    const url = `https://api.meteo-concept.com/api/forecast/daily?token=${MY_TOKEN}&search=${city}`;
    const options = { 
      "method": "GET",
    };
    const response = await fetch(url, options)
      .then(res => res.json())
      .catch(e => {
        console.error ({
          "message": "sorry not good",
          error: e
        });
      });
    console.log(response);
    res.header('Access-Control-Allow-Origin', '*')
    res.json(response.url); 
  }); 

module.exports = app;