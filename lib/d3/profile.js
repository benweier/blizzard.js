/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  return {

    career: function(params, callback) {
      var origin = params.origin,
          tag = params.tag,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/d3/profile/' + tag + '/',
        qs: {
          locale: locale
        }
      }, callback);
    },

    hero: function(params, callback) {
      var origin = params.origin,
          hero = params.hero,
          tag = params.tag,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/d3/profile/' + tag + '/hero/' + hero,
        qs: {
          locale: locale
        }
      }, callback);
    }

  };

})();
