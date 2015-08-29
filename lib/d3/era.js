/**
 * Diablo III Era API.
 */

module.exports = function(battlenet) {
  'use strict';

  return {

    index: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/data/d3/era/';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    era: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/data/d3/era/' + args.params.id;
      battlenet.fetch(args.params, args.config, args.callback);
    },

    leaderboard: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/data/d3/era/' + args.params.id + '/' + args.params.leaderboard;
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
