const express = require('express');
const dotenv = require('dotenv');
const db = require('./dbConf');

dotenv.config();

// express instance
const app = express();

// init inbuilt bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// set headers or import cors npm module
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})

// require api routes
const users = require('./routes/users');
const tasks = require('./routes/tasks');

// use routes
app.use(users);
app.use(tasks);

module.exports = app;