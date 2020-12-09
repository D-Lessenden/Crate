import { dedentBlockStringValue } from 'graphql/language/blockString';
import request from 'supertest';
import testServer from '../utils.js';

describe('user mutations', () => {
    let server;
    beforeEach(() => {
        server = testServer;
    })

    it('can set a users style to casual', async (done) => {
        const response = await request(server)
            .post('/graphql')
            .send({ query: 'mutation { setStyle(id: 1 style:"casual") { style id } }' })
            .expect(200);
          expect(response.body).toMatchObject({
            data: {
              setStyle: {
                style: "casual",
                id: 1
              }
            }
          })
        done();
    });

    it('can set a users style to formal', async (done) => {
        const response = await request(server)
            .post('/graphql')
            .send({ query: 'mutation { setStyle(id: 1 style:"formal") { style id } }' })
            .expect(200);
          expect(response.body).toMatchObject({
            data: {
              setStyle: {
                style: "formal",
                id: 1
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
