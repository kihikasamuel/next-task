const express = require('express');
const dotenv = require('dotenv');
const db = require('./dbConf');

dotenv.config();

// express instance
const app = express();

// init inbuilt bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// require api routes
const users = require('./routes/users');
const tasks = require('./routes/tasks');

// use routes
app.use(users);
app.use(tasks);

module.exports = app;