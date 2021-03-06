var express = require('express');
var app = express.Router();

const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
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

// Get age function


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
 *            firstname:
 *               type: string
 *               example: Toto
 *            lastname:
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
    if (body.firstname && body.lastname && body.username && body.email && body.password) {

        // Check email
        if (validateEmail(body.email)) {

            // Check if > 13yo


                // Hashing password
                bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                    const firstname = req.body.firstname;
                    const lastname = req.body.lastname;
                    const username = req.body.username;
                    const email = req.body.email;
                    const password = hash;
                    const role = 0;

                    con.query(`INSERT INTO users (firstname, lastname, username, email, password, role, create_time, update_time) VALUES ("${firstname}", "${lastname}", "${username}", "${email}", "${password}", "${role}", now(), now())`, async (err, result, fields) => {
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
                                email: body.email,
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
                            let transporter = nodemailer.createTransport({
                                host: "smtp.mailtrap.io",
                                port: 2525,
                                auth: {
                                    user: "ba8b8d3ae15c5f",
                                    pass: "98cfbacc21dab2"
                                }
                            })
                            let link = 'http://localhost:8080/login';
                            const options = {
                                from: "fanny@mailtrap.com",
                                to: email,
                                subject: "Dashboard - password recovery",
                                html: `<body style="font-family: sans-serif; text-align: center; background-color: #eee">
                                <div style="background-color: #fff; border-radius: 3px; position: absolute;
                                top: 50%;
                                -ms-transform: translateY(-50%);
                                transform: translate(-50%,-50%); padding: 30px 0px; left: 50%;">
                                  <img style="width: 10%;" src="https://something blob here or avatar pic" />
                                    <h3 style="margin-top: 20px;">Hello</h3>
                                  <p style="min-width: 400px; margin: 0 auto; margin-bottom: 20px;">
                                  Welcome on Dashboard !<br>
                                  <br>
                                  Please confirm your account<br>
                                  <br>
                                  Click the button below to complete the process.
                                  </p>

                                  <a href="${link}" style="background-color: #F6A433; color : #fff; padding: 10px 7px; text-decoration: none; border-radius: 0.375rem;">Confirm account</a>
                                </div>

                              </body>`
                            }

                            transporter.sendMail(options, (err, info) => {
                                if (err) {
                                    console.log(err);
                                    res.status(500).send(err);
                                    return;
                                }

                                console.log(info);
                                res.status(201).send({ msg: "The mail was successfully sent (if you can't see it, it is probably in your spams)." });
                                return
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


/* let link = axios.post('http://localhost:3000/login', {
                            email: body.email,
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

                        const options = {
                            from: "fanny@mailtrap.com",
                            to: email,
                            subject: "Dashboard - password recovery",
                            html: `<body style="font-family: sans-serif; text-align: center; background-color: #eee">
                            <div style="background-color: #fff; border-radius: 3px; position: absolute;
                            top: 50%;
                            -ms-transform: translateY(-50%);
                            transform: translate(-50%,-50%); padding: 30px 0px; left: 50%;">
                              <img style="width: 10%;" src="https://something blob here or avatar pic" />
                                <h3 style="margin-top: 20px;">Hello</h3>
                              <p style="min-width: 400px; margin: 0 auto; margin-bottom: 20px;">
                              Welcome on Dashboard !<br>
                              <br>
                              Please confirm your account<br>
                              <br>
                              Click the button below to complete the process.
                              </p>

                              <a href="${link}" style="background-color: #F6A433; color : #fff; padding: 10px 7px; text-decoration: none; border-radius: 0.375rem;">Confirm account</a>
                            </div>

                          </body>`
                        }

                        transporter.sendMail(options, (err, info) => {
                            if (err) {
                                console.log(err);
                                res.status(500).send(err);
                                return;
                            }

                            console.log(info);
                            res.status(201).send({ msg: "The mail was successfully sent (if you can't see it, it is probably in your spams)." });
                            return
                        })*/