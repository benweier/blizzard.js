'use strict';

require('dotenv').config({ silent: true });

const express = require('express');

const account = require('./routes/account');
const wow = require('./routes/wow');
const sc2 = require('./routes/sc2');
const d3 = require('./routes/d3');

const app = express();
const port = process.env.PORT || 5000;

app.use('/account', account);
app.use('/wow', wow);
app.use('/sc2', sc2);
app.use('/d3', d3);

app.listen(port, () => {
  console.log(`Blizzard.js Example App listening on port ${port}!`);
});
