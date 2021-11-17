const request = require('supertest');
const app = require('../api/index');

// test get all tasks
describe("GET /api/tasks/all", () => {
    test("It should respond with object keys", async () => {
        const response = await request(app).get('/tasks/all');
        // expect(response.body.length).toBe(4);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({'id': 2})
            ])
        );
        expect(response.body[0]).toHaveProperty('label');
        expect(response.body[1]).toHaveProperty('id');
        expect(response.statusCode).toBe(200);
    });
});

// test get single task
describe("Get /api/tasks/:id", () => {
    test("It should return status one task", async () => {
        let id = 2;
        const response = await request(app).get(`/tasks/${id}`);
        expect(response.body.length).toBe(1)
        expect(response.body[0]).toHaveProperty('created_at');
        expect(response.body).toEqual(expect.arrayContaining([
            expect.objectContaining({'id': id})
        ]))
        expect(response.statusCode).toBe(200);
    });
});

// test add 1 task
describe('POST /api/tasks/add', () => {
    test('Should add a single task and return code 200', async() => {
        
        const newTask = await request(app)
        .post('/tasks/add')
        .send({
            label : 'Personal',
            title : 'Service',
            notes : "going to service in the evening",
            scheduledon : '2021-10-22 19:27:07',
            repeats : '1',
            isreminder : 'No',
            status : '',
            assignto : 'User',
            company_id : '6x583iw8une',
        });

        // make sure it was adde correctly
        expect(newTask.body).toEqual({"message": "Task saved successfully!"})
        expect(newTask.statusCode).toBe(200);

        // you cann check if record lenght grew by 1
        const response = await request(app).get('/tasks/all');
        expect(response.body.length).toBe(8);
    });
});

// test update task
describe('UPDATE /api/tasks/:id', () => {
    test('Should have')
});

// test delete tasks

/* go to setting up and tearing down */