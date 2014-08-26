/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  return function(params, callback) {
    var origin = params.origin,
        id = params.id;

    battleNetApiRequest({
      origin: origin,
      path: '/wow/recipe/' + id
    }, callback);
  };

})();
