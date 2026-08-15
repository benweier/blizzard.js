# Blizzard.js

_Blizzard.js_ is a promise-based library for the Blizzard Battle.net Community Platform API, written in TypeScript with zero runtime dependencies.

Requires Node.js `>=20.19` (uses the global `fetch` API). The client also runs on edge runtimes and browsers.

Upgrading from v4? See the [migration guide](MIGRATION_GUIDE.md).

## Install

```sh
npm install blizzard.js
```

## Battle.net API Key

Please refer to the [Battle.net Developer Portal](https://community.developer.battle.net/) documentation to obtain Blizzard API credentials.

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
  origin: 'us', // optional: 'us' | 'eu' | 'kr' | 'tw'
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
  origin: 'us', // optional: 'us' | 'eu' | 'kr' | 'tw'
  locale: 'en_US', // optional
  token: '', // optional
})
```

#### API Methods

All API methods can accept the same `key`, `secret`, `token`, `origin`, `locale` parameters as `createInstance`, for cases where you need to use different values to the default.

Methods resolve to a `{ data, status, statusText, headers }` response object. Failed requests throw a `ResponseError` with the same response object attached at `error.response`. Response `data` is typed `unknown` by default — pass a response type per call when you want typed access:

```ts
const { data } = await wowClient.item<ItemResponse>({ id: 19019 })
```

Method parameters are encoded with `encodeURIComponent` for URL safety. Sanitizing your inputs is still important, but just be aware in case certain requests fail for this reason.

Refer to the resource references for the available methods and parameters:

- [Diablo 3](https://github.com/benweier/blizzard.js/wiki/Diablo-3)
- [Hearthstone](https://github.com/benweier/blizzard.js/wiki/Hearthstone)
- [Starcraft 2](https://github.com/benweier/blizzard.js/wiki/Starcraft-2)
- [World of Warcraft (Retail)](<https://github.com/benweier/blizzard.js/wiki/World-of-Warcraft-(Retail)>)
- [World of Warcraft (Classic)](<https://github.com/benweier/blizzard.js/wiki/World-of-Warcraft-(Classic)>)

#### _User_ Tokens

**Certain protected profile requests for World of Warcraft require a _user_ `token`** provisioned by the OAuth 2.0 [Authorization Code Flow](https://community.developer.battle.net/documentation/guides/using-oauth/authorization-code-flow). This is _outside the scope of `blizzard.js`_ and an OAuth library like [passport](https://github.com/jaredhanson/passport) is highly recommended.

#### _Application_ Tokens

In most cases you shouldn't need to handle the application token yourself. Instantiating a game client with `createInstance` will fetch a token if the initial value is undefined, and refresh the token when it expires (typically valid for 24hrs).

If a token value is provided, the client will simply validate and only refresh if it's expired/invalid. Passing an optional callback function as the 2nd argument to `createInstance` will return the token object when it is refreshed, allowing you to listen for changes if you are managing the token state manually.

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

A failed scheduled refresh does not crash your process — it is retried after 60 seconds. Pass an optional error callback as the 3rd argument to observe failures:

```js
const wow = await createInstance({ key, secret }, true, (error) => {
  // called when a scheduled token refresh fails; the refresh retries in 60s
})
```

Call `wow.cancelTokenRefresh()` to dispose the automatic refresh timer, for example during a graceful shutdown.

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
