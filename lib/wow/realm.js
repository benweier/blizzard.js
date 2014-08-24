/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  return function(params, callback) {
    var region = params.region;

    battleNetApiRequest({
      region: region,
      path: '/wow/realm/status'
    }, callback);
  };

})();
