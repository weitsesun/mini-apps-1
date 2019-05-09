
DROP DATABASE IF EXISTS shopping;
CREATE DATABASE shopping;

USE shopping;

CREATE TABLE IF NOT EXISTS customerInfo(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  email VARCHAR(200),
  password VARCHAR(200),
  addressline VARCHAR(255),
  zipcode VARCHAR(20),
  city VARCHAR(20),
  country VARCHAR(50),
  cardHolder VARCHAR(50),
  cardNumber INT(40),
  cvv INT(10),
  expDate VARCHAR(15),
  PRIMARY KEY(id)
)