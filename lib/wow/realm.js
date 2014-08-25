/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  return function(params, callback) {
    var region = params.region,
        realms = params.realms.join(',') || '';

    battleNetApiRequest({
      region: region,
      path: '/wow/realm/status',
      qs: {
        realms: realms
      }
    }, callback);
  };

})();
