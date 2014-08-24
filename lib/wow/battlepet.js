/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  var battlepet = {

    ability: function(params, callback) {
      var region = params.region,
          id = params.id;

      battleNetApiRequest({
        region: region,
        path: '/wow/battlepet/ability/' + id
      }, callback);
    },

    species: function(params, callback) {
      var region = params.region,
          id = params.id;

      battleNetApiRequest({
        region: region,
        path: '/wow/battlepet/species/' + id
      }, callback);
    },

    stats: function(params, callback) {
      var region = params.region,
          id = params.id,
          query = {
            level: params.level || '',
            breedId: params.breedId || '',
            qualityId: params.qualityId || ''
          };

      battleNetApiRequest({
        region: region,
        path: '/wow/battlepet/stats/' + id,
        qs: query
      }, callback);
    }

  };

  return battlepet;

})();
