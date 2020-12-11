import request from 'supertest';
import testServer from '../utils';

describe('crate mutations', () => {
    let server;
    beforeAll(() => {
        server = testServer;
    })

    describe('happy-paths', () => {

        let id;

        it('create a crate', async (done) => {
            const response = await request(server)
                .post('/graphql')
                .send({ query: 'mutation { crateCreate(name:"test" description:"basic") { id name description createdAt updatedAt } }' })
                .expect(200)
                    expect(response.body.data.crateCreate).toHaveProperty('name')
                    expect(response.body.data.crateCreate.name).toBeTruthy()
                    expect(response.body.data.crateCreate).toHaveProperty('description')
                    expect(response.body.data.crateCreate.description).toBeTruthy()
                    expect(response.body.data.crateCreate).toHaveProperty('createdAt')
                    expect(response.body.data.crateCreate.createdAt).toBeTruthy()
                    expect(response.body.data.crateCreate).toHaveProperty('updatedAt')
                    expect(response.body.data.crateCreate.updatedAt).toBeTruthy();
            id = response.body.data.crateCreate.id;
            done();
        })

        it('update a crate', async (done) => {
            const response = await request(server)
                .post('/graphql')
                .send({ query: `mutation { crateUpdate(id:${id} name:"test" description:"advanced") { description } }` })
                .expect(200)
                console.log(response.body)
                    expect(response.body.data.crateUpdate.description).toEqual("advanced");
            done();
        })

        it('remove a crate', async (done) => {
            const response = await request(server)
                .post('/graphql')
                .send({ query: `mutation { crateRemove(id:${id}) { name } }` })
                .expect(200);
            done();
        })

    })

})
