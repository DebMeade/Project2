### Schema

CREATE DATABASE drugInfo_db;
USE drugInfo_db;

CREATE TABLE drugs
(
	id int NOT NULL,
	drugName VARCHAR(255) NOT NULL,
    pharmacyName VARCHAR(255) NOT NULL,
    doctorName VARCHAR(255) NOT NULL,
    precautions VARCHAR(255), 
    fillDate DATE NOT NULL, 
    expDate DATE NOT NULL,
    refillDate DATE NULL,
	
	PRIMARY KEY (id)
);