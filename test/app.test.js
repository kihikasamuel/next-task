const request = require('supertest');
const conn = require('../api/dbConf');
const app = require('../api/index');

// test data
const tasks = [
    {
        label : 'Work',
        title : 'Client support',
        notes : "support",
        scheduled_on : '2021-10-22 19:27:07',
        repeats : '1',
        is_reminder : 'No',
        status : '',
        assign_to : 'John',
        company_id : '6x583iw8une',
    },
    {
        label : 'Personal',
        title : 'Visit a friend',
        notes : "Pay a Visit",
        scheduled_on : '2021-10-22 19:27:07',
        repeats : '1',
        is_reminder : 'No',
        status : '',
        assign_to : 'Sam',
        company_id : '6x583iw8une',
    }
]


/* BEGIN setting up and tearing down */
beforeAll(async () => {//before each test
    for(let task of tasks){
        await conn.query('INSERT INTO tasks_tbl SET ?', task);
    }
});

// after each test
afterAll(async () => {
    await conn.query('DELETE FROM tasks_tbl');
});
/* END setting up and tearing down */


// test get all tasks
describe("GET /api/tasks/all", () => {
    test("It should respond with object keys", async () => {
        const response = await request(app).get('/tasks/all');
        expect(response.body.length).toBe(2);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({'title': 'Client support'})
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
        // grab one id from added tasks
        const listedTasks = await request(app).get('/tasks/all');
        let id = listedTasks.body[0].id;

        // test the single task
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
    test('Should add a single task and return code 201', async() => {
        
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

        // make sure it was added correctly
        expect(newTask.body).toEqual({"message": "Task saved successfully!"})
        expect(newTask.statusCode).toBe(201);

        // you cann check if record lenght grew by 1
        const response = await request(app).get('/tasks/all');
        expect(response.body.length).toBe(3);
    });
});


// test update task
describe('UPDATE /api/tasks/:id', () => {
    test('Should update the task and return a status code 201', async() => {
        // grab one id from added tasks
        const listedTasks = await request(app).get('/tasks/all');
        let id = listedTasks.body[0].id;

        const updatedTask = await request(app)
        .put(`/tasks/${id}`)
        .send({
            label:"Work and Personal",
            title: "yet another meeting",
            notes: "yet another meeting!!!",
            scheduledon: "2021-10-22 19:27:07",
            repeats: "1",
            isreminder: "No",
            status: "",
            assignto: "K"
        })

        // check if updated with success
        expect(updatedTask.statusCode).toBe(201);
        expect(updatedTask.body).toEqual({"message": "Task updated successfully"});

        // check if task with this id was updated
        const response = await request(app).get(`/tasks/${id}`);
        // check that title was updated
        expect(response.body).toEqual(expect.arrayContaining([
            expect.objectContaining({'title':'yet another meeting'})
        ]));
    });
});


// test delete tasks
describe('DELETE /api/tasks/:id', () => {
    test('Delete resource at', async () => {
        const existingTasks = await request(app).get('/tasks/all');
        let id = existingTasks.body[0].id;

        const deletedTask = await request(app).delete(`/tasks/${id}`).send();

        // check if successfully deleted
        expect(deletedTask.body).toEqual({"message": "Task deleted!"});
        expect(deletedTask.statusCode).toBe(200);
    });
});