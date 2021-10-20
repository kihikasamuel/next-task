var mysql = require('mysql');
var Dsn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'S3cur3@2021',
    database: 'trial'
});

var conn = Dsn.connect(function(err){
    if(err) throw err.sqlMessage
    console.log('Connection successful...');
});

module.exports = conn;