import request from 'supertest';
import testServer from '../utils';

describe('users query', () => {
  let server;
  beforeAll(() => {
    server = testServer;
  })

  it('returns all users', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{users { email name role } }`})
      .expect(200)
    expect(response.body.data.users.length).toBe(2);
    done();
  })

  it('returns a user based on id', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{user(id:1) { email name role createdAt} }`})
      .expect(200)
      expect(response.body.data.user.email).toBe('admin@crate.com')
      expect(response.body.data.user.name).toBe('The Admin')
      expect(response.body.data.user.role).toBe('ADMIN')
      expect(response.body.data.user).toHaveProperty('createdAt')
    done();
  })

  it('returns errors for a user based on id', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{user(id:1) { email name role createdAt lastName } }`})
      .expect(400)
    done();
  })
})
