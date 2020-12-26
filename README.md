# Blizzard.js

_Blizzard.js_ is a promise-based Node.js library for the Blizzard Community Platform API written with TypeScript.

## Install

Install `blizzard.js` and save to your `package.json` dependencies in one easy step:

With npm:

    $ npm install blizzard.js --save

With yarn:

    $ yarn add blizzard.js

## Battle.net API Key

Please refer to the documentation at the [Blizzard Developer Portal](https://develop.battle.net/) to obtain Blizzard API credentials.

## Usage

**Import and initialize**

```js
import blizzard from 'blizzard.js';
// import { wow } from 'blizzard.js'
// import { createInstance } from 'blizzard.js/wow'

const wow = await blizzard.wow.createInstance({
  key: BLIZZARD_CLIENT_ID,
  secret: BLIZZARD_CLIENT_SECRET,
  origin: 'us', // optional
  locale: 'en_US' // optional
  token: {} // optional
})
```

```js
const blizzard = require('blizzard.js')

const wow = await blizzard.wow.createInstance({
  key: BLIZZARD_CLIENT_ID,
  secret: BLIZZARD_CLIENT_SECRET,
  origin: 'us', // optional
  locale: 'en_US' // optional
  token: {} // optional
});
```

**Get and validate application tokens**

```js
const getTokenRequest = wow.getApplicationToken()

// getTokenRequest.data =>
// {
//   access_token: string,
//   token_type: 'bearer',
//   expires_in: number (in seconds),
// }
```

```js
const validateTokenRequest = wow.validateApplicationToken({
  token: 'string',
})

// validateTokenRequest.data =>
// {
//   scope: [],
//   exp: number (in seconds),
//   authorities: [
//     {
//       authority: string,
//     },
//   ],
//   client_id: string,
// }
```
