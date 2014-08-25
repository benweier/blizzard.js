/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  function guild(params, callback) {
    var region = params.region,
        realm = params.realm,
        name = params.name,
        fields = params.fields.join(',');

    battleNetApiRequest({
      region: region,
      path: '/wow/guild/' + realm + '/' + name,
      qs: {
        fields: fields
      }
    }, callback);
  }

  return {

    profile: function(params, callback) {
      params.field = [];
      guild(params, callback);
    },

    members: function(params, callback) {
      params.fields = ['members'];
      guild(params, callback);
    },

    achievements: function(params, callback) {
      params.fields = ['achievements'];
      guild(params, callback);
    },

    news: function(params, callback) {
      params.fields = ['news'];
      guild(params, callback);
    },

    challenge: function(params, callback) {
      params.fields = ['challenge'];
      guild(params, callback);
    },

    aggregate: function(params, callback) {
      guild(params, callback);
    }

  };

})();
