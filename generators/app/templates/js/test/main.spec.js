const supertest = require('supertest');
const base = require('../utils/base-library');
const postBody = require('../json-data/request-bodies/main-post.json');
const getPostsSubset = require('../json-data/response-bodies/get-posts-subset.json');
require('dotenv-safe').config();

const request = supertest(process.env.BASE_URL);

describe('Posts Api Tests', () => {
  let authHeader;
  beforeAll(async () => {
    await base.isApiHealthy();
    authHeader = await base.authHeader();
  });
  describe('create post', () => {
    let postResponse;
    let postTitle;
    beforeAll(async () => {
      postTitle = `title-${base.uuid()}`;
      postBody.title = postTitle;
      postResponse = await request.post('/posts').set(authHeader).send(postBody);
    });
    it('returns 201 status', () => {
      expect(postResponse.statusCode).toBe(201);
    });
    it('response has post id', () => {
      expect(postResponse.body).toHaveProperty('id');
    });
    it('response has provided title', () => {
      expect(postResponse.body.title).toEqual(postTitle);
    });
  });
  describe('get specific post details', () => {
    let getResponse;
    beforeAll(async () => {
      getResponse = await request.get(`/posts/1`).set(authHeader);
    });
    it('returns 200 status', () => {
      expect(getResponse.statusCode).toBe(200);
    });
    it('returns post id', () => {
      expect(getResponse.body.userId).toEqual(1);
    });
  });
  describe('get all post details', () => {
    let getResponse;
    beforeAll(async () => {
      getResponse = await request.get(`/posts`).set(authHeader);
    });
    it('returns 200 status', () => {
      expect(getResponse.statusCode).toBe(200);
    });
    it('returns expected response properties and values', () => {
      expect(getResponse.body).toEqual(expect.objectContaining(getPostsSubset));
    });
  });
});
