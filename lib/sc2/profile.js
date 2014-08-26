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
          name = params.name;

      battleNetApiRequest({
        origin: origin,
        path: '/sc2/profile/' + id + '/' + region + '/' + name + '/'
      }, callback);
    },

    ladders: function(params, callback) {
      var origin = params.origin,
          id = params.id,
          region = params.region,
          name = params.name;

      battleNetApiRequest({
        origin: origin,
        path: '/sc2/profile/' + id + '/' + region + '/' + name + '/ladders'
      }, callback);
    },

    matchHistory: function(params, callback) {
      var origin = params.origin,
          id = params.id,
          region = params.region,
          name = params.name;

      battleNetApiRequest({
        origin: origin,
        path: '/sc2/profile/' + id + '/' + region + '/' + name + '/matches'
      }, callback);
    }

  };

})();
