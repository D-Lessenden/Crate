import request from 'supertest';
import testServer from '../utils';

describe('crate queries', () => {
  let server;
  beforeAll(() => {
    server = testServer;
  })

  describe('happy-paths', () => {
    it('returns all crates', async (done) => {
      const response = await request(server)
        .post('/graphql')
        .send({query: `{ crates(orderBy:"asc") { id name description createdAt updatedAt } }`})
        .expect(200)
          const results = response.body.data.crates
          expect(results.length).toBe(6)
          results.forEach(crate => {
            expect(crate).toHaveProperty('id')
            expect(crate.id).toBeTruthy()
            expect(crate).toHaveProperty('name')
            expect(crate.name).toBeTruthy()
            expect(crate).toHaveProperty('description')
            expect(crate.description).toBeTruthy()
            expect(crate).toHaveProperty('createdAt')
            expect(crate.createdAt).toBeTruthy()
            expect(crate).toHaveProperty('updatedAt')
            expect(crate.updatedAt).toBeTruthy()
          })
      done();
    })
  
    it('returns a crate by id', async (done) => {
      const response = await request(server)
        .post('/graphql')
        .send({query: `{crateById(crateId:1) { name description createdAt updatedAt } }`})
        .expect(200)
          const results = response.body.data.crateById
          expect(results).toHaveProperty('name')
          expect(results.name).toBeTruthy()
          expect(results).toHaveProperty('description')
          expect(results.description).toBeTruthy()
          expect(results).toHaveProperty('createdAt')
          expect(results.createdAt).toBeTruthy()
          expect(results).toHaveProperty('updatedAt')
          expect(results.updatedAt).toBeTruthy()
      done();
    })
  })

  describe('sad-paths', () => {
    it('invalid field for all crates', async () => {
      const response = await request(server)
        .post('/graphql')
        .send({query: `{ crates(orderBy:"asc") { firstName } }`})
        .expect(400)
    })

    it('invalid field for a crate', async () => {
      const response = await request(server)
        .post('/graphql')
        .send({query: `{crateById(crateId:1) { firstName } }`})
        .expect(400)
    })
    
    it('invalid id for a crate - number', async () => {
      const response = await request(server)
        .post('/graphql')
        .send({query: `{crateById(crateId:999999) { name } }`})
        .expect(200)
          expect(response.body.crateById).toBeFalsy();
    })
  
    it('invalid id for a crate - string', async () => {
      const response = await request(server)
        .post('/graphql')
        .send({query: `{crateById(crateId:'hello') { name } }`})
        .expect(400)
    })
  })

})
