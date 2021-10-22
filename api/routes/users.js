// register, login, get user endpoint
const config = require('../config');
const { Router } = require('express');

const router = Router();

// init controller
const userController = require('../controllers/UsersController');

// user register endpoint
router.post('/users/register', userController.register);

// login endpoint
router.post('/users/login', userController.login);


module.exports = router;