const path = require('path');
const SERVER_PORT = 5000;
const SERVER_CONFIGS = {
  PRODUCTION: process.env.NODE_ENV === 'production',
  PORT: process.env.PORT || SERVER_PORT,
};
module.exports = SERVER_CONFIGS;


const cors = require('cors');
const bodyParser = require('body-parser');
const CORS_WHITELIST = require('./frontend');
const configureServer = app => {
  app.use(cors());
  app.use(bodyParser.json());
};
module.exports = configureServer;