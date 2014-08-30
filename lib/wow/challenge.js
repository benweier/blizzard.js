/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  var challenge = {

    realmLeaderboard: function(params, callback) {
      var origin = params.origin,
          realm = params.realm,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/wow/challenge/' + realm,
        qs: {
          locale: locale
        }
      }, callback);
    },

    regionLeaderboard: function(params, callback) {
      var origin = params.origin,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/wow/challenge/origin',
        qs: {
          locale: locale
        }
      }, callback);
    }

  };

  return challenge;

})();
