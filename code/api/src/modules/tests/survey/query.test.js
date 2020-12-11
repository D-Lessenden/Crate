import request from 'supertest';
import testServer from '../utils';

describe('survey query', () => {
  let server;
  beforeAll(() => {
    server = testServer;
  })

  it('returns all clothing from clothing type: top', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{getSurveyItems(type:"top") { id type score image } }`})
      .expect(200)
      const results = response.body.data.getSurveyItems
      // results.forEach(result => console.log(result))
      results.forEach(result => expect(result).toHaveProperty('id'))
      results.forEach(result => expect(result.id).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('type'))
      results.forEach(result => expect(result.type).toBe('top'))
      results.forEach(result => expect(result.type).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('score'))
      results.forEach(result => expect(result.score).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('image'))
      results.forEach(result => expect(result.image).not.toBe(null))

      expect(response.body.data.getSurveyItems.length).toBe(8)
    done();
  })

  it('returns all clothing from clothing type: bottom', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{getSurveyItems(type:"bottom") { id type score image } }`})
      .expect(200)
      const results = response.body.data.getSurveyItems
      results.forEach(result => expect(result).toHaveProperty('id'))
      results.forEach(result => expect(result.id).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('type'))
      results.forEach(result => expect(result.type).toBe('bottom'))
      results.forEach(result => expect(result.type).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('score'))
      results.forEach(result => expect(result.score).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('image'))
      results.forEach(result => expect(result.image).not.toBe(null))

      expect(response.body.data.getSurveyItems.length).toBe(8)

    done();
  })

  it('returns all clothing from clothing type: accessory', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{getSurveyItems(type:"accessory") { id type score image } }`})
      .expect(200)
      const results = response.body.data.getSurveyItems
      results.forEach(result => expect(result).toHaveProperty('id'))
      results.forEach(result => expect(result.id).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('type'))
      results.forEach(result => expect(result.type).toBe('accessory'))
      results.forEach(result => expect(result.type).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('score'))
      results.forEach(result => expect(result.score).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('image'))
      results.forEach(result => expect(result.image).not.toBe(null))

      expect(response.body.data.getSurveyItems.length).toBe(18)
    done();
  })

  it('returns all clothing from clothing type: full', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{getSurveyItems(type:"full") { id type score image } }`})
      .expect(200)
      const results = response.body.data.getSurveyItems
      results.forEach(result => expect(result).toHaveProperty('id'))
      results.forEach(result => expect(result.id).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('type'))
      results.forEach(result => expect(result.type).toBe('full'))
      results.forEach(result => expect(result.type).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('score'))
      results.forEach(result => expect(result.score).not.toBe(null))

      results.forEach(result => expect(result).toHaveProperty('image'))
      results.forEach(result => expect(result.image).not.toBe(null))

      expect(response.body.data.getSurveyItems.length).toBe(8)
    done();
  })

  it('returns an error if unclassified field is queried', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{getSurveyItems(type:"top") { id type score image clothMaterial} }`})
      .expect(400)
    done();
  })
})
