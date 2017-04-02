/* global describe, context, it */
const path = require('path');
const chai = require('chai');
const endpoints = require(path.normalize(`${__dirname}/../lib/endpoints`));

describe('lib/endpoints.js', function () {

  it('should have a method "getEndpoint"', function (done) {
    chai.assert.isFunction(endpoints.getEndpoint);
    done();
  });

  context('.getEndpoint()', function () {
    const endpoint = endpoints.getEndpoint();

    it('should return the US endpoint', function (done) {
      chai.assert.deepEqual(endpoint, {
        hostname: 'https://us.api.battle.net',
        locale: 'en_US',
      });
      done();
    });
  });

  context('.getEndpoint("sea")', function () {
    const endpoint = endpoints.getEndpoint('sea');

    it('should return the SEA endpoint', function (done) {
      chai.assert.deepEqual(endpoint, {
        hostname: 'https://sea.api.battle.net',
        locale: 'en_US',
      });
      done();
    });
  });

  context('.getEndpoint("eu", "es_ES")', function () {
    const endpoint = endpoints.getEndpoint('eu', 'es_ES');

    it('should return the EU endpoint', function (done) {
      chai.assert.deepEqual(endpoint, {
        hostname: 'https://eu.api.battle.net',
        locale: 'es_ES',
      });
      done();
    });
  });

});
