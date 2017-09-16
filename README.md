# Blizzard.js

[![Travis](https://img.shields.io/travis/benweier/blizzard.js.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/benweier/blizzard.js)
[![Codecov](https://img.shields.io/codecov/c/github/benweier/blizzard.js.svg?maxAge=2592000&style=flat-square)](https://codecov.io/gh/benweier/blizzard.js)
[![Greenkeeper badge](https://img.shields.io/badge/greenkeeper-enabled-brightgreen.svg?style=flat-square)](https://greenkeeper.io)
[![Gitter](https://img.shields.io/gitter/room/benweier/blizzard.js.svg?style=flat-square&colorB=ed1965)](https://gitter.im/benweier/blizzard.js)

*Blizzard.js* is a promise-based Node.js library for the Blizzard Community Platform API.

- [API](https://github.com/benweier/blizzard.js/blob/master/API.md)
- [Example App](https://github.com/benweier/blizzard.js/tree/example)

## Install

Install `blizzard.js` and save to your `package.json` dependencies in one easy step:

With yarn:

    $ yarn add blizzard.js

With npm:

    $ npm install blizzard.js --save

## Usage

Step 1: `require()` and `initialize()` *Blizzard.js* within your application:

```javascript
const blizzard = require('blizzard.js').initialize({ apikey: BLIZZARD_API_KEY });
```

Step 2: Call the API methods to request data:

```javascript
blizzard.wow.character(['profile'], { origin: 'us', realm: 'amanthul', name: 'charni' })
  .then(response => {
    console.log(response.data);
  });
```

Step 3: ???

Step 4: Profit.

## Battle.net API Key

Your private Blizzard API key must be passed to `.initialize()`. Please see the documentation at the [Blizzard Developer Portal](https://dev.battle.net) to obtain your own Blizzard API key.
