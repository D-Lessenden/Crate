import request from 'supertest';
import testServer from '../utils';

describe('product mutations', () => {
    let server;
    beforeAll(() => {
        server = testServer;
    })

    describe('happy-paths', () => {
        let id;
        it('create a product', async (done) => {
            const response = await request(server)
                .post('/graphql')
                .send({ query: 'mutation { productCreate(name:"test" slug:"a-product" description:"basic" type:0 gender:0 image:"picture.jpg") { id name slug description type gender image } }' })
                .expect(200)
                    expect(response.body.data.productCreate).toHaveProperty('name')
                    expect(response.body.data.productCreate.name).toBeTruthy();
                    expect(response.body.data.productCreate).toHaveProperty('slug')
                    expect(response.body.data.productCreate.slug).toBeTruthy();
                    expect(response.body.data.productCreate).toHaveProperty('description')
                    expect(response.body.data.productCreate.description).toBeTruthy();
                    expect(response.body.data.productCreate).toHaveProperty('type')
                    expect(response.body.data.productCreate.type).toBe(0);
                    expect(response.body.data.productCreate).toHaveProperty('gender')
                    expect(response.body.data.productCreate.gender).toBe(0);
                    expect(response.body.data.productCreate).toHaveProperty('image')
                    expect(response.body.data.productCreate.image).toBeTruthy();
            id = response.body.data.productCreate.id;
            done();
        })

        it('update a product', async (done) => {
            const response = await request(server)
                .post('/graphql')
                .send({ query: `mutation { productUpdate(id:${id} name:"test" description:"advanced") { id name description } }` })
                .expect(200)
                  expect(response.body.data.productUpdate.description).toEqual("advanced");
            done();
        })

        it('remove a product', async (done) => {
            const response = await request(server)
                .post('/graphql')
                .send({ query: `mutation { productRemove(id:${id}) { name } }` })
                .expect(200)
                    expect(response.body).toMatchObject(
                        { data: { productRemove: { name: null } } }
                    );
            done();
        })
      })
    describe('sad-path', () => {
        it('create - missing needed arguments', async (done) => {
            const response = await request(server)
                .post('/graphql')
                .send({ query: 'mutation { productCreate() { id name slug description type gender createdAt updatedAt } }' })
                .expect(400);
            done();
        })

        it('update - missing id argument', async (done) => {
            const response = await request(server)
                .post('/graphql')
                .send({ query: `mutation { productUpdate(name:"test" description:"advanced") { description } }` })
                .expect(200);
                    expect(response.body.errors[0].message).toEqual('WHERE parameter "id" has invalid "undefined" value')
            done();
        })

        it('remove - missing id argument', async (done) => {
            const response = await request(server)
                .post('/graphql')
                .send({ query: `mutation { productRemove() { name } }` })
                .expect(400);
            done();
        })
    })
  })
