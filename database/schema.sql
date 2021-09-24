DROP DATABASE IF EXISTS Covid;

CREATE DATABASE Covid;

\c Covid;

DROP TABLE IF EXISTS stats;

CREATE TABLE stats (
  city VARCHAR(30),
  state VARCHAR(30),
  country VARCHAR(30),
  cases INT
);