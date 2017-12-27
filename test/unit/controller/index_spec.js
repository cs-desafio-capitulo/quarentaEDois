import sinon from 'sinon';
import LogsController from '../../../src/controllers';

describe('Controller: Logs', () => {
  const defaultLog = {
    user: '123123',
    service: 'gandalf',
    description: 'failed auth',
    type: 'ERROR',
    date: Date.now(),
  };

  const defaultRequest = {
    params: {},
  };

  describe('create() log', () => {
    const requestWithBody = Object.assign({}, { body: defaultLog }, defaultRequest);

    const response = {
      send: sinon.spy(),
      sendStatus: sinon.spy(),
      status: sinon.stub(),
    };

    context('when an error occurs', () => {
      it('should return 400', () => {
        class fakeLog {
          save() {}
        }

        response.status.withArgs(400).returns(response);
        sinon.stub(fakeLog.prototype, 'save').withArgs().rejects({ message: 'Error' });

        return LogsController.create(requestWithBody, response)
          .then(() => sinon.assert.calledWith(response.status, 400));
      });
    });
  });
});
