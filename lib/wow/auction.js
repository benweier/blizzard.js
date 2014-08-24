/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  return function(params, callback) {
    var region = params.region,
        realm = params.realm;

    battleNetApiRequest({
      region: region,
      path: '/wow/auction/data/' + realm
    }, callback);

  };

})();
