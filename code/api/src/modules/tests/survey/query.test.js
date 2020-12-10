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
      expect(response.body.data.getSurveyItems.length).toBe(8)
      expect(response.body.data.getSurveyItems[0]).toHaveProperty('id')
      expect(response.body.data.getSurveyItems[0]).toHaveProperty('type')
      expect(response.body.data.getSurveyItems[0]).toHaveProperty('score')
      expect(response.body.data.getSurveyItems[0]).toHaveProperty('image')
      expect(response.body.data.getSurveyItems[0].id).toBe(4)
      expect(response.body.data.getSurveyItems[0].type).toBe('top')
      expect(response.body.data.getSurveyItems[0].image).toBe("public/images/survey/casual/mens_top_casual.jpg")
    done();
  })

  it('returns all clothing from clothing type: bottom', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{getSurveyItems(type:"bottom") { id type score image } }`})
      .expect(200)
      expect(response.body.data.getSurveyItems.length).toBe(8)
      expect(response.body.data.getSurveyItems[0]).toHaveProperty('id')
      expect(response.body.data.getSurveyItems[0]).toHaveProperty('type')
      expect(response.body.data.getSurveyItems[0]).toHaveProperty('score')
      expect(response.body.data.getSurveyItems[0]).toHaveProperty('image')
      expect(response.body.data.getSurveyItems[0].id).toBe(1)
      expect(response.body.data.getSurveyItems[0].type).toBe('bottom')
      expect(response.body.data.getSurveyItems[0].image).toBe("public/images/survey/casual/mens_pants_casual.jpg")
    done();
  })

  it('returns all clothing from clothing type: accessory', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{getSurveyItems(type:"accessory") { id type score image } }`})
      .expect(200)
      expect(response.body.data.getSurveyItems.length).toBe(18)
      expect(response.body.data.getSurveyItems[0]).toHaveProperty('id')
      expect(response.body.data.getSurveyItems[0]).toHaveProperty('type')
      expect(response.body.data.getSurveyItems[0]).toHaveProperty('score')
      expect(response.body.data.getSurveyItems[0]).toHaveProperty('image')
      expect(response.body.data.getSurveyItems[0].id).toBe(2)
      expect(response.body.data.getSurveyItems[0].type).toBe('accessory')
      expect(response.body.data.getSurveyItems[0].image).toBe("public/images/survey/casual/mens_shoes_casual.jpg")
    done();
  })

  it('returns all clothing from clothing type: full', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{getSurveyItems(type:"full") { id type score image } }`})
      .expect(200)
      console.log(response.body)
      expect(response.body.data.getSurveyItems.length).toBe(8)
      expect(response.body.data.getSurveyItems[0]).toHaveProperty('id')
      expect(response.body.data.getSurveyItems[0]).toHaveProperty('type')
      expect(response.body.data.getSurveyItems[0]).toHaveProperty('score')
      expect(response.body.data.getSurveyItems[0]).toHaveProperty('image')
      expect(response.body.data.getSurveyItems[0].id).toBe(3)
      expect(response.body.data.getSurveyItems[0].type).toBe('full')
      expect(response.body.data.getSurveyItems[0].image).toBe("public/images/survey/casual/mens_suit_casual.jpg")
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
