/**
 * Battle.net API Request.
*/

module.exports = function(request, extend, options) {
  'use strict';

  var version = 'v0.8.4',
      host = '.api.battle.net';

  // Default request configuration.
  var requiredDefaults = {
    method: 'GET',
    encoding: 'UTF-8',
    headers: {
      'User-Agent': 'Node.js/' + process.version + ' battlenet-api/' + version
    },
    json: true,
    qs: {}
  };

  // Optional defaults that may be overridden.
  var optionalDefaults = {
    timeout: options.timeout || 10000,
    followRedirect: options.followRedirect || true,
    maxRedirects: options.maxRedirects || 10,
    gzip: options.gzip || true
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

    pick: function(obj) {
      var result = {}, key;

      if (obj === null) return result;

      var keys = Array.prototype.concat.apply([], Array.prototype.slice.call(arguments, 1));
      obj = new Object(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        key = keys[i];
        if (key in obj) result[key] = obj[key];
      }

      return result;
    },

    args: function() {
      var args = [],
          params = {},
          config = {},
          callback = function() {};

      // Retrieve the function arguments as an array with falsey values removed.
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
      var keys = ['url', 'qs', 'timeout', 'followRedirect', 'maxRedirects', 'encoding', 'gzip', 'tunnel', 'proxy', 'proxyHeaderWhiteList', 'proxyHeaderExclusiveList'],
          origin = params.origin || 'us',
          path = params.path || '',
          locale = params.locale || mapRegionToLocale(origin),
          apikey = config.apikey || options.BNET_ID || process.env.BNET_ID || process.env.BATTLENET_API_KEY || '';

      // Extend the default settings and parameters into a single request object
      var req = extend(true, {
        url: 'https://' + origin + host + path,
        qs: {
          locale: locale,
          apikey: apikey
        }
      }, requiredDefaults, optionalDefaults, this.pick(config, keys));

      if (typeof callback === 'function') {
        request(req, function(err, res, body) {
          callback(err, body);
        });
      }
    }

  };

};
