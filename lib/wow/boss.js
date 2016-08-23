'use strict';

/**
 * World of Warcraft Boss API.
 */
module.exports = function(battlenet) {

  return {

    masterList: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/wow/boss/';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    boss: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/wow/boss/' + args.params.id;
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
