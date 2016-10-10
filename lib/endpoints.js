/**
 * @file Exports Blizzard API regional endpoints.
 * @module lib/endpoints
 */
'use strict';

/**
 * Blizzard API regional endpoints.
 *
 * @typedef {Object} Endpoint
 * @prop    {String} hostname      The regional hostname
 * @prop    {String} defaultLocale The default locale for the region
 * @prop    {Array} locales        A list of available locales for the region
 */
const endpoints = {
  us: {
    hostname: 'https://us.api.battle.net',
    defaultLocale: 'en_US',
    locales: ['en_US', 'es_MX', 'pt_BR']
  },
  eu: {
    hostname: 'https://eu.api.battle.net',
    defaultLocale: 'en_GB',
    locales: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT']
  },
  sea: {
    hostname: 'https://sea.api.battle.net',
    defaultLocale: 'en_US',
    locales: ['en_US']
  },
  kr: {
    hostname: 'https://kr.api.battle.net',
    defaultLocale: 'ko_KR',
    locales: ['ko_KR']
  },
  tw: {
    hostname: 'https://tw.api.battle.net',
    defaultLocale: 'zh_TW',
    locales: ['zh_TW']
  },
  cn: {
    hostname: 'https://api.battlenet.com.cn',
    defaultLocale: 'zh_CN',
    locales: ['zh_CN']
  }
};

/**
 * Get the endpoint for a given regional <code>key</code>.
 *
 * @param  {String} [key=us] The regional endpoint key
 * @return {Endpoint}        The endpoint data object
 */
exports.getEndpoint = function getEndpoint (key) {
  const origin = key || 'us';

  return endpoints[origin];
};
