var express = require('express');
var app = express.Router();

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const saltRounds = 10;
const { default: axios } = require('axios');

// Validate email regex

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


/**
 * @swagger
 * /register:
 *   post:
 *     tags:
 *       - Authentication
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *       - text/plain
 *     parameters:
 *       - in: body
 *         description: All the info about the user you're trying to register
 *     schema:
 *           required:
 *             - firstname
 *             - lastname
 *             - username
 *             - email
 *             - password
 *           properties:
 *            name:
 *               type: string
 *               example: Toto
 *            surname:
 *               type: string
 *               example: toto
 *            username:
 *               type: string
 *               example: toto
 *            email:
 *               type: string
 *               example: toto.tata@gmail.com
 *            password:
 *               type: string
 *               example: mySuperSecretPassword
 *     responses:
 *       200:
 *         description: All the user's info
 *       403:
 *         description: Forbidden
 *       400:
 *         description: Bad request
 *       409:
 *         description: Conflict
 */
app.post("/", (req, res) => {
    let body = req.body;

    // Check if body is complete
    if (body.firstname && body.lastname && body.username && body.email && body.password ) {

        // Check email
        if (validateEmail(body.email)) {



                // Hashing password
                bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                    const firstname = req.body.firstname;
                    const lastname = req.body.lastname;
                    const username = req.body.username;
                    const email = req.body.email;
                    const password = hash;
                    const birth_date = req.body.birth_date;
                    const profile_pic = req.body.profile_pic;
                    const description = req.body.description;
                    const role = 0;

                    con.query(`INSERT INTO users (firstname, lastname, username, email, password, profile_pic, birth_date, role, create_time, update_time, description) VALUES ("${firstname}", "${lastname}", "${username}", "${email}", "${password}", "${profile_pic}", "${birth_date}", "${role}", now(), now(), "${description}")`, async (err, result, fields) => {
                        if (err) {
                            if (err.code == "ER_DUP_ENTRY") {
                                res.status(409).send({msg:"User already exists."});
                                return;
                            }
                            res.status(500).send(err);
                            return;
                        }

                        if (result) {
                            axios.post('http://localhost:3000/login', {
                                identifier: body.username,
                                password: body.password
                            }).then(response => {
                                console.log(response);
                                res.status(200).send(response.data);
                                return;
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).send(err);
                                return;
                            })
                        }
                    })

                });


        } else {
            res.status(400).send({msg:"Please verify you entered a correct email."});
            return;
        }

    } else {
        res.status(400).send({msg:"Please verify your request includes a username, an email, a password"});
        return;
    }
})

module.exports = app;