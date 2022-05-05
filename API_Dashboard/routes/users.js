const express = require('express');
const app = express.Router();

const apiUrl = require("../config.json").apiUrl;

const jwt = require("jsonwebtoken");
const axios = require("axios");

const verifyIdentity = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.status(400).send({ msg: "Please provide a token" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(401).send({ msg: "This token is not valid." });

        req.user = user;
        next();
    });
}

/**
 * @swagger
 * /users/a/{id}:
 *  get:
 *     tags:
 *       - Users
 *     description: durée existence du compte
 *     parameters:
 *         -  in: path
 *            name: id
 *            schema: 
 *               type: string
 *               format: date
 *     responses: 
 *        200:
 *          description: successful operation
 */
// time of existence of the account

    app.get("/a/:id", (req, res) => {
    let sql = `SELECT DATE(create_time), CURDATE(), DATEDIFF(CURDATE(), create_time) FROM users WHERE id =${req.params.id}`;
    
    con.query(sql, async (err, result, fields) => {
        if (err) return res.status(500).send(err);
        if(result) return res.status(200).send(result);

       console.log(result);
    });
  });





// Get users

/**
 * @swagger
 * /users:
 *   get:
 *     produces:
 *       - application/json
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: OK
 */
app.get('/', (req, res) => {
    let sql = `SELECT * FROM users`;
    con.query(sql, async (err, result, fields) => {
        if(err) return res.status(500).send(err);

        if(result) {

            let clean = result.map(user => {
                delete user.password;
                delete user.reset_password_token;
                return user;
            })

            return res.status(200).send(clean);
        }
    });
    return ;
})



// Get user

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 */
app.get("/:id", (req, res) => {
    let sql = `SELECT * FROM users WHERE id=${req.params.id}`;
    con.query(sql, (err, result, fields) => {
        if(err) return res.status(500).send(err);

        if(result) {
            if(result.length == 0) return res.status(404).send({message: "User not found"});
            let user = result[0];
            delete user.password;
            delete user.reset_password_token;
            return res.status(200).send(user);
        }
    });
    return;
})

/**
 * @swagger
 * /Users/{id}:
 *   patch:
 *      tags:
 *      - Users
 *      description: this returns user by id and update it
 *      security:
 *          - JWT token: []
 *      parameters:
 *          -in: path
 *          name: id
 *      responses:
 *       200:
 *         description: User profile with fields to update
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not found
 *
 */

 app.patch("/users/:id", verifyIdentity, (req, res) => {

    let sql = `UPDATE users SET username = "${req.body.username}" WHERE id = 'id';`

    con.query(sql, async (error, res, fields) => {
     if (error) console.log(error);
     res.send('Profile updated');
    });
 });


/** 
* @swagger
* paths:
*  /users/{id}:
*   get:
*      parameters:
*       - in: path
*         name: id
*       - in: query
*         name: role
*         schema:
*           type: bool
*           enum: [0 => user, 1 => admin]
*         required: true
*/

app.get("/users/:id", (req, res) => {
  
    let sql = `SELECT role FROM users WHERE id = ${req.params.id};`
   
    con.query(sql, (err, result, fields) => {
        if(err) return res.status(500).send(err);
        if(result){
            if(result === 0) return res.status(200).send('user') ;
            if(result === 1) return res.status(200).send('admin') ;
        }

    });
 });

// delete user admin delete 

module.exports = app;