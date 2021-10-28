const config = require('../config');
const { Router } = require('express');
const router = Router();
// Tasks controller
const tasksController = require('../controllers/TasksController');

// add tasks route
router.post('/tasks/add', tasksController.addTask);

// list all tasks
router.get('/tasks/all', tasksController.list);

// get a single task
router.get('/tasks/:id', tasksController.getTaskById);

// delete a task by id
router.delete('/tasks/:id', tasksController.removeTask);

// update a task
router.put('/tasks/:id', tasksController.updateTasks);

module.exports = router;