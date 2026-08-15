# Migration Guide

## `v4` to `v5`

`v5` removes `axios` in favour of the native `fetch` API, drops CommonJS-only packaging for dual ESM + CJS, and requires Node.js `>=20.19.0`.

Most code migrates without changes — client creation, all API methods, and the `data`/`status`/`headers` response properties work exactly as before:

```js
const { data } = await wow.characterProfile({ realm: 'proudmoore', name: 'name' })
```

Breaking changes:

- **Node.js `>=20.19.0` is required.** The library uses the global `fetch` API.
- **Responses are no longer `AxiosResponse` objects.** Methods now resolve to a plain `{ data, status, statusText, headers }` object (`ClientResponse<T>`). If you only ever read `data`, `status`, or `headers`, nothing changes. Axios-specific properties (`config`, `request`) are gone, and `headers` is a plain lowercase-keyed object.
- **Failed requests throw `ResponseError` instead of `AxiosError`.** The thrown error still exposes the response at `error.response` (with `data`, `status`, `statusText`, `headers`).
- **The `axios` instance is no longer exposed.** Per-client axios interceptors/defaults are not available; pass custom headers per request instead.
- **Packaging.** The package is now published as ESM with a CJS fallback via the `exports` field. `import`/`require` of the package root both work; deep imports into `dist/` internals do not.
- **The `sea` origin is removed.** `sea.api.blizzard.com` no longer exists (the hostname does not resolve) and Blizzard's regionality documentation lists only `us`, `eu`, `kr`, and `tw`. Use `us` for former SEA data.
- **The `ow` (Overwatch League) client is removed.** Its `owl/v1` endpoints stopped working when the Overwatch League shut down, so the module only pretended to work.
- **Client types are derived from the client classes.** The hand-written `WoWClient`/`D3Client`/etc. interfaces are gone; the same names are still exported as type aliases of their classes, so type annotations keep working. `ResourceInterface` and `ProtectedResourceInterface` are no longer exported.

New in `v5`:

- `createClient` accepts an optional third argument, `onTokenRefreshError(error)`. A failed scheduled token refresh no longer crashes the process — it is reported through this callback and retried after 60 seconds.
- Clients expose `cancelTokenRefresh()` to dispose the automatic refresh timer.

## `v3` to `v4`

Upgrading from `v3` to `v4` should be pretty staightforward because `v3` likely doesn't work now and virtually no-one should be using it with a great degree of success.

For you who still manage to use `v3`: I'm sorry. If you are upgrading there are so many changes to the API methods that I can't even begin documenting the differences (probably should have been writing down the differences as I was working on `v4`...)

For methods that still work, I highly encourage the use of TypeScript or some form of intellisense to provide code suggestions.

For a list of all methods, or to find an equivalent method from `v3` to `v4`, please refer to the method parameters documented in the resource references:

- [Diablo 3](https://github.com/benweier/blizzard.js/wiki/Diablo-3)
- [Hearthstone](https://github.com/benweier/blizzard.js/wiki/Hearthstone)
- [Starcraft 2](https://github.com/benweier/blizzard.js/wiki/Starcraft-2)
- [World of Warcraft (Retail)](<https://github.com/benweier/blizzard.js/wiki/World-of-Warcraft-(Retail)>)
- [World of Warcraft (Classic)](<https://github.com/benweier/blizzard.js/wiki/World-of-Warcraft-(Classic)>)

---

### Initializing a client

Individual game clients are now named exports and initialized separately instead of them all being available from the default export.

Supported game clients: `d3`, `hs`, `sc2`, `wow`

#### `v3` 👎

```js
const blizzard = require('blizzard.js').initialize({
  key: BLIZZARD_CLIENT_ID,
  secret: BLIZZARD_CLIENT_SECRET,
  origin: 'us', // optional
  locale: 'en_US', // optional
  token: '', // optional
})
```

#### `v4` 👍

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

---

### Calling API methods

All API methods continue to accept all parameters that the client accepts, in cases where you may wish to use different values to the default `key`, `secret`, `origin`, `locale`, `token`.

**Note that protected profile requests for World of Warcraft require a _user_ `token` to be provided.**

The return value of methods is still a Promise that resolves to an `AxiosResponse` object.

With `async`/`await`

```js
const character = await wowClient.characterProfile({ realm: '...', name: '...' })

console.log(character.data)
```

With `then`/`catch`

```js
wowClient.characterProfile({ realm: '...', name: '...' }).then((response) => {
  console.log(response.data)
})
```
