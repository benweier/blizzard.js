/**
 * @file Exports the Auth API methods.
 * @module lib/auth
 * @see http://us.battle.net/forums/en/bnet/topic/20745755750
 */
'use strict';

/**
 * Auth class constructor.
 *
 * @constructor
 * @param  {Object} blizzard A Blizzard.js instance
 * @return {Function}        Auth constructor function
 */
const Auth = function Auth (blizzard) {
  this.blizzard = blizzard;
};

module.exports = Auth;
