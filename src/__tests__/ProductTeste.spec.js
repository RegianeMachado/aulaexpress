const request = require('supertest');
const app = require('../app');

test('null', async () => {
  const response = await request(app).post('/produto').send({
    nome: 'produto1',
    price: '123',
    quantidade: '1',
  });

  expect(response).toBeNull(true);
  expect(response).toBeDefined(true);
  expect(response).toBeFalsy(true);

  const list = await request(app).post('/produto/list').findAll(response);

  expect(list).toBeNull(true);
  expect(list).toBeDefined(true);
  expect(list).toBeFalsy(true);
});
