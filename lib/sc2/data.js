/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  return {

    achievements: function(params, callback) {
      var origin = params.origin,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/sc2/data/achievements',
        qs: {
          locale: locale
        }
      }, callback);
    },

    rewards: function(params, callback) {
      var origin = params.origin,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/sc2/data/rewards',
        qs: {
          locale: locale
        }
      }, callback);
    }

  };

})();
