require('dotenv').config({ silent: true });

const blizzard = require('../index.js').initialize({
  apikey: process.env.BLIZZARD_API_KEY,
  access_token: process.env.BLIZZARD_AUTH_TOKEN,
});

module.exports = blizzard;
