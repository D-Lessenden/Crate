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

  it('a user can log in with valid credentials', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `query { userLogin(email:"admin@crate.com" password:"123456" role:"ADMIN") { user{email name role} } }`})
      .expect(200)
    expect(response.body.data.userLogin.user.email).toBe("admin@crate.com")
    expect(response.body.data.userLogin.user.name).toBe("The Admin")
    expect(response.body.data.userLogin.user.role).toBe("ADMIN")
    done();
  });

  it('a user cannot log in with invalid password', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `query { userLogin(email:"admin@crate.com" password:"bad_password" role:"ADMIN") { user{email name role} } }`})
      .expect(200)
    expect(response.body.errors[0].message).toBe("Sorry, the password you entered is incorrect. Please try again.")
    done();
  });

  it('a user cannot log in with non existent email', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `query { userLogin(email:"not_an_email@crate.com" password:"bad_password" role:"ADMIN") { user{email name role} } }`})
      .expect(200)
    expect(response.body.errors[0].message).toBe("We do not have any user registered with not_an_email@crate.com email address. Please signup.")
    done();
  });

});
