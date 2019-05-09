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
  // res.status(201).send(req.body);
  console.log(req.body);

  // var queryStr = ;
    
  db.query("INSERT INTO customerInfo(name, email, password, addressline, zipcode, city, \
    country, cardHolder, cardNumber, cvv, expDate) VALUES (?,?,?,?,?,?,?,?,?,?,?)", [req.body.name, req.body.email, req.body.password, req.body.addressline, req.body.zipcode, req.body.city,
  req.body.country, req.body.nameOnCard, req.body.creditCardNum, req.body.cvv, req.body.expDate], (err, result) => {
    if (err) {
      res.status(500).send("error");
      return;
    }
    res.status(200).send("posted to database");
  })
})

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});