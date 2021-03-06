const mysql = require('mysql');
const app = require('../server.js');

require('dotenv').config();

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_USER_SECRET,
});

//create connection
conn.connect(err => {
    if(err) console.error(`Unable to connect: ${err.message}`)
    console.log("Connection successful!");
});


//create database
const db_name = process.env.NODE_ENV === "test" ? 'todos_test_db' : 'todos_db';
conn.query(`CREATE DATABASE IF NOT EXISTS ${db_name}`, (err, result) => {
    if(err) console.error(`${err.stack}`)
    console.log(`Database ${db_name} created...`);

    // select database
    conn.changeUser({database: db_name}, function(err) {
        if(err) console.log(`${err.message}`)
        console.log(`Database ${db_name} is selected...`);

        // create all tables by calling the table creator process
        craeteTables();
    });
});


// task processor
function craeteTables() {

    // wait for all promises to resolve
    Promise.all([
        // any other table shld be added here
        createUsersTable(),
        createTasksTable(),
    ]).then(() => {
        conn.end();
        console.log("Connection clossed");
    });

}

// Users table
function createUsersTable() {
    let table_name = 'users_tbl';
    let stmt = `CREATE TABLE IF NOT EXISTS ${table_name}(
        id INT AUTO_INCREMENT NOT NULL,
        company_uid VARCHAR(255) NOT NULL UNIQUE KEY,
        username VARCHAR(255) NOT NULL UNIQUE KEY,
        fullname VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

        PRIMARY KEY (id)
    )`;

    // call the query executer
    return createTableHelper(stmt, table_name);
}

// tasks table
function createTasksTable() {
    let table_name = 'tasks_tbl';
    let stmt = `CREATE TABLE IF NOT EXISTS ${table_name} (
        id INT AUTO_INCREMENT NOT NULL,
        company_id VARCHAR(255) NOT NULL,
        label VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        notes TEXT NOT NULL,
        scheduled_on TIMESTAMP,
        repeats INT NOT NULL,
        is_reminder VARCHAR(20) NOT NULL,
        status VARCHAR(20) NOT NULL DEFAULT 'PENDING',
        assign_to VARCHAR(255) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

        PRIMARY KEY (id),
        UNIQUE KEY (title),
        CONSTRAINT FOREIGN KEY(company_id) REFERENCES users_tbl(company_uid)
    )`;

    // execute the query
    return createTableHelper(stmt, table_name);
}

// create table or give an error
function createTableHelper(sql, tablename) {
    return new Promise((resolve, reject) => {
        conn.query(sql, function(err, result) {
            if(err) {
                console.log(`Error while creating ${tablename} : ${err}`);
                exit();
            }
            else {
                console.log(`Table ${tablename} created...`);
                resolve(result);
            }
        });
    });
}