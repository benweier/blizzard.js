# Migration Guide

Upgrading from `v3` to `v4` should be pretty staightforward because `v3` likely doesn't work now and virtually no-one should be using it successfully.

For you who still manage to use `v3`: I'm sorry. If you are upgrading there are so many changes to the API methods that I can't even begin documenting them all due to them not working in the vast majority of cases (probably should have been writing down the differences as I was working on `v4`...)

For methods that may still work, I highly encourage the use of TypeScript or some form of intellisense to provide code suggestions.

---

### Initializing a client

Individual game clients are now named exports and initialized separately instead of them all being available from the default export.

Supported game clients: `d3`, `hs`, `sc2`, `wow`

`v3`

```js
const blizzard = require('blizzard.js').initialize({
  key: BLIZZARD_CLIENT_ID,
  secret: BLIZZARD_CLIENT_SECRET,
  origin: 'us', // optional
  locale: 'en_US' // optional
  token: '' // optional
});
```

`v4`

```js
import { createInstance } from 'blizzard.js/wow'

const wow = await createInstance({
  key: BLIZZARD_CLIENT_ID,
  secret: BLIZZARD_CLIENT_SECRET,
  origin: 'us', // optional
  locale: 'en_US' // optional
  token: '' // optional
})
```

```js
const blizzard = require('blizzard.js')

const wow = await blizzard.wow.createInstance({
  key: BLIZZARD_CLIENT_ID,
  secret: BLIZZARD_CLIENT_SECRET,
  origin: 'us', // optional
  locale: 'en_US' // optional
  token: '' // optional
})
```

---

### Calling API methods

All API methods continue to accept all parameters that the client accepts, in cases where you may wish to use different values to the default: `key`, `secret`, `origin`, `locale`, `token`.

**Note that protected profile requests for World of Warcraft require a _user_ `token` to be provided.**

The return value of methods is still a Promise that resolves to an `AxiosResponse` object.

With `async`/`await`

```js
const character = await wow.characterProfile({ realm: '...', name: '...' })

console.log(character.data)
```

With `then`/`catch`

```js
wow.characterProfile({ realm: '...', name: '...' }).then((response) => {
  console.log(response.data)
})
```
