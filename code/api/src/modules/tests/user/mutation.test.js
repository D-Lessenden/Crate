import { dedentBlockStringValue } from 'graphql/language/blockString';
import request from 'supertest';
import testServer from '../utils.js';

describe('user mutations', () => {
    let server;
    beforeEach(() => {
        server = testServer;
    })

    // it('create a new user', async (done) => {
    //     const response = await request(server)
    //         .post('/graphql')
    //         .send({ query: 'mutation { userSignup(name:"bob" email:"test@test.com" password:"123") { name email password } }' })
    //         .expect(200);
    //     done();
    // });
    //
    // it('delete an existing user', async (done) => {
    //     const response = await request(server)
    //         .post('/graphql')
    //         .send({ query: 'mutation { userRemove(id:3) { id } }' })
    //         .expect(200);
    //         console.log(response.body);
    //     done();
    // });

    it('can set a users style', async (done) => {
        const response = await request(server)
            .post('/graphql')
            .send({ query: 'mutation { setStyle(id: 1 style:"casual") { style id } }' })
            .expect(200);
          expect(response.body).toMatchObject({
            data: {
              setStyle: {
                style: null, // This needs refactored so that null is not returned
                id: null
              }
            }
          })
        done();
    });

    it('cannot set a users style with blank string', async (done) => {
        const response = await request(server)
            .post('/graphql')
            .send({ query: 'mutation { setStyle(id: 1 style:"") { style id } }' })
            .expect(200);
          expect(response.body.errors.[0].message).toBe("You must enter a style to set a user's style")
        done();
    });

    it('cannot set a users style with the wrong data type', async (done) => {
        const response = await request(server)
            .post('/graphql')
            .send({ query: 'mutation { setStyle(id: 1 style:7) { style id } }' })
            .expect(400);
          expect(response.body.errors.[0].message).toBe("Expected type String, found 7.")
        done();
    });

})
