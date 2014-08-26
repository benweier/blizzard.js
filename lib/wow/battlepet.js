/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

return {

    ability: function(params, callback) {
      var origin = params.origin,
          id = params.id;

      battleNetApiRequest({
        origin: origin,
        path: '/wow/battlePet/ability/' + id
      }, callback);
    },

    species: function(params, callback) {
      var origin = params.origin,
          id = params.id;

      battleNetApiRequest({
        origin: origin,
        path: '/wow/battlePet/species/' + id
      }, callback);
    },

    stats: function(params, callback) {
      var origin = params.origin,
          id = params.id,
          query = {
            level: params.level,
            breedId: params.breedId,
            qualityId: params.qualityId
          };

      battleNetApiRequest({
        origin: origin,
        path: '/wow/battlePet/stats/' + id,
        qs: query
      }, callback);
    }

  };

})();
