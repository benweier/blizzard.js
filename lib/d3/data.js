/**
 * Diablo III Data API.
 */

module.exports = function(battlenet) {
  'use strict';

  return {

    item: function () {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/d3/data/item/' + args.params.item;
      args.params.item = args.params.item.replace(/^item\//, '');
      battlenet.fetch(args.params, args.config, args.callback);
    },

    follower: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/d3/data/follower/' + args.params.follower;
      battlenet.fetch(args.params, args.config, args.callback);
    },

    artisan: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/d3/data/artisan/' + args.params.artisan;
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
