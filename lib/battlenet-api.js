/*!
 * Battlenet API
 * Copyright(c) 2016 Ben Weier <ben.weier@gmail.com>
 * MIT Licensed
 */
'use strict';

/**
 * Battle.net API Request.
*/
module.exports = function(request, extend, options) {
  const version = 'v0.12.0';

  // Default request configuration.
  const requiredDefaults = {
    method: 'GET',
    encoding: 'UTF-8',
    headers: {
      'User-Agent': 'Node.js/' + process.version + ' battlenet-api/' + version
    },
    json: true,
    qs: {}
  };

  // Optional defaults that may be overridden.
  const optionalDefaults = {
    timeout: options.timeout || 10000,
    followRedirect: options.followRedirect || true,
    maxRedirects: options.maxRedirects || 10,
    gzip: options.gzip || true
  };

  const mapOriginToEndpoint = function(origin) {
    const endpoints = {
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
      let result = {};

      if (!obj) return result;

      const keys = Array.prototype.concat.apply([], Array.prototype.slice.call(arguments, 1));

      for (let i = 0, length = keys.length; i < length; i++) {
        const key = keys[i];
        if (key in obj) result[key] = obj[key];
      }

      return result;
    },

    args: function() {
      let args = [];
      let params = {};
      let config = {};
      let callback = function() {};

      // Retrieve the function arguments as an array with falsey values removed.
      Array.prototype.push.apply(args, arguments);
      args = args.filter((val) => {
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
      const keys = ['url', 'qs', 'timeout', 'followRedirect', 'maxRedirects', 'encoding', 'gzip', 'tunnel', 'proxy', 'proxyHeaderWhiteList', 'proxyHeaderExclusiveList'];
      const endpoint = mapOriginToEndpoint(params.origin);
      const path = params.path || '';
      const locale = params.locale || endpoint.defaultLocale;
      const apikey = config.apikey || options.BNET_ID || process.env.BNET_ID || process.env.BATTLENET_API_KEY || '';

      // Extend the default settings and parameters into a single request object
      const req = extend(true, {
        url: 'https://' + endpoint.hostname + encodeURI(path),
        qs: {
          locale: locale,
          apikey: apikey
        }
      }, requiredDefaults, optionalDefaults, this.pick(config, keys));

      if (typeof callback === 'function') {
        request(req, function(err, res, body) {
          callback(err, body, res);
        });
      }
    }

  };

};
