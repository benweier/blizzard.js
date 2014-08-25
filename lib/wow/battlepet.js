/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

return {

    ability: function(params, callback) {
      var region = params.region,
          id = params.id;

      battleNetApiRequest({
        region: region,
        path: '/wow/battlePet/ability/' + id
      }, callback);
    },

    species: function(params, callback) {
      var region = params.region,
          id = params.id;

      battleNetApiRequest({
        region: region,
        path: '/wow/battlePet/species/' + id
      }, callback);
    },

    stats: function(params, callback) {
      var region = params.region,
          id = params.id,
          query = {
            level: params.level,
            breedId: params.breedId,
            qualityId: params.qualityId
          };

      battleNetApiRequest({
        region: region,
        path: '/wow/battlePet/stats/' + id,
        qs: query
      }, callback);
    }

  };

})();
