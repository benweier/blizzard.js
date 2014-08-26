/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  return function(params, callback) {
    var origin = params.origin,
        realms = params.realms.join(',') || '';

    battleNetApiRequest({
      origin: origin,
      path: '/wow/realm/status',
      qs: {
        realms: realms
      }
    }, callback);
  };

})();
