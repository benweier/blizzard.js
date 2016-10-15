/* global describe, context, it */
'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const blizzard = require('./initialize');

chai.use(chaiAsPromised);

describe('lib/wow.js', function () {
  this.timeout(10000);

  context('API methods', function () {
    const tests = ['achievement', 'auction', 'boss', 'challenge', 'character', 'data', 'guild', 'item', 'mount', 'pet', 'pvp', 'quest', 'realms', 'recipe', 'spell', 'zone'];

    tests.forEach(function (test) {
      it(`should have a method "${test}"`, function (done) {
        chai.assert.isFunction(blizzard.wow[test]);
        done();
      });
    });
  });

  context('.achievement()', function () {
    it('should eventually return an achievement', function () {
      const achievement = blizzard.wow.achievement({ id: 2144 });

      return chai.assert.eventually.deepProperty(achievement, 'data.title');
    });
  });

  context('.auction()', function () {
    it('should eventually return auction data', function () {
      const auction = blizzard.wow.auction({ realm: 'medivh' });

      return chai.assert.eventually.deepProperty(auction, 'data.files');
    });
  });

  context('.boss()', function () {
    it('should eventually return the boss index', function () {
      const boss = blizzard.wow.boss();

      return chai.assert.eventually.deepProperty(boss, 'data.bosses');
    });

    it('should eventually return a single boss', function () {
      const boss = blizzard.wow.boss({ id: 24664 });

      return chai.assert.eventually.deepProperty(boss, 'data.name');
    });
  });

  context('.challenge()', function () {
    this.timeout(30000);

    it('should eventually return challenge data for a region', function () {
      const challenge = blizzard.wow.challenge();

      return chai.assert.eventually.deepProperty(challenge, 'data.challenge');
    });

    it('should eventually return challenge data for a realm', function () {
      const challenge = blizzard.wow.challenge({ realm: 'medivh' });

      return chai.assert.eventually.deepProperty(challenge, 'data.challenge');
    });
  });

  context('.character()', function () {
    it('should eventually return a character profile', function () {
      const character = blizzard.wow.character(['profile'], { origin: 'us', realm: 'amanthul', name: 'charni' });

      return chai.assert.eventually.deepProperty(character, 'data.name');
    });
  });

  context('.data()', function () {
    it('should eventually return battlegroups', function () {
      const data = blizzard.wow.data('battlegroups');

      return chai.assert.eventually.deepProperty(data, 'data.battlegroups');
    });

    it('should eventually return character races', function () {
      const data = blizzard.wow.data('character/races');

      return chai.assert.eventually.deepProperty(data, 'data.races');
    });

    it('should eventually return character classes', function () {
      const data = blizzard.wow.data('character/classes');

      return chai.assert.eventually.deepProperty(data, 'data.classes');
    });

    it('should eventually return character achievements', function () {
      const data = blizzard.wow.data('character/achievements');

      return chai.assert.eventually.deepProperty(data, 'data.achievements');
    });

    it('should eventually return guild rewards', function () {
      const data = blizzard.wow.data('guild/rewards');

      return chai.assert.eventually.deepProperty(data, 'data.rewards');
    });

    it('should eventually return guild perks', function () {
      const data = blizzard.wow.data('guild/perks');

      return chai.assert.eventually.deepProperty(data, 'data.perks');
    });

    it('should eventually return guild achievements', function () {
      const data = blizzard.wow.data('guild/achievements');

      return chai.assert.eventually.deepProperty(data, 'data.achievements');
    });

    it('should eventually return item classes', function () {
      const data = blizzard.wow.data('item/classes');

      return chai.assert.eventually.deepProperty(data, 'data.classes');
    });

    it('should eventually return talents', function () {
      const data = blizzard.wow.data('talents');

      return chai.assert.eventually.deepProperty(data, 'data.1.talents');
    });

    it('should eventually return pet types', function () {
      const data = blizzard.wow.data('pet/types');

      return chai.assert.eventually.deepProperty(data, 'data.petTypes');
    });
  });

  context('.guild()', function () {
    it('should eventually return a guild profile', function () {
      const guild = blizzard.wow.guild(['profile'], { origin: 'us', realm: 'amanthul', name: 'blackwolf' });

      return chai.assert.eventually.deepProperty(guild, 'data.name');
    });
  });

  context('.item()', function () {
    it('should eventually return a single item', function () {
      const item = blizzard.wow.item({ id: 18803 });

      return chai.assert.eventually.deepProperty(item, 'data.name');
    });

    it('should eventually return an item set', function () {
      const item = blizzard.wow.item({ set: true, id: 1060 });

      return chai.assert.eventually.deepProperty(item, 'data.name');
    });
  });

  context('.mount()', function () {
    it('should eventually return a list of mounts', function () {
      const mount = blizzard.wow.mount();

      return chai.assert.eventually.deepProperty(mount, 'data.mounts');
    });
  });

  context('.pet()', function () {
    it('should eventually return a list of pets', function () {
      const pet = blizzard.wow.pet('list');

      return chai.assert.eventually.deepProperty(pet, 'data.pets');
    });

    it('should eventually return a pet ability', function () {
      const pet = blizzard.wow.pet('ability', { id: 640 });

      return chai.assert.eventually.deepProperty(pet, 'data.name');
    });

    it('should eventually return a pet species', function () {
      const pet = blizzard.wow.pet('species', { id: 258 });

      return chai.assert.eventually.deepProperty(pet, 'data.name');
    });

    it('should eventually return pet stats', function () {
      const pet = blizzard.wow.pet('stats', { id: 258, level: 25, breedId: 4, qualityId: 4 });

      return chai.assert.eventually.deepProperty(pet, 'data.health');
    });
  });

  context('.pvp()', function () {
    this.timeout(180000);

    it('should eventually return a pvp leaderboard', function () {
      const pvp = blizzard.wow.pvp({ bracket: '3v3' });

      return chai.assert.eventually.deepProperty(pvp, 'data.rows');
    });
  });

  context('.quest()', function () {
    it('should eventually return a quest', function () {
      const quest = blizzard.wow.quest({ id: 13146 });

      return chai.assert.eventually.deepProperty(quest, 'data.title');
    });
  });

  context('.realms()', function () {
    it('should eventually return all realm status', function () {
      const realms = blizzard.wow.realms();

      return chai.assert.eventually.deepProperty(realms, 'data.realms');
    });

    it('should eventually return realm status for a list of realms', function () {
      const realms = blizzard.wow.realms({ realms: ['blackrock', 'proudmoore'] });

      return chai.assert.eventually.deepProperty(realms, 'data.realms');
    });
  });

  context('.recipe()', function () {
    it('should eventually return a recipe', function () {
      const recipe = blizzard.wow.recipe({ id: 33994 });

      return chai.assert.eventually.deepProperty(recipe, 'data.name');
    });
  });

  context('.spell()', function () {
    it('should eventually return a spell', function () {
      const spell = blizzard.wow.spell({ id: 8056 });

      return chai.assert.eventually.deepProperty(spell, 'data.name');
    });
  });

  context('.zone()', function () {
    it('should eventually return a list of zones', function () {
      const zone = blizzard.wow.zone();

      return chai.assert.eventually.deepProperty(zone, 'data.zones');
    });

    it('should eventually return a zone', function () {
      const zone = blizzard.wow.zone({ id: 4131 });

      return chai.assert.eventually.deepProperty(zone, 'data.name');
    });
  });

});
