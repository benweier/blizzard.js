/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  var guild = {

    profile: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/guild/' + realm + '/' + name
      }, callback);
    },

    members: function(params, callback) {
      var region = params.region;

      battleNetApiRequest({
        region: region,
        path: '/wow/guild/' + realm + '/' + name,
        qs: {
          fields: 'members'
        }
      }, callback);
    },

    achievements: function(params, callback) {
      var region = params.region;

      battleNetApiRequest({
        region: region,
        path: '/wow/guild/' + realm + '/' + name,
        qs: {
          fields: 'achievements'
        }
      }, callback);
    },

    news: function(params, callback) {
      var region = params.region;

      battleNetApiRequest({
        region: region,
        path: '/wow/guild/' + realm + '/' + name,
        qs: {
          fields: 'news'
        }
      }, callback);
    },

    challenge: function(params, callback) {
      var region = params.region;

      battleNetApiRequest({
        region: region,
        path: '/wow/guild/' + realm + '/' + name,
        qs: {
          fields: 'challenge'
        }
      }, callback);
    }

  };

  return guild;

})();
