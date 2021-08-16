import supertest from 'supertest';
import 'dotenv-safe/config';
import { AuthHeader } from '../types/common';
import base from '../utils/base.library';
import helper from '../utils/helper';
import postBody from '../json-data/request-bodies/main-post.json';
import getPostsSubset from '../json-data/response-bodies/get-posts-subset.json';

const request = supertest(process.env.BASE_URL);
describe('Posts Api Tests', () => {
  const { isApiHealthy, setAuthHeader } = base;
  let authHeader: AuthHeader;
  beforeAll(async () => {
    await isApiHealthy();
    authHeader = await setAuthHeader();
  });
  describe('create post', () => {
    let postResponse: supertest.Response;
    let postTitle: string;
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
    let getResponse: supertest.Response;
    beforeAll(async () => {
      getResponse = await request.get('/posts/1').set(authHeader);
    });
    it('returns 200 status', () => {
      expect(getResponse.statusCode).toBe(200);
    });
    it('returns post id', () => {
      expect(getResponse.body.userId).toEqual(1);
    });
  });
  describe('get all post details', () => {
    let getResponse: supertest.Response;
    beforeAll(async () => {
      getResponse = await request.get('/posts').set(authHeader);
    });
    it('returns 200 status', () => {
      expect(getResponse.statusCode).toBe(200);
    });
    it('returns expected response properties and values', () => {
      expect(getResponse.body).toEqual(expect.objectContaining(getPostsSubset));
    });
  });
});
