/**
 * World of Warcraft Item API.
 */

module.exports = function(battlenet) {
  'use strict';

  return {

    item: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/item/' + args.params.id;
      battlenet.fetch(args.params, args.config, args.callback);
    },

    set: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/item/set/' + args.params.id;
      battlenet.fetch(args.params, args.config, args.callback);
    }
  };

};
