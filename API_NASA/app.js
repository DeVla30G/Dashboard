const express = require('express');
const app = express();
const path = require('path');
const searches = require('./routes/nasa')
const nasa = require('./routes/nasa');
const cors = require("cors");
const bodyParser = require('body-parser');

const port = process.env.PORT || 3100;

// error handler
app.use('/nasa', nasa);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.route('/nasa')
.get((req,res) => {})

app.listen(port, err => {
  if (err) {
    return console.log("message")
  }
  console.log(`Example app listening on port ${port}`)
});


module.exports = app;