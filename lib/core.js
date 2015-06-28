/**
 * Battle.net API Request.
*/

module.exports = function(request, extend, options) {
  'use strict';

  var version = 'v0.9.2';

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

  var mapOriginToEndpoint = function(origin) {
    var endpoints = {
      us: {
        hostname: 'us.api.battle.net',
        defaultLocale: 'en_US'
      },
      eu: {
        hostname: 'eu.api.battle.net',
        defaultLocale: 'en_GB'
      },
      sea: {
        hostname: 'sea.api.battle.net',
        defaultLocale: 'en_US'
      },
      kr: {
        hostname: 'kr.api.battle.net',
        defaultLocale: 'ko_KR'
      },
      tw: {
        hostname: 'tw.api.battle.net',
        defaultLocale: 'zh_TW'
      },
      cn: {
        hostname: 'api.battlenet.com.cn',
        defaultLocale: 'zh_CN'
      }
    };

    if (origin in endpoints) {
      return endpoints[origin];
    }

    return endpoints.us;
  };

  return {

    pick: function(obj) {
      var result = {};

      if (obj === null) return result;

      var keys = Array.prototype.concat.apply([], Array.prototype.slice.call(arguments, 1));
      obj = new Object(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        var key = keys[i];
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
          endpoint = mapOriginToEndpoint(params.origin),
          path = params.path || '',
          locale = params.locale || endpoint.defaultLocale,
          apikey = config.apikey || options.BNET_ID || process.env.BNET_ID || process.env.BATTLENET_API_KEY || '';

      // Extend the default settings and parameters into a single request object
      var req = extend(true, {
        url: 'https://' + endpoint.hostname + path,
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
