/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  function guild(params, callback) {
    var origin = params.origin,
        realm = params.realm,
        name = params.name,
        locale = params.locale || '',
        fields = params.fields;

    battleNetApiRequest({
      origin: origin,
      path: '/wow/guild/' + realm + '/' + name,
      qs: {
        locale: locale,
        fields: fields.join(',')
      }
    }, callback);
  }

  return {

    profile: function(params, callback) {
      params.fields = [];
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
