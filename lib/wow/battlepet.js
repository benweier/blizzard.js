/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

return {

    ability: function(params, callback) {
      var origin = params.origin,
          id = params.id,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/wow/battlePet/ability/' + id,
        qs: {
          locale: locale
        }
      }, callback);
    },

    species: function(params, callback) {
      var origin = params.origin,
          id = params.id,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/wow/battlePet/species/' + id,
        qs: {
          locale: locale
        }
      }, callback);
    },

    stats: function(params, callback) {
      var origin = params.origin,
          id = params.id,
          query = {
            locale: params.locale || '',
            level: params.level || '',
            breedId: params.breedId || '',
            qualityId: params.qualityId || ''
          };

      battleNetApiRequest({
        origin: origin,
        path: '/wow/battlePet/stats/' + id,
        qs: query
      }, callback);
    }

  };

})();
