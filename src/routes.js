const { Router } = require('express');
const authController = require('./controllers/AuthController');
const productController = require('./controllers/Product');
const UserController = require('./controllers/UserController');
const ClienteController = require('./controllers/ClienteController');
const CarroController = require('./controllers/CarroController');

const authMiddleware = require('./middlewares/Auth');
const OperacaoController = require('./controllers/OperacaoController');
const routes = Router();

routes.post('/login', authController.index);
routes.post('/register', authController.store);

routes.get('/produtos', authMiddleware, productController.index);

routes.get('/usuarios', UserController.index);
routes.delete('/usuarios/:id', UserController.delete);

routes.get('/clientes', ClienteController.index);
routes.delete('/clientes/:id', ClienteController.delete);
routes.put('/clientes/:id', ClienteController.update);

routes.get('/carros', CarroController.index);
routes.delete('/carros/:id', CarroController.delete);
routes.put('/carros/:id', CarroController.update);

routes.get('/operacoes', OperacaoController.index);
routes.delete('/operacoes/:id', OperacaoController.delete);
routes.put('/operacoes/:id', OperacaoController.update);

module.exports = routes;
