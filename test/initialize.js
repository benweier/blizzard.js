require('dotenv').config({ silent: true });

const path = require('path');

const blizzard = require(path.normalize(`${__dirname}/../index.js`)).initialize({
  apikey: process.env.BATTLENET_API_KEY,
  access_token: process.env.BATTLENET_AUTH_TOKEN,
});

module.exports = blizzard;
