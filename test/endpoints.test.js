/* global describe, context, it */
'use strict';

const path = require('path');
const chai = require('chai');
const endpoints = require(path.normalize(`${__dirname}/../lib/endpoints`));

describe('lib/endpoints.js', function () {

  it('should have a method `getEndpoint`', function (done) {
    chai.assert.isFunction(endpoints.getEndpoint);
    done();
  });

  context('.getEndpoint()', function () {
    const endpoint = endpoints.getEndpoint();

    it('should return the default endpoint', function (done) {
      chai.assert.deepEqual(endpoint, {
        hostname: 'https://us.api.battle.net',
        defaultLocale: 'en_US',
        locales: ['en_US', 'es_MX', 'pt_BR']
      });
      done();
    });
  });

  context('.getEndpoint(`eu`)', function () {
    const endpoint = endpoints.getEndpoint('eu');

    it('should return the requested endpoint', function (done) {
      chai.assert.deepEqual(endpoint, {
        hostname: 'https://eu.api.battle.net',
        defaultLocale: 'en_GB',
        locales: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT']
      });
      done();
    });
  });

});
