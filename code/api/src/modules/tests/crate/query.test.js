import request from 'supertest';
import testServer from '../utils';

describe('crate queries', () => {
  let server;
  beforeAll(() => {
    server = testServer;
  })

  it('returns all crates', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{ crates(orderBy:"asc") { name description createdAt updatedAt } }`})
      .expect(200)
        expect(response.body.data.crates.length).toBe(6);
    done();
  })

  it('returns a crate by id', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{crateById(crateId:1) { name description createdAt updatedAt } }`})
      .expect(200)
        expect(response.body.data.crateById).toHaveProperty('name')
        expect(response.body.data.crateById.name).toBeTruthy()
        expect(response.body.data.crateById).toHaveProperty('description')
        expect(response.body.data.crateById.description).toBeTruthy()
        expect(response.body.data.crateById).toHaveProperty('createdAt')
        expect(response.body.data.crateById.createdAt).toBeTruthy()
        expect(response.body.data.crateById).toHaveProperty('updatedAt')
        expect(response.body.data.crateById.updatedAt).toBeTruthy();
    done();
  })
})
