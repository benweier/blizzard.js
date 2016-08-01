'use strict';

/**
 * World of Warcraft Item API.
 */
module.exports = function(battlenet) {

  return {

    item: function() {
      const args = battlenet.args.apply(null, arguments);
      const path = '/wow/item/' + args.params.id;

      if (args.params.context) {
        path += '/' + args.params.context;
      }

      if (args.params.bonusList) {
        args.config.qs = {
          bl: args.params.bonusList.toString()
        };
      }

      args.params.path = path;

      battlenet.fetch(args.params, args.config, args.callback);
    },

    set: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/wow/item/set/' + args.params.id;
      battlenet.fetch(args.params, args.config, args.callback);
    }
  };

};
