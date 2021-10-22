const mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'S3cur3@2021',
    database: 'todos_db'
});

conn.connect(function(err){
    if(err) {
        throw err.sqlMessage;
        return;
    }
    
    console.log('Connection successful...');
});

module.exports = conn;