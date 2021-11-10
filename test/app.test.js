const app = require('../api/index');
app.listen(5000, () => {
    console.log("Server started on port 5000");
})

const conn = require('../api/dbConf');
const supertest = require('supertest');

beforeEach((done) => {
    conn.query()
})