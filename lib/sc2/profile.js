/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  return {

    profile: function(params, callback) {
      var origin = params.origin,
          id = params.id,
          region = params.region,
          name = params.name,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/sc2/profile/' + id + '/' + region + '/' + name + '/',
        qs: {
          locale: locale
        }
      }, callback);
    },

    ladders: function(params, callback) {
      var origin = params.origin,
          id = params.id,
          region = params.region,
          name = params.name,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/sc2/profile/' + id + '/' + region + '/' + name + '/ladders',
        qs: {
          locale: locale
        }
      }, callback);
    },

    matchHistory: function(params, callback) {
      var origin = params.origin,
          id = params.id,
          region = params.region,
          name = params.name,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/sc2/profile/' + id + '/' + region + '/' + name + '/matches',
        qs: {
          locale: locale
        }
      }, callback);
    }

  };

})();
