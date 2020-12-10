import { dedentBlockStringValue } from 'graphql/language/blockString';
import request from 'supertest';
import testServer from '../utils.js';

describe('user mutations', () => {
    let server, id;
    beforeEach(() => {
        server = testServer;
    })

    it('a user can sign up', async (done) => {
        const response = await request(server)
            .post('/graphql')
            .send({ query: 'mutation { userSignup(name:"bilbo" email:"bilbo@email.com" password:"bilbodagreatest") { name email id } }' })
            .expect(200);
          expect(response.body.data.userSignup.name).toBe("bilbo")
          expect(response.body.data.userSignup.email).toBe("bilbo@email.com")
          id = response.body.data.userSignup.id
        done();
    });

    it('a user can be deleted', async (done) => {
        const response = await request(server)
            .post('/graphql')
            .send({ query: `mutation { userRemove(id:${id}) { name email } }` })
            .expect(200);
          expect(response.body.data.userRemove.name).toBe(null)
          expect(response.body.data.userRemove.email).toBe(null)
        done();
    });

    it('can set a users style to casual', async (done) => {
        const response = await request(server)
            .post('/graphql')
            .send({ query: 'mutation { setStyle(style:"casual") { style } }' })
            .expect(200);
          expect(response.body).toMatchObject({
            data: {
              setStyle: {
                style: "casual"
              }
            }
          })
        done();
    });

    it('can set a users style to formal', async (done) => {
        const response = await request(server)
            .post('/graphql')
            .send({ query: 'mutation { setStyle(style:"formal") { style } }' })
            .expect(200);
          expect(response.body).toMatchObject({
            data: {
              setStyle: {
                style: "formal"
              }
            }
          })
        done();
    });

    it('cannot set a users style with blank string', async (done) => {
        const response = await request(server)
            .post('/graphql')
            .send({ query: 'mutation { setStyle(style:"") { style } }' })
            .expect(200);
          expect(response.body.errors.[0].message).toBe("You must enter a style to set a user's style")
        done();
    });

    it('cannot set a users style with the wrong data type', async (done) => {
        const response = await request(server)
            .post('/graphql')
            .send({ query: 'mutation { setStyle(style:7) { style } }' })
            .expect(400);
          expect(response.body.errors.[0].message).toBe("Expected type String, found 7.")
        done();
    });

})
