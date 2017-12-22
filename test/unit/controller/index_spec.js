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
      sendStatus: sinon.spy(),
      send: sinon.spy(),
      status: sinon.stub(),
    };

    it('should call sendStatus with status equals to 200', () => {
      class fakeLog {
        save() {}
      }

      response.status.withArgs(200).returns(response);
      sinon.stub(fakeLog.prototype, 'save').withArgs().resolves();

      const logsController = new LogsController(fakeLog);
      
      return logsController.create(requestWithBody, response)
        .then(() => sinon.assert.calledWith(response.sendStatus));
    });

    context('when an error occurs', () => {
      it('should return 400', () => {
        class fakeLog {
          save() {}
        }
  
        response.status.withArgs(400).returns(response);
        sinon.stub(fakeLog.prototype, 'save').withArgs().rejects({ message: 'Error' });
  
        const logsController = new LogsController(fakeLog);
        
        return logsController.create(requestWithBody, response)
          .then(() => sinon.assert.calledWith(response.status, 400));
      });
    });
  });

  describe('get() logs', () => {
    const request = {};

    const response = {
      send: sinon.spy(),
      status: sinon.stub(),
    };

    it('should call send with a list of logs', () => {

    });

    context('when an error occurs', () => {
      it('should return 400', () => {

      });
    });
  });
});