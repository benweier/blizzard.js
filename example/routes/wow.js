'use strict';

const express = require('express');
const router = express.Router();

const blizzard = require('../config/blizzard');

router.get('/:origin/achievement/:id', (req, res) => {
  const origin = req.params.origin;
  const id = req.params.id;
  const locale = req.query.locale;

  blizzard.wow.achievement({ id, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/auction/:realm', (req, res) => {
  const origin = req.params.origin;
  const realm = req.params.realm;
  const locale = req.query.locale;

  blizzard.wow.auction({ realm, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/boss/:id?', (req, res) => {
  const origin = req.params.origin;
  const id = req.params.id || '';
  const locale = req.query.locale;

  blizzard.wow.boss({ id, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/challenge/:realm', (req, res) => {
  const origin = req.params.origin;
  const realm = req.params.realm;
  const locale = req.query.locale;

  blizzard.wow.challenge({ realm, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/character/:realm/:name', (req, res) => {
  const origin = req.params.origin;
  const realm = req.params.realm;
  const name = req.params.name;
  const keys = req.query.keys || ['profile'];
  const locale = req.query.locale;

  blizzard.wow.character(keys, { realm, name, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/data/:key', (req, res) => {
  const origin = req.params.origin;
  const key = req.params.key;
  const locale = req.query.locale;

  blizzard.wow.data(key, { origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/guild/:realm/:name', (req, res) => {
  const origin = req.params.origin;
  const realm = req.params.realm;
  const name = req.params.name;
  const keys = req.query.keys || ['profile'];
  const locale = req.query.locale;

  blizzard.wow.guild(keys, { realm, name, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/item/:id', (req, res) => {
  const origin = req.params.origin;
  const id = req.params.id;
  const set = req.query.set;
  const locale = req.query.locale;

  blizzard.wow.auction({ id, set: set, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/mount', (req, res) => {
  const origin = req.params.origin;
  const locale = req.query.locale;

  blizzard.wow.mount({ origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/pet/:key?/:id?', (req, res) => {
  const origin = req.params.origin;
  const key = req.params.key || 'list';
  const id = req.params.id;
  const level = req.query.level;
  const breedId = req.query.breedId;
  const qualityId = req.query.qualityId;
  const locale = req.query.locale;

  blizzard.wow.pet(key, { id, level, breedId, qualityId, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/pvp/:bracket', (req, res) => {
  const origin = req.params.origin;
  const bracket = req.params.bracket;
  const locale = req.query.locale;

  blizzard.wow.pvp({ bracket, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/quest/:id', (req, res) => {
  const origin = req.params.origin;
  const id = req.params.id;
  const locale = req.query.locale;

  blizzard.wow.quest({ id, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/realms', (req, res) => {
  const origin = req.params.origin;
  const realms = req.query.realms;
  const locale = req.query.locale;

  blizzard.wow.realms({ realms, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/recipe/:id', (req, res) => {
  const origin = req.params.origin;
  const id = req.params.id;
  const locale = req.query.locale;

  blizzard.wow.recipe({ id, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/spell/:id', (req, res) => {
  const origin = req.params.origin;
  const id = req.params.id;
  const locale = req.query.locale;

  blizzard.wow.spell({ id, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/zone/:id?', (req, res) => {
  const origin = req.params.origin;
  const id = req.params.id || '';
  const locale = req.query.locale;

  blizzard.wow.zone({ id, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

module.exports = router;
