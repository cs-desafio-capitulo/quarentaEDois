import supertest from 'supertest';
import mongoose from 'mongoose';

import Log from '../../../src/models';
import setupApp from '../../../src/app';

describe('Routes: Log', () => {
  let request;

  before(async () => {
    const app = await setupApp();
    request = supertest(app);
  });

  const defaultId = 'qweqweqweqwe';
  const defaultLog = {
    user: '123',
    service: '42',
    description: 'Winter is here',
    level: 'INFO',
    date: Date.now(),
  };

  beforeEach(async () => {
    const log = new Log(defaultLog);
    await Log.remove({});
    return log.save();
  });

  afterEach(() => Log.remove({}));

  after(() => mongoose.connection.close());

  // CREATE
  describe('POST /log', () => {
    context('when posting a new log', () => {
      it('should return status 200', (done) => {
        request
          .post('/log')
          .send(defaultLog)
          .expect(200, done);
      });

      it('should return status 400 and an error message', (done) => {
        request
          .post('/log')
          .send()
          .expect(400, done);
      });
    });
  });

  // GET
  describe('GET /log', () => {
    context('when retrieving all the logs', () => {
      it('should return status 200 and all logs', (done) => {
        request
          .get('/log')
          .expect(200, done);
      });

      it('should return status 400 and and error message', (done) => {
        request
          .get('/log')
          .send({})
          .expect(400, done);
      });
    });
  });
});
