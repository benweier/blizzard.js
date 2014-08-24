/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  var challenge = {

    realmLeaderboard: function(params, callback) {
      var region = params.region,
          realm = params.realm;

      battleNetApiRequest({
        region: region,
        path: '/wow/challenge/' + realm
      }, callback);
    },

    regionLeaderboard: function(params, callback) {
      var region = params.region;

      battleNetApiRequest({
        region: region,
        path: '/wow/challenge/region'
      }, callback);
    }

  };

  return challenge;

})();
