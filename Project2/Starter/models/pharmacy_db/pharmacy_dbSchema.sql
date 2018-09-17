### Schema

CREATE DATABASE pharmacy_db;
USE pharmacy_db;

CREATE TABLE pharmacies
(
	id int NOT NULL AUTO_INCREMENT,
    pharmacyName VARCHAR(255) NOT NULL,
    pharmacyPhone VARCHAR (30) NOT NULL,
    pharmacyEmail VARCHAR(30), 
	
	PRIMARY KEY (id)
);