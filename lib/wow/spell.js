'use strict';

/**
 * World of Warcraft Spell API.
 */
module.exports = function(battlenet) {

  return function() {
    const args = battlenet.args.apply(null, arguments);

    args.params.path = '/wow/spell/' + args.params.id;
    battlenet.fetch(args.params, args.config, args.callback);
  };

};
