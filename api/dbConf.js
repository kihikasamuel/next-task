const mysql = require('mysql');
require('dotenv').config();
var conn = mysql.createConnection({
    host: process.env.DB_HOST,//docker-mysql
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_USER_SECRET,
    database: process.env.NODE_ENV === "test" ? "todos_test_db" : 'todos_db'
});



conn.connect((err)=>{
    if(err) {
        throw err;
        return;
    }
    // console.log('Connection successful...');
});

module.exports = conn;