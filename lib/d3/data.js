/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  return {

    item: function (params, callback) {
      var origin = params.origin,
          item = params.item.replace(/^item\//, ''),
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/d3/data/item/' + item,
        qs: {
          locale: locale
        }
      }, callback);
    },

    follower: function(params, callback) {
      var origin = params.origin,
          follower = params.follower,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/d3/data/follower/' + follower,
        qs: {
          locale: locale
        }
      }, callback);
    },

    artisan: function(params, callback) {
      var origin = params.origin,
          artisan = params.artisan,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/d3/data/artisan/' + artisan,
        qs: {
          locale: locale
        }
      }, callback);
    }

  };

})();
