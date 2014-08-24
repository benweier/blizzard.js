/**
 *
 */

var request = require('request'),
    extend = require('deep-extend');

module.exports = (function() {
  'use strict';

  var defaults = {
    host: '.api.battle.net',
    method: 'GET',
    qs: {
      apikey: process.env.BATTLENET_API_KEY
    },
    headers: {
      'User-Agent': 'NodeJS Battle.net API Wrapper',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    encoding: 'UTF-8',
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10,
    gzip: true
  };

  return function(params, callback) {

    var options = extend(defaults, params);
        options.url = 'https://' + options.region + options.host + options.path;

    request(options, function(err, resp, body) {
      callback(err, resp, body);
    });

  };

})();
