import supertest from 'supertest';
import { app } from '../app';

describe('Movies', () => {
  it('GET should return all movies', async () => {
    const response = await supertest(app).get('/movies');
    
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(4)
  });

  // it('POST should create movie', async () => {
  //   // stub
  //   expect(true).toBeTruthy();
  // });

  // it('PUT should update movie with valid id', async () => {
  //   // stub
  //   expect(true).toBeTruthy();
  // });

  // it('PUT should return error with invalid id', async () => {
  //   // stub
  //   expect(true).toBeTruthy();
  // });

  // it('DELETE should remove movie with valid id', async () => {
  //   // stub
  //   expect(true).toBeTruthy();
  // });

  // it('DELETE should return error with invalid id', async () => {
  //   // stub
  //   expect(true).toBeTruthy();
  // });
});