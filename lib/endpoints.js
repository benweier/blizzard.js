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
    locales: ['en_US', 'es_MX', 'pt_BR', 'multi'],
  },
  eu: {
    hostname: 'https://eu.api.blizzard.com',
    defaultLocale: 'en_GB',
    locales: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT', 'multi'],
  },
  sea: {
    hostname: 'https://sea.api.blizzard.com',
    defaultLocale: 'en_US',
    locales: ['en_US', 'multi'],
  },
  kr: {
    hostname: 'https://kr.api.blizzard.com',
    defaultLocale: 'ko_KR',
    locales: ['ko_KR', 'en_GB', 'en_US', 'multi'],
  },
  tw: {
    hostname: 'https://tw.api.blizzard.com',
    defaultLocale: 'zh_TW',
    locales: ['zh_TW', 'en_GB', 'en_US', 'multi'],
  },
  cn: {
    hostname: 'https://gateway.battlenet.com.cn',
    defaultLocale: 'zh_CN',
    locales: ['zh_CN', 'en_GB', 'en_US', 'multi'],
  },
};

/**
 * Get the hostname of a path that may be overridden.
 *
 * @param {String} origin A regional origin
 * @param {String} [path] The requested API path
 * @return {String} The valid hostname for the current path
 */
function getPathHostName(origin, path) {
  const pathOverride = {
    '/oauth/userinfo': `https://${origin}.battle.net`,
  };

  return Object.prototype.hasOwnProperty.call(pathOverride, path) ? pathOverride[path] : endpoints[origin].hostname;
}

/**
 * Get the endpoint for a given region.
 *
 * @param  {String} [origin] A regional origin
 * @param  {String} [locale] A regional locale
 * @param  {String} [path] A requested API path
 * @return {Object} The endpoint data object
 */
function getEndpoint(origin, locale, path) {
  const validOrigin = Object.prototype.hasOwnProperty.call(endpoints, origin) ? origin : 'us';
  const endpoint = endpoints[validOrigin];

  return Object.assign(
    {},
    { origin: validOrigin },
    { hostname: origin === 'cn' ? endpoint.hostname : getPathHostName(validOrigin, path) },
    { locale: endpoint.locales.find(item => item === locale) || endpoint.defaultLocale },
  );
}

exports.getEndpoint = getEndpoint;
