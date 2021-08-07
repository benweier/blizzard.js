# Blizzard.js

_Blizzard.js_ is a promise-based Node.js library for the Blizzard Community Platform API written with TypeScript.

## Install

Install `blizzard.js` and save to your `package.json` dependencies in one easy step:

With npm:

    $ npm install blizzard.js

With yarn:

    $ yarn add blizzard.js

## Battle.net API Key

Please refer to the documentation at the [Blizzard Developer Portal](https://develop.battle.net/) to obtain Blizzard API credentials.

## Usage

#### Game Clients

All game clients are available via their named export.

- **Diablo 3**: `d3`
- **Hearthstone**: `hs`
- **Starcraft 2**: `sc2`
- **World of Warcraft (Retail)**: `wow`
- **World of Warcraft (Classic)**: `wow.classic`

_With TypeScript & ES modules_

```js
import { wow } from 'blizzard.js'

const wowClient = await wow.createInstance({
  key: BLIZZARD_CLIENT_ID,
  secret: BLIZZARD_CLIENT_SECRET,
  origin: 'us', // optional
  locale: 'en_US', // optional
  token: '', // optional
})
```

_With CommonJS_

```js
const blizzard = require('blizzard.js')

const wowClient = await blizzard.wow.createInstance({
  key: BLIZZARD_CLIENT_ID,
  secret: BLIZZARD_CLIENT_SECRET,
  origin: 'us', // optional
  locale: 'en_US', // optional
  token: '', // optional
})
```

#### API Methods

All API methods can accept the same `key`, `secret`, `token`, `origin`, `locale` parameters as `createInstance`, for cases where you need to use different values to the default.

Method parameters are encoded with `encodeURIComponent` for URL safety. Sanitizing your inputs is still important, but just be aware in case certain requests fail for this reason.

Refer to the resource references for the available methods and parameters:

- [Diablo 3](https://github.com/benweier/blizzard.js/wiki/Diablo-3)
- [Hearthstone](https://github.com/benweier/blizzard.js/wiki/Hearthstone)
- [Starcraft 2](https://github.com/benweier/blizzard.js/wiki/Starcraft-2)
- [World of Warcraft (Retail)](<https://github.com/benweier/blizzard.js/wiki/World-of-Warcraft-(Retail)>)
- [World of Warcraft (Classic)](<https://github.com/benweier/blizzard.js/wiki/World-of-Warcraft-(Classic)>)

#### _User_ Tokens

**Certain protected profile requests for World of Warcraft require a _user_ `token`** provisioned by the OAuth 2.0 [Authorization Code Flow](https://develop.battle.net/documentation/guides/using-oauth/authorization-code-flow). This is _outside the scope of `blizzard.js`_ and a OAuth library like [passport](https://github.com/jaredhanson/passport) is highly recommended.

#### _Application_ Tokens

In most cases you shouldn't need to handle the application token yourself. Instantiating a game client with `createInstance` will fetch a token if the initial value is undefined, and refresh the token when it expires (typically valid for 24hrs).

If a token value is provided, the client will simply validate and only refresh if it's expired/invalid. Passing an optional callback funtion as the 2nd argument to `createInstance` will return the token object when it is refreshed, allowing you to listen for changes if you are managing the token state manually.

```js
const wow = await createInstance(
  {
    key: BLIZZARD_CLIENT_ID,
    secret: BLIZZARD_CLIENT_SECRET,
  },
  (token) => {
    // {
    //   access_token: string
    //   token_type: 'bearer'
    //   expires_in: number (in seconds)
    // }
  },
)
```

To completely disable validating/refreshing the application token, pass `false` to the 2nd argument.

```js
const wow = await createInstance(
  {
    key: BLIZZARD_CLIENT_ID,
    secret: BLIZZARD_CLIENT_SECRET,
  },
  false,
)
```

By opting out of the default application token handling, it is your responsibility to manage application tokens as required with the available methods

**Validate**

```js
const validateTokenRequest = await wow.validateApplicationToken({
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

**Automatic Get & Set**

```js
await wow.refreshApplicationToken()
```

**Manual Get & Set**

```js
const getTokenRequest = await wow.getApplicationToken()

// getTokenRequest.data =>
// {
//   access_token: string,
//   token_type: 'bearer',
//   expires_in: number (in seconds),
// }

wow.setApplicationToken(getTokenRequest.data.access_token)
```
