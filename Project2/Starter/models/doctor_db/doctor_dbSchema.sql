### Schema

CREATE DATABASE doctor_db;
USE doctor_db;

CREATE TABLE doctors
(
	id int NOT NULL AUTO_INCREMENT,
    doctorName VARCHAR(30) NOT NULL,
    doctorPhone VARCHAR (30) NOT NULL,
    doctorEmail VARCHAR(30), 
	
	PRIMARY KEY (id)
);