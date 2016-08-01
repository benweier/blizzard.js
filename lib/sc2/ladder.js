'use strict';

/**
 * Starcraft II Ladder API.
 */
module.exports = function(battlenet) {

  return function() {
    const args = battlenet.args.apply(null, arguments);

    args.params.path = '/sc2/ladder/' + args.params.id;
    battlenet.fetch(args.params, args.config, args.callback);
  };

};
