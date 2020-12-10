import request from 'supertest';
import testServer from '../utils';

describe('product query', () => {
  let server;
  beforeAll(() => {
    server = testServer;
  })

  it('returns all products', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{products{ name slug description gender image score } }`})
      .expect(200)
      const results = response.body.data.products
      results.forEach(result => expect(result).toHaveProperty('name'))
      results.forEach(result => expect(result.name).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('slug'))
      results.forEach(result => expect(result.slug).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('description'))
      results.forEach(result => expect(result.description).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('gender'))
      results.forEach(result => expect(result.gender).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('image'))
      results.forEach(result => expect(result.image).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('score'))
      results.forEach(result => expect(result.score).not.toBe(null))

      expect(response.body.data.products.length).toBe(8)
    done();
  })


  it('can return a product by slug', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{product(slug:"belt-for-men"){ name slug description gender image score } }`})
      .expect(200)
      const result = response.body.data.product
      expect(result).toHaveProperty('name')
      expect(result.name).not.toBe(null)

      expect(result).toHaveProperty('slug')
      expect(result.slug).toBe("belt-for-men")

      expect(result).toHaveProperty('description')
      expect(result.description).not.toBe(null)

      expect(result).toHaveProperty('gender')
      expect(result.gender).not.toBe(null)

      expect(result).toHaveProperty('image')
      expect(result.image).not.toBe(null)

      expect(result).toHaveProperty('score')
      expect(result.score).not.toBe(null)
    done();
  })

  it('can return a product by id', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{productById(productId:10){ name slug description gender image score } }`})
      .expect(200)
      const result = response.body.data.productById
      expect(result).toHaveProperty('name')
      expect(result.name).not.toBe(null)

      expect(result).toHaveProperty('slug')
      expect(result.slug).toBe("belt-for-men")

      expect(result).toHaveProperty('description')
      expect(result.description).not.toBe(null)

      expect(result).toHaveProperty('gender')
      expect(result.gender).not.toBe(null)

      expect(result).toHaveProperty('image')
      expect(result.image).not.toBe(null)

      expect(result).toHaveProperty('score')
      expect(result.score).not.toBe(null)
    done();
  })

  it('can return related products', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{productsRelated(productId:10){ id name slug description gender image score } }`})
      .expect(200)
      const results = response.body.data.productsRelated
      results.forEach(result => expect(result).toHaveProperty('name'))
      results.forEach(result => expect(result.name).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('slug'))
      results.forEach(result => expect(result.slug).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('description'))
      results.forEach(result => expect(result.description).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('gender'))
      results.forEach(result => expect(result.gender).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('image'))
      results.forEach(result => expect(result.image).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('score'))
      results.forEach(result => expect(result.score).not.toBe(null))

      expect(results.length).toBe(3)
    done();
  })

  it('can return product types', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{ productTypes { id name }}`})
      .expect(200)
      const results = response.body.data.productTypes
      results.forEach(result => expect(result).toHaveProperty('id'))
      results.forEach(result => expect(result.name).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('name'))
      results.forEach(result => expect(result.slug).not.toBe(null))

      expect(results.length).toBe(2)
    done();
  })
})
