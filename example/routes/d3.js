'use strict';

const express = require('express');
const router = express.Router();

const blizzard = require('../config/blizzard');

router.get('/:origin/data/:key/:id', (req, res) => {
  const origin = req.params.origin;
  const key = req.params.key;
  const id = req.params.id;
  const locale = req.query.locale;

  blizzard.d3.data(key, { id, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/era/:id?/:leaderboard?', (req, res) => {
  const origin = req.params.origin;
  const id = req.params.id;
  const leaderboard = req.params.leaderboard;
  const locale = req.query.locale;
  const token = req.query.token;

  blizzard.d3.era({ id, leaderboard, origin, locale, token })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/season/:id?/:leaderboard?', (req, res) => {
  const origin = req.params.origin;
  const id = req.params.id;
  const leaderboard = req.params.leaderboard;
  const locale = req.query.locale;
  const token = req.query.token;

  blizzard.d3.season({ id, leaderboard, origin, locale, token })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/profile/:tag/:hero?', (req, res) => {
  const origin = req.params.origin;
  const tag = req.params.tag;
  const hero = req.params.hero;
  const locale = req.query.locale;

  blizzard.d3.profile({ tag, hero, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

module.exports = router;
