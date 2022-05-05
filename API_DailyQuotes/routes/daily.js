const express = require('express');
const app = express.Router();
const apiUrl = require("../config.json").apiUrl;


const axios = require("axios");

/*let today = new Date().toLocaleDateString()
console.log(today)*/
/**
 * @swagger
 * /daily:
 *   get:
 *     tags:
 *       - daily
 *     description: Gets all daily
 *     produces:
 *       - application/json
 *       - text/plain
 *     responses:
 *       200:
 *         description: All daily
 */
// Get all daily

app.get("/", (req, res) => {
    let sql = `SELECT positive FROM daily ORDER BY RAND() LIMIT 1`;

    con.query(sql, async (err, result, fields) => {
        if (err) return res.status(500).send(err);
        if(result) return res.status(200).send(result);

       console.log(result);
    });
  });

  module.exports = app;




