'use strict';

const blizzard = require('blizzard.js').initialize({
  apikey: process.env.BATTLENET_API_KEY
});

module.exports = blizzard;
