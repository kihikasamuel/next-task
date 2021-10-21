// register, login, get user endpoint
const config = require('../config');
const { Router } = require('express');

const router = Router();

// init controller
const userController = require('../controllers/UsersController');

// user register endpoint
router.post('/users/register', userController.register);


module.exports = router;