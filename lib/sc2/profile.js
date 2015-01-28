/**
 * Starcraft II Profile API.
 */

module.exports = function(battlenet) {
  'use strict';

  return {

    profile: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/sc2/profile/' + [args.params.id, args.params.region, args.params.name].join('/') + '/';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    ladders: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/sc2/profile/' + [args.params.id, args.params.region, args.params.name].join('/') + '/ladders';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    matchHistory: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/sc2/profile/' + [args.params.id, args.params.region, args.params.name].join('/') + '/matches';
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
