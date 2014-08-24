/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  var item = {

    item: function(params, callback) {
      var region = params.region,
          id = params.id;

      battleNetApiRequest({
        region: region,
        path: '/wow/item/' + id
      }, callback);
    },

    set: function(params, callback) {
      var region = params.region,
          id = params.id;

      battleNetApiRequest({
        region: region,
        path: '/wow/item/set/' + id
      }, callback);
    }
  };

  return item;

})();
