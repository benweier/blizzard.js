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
      var args = battlenet.args.apply(null, arguments),
          fields = ['level', 'breedId', 'qualityId'];
      args.params.path = '/wow/battlePet/stats/' + args.params.id;
      args.config.qs = battlenet.pick(args.params.fields, fields);
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
