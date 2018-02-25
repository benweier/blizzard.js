# Blizzard.js API Reference

A promise-based Node.js library for the Blizzard Community Platform API.

### `.initialize()`

Return an initialized *Blizzard.js* instance with default options.

Your Battle.net API key is required for all API calls so it must be passed to *Blizzard.js* with `.initialize()` or with each request.

A user access token is only required for account level requests. A default access token can be passed to `.initialize()` (for a browser environment working with a single user account), or to each request (for a server environment working with multiple user accounts).

Other parameters include `origin` and `locale`. When passed to `initialize()` they are no longer required with each request unless you want to override the default (e.g. when setting US as the default region but you want to request from the EU region instead).

*Blizzard.js* uses [axios](https://github.com/mzabriskie/axios) internally and requests return fetch promises from axios. The `instance` argument is an axios-compatible default configuration object.

**Parameters**

-   `args` Object
    -   `args.apikey` String - Your private Blizzard API key
    -   `args.access_token` [String] - A default user access token
    -   `args.origin` [String] - The default API region
    -   `args.locale` [String] - The default API locale
-   `instance` [Object] - An axios instance configuration object

**Example**

```js
const blizzard = require('blizzard.js').initialize({ apikey: BATTLENET_API_KEY });
```

## Account

### `.account.user()`

Fetch an authenticated user's account `id` and `battletag`.

**Parameters**

-   `args` Object
    -   `args.access_token` String - The user access token
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.account.user({ access_token: USER_ACCESS_TOKEN, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.account.wow()`

Fetch an authenticated user's World of Warcraft character list.

**Parameters**

-   `args` Object
    -   `args.access_token` String - The user access token
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.account.wow({ access_token: USER_ACCESS_TOKEN, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.account.sc2()`

Fetch an authenticated user's Starcraft 2 profile.

**Parameters**

-   `args` Object
    -   `args.access_token` String - The user access token
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.account.sc2({ access_token: USER_ACCESS_TOKEN, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

## Data

The Blizzard World of Warcraft Game Data APIs provide access to the following resources:

- Connected Realm API
- Realm API
- Region API
- Mythic Keystone Leaderboard API
- WoW Token API

These APIs require a valid application access token which is obtained through the `.credentials()` method, while an issued access token can be checked through the `.validate()` method.

### `.data.credentials()`

Fetch an application access token.

**Parameters**

-   `args` Object
    -   `args.id` String - Your application client ID
    -   `args.secret` String - Your application client secret
    -   `args.origin` String - The region key

**Example**

```javascript
blizzard.data.credentials({id: process.env.BLIZZARD_API_ID, secret: process.env.BLIZZARD_API_SECRET, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.data.validate()`

Check the details of an application access token.

**Parameters**

-   `args` Object
    -   `args.origin` String - The region key
    -   `args.token` String - The access token to be checked

**Example**

```javascript
blizzard.data.validate({ origin: 'us', token: APPLICATION_ACCESS_TOKEN })
  .then(response => {
    console.log(response.data);
  });
```

### `.data.connectedRealm()`

Fetch the index of connected realms or a single connected realm by ID.

**Parameters**

-   `args` Object
    -   `args.access_token` String - The application access token
    -   `args.namespace` String - The game data namespace
    -   `args.realm` [Number] - The connected realm ID for a single realm
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.data.connectedRealm({ access_token: APPLICATION_ACCESS_TOKEN, namespace: 'dynamic-us', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.data.connectedRealm({ access_token: APPLICATION_ACCESS_TOKEN, namespace: 'dynamic-us', realm: 11, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.data.mythicLeaderboard()`

Get an index of Mythic Keystone Leaderboards for a connected realm or weekly Mythic Keystone Leaderboard by period.

**Parameters**

-   `args` Object
    -   `args.access_token` String - The application access token
    -   `args.namespace` String - The game data namespace
    -   `args.realm` [Number] - The realm ID
    -   `args.dungeon` [Number] - The dungeon ID
    -   `args.period` [Number] - The mythic leaderboard period
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.data.mythicLeaderboard({ access_token: APPLICATION_ACCESS_TOKEN, namespace: 'dynamic-us', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.data.mythicLeaderboard({ access_token: APPLICATION_ACCESS_TOKEN, namespace: 'dynamic-us', relam: 11, dungeon: 197, period: 602 origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.data.mythicChallengeMode()`

Get current period information about the Mythic Challenge Mode relevant to Mythic Keystone Leaderboards.

**Parameters**

-   `args` Object
    -   `args.access_token` String - The application access token
    -   `args.namespace` String - The game data namespace
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.data.mythicChallengeMode({ access_token: APPLICATION_ACCESS_TOKEN, namespace: 'dynamic-us', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.data.realm()`

Get an index of realms or a single realm by slug or ID.

**Parameters**

-   `args` Object
    -   `args.access_token` String - The application access token
    -   `args.namespace` String - The game data namespace
    -   `args.realm` [String|Number] - The connected realm slug or ID
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.data.realm({ access_token: APPLICATION_ACCESS_TOKEN, namespace: 'dynamic-us', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.data.realm({ access_token: APPLICATION_ACCESS_TOKEN, namespace: 'dynamic-us', realm: 11, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.data.region()`

Get an index of regions or a single region by ID.

**Parameters**

-   `args` Object
    -   `args.access_token` String - The application access token
    -   `args.namespace` String - The game data namespace
    -   `args.region` [Number] - The region ID
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.data.region({ access_token: APPLICATION_ACCESS_TOKEN, namespace: 'dynamic-us', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.data.region({ access_token: APPLICATION_ACCESS_TOKEN, namespace: 'dynamic-us', region: 1, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.data.token()`

Get the World of Warcraft token index.

**Parameters**

-   `args` Object
    -   `args.access_token` String - The application access token
    -   `args.namespace` String - The game data namespace
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.data.token({ access_token: APPLICATION_ACCESS_TOKEN, namespace: 'dynamic-us', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

## Diablo 3

### `.d3.data()`

Fetch a Diablo 3 data resource.

**Parameters**

-   `key` String - The data resource key: `follower`, `artisan`, `item`
-   `args` Object
    -   `args.id` String - The data resource ID
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.d3.data('follower', { id: 'templar', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.d3.data('artisan', { id: 'mystic', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.d3.era()`

Fetch a Diablo 3 era.

**Parameters**

-   `args` Object
    -   `args.id` [Number] - The era ID
    -   `args.access_token` [String] - A user access token
    -   `args.leaderboard` [String] - The era leaderboard key
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.d3.era({ origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.d3.era({ id: 5, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.d3.era({ id: 5, leaderboard: 'rift-barbarian', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.d3.profile()`

Fetch a Diablo 3 profile.

**Parameters**

-   `args` Object
    -   `args.tag` String - The user battletag
    -   `args.hero` [Number] - The hero ID
    -   `args.itemTypes` [String] - The hero items to fetch: `items`, `follower-items`
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.d3.profile({ tag: 'skt#1884', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.d3.profile({ tag: 'skt#1884', hero: 287801, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.d3.season()`

Fetch a Diablo 3 season.

**Parameters**

-   `args` Object
    -   `args.id` [String] - The season ID
    -   `args.leaderboard` [String] - The season leaderboard key
    -   `args.access_token` [String] - A user access token
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.d3.season({ origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.d3.season({ id: 5, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.d3.season({ id: 5, leaderboard: 'rift-barbarian', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

## Starcraft 2

### `.sc2.data()`

Fetch a Starcraft 2 data resource.

**Parameters**

-   `key` String - The data resource key: `achievements`, `rewards`
-   `args` Object
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.sc2.data('achievements', { origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.sc2.data('rewards', { origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.sc2.ladder()`

Fetch a Starcraft 2 ladder.

**Parameters**

-   `args` Object
    -   `args.id` Number - The ladder ID
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.sc2.ladder({ id: 194163, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.sc2.profile()`

Fetch a Starcraft 2 player profile.

**Parameters**

-   `key` String - The profile resource key: `profile`, `ladders`, `matches`
-   `args` Object
    -   `args.id` Number - The profile ID
    -   `args.name` String - The profile name
    -   `args.region` [String] - The profile region (optional, default `1`)
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.sc2.profile('profile', { id: 2137104, name: 'skt', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.sc2.profile('ladders', { id: 2137104, name: 'skt', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.sc2.profile('matches', { id: 2137104, name: 'skt', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

## World of Warcraft

### `.wow.achievement()`

Fetch an achievement.

**Parameters**

-   `args` Object
    -   `args.id` Number - The achievement ID
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.wow.achievement({ id: 2144, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.wow.auction()`

Fetch auction data.

**Parameters**

-   `args` Object
    -   `args.realm` String - The slugified realm name
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.wow.auction({ realm: 'proudmoore', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.wow.boss()`

Fetch boss data.

**Parameters**

-   `args` Object
    -   `args.id` [Number] - The boss ID
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.wow.boss({ origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.wow.boss({ id: 24664, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.wow.challenge()`

Fetch challenge data.

**Parameters**

-   `args` Object
    -   `args.realm` [String] - The slugified realm name
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.wow.challenge({ origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.wow.challenge({ realm: 'medivh', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.wow.character()`

Fetch character data.

**Parameters**

-   `keys` String|Array - One or more character resource keys: `profile`, `achievements`, `appearance`, `feed`, `guild`, `hunterPets`, `items`, `mounts`, `professions`, `progression`, `pvp`, `quests`, `reputation`, `statistics`, `stats`, `talents`, `titles`, `audit`
-   `args` Object
    -   `args.name` String - The character name
    -   `args.realm` String - The slugified realm name
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.wow.character(['profile', 'achievements'], { realm: 'proudmoore', name: 'kailee', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.wow.character(['pets', 'petSlots'], { realm: 'amanthul', name: 'charni', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.wow.data()`

Fetch a WoW data resource.

**Parameters**

-   `key` String - The data resource key: `battlegroups`, `character-achievements`, `character-classes`, `character-races`, `guild-achievements`, `guild-perks`, `guild-rewards`, `item-classes, `pet-types`, `talents`
-   `args` Object
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.wow.data('character-races', { origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.wow.data('character-classes', { origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.wow.guild()`

Fetch guild data.

**Parameters**

-   `keys` String|Array - One or more guild resource keys: `profile`, `achievements`, `challenge`, `members`, `news`
-   `args` Object
    -   `args.name` String - The guild name
    -   `args.realm` String - The slugified realm name
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.wow.guild(['profile', 'members'], { realm: 'amanthul', name: 'blackwolf', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.wow.item()`

Fetch item data.

**Parameters**

-   `args` Object
    -   `args.id` Number - The item or set ID
    -   `args.set` [Boolean] - Whether this is an item set request or not
    -   `args.bonuses` [Array] - A list of bonuses to apply to the item
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.wow.item({ id: 18803, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.wow.mount()`

Fetch mount data.

**Parameters**

-   `args` Object
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.wow.mount({ origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.wow.pet()`

Fetch pet data.

**Parameters**

-   `key` String - The pet resource key: `list`, `ability`, `species`, `stats`
-   `args` Object
    -   `args.id` [String] - The pet resource ID
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.wow.pet('list', { origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.wow.pet('ability', { id: 640, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.wow.pet('species', { id: 258, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.wow.pvp()`

Fetch pvp data.

**Parameters**

-   `args` Object
    -   `args.bracket` String - The pvp bracket key
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.wow.pvp({ bracket: '3v3', origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.wow.quest()`

Fetch quest data.

**Parameters**

-   `args` Object
    -   `args.id` Number - The quest ID
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.wow.quest({ id: 13146, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.wow.realms()`

Fetch realm data.

**Parameters**

-   `args` Object
    -   `args.realms` [String|Array] - One or more slugified realm names
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.wow.realms({ origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.wow.realms({ realms: ['blackrock', 'proudmoore'], origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.wow.recipe()`

Fetch recipe data.

**Parameters**

-   `args` Object
    -   `args.id` Number - The recipe ID
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.wow.recipe({ id: 33994, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.wow.spell()`

Fetch spell data.

**Parameters**

-   `args` Object
    -   `args.id` Number - The spell ID
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.wow.spell({ id: 8056, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

### `.wow.zone()`

Fetch zone data.

**Parameters**

-   `args` Object
    -   `args.id` Number - The zone ID
    -   `args.origin` [String] - The region key
    -   `args.locale` [String] - A locale code for this region
-   `instance` [Object] - An axios instance configuration object

**Example**

```javascript
blizzard.wow.zone({ origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```

```javascript
blizzard.wow.zone({ id: 4131, origin: 'us' })
  .then(response => {
    console.log(response.data);
  });
```
