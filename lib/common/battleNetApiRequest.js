/**
 * Battle.net API Request.
 */
module.exports = function(BATTLENET_API_KEY) {
  'use strict';

  var request = require('request'),
      extend = require('extend');

  var version = 'v0.5.0';

  // Default request configuration.
  var requiredDefaults = {
    host: '.api.battle.net',
    method: 'GET',
    encoding: 'UTF-8',
    headers: {
      'User-Agent': 'Node.js/' + process.version + ' battlenet-api/' + version
    },
    qs: {}
  };
  // Optional defaults that may be overridden.
  var optionalDefaults = {
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10,
    gzip: true
  };

  // Default region:locale map.
  var mapRegionToLocale = function(region) {
    var _obj = {
      us: 'en_US',
      eu: 'en_GB',
      sea: 'en_US',
      kr: 'ko_KR',
      tw: 'zh_TW'
    };

    return _obj[region];
  };

  return {
    args: function() {
      var args = [],
          params = {},
          config = {},
          callback = function() {};

      // Retrieve the function arguments as an array.
      Array.prototype.push.apply(args, arguments);
      args = args.filter(function(val) {
        return val !== undefined;
      });

      // First argument becomes our request data.
      params = args.shift();
      // Last arguments becomes our callback function.
      callback = args.pop();
      // If anything is left it becomes our request config.
      if (args.length > 0) config = args.shift();

      return {
        params: params,
        config: config,
        callback: callback
      };
    },

    fetch: function(params, config, callback) {
      // Extend the default settings and parameters into a single request object
      var options = extend(true, optionalDefaults, config, params, requiredDefaults);
          options.qs.locale = options.locale || mapRegionToLocale(options.origin);
          options.qs.apikey = options.apikey || BATTLENET_API_KEY || process.env.BATTLENET_API_KEY || '';
          options.url = 'https://' + options.origin + options.host + options.path;

      // callback(null, options);

      if (typeof callback === 'function') {
        request(options, function(err, resp, body) {
            callback(err, body);
        });
      }
    }

  };

};
