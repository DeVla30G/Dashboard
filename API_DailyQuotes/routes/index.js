var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({code: 200, message: "Welcome to Api Microservices"});
});

module.exports = router;