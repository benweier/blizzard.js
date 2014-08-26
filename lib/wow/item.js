/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  var item = {

    item: function(params, callback) {
      var origin = params.origin,
          id = params.id;

      battleNetApiRequest({
        origin: origin,
        path: '/wow/item/' + id
      }, callback);
    },

    set: function(params, callback) {
      var origin = params.origin,
          id = params.id;

      battleNetApiRequest({
        origin: origin,
        path: '/wow/item/set/' + id
      }, callback);
    }
  };

  return item;

})();
