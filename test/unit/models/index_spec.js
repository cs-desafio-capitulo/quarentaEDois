import { expect } from 'chai';

import Log from '../../../src/models';

describe('Model: Log', () => {
  context('when an empty log is passed', () => {
    const log = new Log();

    it('should be invalid if user is empty', () => {
      log.validate((err) => {
        expect(err.errors.user).to.exist;
        done();
      });
    });

    it('should be invalid if service is empty', () => {
      log.validate((err) => {
        expect(err.errors.service).to.exist;
        done();
      });
    });

    it('should be invalid if description is empty', () => {
      log.validate((err) => {
        expect(err.errors.description).to.exist;
        done();
      });
    });

    it('should be invalid if level is empty', () => {
      log.validate((err) => {
        expect(err.errors.level).to.exist;
        done();
      });
    });

    it('should be invalid if date is empty', () => {
      log.validate((err) => {
        expect(err.errors.date).to.exist;
        done();
      });
    });
  });

  context('when a log is passed with wrong type of parameters', () => {
    const log = new Log({
      user: 123,
      service: '123',
      description: 'zxcasd',
      level: 'asd',
      date: 123,
    });

    it('should be invalid if user is not a string', () => {
      log.validate((err) => {
        expect(err.errors.user).to.exist;
        done();
      });
    });

    it('should not contain error in service if it is a string', () => {
      log.validate((err) => {
        expect(err.errors.services).to.not.exist;
        done();
      });
    });

    it('should not contain error in description if it is a string', () => {
      log.validate((err) => {
        expect(err.errors.service).to.not.exist;
        done();
      });
    });

    it('should contain error in level is not one of the defined strings', () => {
      log.validate((err) => {
        expect(err.errors.level).to.exist;
        done();
      });
    });

    it('should contain error in date if it is not a date', () => {
      log.validate((err) => {
        expect(err.errors.service).to.exist;
        done();
      });
    });
  });
});
