const request = require('supertest');
const app = require('../src/app');

describe('API Usuarios', () => {
  it('Debe crear un usuario', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Juan', email: 'juan@test.com' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Juan');
  });

  it('Debe listar los usuarios', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
