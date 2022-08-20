CREATE DATABASE reiko_db;

\c reiko_db;

CREATE TABLE drink (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    best_time INT NOT NULL
);

CREATE TABLE feedback (
	id SERIAL PRIMARY KEY,
	drink_id INT NOT NULL,
	cold_time INT NOT NULL,
	evaluate INT NOT NULL
);
