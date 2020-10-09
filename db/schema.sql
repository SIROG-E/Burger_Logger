CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger_table(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    burger_time timestamp,
	PRIMARY KEY (id)
);