/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  var pvp = {

    leaderboards: function(params, callback) {
      var region = params.region,
          bracket = params.bracket;

      battleNetApiRequest({
        region: region,
        path: '/wow/leaderboard/' + bracket
      }, callback);
    }

  };

  return pvp;

})();
