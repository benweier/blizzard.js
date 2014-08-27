/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  return {

    career: function(params, callback) {
      var origin = params.origin,
          tag = params.tag;

      battleNetApiRequest({
        origin: origin,
        path: '/d3/profile/' + tag + '/'
      }, callback);
    },

    hero: function(params, callback) {
      var origin = params.origin,
          hero = params.hero,
          tag = params.tag;

      battleNetApiRequest({
        origin: origin,
        path: '/d3/profile/' + tag + '/hero/' + hero
      }, callback);
    }

  };

})();
