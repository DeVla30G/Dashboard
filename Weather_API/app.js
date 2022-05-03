const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');
const fs = require("fs");
require("dotenv").config();
const port = process.env.PORT || 3030;

const swaggerOptions = {
    swaggerDefinition: {
       
        openapi: '3.0.0',
        info: {
          title: 'Express API for JSONPlaceholder',
          version: '1.0.0',
          description:
            'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
          license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html',
          },
          contact: {
            name: 'JSONPlaceholder',
            url: 'https://jsonplaceholder.typicode.com',
          },
        },
        servers: [
          {
            url: 'http://localhost:3000',
            description: 'Development server',
          },
        ]
        },
    apis: ["./routes/*.js", 'app.js']
};
/**
 * @swagger
 * securityDefinitions:
 *   JWT Token:
 *     type: apiKey
 *     name: Authorization
 *     description: Put "Bearer token" in the input for it to work.
 *     in: header
 *   Password Token:
 *     type: apiKey
 *     name: Password Authorization
 *     description: Put "Bearer token" in the input for it to work.
 *     in: header
 */
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/v1/forecast', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')));
global.con = require("./config/db.js");

// Auto import routes
fs.readdirSync("./routes/").forEach(file => {
  file = file.slice(0, file.length - 3);
  let currentRoute = require("./routes/" + file);
  console.log("/" + file);
  app.use("/" + file, currentRoute);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.send({code: err.status, message: res.locals.message});
});
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

/*const user = {
  id: '12',
  name : 'test',
  email: 'test@test.fr',
  admin: true

};

function generateAccessToken(user) {
  return jwt.sign((user, process.env.ACCESS_TOKEN_SECRET))
};

const accessToken = generateAccessToken(user);
console.log('accessToken', accessToken);*/

module.exports = app;
