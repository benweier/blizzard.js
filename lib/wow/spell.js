/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  return function(params, callback) {
    var origin = params.origin,
        id = params.id,
        locale = params.locale || '';

    battleNetApiRequest({
      origin: origin,
      path: '/wow/spell/' + id,
      qs: {
        locale: locale
      }
    }, callback);
  };

})();
