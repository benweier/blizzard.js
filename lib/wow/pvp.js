/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  var pvp = {

    leaderboards: function(params, callback) {
      var origin = params.origin,
          bracket = params.bracket,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/wow/leaderboard/' + bracket,
        qs: {
          locale: locale
        }
      }, callback);
    }

  };

  return pvp;

})();
