const { Router } = require('express');

const AuthController = require('./controllers/AuthController');

const routes = Router();

routes.post('/login', AuthController.index);
routes.post('/register', AuthController.store);

module.exports = routes;