/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  var challenge = {

    realmLeaderboard: function(params, callback) {
      var origin = params.origin,
          realm = params.realm;

      battleNetApiRequest({
        origin: origin,
        path: '/wow/challenge/' + realm
      }, callback);
    },

    regionLeaderboard: function(params, callback) {
      var origin = params.origin;

      battleNetApiRequest({
        origin: origin,
        path: '/wow/challenge/origin'
      }, callback);
    }

  };

  return challenge;

})();
