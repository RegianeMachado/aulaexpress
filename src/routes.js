const { Router } = require('express');
const authController = require('./controllers/Auth');
const productController = require('./controllers/Product');

const authMiddleware = require('./middlewares/Auth');
const routes = Router();

routes.post('/login', authController.index);
routes.post('/register', authController.store);

routes.get('/produtos', authMiddleware, productController.index);

module.exports = routes;
