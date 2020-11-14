const request = require('supertest');
const app = require('../app');

test('Deveria ser criado um novo usuario', async () => {
  const response = await request(app).post('/login').send({
    email: 'vini123@email.com',
    password: '123',
  });

  expect(response.body).toHaveProperty('id');
  expect(response.body).toHaveProperty('name');
  expect(response.body).toHaveProperty('xz');
});
