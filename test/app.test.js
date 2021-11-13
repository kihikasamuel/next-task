const app = require('../api/index');
const request = require('supertest');

describe("GET /api/tasks/all", () => {
    test("It should respond with object keys", async () => {
        const response = await request(app).get('/tasks/all');
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({'id': 1})
            ])
        );
        expect(response.body[0]).toHaveProperty('label');
        expect(response.body[1]).toHaveProperty('id');
        expect(response.statusCode).toBe(200);
    });
});

describe("Get /api/tasks/:id", () => {
    test("It should return status code 200", async () => {
        let id = 3;
        const response = await request(app).get('/tasks/:id');
        // expect(response.body[0]).toHaveProperty('id');
        expect(response.statusCode).toBe(200);
    });
});