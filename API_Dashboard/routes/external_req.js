//Make the request module available for use in this file
const express = require('express');
const nasa = express();
const axios = require('axios');
const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');


nasa.use(bodyParser.json());
nasa.use(cors());
nasa.use(bodyParser.urlencoded({extended:false}))
nasa.use(express.static(path.join(__dirname, 'public')));

nasa.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });

  module.exports = nasa; 

