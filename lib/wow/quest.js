/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  return function(params, callback) {
    var region = params.region,
        id = params.id;

    battleNetApiRequest({
      region: region,
      path: '/wow/quest/' + id
    }, callback);
  };

})();
