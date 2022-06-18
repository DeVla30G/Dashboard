const express = require('express');
const app = express.Router();
const cors = require("cors");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const API_KEY = 'xSeWjulVmnjyPp3Mam1ep9oCYGhbT7vukOoaTIxo';

/* GET home page. */
app.get('/home', function(req, res, next) {
  res.send({code: 200, message: "Welcome to NASA API"});
});


app.get("/", async (req, res) => {
  console.log("/image endpoint called");
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
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

app.get("/all", async (req, res) => {
    console.log("/description endpoint called");
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
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

module.exports = app;