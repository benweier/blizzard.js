'use strict';

const express = require('express');
const router = express.Router();

const blizzard = require('../config/blizzard');

router.get('/:origin/profile/:id/:name/:key?', (req, res) => {
  const origin = req.params.origin;
  const id = req.params.id;
  const name = req.params.name;
  const key = req.params.key || 'profile';
  const locale = req.query.locale;

  blizzard.sc2.profile(key, { id, name, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/ladder/:id', (req, res) => {
  const origin = req.params.origin;
  const id = req.params.id;
  const locale = req.query.locale;

  blizzard.sc2.ladder({ id, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/data/:key', (req, res) => {
  const origin = req.params.origin;
  const key = req.params.key;
  const locale = req.query.locale;

  blizzard.sc2.data(key, { origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

module.exports = router;
