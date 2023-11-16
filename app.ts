import express from 'express';

const { logRequest } = require('./middlewares/logger');

const createApp = () => {
  const app = express();

  app.use(logRequest);
  app.use(express.json());

  return app;
};

export default createApp;
