# Blizzard.js

[![Travis](https://img.shields.io/travis/benweier/blizzard.js.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/benweier/blizzard.js)
[![Codecov](https://img.shields.io/codecov/c/github/benweier/blizzard.js.svg?maxAge=2592000&style=flat-square)](https://codecov.io/gh/benweier/blizzard.js)
[![Greenkeeper badge](https://img.shields.io/badge/greenkeeper-enabled-brightgreen.svg?style=flat-square)](https://greenkeeper.io)
[![Gitter](https://img.shields.io/gitter/room/benweier/blizzard.js.svg?style=flat-square&colorB=ed1965)](https://gitter.im/benweier/blizzard.js)

*Blizzard.js* is a promise-based Node.js library for the Blizzard Community Platform API.

## Install

Install `blizzard.js` and save to your `package.json` dependencies in one easy step:

With npm:

    $ npm install blizzard.js --save

With yarn:

    $ yarn add blizzard.js

## Usage

Step 1: `require()` and `initialize()` *Blizzard.js* within your application:

```javascript
const blizzard = require('blizzard.js').initialize({
  key: BLIZZARD_CLIENT_ID,
  secret: BLIZZARD_CLIENT_SECRET,
  origin: 'us', // optional
  locale: 'en_US' // optional
  token: '' // optional
});
```

Step 2: Fetch an API token, if one was not provided to `intialize`. You may prefetch a token however you like as documented by [Client Credentials Flow](https://develop.battle.net/documentation/guides/using-oauth/client-credentials-flow)

```javascript
blizzard.getApplicationToken()
  .then(response => {
    blizzard.defaults.token = response.data.access_token
  });
```

Step 3: Call the API methods to request data:

```javascript
blizzard.wow.character(['profile'], { origin: 'us', realm: 'amanthul', name: 'charni' })
  .then(response => {
    console.log(response.data);
  });
```

## Full code example with async/await

```javascript
const blizzard = require('blizzard.js').initialize({
  key: process.env.BLIZZARD_CLIENT_ID,
  secret: process.env.BLIZZARD_CLIENT_SECRET,
  origin: 'us',
  locale: 'en_US'
});

async function example () {
  try {
    await blizzard.getApplicationToken()
      .then(response => {
        blizzard.defaults.token = response.data.access_token
      });
    const item = await blizzard.wow.item({ id: 168185 });
    console.log(item)
  } catch (err) {
    console.error(err);
  }
}

example();
```

## Battle.net API Key

Your private Blizzard API Client ID, Secret & token must be passed to `.initialize()`. Please see the documentation at the [Blizzard Developer Portal](https://develop.battle.net/) to obtain your own Blizzard API credentials.
