'use strict';

const express = require('express');
const router = express.Router();

const blizzard = require('../config/blizzard');

router.get('/:origin/user', (req, res) => {
  const origin = req.params.origin;
  const token = req.query.token;
  const locale = req.query.locale;

  blizzard.account.user({ token, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/wow', (req, res) => {
  const origin = req.params.origin;
  const token = req.query.token;
  const locale = req.query.locale;

  blizzard.account.wow({ token, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

router.get('/:origin/sc2', (req, res) => {
  const origin = req.params.origin;
  const token = req.query.token;
  const locale = req.query.locale;

  blizzard.account.sc2({ token, origin, locale })
    .then(response => res.json(response.data))
    .catch(err => res.json(err.response.data));
});

module.exports = router;
