const mysql = require("mysql");


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'shopping'
});

connection.connect();

module.exports = connection;