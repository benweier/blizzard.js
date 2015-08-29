/**
 * Diablo III Season API.
 */

module.exports = function(battlenet) {
  'use strict';

  return {

    index: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/data/d3/season/';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    season: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/data/d3/season/' + args.params.id;
      battlenet.fetch(args.params, args.config, args.callback);
    },

    leaderboard: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/data/d3/season/' + args.params.id + '/' + args.params.leaderboard;
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
