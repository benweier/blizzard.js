# Blizzard.js

Blizzard.js is a promise-based Node.JS library for the Blizzard Battle.net Community Platform API.

## Install

Install `blizzard.js` and save to your `package.json` dependencies with one easy step:

    $ npm install blizzard.js --save

## Usage

Step 1: `require()` and `initialize()` Blizzard.js within your application:

```javascript
const blizzard = require('blizzard.js').initialize({ api_key: BATTLENET_API_KEY });
```

Step 2: Call the API methods to request data:

```javascript
blizzard.wow.character(['profile'], { origin: 'us', realm: 'amathul', name: 'charni' })
  .then(data => {
    console.log(data);
  });
```

Step 3: ???

Step 4: Profit.

## Battle.net API Key

Your private Battle.net API key must be passed to `.initialize()`. Please see the documentation at the [Blizzard Developer Portal](https://dev.battle.net) to obtain your own Battle.net API key.
