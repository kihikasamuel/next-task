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
        
        // const newTask = await request(app)
        // .post('/tasks/add')
        // .send({
        //     label : 'Personal',
        //     title : 'Service',
        //     notes : "going to service in the evening",
        //     scheduledon : '2021-10-22 19:27:07',
        //     repeats : '1',
        //     isreminder : 'No',
        //     status : '',
        //     assignto : 'User',
        //     company_id : '6x583iw8une',
        // });

        // make sure it was adde correctly
        // expect(newTask.body).toEqual({"message": "Task saved successfully!"})
        // expect(newTask.statusCode).toBe(200);

        // you cann check if record lenght grew by 1
        // const response = await request(app).get('/tasks/all');
        // expect(response.body.length).toBe(8);
    });
});

// test update task
// describe('UPDATE /api/tasks/:id', () => {
    // test('Should update the task and return a status code 200', async() => {
        // let id = 12;
        // const updatedTask = await request(app)
        // .put(`/tasks/${id}`)
        // .send({
        //     label:"Task13",
        //     title: "yet another meeting",
        //     notes: "yet another meeting!!!",
        //     scheduledon: "2021-10-22 19:27:07",
        //     repeats: "1",
        //     isreminder: "No",
        //     status: "",
        //     assignto: "K"
        // })

        // check if updated with success
        // expect(updatedTask.statusCode).toBe(200);
        // expect(updatedTask.body).toEqual({"message": "Task updated successfully"});

        // check if task with this id was updated
        // const response = await request(app).get(`/tasks/${id}`);
        // check that title was updated
        // expect(response.body).toEqual(expect.arrayContaining([
        //     expect.objectContaining({'title':'yet another meeting'})
        // ]));
    // });
// });

// test delete tasks
describe('DELETE /api/tasks/:id', () => {
    test('Delete atleast one task', async() => {
        let id = 15;
        // const tasktoDelete = await request(app).delete(`/tasks/${id}`);

        // check if successfully done
        // expect(tasktoDelete.statusCode).toBe(200);

        // check to see no record with id
        const response = await request(app).get(`/tasks/`)
        .send({
            id:id
        });
        expect(response.body).toEqual(expect.arrayContaining([
            expect.objectContaining({"message":"No record with that id!"})
        ]));

    })
})

/* go to setting up and tearing down */