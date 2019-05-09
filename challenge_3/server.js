var express = require('express');
var app = express();

var db = require('./dbmodel.js');

var cors = require('cors');
var bodyParser = require('body-parser')
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());

//get req
app.get('/', (req, res) => {
  // res.status(200).send("hello")
  db.query("DESCRIBE customerInfo", (err, result) => {
    if(err) {
      res.status(500).send("err");
      return;
    }
    res.status(200).send(result);
  })
})
//post req
app.post('/', (req, res) => {
  res.status(201).send(req.body);
  var body = req.body;
  queryStr = "INSERT INTO customerInfo(name, email, password, addressline, zipcode, city, \
    country, cardHolder, cardNumber, cvv, expDate) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
  db.query(queryStr, [body.name, body.email, body.password, body.addressline, body.zipcode, body.city,
  body.country, body.cardHolder, body.cardNumber, body.cvv, body.expDate], (err, result) => {
    if (err) {
      res.status(500).send("error");
      return;
    }
    res.status(200).send("Posted to Shopping Database!")
  })
})

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});