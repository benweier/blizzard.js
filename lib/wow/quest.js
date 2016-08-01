'use strict';

/**
 * World of Warcraft Quest API.
 */
module.exports = function(battlenet) {

  return function() {
    const args = battlenet.args.apply(null, arguments);

    args.params.path = '/wow/quest/' + args.params.id;
    battlenet.fetch(args.params, args.config, args.callback);
  };

};
