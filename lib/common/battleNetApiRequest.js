/**
 *
 */

var request = require('request'),
    extend = require('deep-extend');

module.exports = (function() {
  'use strict';

  var version = '0.4.0';

  var defaults = {
    host: '.api.battle.net',
    method: 'GET',
    json: true,
    qs: {
      apikey: process.env.BATTLENET_API_KEY || ''
    },
    headers: {
      'User-Agent': 'nodejs/battlenet-api/' + version
    },
    encoding: 'UTF-8',
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10,
    gzip: true
  };

  return function(params, callback) {

    var options = extend(defaults, params);
        options.url = 'https://' + options.origin + options.host + options.path;

    request(options, function(err, resp, body) {
      callback(err, body);
    });

  };

})();
