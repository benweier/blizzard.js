/**
 * @file Exports Blizzard API regional endpoints.
 * @module lib/endpoints
 */

/**
 * Blizzard API regional endpoints with locales.
 */
const endpoints = {
  us: {
    hostname: 'https://us.api.blizzard.com',
    defaultLocale: 'en_US',
    locales: ['en_US', 'es_MX', 'pt_BR'],
  },
  eu: {
    hostname: 'https://eu.api.blizzard.com',
    defaultLocale: 'en_GB',
    locales: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT'],
  },
  sea: {
    hostname: 'https://sea.api.blizzard.com',
    defaultLocale: 'en_US',
    locales: ['en_US'],
  },
  kr: {
    hostname: 'https://kr.api.blizzard.com',
    defaultLocale: 'ko_KR',
    locales: ['ko_KR', 'en_GB', 'en_US'],
  },
  tw: {
    hostname: 'https://tw.api.blizzard.com',
    defaultLocale: 'zh_TW',
    locales: ['zh_TW', 'en_GB', 'en_US'],
  },
  cn: {
    hostname: 'https://gateway.battlenet.com.cn',
    defaultLocale: 'zh_CN',
    locales: ['zh_CN', 'en_GB', 'en_US'],
  },
};

/**
 * Get the hostname of a path that may be overridden.
 *
 * @param {String} origin A regional origin
 * @param {String} [path] The requested API path
 * @return {String}       The valid hostname for the current path
 */
function getPathHostName (origin, path) {
  const pathOverride = {
    '/oauth/userinfo': `https://${origin}.battle.net`,
    '/wow/user/characters': `https://${origin}.battle.net`,
  };

  return pathOverride.hasOwnProperty(path) ? pathOverride[path] : endpoints[origin].hostname;
};

/**
 * Get the endpoint for a given region.
 *
 * @param  {String} [key=us] A regional key
 * @param  {String} [locale] An endpoint locale
 * @return {Endpoint}        The endpoint data object
 */
exports.getEndpoint = function getEndpoint (key, locale) {
  const validKey = endpoints.hasOwnProperty(key) ? key : 'us';
  const endpoint = endpoints[validKey];

  return Object.assign(
    {},
    { origin: validKey },
    { hostname: endpoint.hostname },
    { locale: endpoint.locales.find(item => item === locale) || endpoint.defaultLocale }
  );
};
