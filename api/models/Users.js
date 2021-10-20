// user schema/table
const User = `CREATE TABLE IF NOT EXISTS users (
username VARCHAR(100) NOT NULL PRIMARY KEY,
fullname VARCHAR(100) NOT NULL,
phone VARCHAR(100) NOT NULL
)`;

module.exports = User;