/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  return {

    item: function (params, callback) {
      var origin = params.origin,
          item = params.item.replace(/^item\//, '');

      battleNetApiRequest({
        origin: origin,
        path: '/d3/data/item/' + item
      }, callback);
    },

    follower: function(params, callback) {
      var origin = params.origin,
          follower = params.follower;

      battleNetApiRequest({
        origin: origin,
        path: '/d3/data/follower/' + follower
      }, callback);
    },

    artisan: function(params, callback) {
      var origin = params.origin,
          artisan = params.artisan;

      battleNetApiRequest({
        origin: origin,
        path: '/d3/data/artisan/' + artisan
      }, callback);
    }

  };

})();
