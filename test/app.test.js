const app = require('../api/index');
const request = require('supertest');

describe("GET /api/tasks/all", () => {
    test("It should respond with status code 200", async () => {
        const response = await request(app).get('/tasks/all');
        expect(response.statusCode).toBe(200);
    });

    test("It should return status code 200", async () => {
        const response = await request(app).get('/tasks/:1');
        
        expect(response.statusCode).toBe(200);
    });
});

describe("Get /api/tasks/:id", () => {
    test("It should return status code 200", async () => {
        const response = await request(app).get('/tasks/:1');
        
        expect(response.statusCode).toBe(200);
    });
});