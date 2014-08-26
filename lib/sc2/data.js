/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  return {

    achievements: function(params, callback) {
      var origin = params.origin;

      battleNetApiRequest({
        origin: origin,
        path: '/sc2/data/achievements'
      }, callback);
    }

  };

})();
