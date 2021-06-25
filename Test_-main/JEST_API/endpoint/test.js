const supertest = require('supertest');
require('dotenv').config();

const api = supertest('https://jsonplaceholder.typicode.com');

export const getAllData = () => api.get('/posts')
.set('Content-Type', 'application/json')
.set('Accept', 'application/json')

export const create = (body) => api.post('/posts')
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
  .send(body);
