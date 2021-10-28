const mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',//docker-mysql
    port: 8001,
    user: 'root',
    password: 'appuser@123',
    database: 'todos_db'
});

//Icu@2021//172.17.0.2//docker root Icu@2021

conn.connect(function(err){
    if(err) {
        throw err;
        return;
    }
    
    console.log('Connection successful...');
});

module.exports = conn;