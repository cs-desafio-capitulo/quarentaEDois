import express from 'express';

import LogsController from '../controllers';

const BASE_URL = '/log';

export default express.Router()
  .post(`${BASE_URL}/`, LogsController.create)
  .get(`${BASE_URL}/`, LogsController.get);
