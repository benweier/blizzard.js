/**
 * World of Warcraft Battle Pet API.
 */

module.exports = function(battlenet) {
  'use strict';

  return {

    ability: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/battlePet/ability/' + args.params.id;
      battlenet.fetch(args.params, args.config, args.callback);
    },

    species: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/battlePet/species/' + args.params.id;
      battlenet.fetch(args.params, args.config, args.callback);
    },

    stats: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/battlePet/stats/' + args.params.id;
      args.params.qs = {
        level: args.params.level || '',
        breedId: args.params.breedId || '',
        qualityId: args.params.qualityId || ''
      };
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
