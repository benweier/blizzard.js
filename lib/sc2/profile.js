'use strict';

/**
 * Starcraft II Profile API.
 */
module.exports = function(battlenet) {

  return {

    profile: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/sc2/profile/' + args.params.id + '/' + args.params.region + '/' + args.params.name + '/';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    ladders: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/sc2/profile/' + args.params.id + '/' + args.params.region + '/' + args.params.name + '/ladders';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    matchHistory: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/sc2/profile/' + args.params.id + '/' + args.params.region + '/' + args.params.name + '/matches';
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
