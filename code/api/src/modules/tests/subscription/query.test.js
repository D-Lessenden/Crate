import request from 'supertest';
import testServer from '../utils';

describe('subscription query', () => {
  let server;
  beforeAll(() => {
    server = testServer;
  })

  it('returns all Subscriptions', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{subscriptions { id user{id} crate{id} } }`})
      .expect(200)
      expect(response.body.data.subscriptions.length).toBe(3)
      console.log(response.body)
      const results = response.body.data.subscriptions
      results.forEach(result => expect(result).toHaveProperty('id'))
      results.forEach(result => expect(result.id).not.toBe(null))

      results.forEach(result => expect(result.user).toHaveProperty('id'))
      results.forEach(result => expect(result.user.id).not.toBe(null))

      results.forEach(result => expect(result.crate).toHaveProperty('id'))
      results.forEach(result => expect(result.crate.id).not.toBe(null))

      done();
  })

  it('returns Subscription by id', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{subscription(id:1) { id user{id} crate{id} } }`})
      .expect(200)
      console.log(response.body)
      expect(response.body.data.subscription.id).toBe(1)
      expect(response.body.data.subscription.user.id).toBe(2)
      expect(response.body.data.subscription.crate.id).toBe(1)
      done();
  })

  it('returns a 400 if input is incorrect for query: subscription', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{subscription { id product{id} crate{id} } }`})
      .expect(400)
      done();
  })

  it('returns a 400 if input is incorrect for query: subscriptions', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{subscriptions { id product{id} crate{id} } }`})
      .expect(400)
      done();
  })
})
