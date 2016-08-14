# Battle.net API
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/benweier/battlenet-api?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A Node.JS library for the Battle.net Community Platform API.

_battlenet-api_ is my attempt to provide a simple, easy-to-use interface that is up-to-date and well-documented for access to all available Battle.net Community Platform API methods. You are free to use it where and how you like as the library doesn't perform any content checking, rate limiting, or Terms of Service enforcement.

# Install

Add `battlenet-api` to your `package.json` file and install with:

```
npm install
```

Or add and install it in a single step:
```
npm install battlenet-api --save
```

# How to use

Step 1: `require()` the Battle.net API within your application:

```javascript
var bnet = require('battlenet-api')();
```

Step 2: Call the API methods to request data:

```javascript
bnet.wow.character.profile(parameters, [config,] callback);
```

Step 3: ???

Step 4: Profit.

## Battle.net API Key

Your private Battle.net API key must be present in order to get a valid Battle.net API response. There are several ways to include it in the request:

**As an optional parameter with each method**
```javascript
bnet.wow.character.profile(parameters, {apikey: your_api_key}, callback);
```

**As an optional parameter with require**
```javascript
var bnet = require('battlenet-api')(your_api_key);
```

**As a system environment variable**
```
$ sudo BNET_ID=[your_api_key] node server.js
```

While all three ways of using the API key can be used together, the Method usage will override the Require usage which will override the Environment Variable usage. Use the most appropriate way of setting the API key that suits your needs. Please see the documentation at the [Blizzard Developer Portal](https://dev.battle.net) to obtain your own Battle.net API key.

# Documentation

Each API method accepts a parameters object, an _optional_ configuration object, and a callback function to execute once the request has completed. The available request parameters for each method are explained in the [Overview](#overview).

```javascript
bnet.wow.character.profile(parameters, [config,] callback);
```

`parameters`: _Required_. The individual per-method parameters can be found in the overview. **ALL** API methods will accept an `origin` and `locale`.
* `origin` _Required_. This indicates which regional API endpoint to use and will match the region in which the user plays. The supported origins depends on the game you are requesting data for.
* `locale` _Optional_. This localizes the returned results to the specified language. The supported locales depend on which `origin` is used, and when no `locale` is supplied the Battle.net API will default to the primary language of that region.

`config`: _Optional_. Compatible with the [request](https://www.npmjs.com/package/request) module. Accepts the following configuration options:
* `apikey` Your Battle.net API key is set here if not supplied by the Require or Environment Variable.
* `timeout` Defaults to 10000.
* `gzip` Defaults to true.
* `maxRedirects` Defaults to 10.
* `followRedirect` Defaults to true.
* `tunnel`
* `proxy`
* `proxyHeaderWhiteList`
* `proxyHeaderExclusiveList`

`callback` _Required_. The callback function accepts two arguments `error` and `response`.
* `error` is only applicable when there's a connection issue to the API. Otherwise `null`.
* `body` is the request response body parsed as JSON. If a request is successful this value can still return API errors such as 'Character not found' or 'Account forbidden'.
* `res` is the response information such as `headers` and `statusCode`.

A fully-formed request will look something like this:
```javascript
bnet.wow.character.guild({
  origin: 'us',
  realm: 'amanthul',
  name: 'charni'
}, {
  apikey: BNET_ID
}, function(err, body, res) {
  console.log(body);
});
```

### Encoding

All API paths are passed through `encodeURI()` to product URL-safe values. e.g. Character names like "Légōlâs" result in "L%C3%A9g%C5%8Dl%C3%A2s".
Note that WoW realm slugs should contain no special characters requiring encoding. e.g. "Aman'thul" is slugified to "amanthul". Use the Realm Status API to fetch the full realm list and their associated slugs.

<a name="overview"></a>
## Overview

### [User Account](#account)

* [ID](#account-user)
* [BattleTag](#account-battletag)
* [World of Warcraft OAuth Profile](#account-wow)
* [Starcraft II OAuth Profile](#account-sc2)

### [World of Warcraft](#wow)

* [Achievement](#wow-achievement)
* [Auction](#wow-auction)
* [Battle Pet](#wow-battle-pet)
  * [Ability](#wow-battle-pet-ability)
  * [Species](#wow-battle-pet-species)
  * [Stats](#wow-battle-pet-stats)
* [Boss](#wow-boss)
  * [Master List](#wow-boss-master-list)
  * [Boss](#wow-boss-boss)
* [Challenge](#wow-challenge)
  * [Realm Leaderboard](#wow-challenge-realm-leaderboard)
  * [Region Leaderboard](#wow-challenge-region-leaderboard)
* [Character](#wow-character)
  * [Aggregate](#character-aggregate)
  * [Achievements](#wow-character-achievements)
  * [Appearance](#wow-character-appearance)
  * [Audit](#wow-character-audit)
  * [Feed](#wow-character-feed)
  * [Guild](#wow-character-guild)
  * [Hunter Pets](#wow-character-hunter-pets)
  * [Items](#wow-character-items)
  * [Mounts](#wow-character-mounts)
  * [Pets](#wow-character-pets)
  * [Pet Slots](#wow-character-pet-slots)
  * [Profile](#wow-character-profile)
  * [Progression](#wow-character-progression)
  * [PVP](#wow-character-pvp)
  * [Quests](#wow-character-quests)
  * [Reputation](#wow-character-reputation)
  * [Stats](#wow-character-stats)
  * [Statistics](#wow-character-statistics)
  * [Talents](#wow-character-talents)
  * [Titles](#wow-character-titles)
* [Data Resources](#wow-data)
  * [Battlegroups](#wow-data-battlegroups)
  * [Character Achievements](#wow-data-character-achievements)
  * [Character Classes](#wow-data-character-classes)
  * [Character Races](#wow-data-character-races)
  * [Guild Achievements](#wow-data-guild-achievements)
  * [Guild Perks](#wow-data-guild-perks)
  * [Guild Rewards](#wow-data-guild-rewards)
  * [Item Classes](#wow-data-item-classes)
  * [Pet Types](#wow-data-pet-types)
  * [Talents](#wow-data-talents)
* [Guild](#wow-guild)
  * [Aggregate](#wow-guild-aggregate)
  * [Achievements](#wow-guild-achievements)
  * [Challenge](#wow-guild-challenge)
  * [Members](#wow-guild-members)
  * [News](#wow-guild-news)
  * [Profile](#wow-guild-profile)
* [Item](#wow-item)
  * [Item](#wow-item-item)
  * [Item Set](#wow-item-item-set)
* [Mount](#wow-mount)
* [PVP](#wow-pvp)
  * [Leaderboards](#wow-pvp-leaderboards)
* [Quest](#wow-quest)
* [Realm Status](#wow-realm-status)
* [Recipe](#wow-recipe)
* [Spell](#wow-spell)

### [Starcraft 2](#sc2)

* [Data Resources](#sc2-data)
  * [Achievements](#sc2-data-achievements)
  * [Rewards](#sc2-data-rewards)
* [Ladder](#sc2-ladder)
* [Profile](#sc2-profile)
  * [Profile](#sc2-profile-profile)
  * [Ladders](#sc2-profile-ladders)
  * [Match History](#sc2-profile-match-history)

### [Diablo 3](#d3)

* [Seasons](#d3-season)
  * [Index](#d3-season-index)
  * [Season](#d3-season-season)
  * [Leaderboard](#d3-season-leaderboard)
* [Eras](#d3-era)
  * [Index](#d3-era-index)
  * [Era](#d3-era-era)
  * [Leaderboard](#d3-era-leaderboard)
* [Data Resources](#d3-data)
  * [Artisan](#d3-data-artisan)
  * [Follower](#d3-data-follower)
  * [Item](#d3-data-item)
* [Profile](#d3-profile)
  * [Career](#d3-profile-career)
  * [Hero](#d3-profile-hero)

---

<a name="account"></a>
## User Account

The User Account API methods are available via the `account` object of _battlenet-api_.

All User Account requests take `access_token` as a request parameter. Access tokens are generated with OAuth 2.0 and are valid for 30 days. How you implement OAuth is up to you, although I recommend checking out Blizzard's own [passport-bnet](https://www.npmjs.com/package/passport-bnet) package and reading the [Using OAuth](https://dev.battle.net/docs/read/oauth) article for more details.

The supported origins for the Account API are: `us`, `eu`, `kr`, `tw`, and `cn`.

---

<a name="account-user"></a>
### User ID

Returns the authenticated user's account ID and BattleTag.

*Usage*

```javascript
bnet.account.user({origin: 'us', access_token: users_access_token}, callback);
```

---

<a name="account-wow"></a>
### World of Warcraft OAuth Profile

Returns data for an authenticated user's World of Warcraft Profile.

*Usage*

```javascript
bnet.account.wow({origin: 'us', access_token: users_access_token}, callback);
```

---

<a name="account-sc2"></a>
### Starcraft II OAuth Profile

Returns data for an authenticated user's Starcraft III Profile.

*Usage*

```javascript
bnet.account.sc2({origin: 'us', access_token: users_access_token}, callback);
```

---

<a name="wow"></a>
## World of Warcraft

The World of Warcraft API methods are available via the `wow` object of _battlenet-api_.

```javascript
var wow = bnet.wow;
```

The supported origins and locales for the World of Warcraft API are:

Origin | Locales
------ | -------
`us` | `en_US`, `es_MX`, `pt_BR`
`eu` | `en_GB`, `es_ES`, `fr_FR`, `ru_RU`, `de_DE`, `pl_PL`, `pt_PT`, `it_IT`
`kr` | `ko_KR`
`tw` | `zh_TW`
`cn` | `zh_CN`

---

<a name="wow-achievement"></a>
### Achievement

*Parameters*

`id` the unique achievement ID.

*Usage*

```javascript
bnet.wow.achievement({origin: 'us', id: 2144}, callback);
```

---

<a name="wow-auction"></a>
### Auction

*Parameters*

`realm` the slugified realm name.

*Usage*

```javascript
bnet.wow.auction({origin: 'us', realm: 'amanthul'}, callback);
```

---

<a name="wow-battle-pet"></a>
### Battle Pet

<a name="wow-battle-pet-abilities"></a>
#### Abilities

*Parameters*

`id` the unique ID of the battle pet ability.

*Usage*

```javascript
bnet.wow.battlePet.ability({origin: 'us', id: 640}, callback);
```

<a name="wow-battle-pet-species"></a>
#### Species

*Parameters*

`id` the unique ID of the battle pet species.

*Usage*

```javascript
bnet.wow.battlePet.species({origin: 'us', id: 258}, callback);
```

<a name="wow-battle-pet-stats"></a>
#### Stats

*Parameters*

`id` the unique ID of the battle pet species.

`fields` an object containing the battle pet `level`, `breedId`, and `qualityId`

*Usage*

```javascript
bnet.wow.battlePet.stats({origin: 'us', id: 258, fields: { level: 25, breedId: 5, qualityId: 4 }}, callback);
```

---

<a name="wow-boss"></a>
### Boss

<a name="wow-boss-master-list"></a>
#### Master List

Return the Boss master list.

*Usage*

```javascript
bnet.wow.boss.masterList({origin: 'us'}, callback);
```

<a name="wow-boss-boss"></a>
#### Boss

Returns an individual Boss specified by id.

*Parameters*

`id` The boss id.

*Usage*

```javascript
bnet.wow.boss.boss({origin: 'us', id: 24723}, callback);
```

---

<a name="wow-challenge"></a>
### Challenge

<a name="wow-challenge-realm-leaderboard"></a>
#### Realm Leaderboard

*Parameters*

`realm` the slugified realm name.

*Usage*

```javascript
bnet.wow.challenge.realmLeaderboard({origin: 'us', realm: 'amanthul'}, callback);
```

<a name="wow-challenge-region-leaderboard"></a>
#### Region Leaderboard

*Usage*

```javascript
bnet.wow.challenge.regionLeaderboard({origin: 'us'}, callback);
```

---

<a name="wow-character"></a>
### Character

All World of Warcraft character requests require the following parameters:

`realm` the slugified realm of the character.

`name` the name of the character.

<a name="wow-character-profile"></a>
#### Profile

Returns basic profile data about the character.

*Usage*

```javascript
bnet.wow.character.profile({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-achievements"></a>
#### Achievements

Returns the achievement data of the character.

*Usage*

```javascript
bnet.wow.character.achievements({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-appearance"></a>
#### Appearance

Returns the appearance data of the character.

*Usage*

```javascript
bnet.wow.character.appearance({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-feed"></a>
#### Feed

Returns the character activity feed.

*Usage*

```javascript
bnet.wow.character.feed({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-guild"></a>
#### Guild

Returns the guild data of the character.

*Usage*

```javascript
bnet.wow.character.guild({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-hunter-pets"></a>
#### Hunter Pets

Returns the hunter pet data of the character (where applicable).

*Usage*

```javascript
bnet.wow.character.hunterPets({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-items"></a>
#### Items

Returns the item data of the character.

*Usage*

```javascript
bnet.wow.character.items({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-mounts"></a>
#### Mounts

Returns the mount data of the character.

*Usage*

```javascript
bnet.wow.character.mounts({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-pets"></a>
#### Pets

Returns the pet data of the character.

*Usage*

```javascript
bnet.wow.character.pets({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-pet-slots"></a>
#### Pet Slots

Returns the pet slots data of the character.

*Usage*

```javascript
bnet.wow.character.petSlots({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-progression"></a>
#### Progression

Returns the progression data of the character.

*Usage*

```javascript
bnet.wow.character.progression({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-pvp"></a>
#### PVP

Returns the PVP data of the character.

*Usage*

```javascript
bnet.wow.character.pvp({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-quests"></a>
#### Quests

Returns the quest data of the character.

*Usage*

```javascript
bnet.wow.character.quests({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-reputation"></a>
#### Reputation

Returns the reputation data of the character.

*Usage*

```javascript
bnet.wow.character.reputation({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-stats"></a>
#### Stats

Returns the character sheet stats of the character like Strength and Agility. Note the difference between the `stats` and `statistics` methods.

*Usage*

```javascript
bnet.wow.character.stats({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-statistics"></a>
#### Statistics

Returns the gameplay statistics of the character like 'Used X bandages' etc. Note the difference between the `stats` and `statistics` methods.

*Usage*

```javascript
bnet.wow.character.statistics({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-talents"></a>
#### Talents

Returns the talent data of the character.

*Usage*

```javascript
bnet.wow.character.talents({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-titles"></a>
#### Titles

Returns the title data of the character.

*Usage*

```javascript
bnet.wow.character.titles({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-audit"></a>
#### Audit

Returns an audit of the character's equipment.

*Usage*

```javascript
bnet.wow.character.audit({origin: 'us', realm: 'amanthul', name: 'charni'}, callback);
```

<a name="wow-character-aggregate"></a>
#### Aggregate

Returns the specified character fields aggregated in a single request.

*Parameters*

`fields` an array of one or more character fields.

*Usage*

```javascript
bnet.wow.character.aggregate({origin: 'us', realm: 'amanthul', name: 'charni', fields: ['pets', 'petSlots']}, callback);
```

---

<a name="wow-data"></a>
### Data Resources

<a name="wow-data-battlegroups"></a>
#### Battlegroups

*Usage*

```javascript
bnet.wow.data.battlegroups({origin: 'us'}, callback);
```

<a name="wow-data-character-achievements"></a>
#### Character Achievements

*Usage*

```javascript
bnet.wow.data.characterAchievements({origin: 'us'}, callback);
```

<a name="wow-data-character-classes"></a>
#### Character Classes

*Usage*

```javascript
bnet.wow.data.characterClasses({origin: 'us'}, callback);
```

<a name="wow-data-character-races"></a>
#### Character Races

*Usage*

```javascript
bnet.wow.data.characterRaces({origin: 'us'}, callback);
```

<a name="wow-data-guild-achievements"></a>
#### Guild Achievements

*Usage*

```javascript
bnet.wow.data.guildAchievements({origin: 'us'}, callback);
```

<a name="wow-data-guild-perks"></a>
#### Guild Perks

*Usage*

```javascript
bnet.wow.data.guildPerks({origin: 'us'}, callback);
```

<a name="wow-data-guild-rewards"></a>
#### Guild Rewards

*Usage*

```javascript
bnet.wow.data.guildRewards({origin: 'us'}, callback);
```

<a name="wow-data-item-classes"></a>
#### Item Classes

*Usage*

```javascript
bnet.wow.data.itemClasses({origin: 'us'}, callback);
```

<a name="wow-data-pet-types"></a>
#### Pet Types

*Usage*

```javascript
bnet.wow.data.petTypes({origin: 'us'}, callback);
```

<a name="wow-data-talents"></a>
#### Talents

*Usage*

```javascript
bnet.wow.data.talents({origin: 'us'}, callback);
```

---

<a name="wow-item"></a>
### Item

<a name="wow-item-item"></a>
#### Item

Returns the item data of the specified item ID.

*Parameters*

`id` the unique item ID.

`context` _optional_ the context used to select a specific version of an item.

`bonusList` _optional_ an array of bonus list of IDs applied to the item.

*Usage*

```javascript
bnet.wow.item.item({origin: 'us', id: 18803}, callback);
```

<a name="wow-item-item-set"></a>
#### Item Set

Returns the item set data of the specified set ID.

*Parameters*

`id` the unique item set ID.

*Usage*

```javascript
bnet.wow.item.set({origin: 'us', id: 1060}, callback);
```

---

<a name="wow-mount"></a>
### Mount

Returns the Mount master list.

*Usage*

```javascript
bnet.wow.mount({origin: 'us'}, callback);
```

---

<a name="wow-guild"></a>
### Guild

All World of Warcraft guild requests require the following parameters:

`realm` the slugified realm of the guild.

`name` the name of the guild.

<a name="wow-guild-aggregate"></a>
#### Aggregate

Returns the specified guild fields aggregated in a single request.

*Parameters*

`fields` an array of one or more guild fields.

*Usage*

```javascript
bnet.wow.guild.aggregate({origin: 'us', realm: 'amanthul', name: 'blackwolf', fields: ['members', 'achievements']}, callback);
```

<a name="wow-guild-achievements"></a>
#### Achievements

Returns the achievement data of the guild.

*Usage*

```javascript
bnet.wow.guild.achievements({origin: 'us', realm: 'amanthul', name: 'blackwolf'}, callback);
```

<a name="wow-guild-challenge"></a>
#### Challenge

Returns the challenge data of the guild.

*Usage*

```javascript
bnet.wow.guild.challenge({origin: 'us', realm: 'amanthul', name: 'blackwolf'}, callback);
```

<a name="wow-guild-members"></a>
#### Members

Returns the members data of the guild.

*Usage*

```javascript
bnet.wow.guild.members({origin: 'us', realm: 'amanthul', name: 'blackwolf'}, callback);
```

<a name="wow-guild-news"></a>
#### News

Returns the news data of the guild.

*Usage*

```javascript
bnet.wow.guild.news({origin: 'us', realm: 'amanthul', name: 'blackwolf'}, callback);
```

<a name="wow-guild-profile"></a>
#### Profile

Returns basic profile data of the guild.

*Usage*

```javascript
bnet.wow.guild.profile({origin: 'us', realm: 'amanthul', name: 'blackwolf'}, callback);
```

---

<a name="wow-pvp"></a>
### PVP

<a name="wow-pvp-leaderboards"></a>
#### Leaderboards

*Parameters*

`bracket` [`2v2`, `3v3`, `5v5`, `rbg`]

*Usage*

```javascript
bnet.wow.pvp.leaderboards({origin: 'us', bracket: '2v2'}, callback);
```

---

<a name="wow-quest"></a>
### Quest

*Parameters*

`id` the unique quest ID.

*Usage*

```javascript
bnet.wow.quest({origin: 'us', id: 13146}, callback);
```

---

<a name="wow-realm-status"></a>
### Realm Status

*Parameters*

`realms` [optional] an array of one or more realms to limit.

*Usage*

All realms

```javascript
bnet.wow.realmStatus({origin: 'us'}, callback);
```

Selected realms

```javascript
bnet.wow.realmStatus({origin: 'us', realms: ['proudmoore', 'blackrock']}, callback);
```

---

<a name="wow-recipe"></a>
### Recipe

*Parameters*

`id` the unique recipe ID.

*Usage*

```javascript
bnet.wow.recipe({origin: 'us', id: 33994}, callback);
```

---

<a name="wow-spell"></a>
### Spell

*Parameters*

`id` the unique spell ID.

*Usage*

```javascript
bnet.wow.spell({origin: 'us', id: 8056}, callback);
```

---

<a name="sc2"></a>
## Starcraft 2

The Starcraft 2 API methods are available via the `sc2` object of _battlenet-api_.

```javascript
var sc2 = bnet.sc2;
```

The supported origins and locales for the Starcraft 2 API are:

Origin | Locales
------ | -------
`us` | `en_US`, `es_MX`, `pt_BR`
`eu` | `en_GB`, `es_ES`, `fr_FR`, `ru_RU`, `de_DE`, `pl_PL`, `pt_PT`, `it_IT`
`sea` | `en_US`
`kr` | `ko_KR`
`tw` | `zh_TW`
`cn` | `zh_CN`

---

<a name="sc2-profile"></a>
### Profile

All Starcraft 2 profile requests require the following parameters.

`id` the unique player ID.

`region` the player's region ID.

`name` the player's profile name.

<a name="sc2-profile-profile"></a>
#### Profile

Returns basic profile data for the specified player.

*Usage*

```javascript
bnet.sc2.profile.profile({origin: 'us', id: 2137104, region: 1, name: 'skt'}, callback);
```

<a name="sc2-profile-ladders"></a>
#### Ladders

Returns ladder data for the specified player.

*Usage*

```javascript
bnet.sc2.profile.ladders({origin: 'us', id: 2137104, region: 1, name: 'skt'}, callback);
```

<a name="sc2-profile-match-history"></a>
#### Match history

Returns match history data for the specified player.

*Usage*

```javascript
bnet.sc2.profile.matchHistory({origin: 'us', id: 2137104, region: 1, name: 'skt'}, callback);
```

---

<a name="sc2-ladder"></a>
### Ladder

*Parameters*

`id` the unique ladder ID.

*Usage*

```javascript
bnet.sc2.ladder({origin: 'us', id: 655}, callback);
```

---

<a name="sc2-data"></a>
### Data Resources

<a name="sc2-data-achievements"></a>
#### Achievements

*Usage*

```javascript
bnet.sc2.data.achievements({origin: 'us'}, callback);
```

<a name="sc2-data-rewards"></a>
#### Rewards

*Usage*

```javascript
bnet.sc2.data.rewards({origin: 'us'}, callback);
```

---

<a name="d3"></a>
## Diablo 3

The Diablo 3 API methods are available via the `d3` object of _battlenet-api_.

```javascript
var d3 = bnet.d3;
```

The supported origins and locales for the Diablo 3 API are:

Origin | Locales
------ | -------
`us` | `en_US`, `es_MX`, `pt_BR`
`eu` | `en_GB`, `es_ES`, `fr_FR`, `ru_RU`, `de_DE`, `pl_PL`, `pt_PT`, `it_IT`
`kr` | `ko_KR`
`tw` | `zh_TW`
`cn` | `zh_CN`

---

<a name="d3-season"></a>
### Season

<a name="d3-season-index"></a>
#### Index

Returns base information about available seasons.

*Usage*

```javascript
bnet.d3.season.index({origin: 'us'}, callback);
```

<a name="d3-season-season"></a>
#### Season

Returns a leaderboard list for a particular season.

*Parameters*

`season` the season ID.

*Usage*

```javascript
bnet.d3.season.season({origin: 'us', season: 1}, callback);
```

<a name="d3-season-leaderboard"></a>
#### Leaderboard

Returns a leaderboard.

*Parameters*

`season` the season ID.

`leaderboard` the leaderboard to lookup, found in the Season API call.

*Usage*

```javascript
bnet.d3.season.leaderboard({origin: 'us', season: 1, leaderboard: 'achievement-points'}, callback);
```

---

<a name="d3-era"></a>
### Season

<a name="d3-era-index"></a>
#### Index

Returns base information about available eras.

*Usage*

```javascript
bnet.d3.era.index({origin: 'us'}, callback);
```

<a name="d3-era-era"></a>
#### Era

Returns a leaderboard list for a particular era.

*Parameters*

`era` the era ID.

*Usage*

```javascript
bnet.d3.era.era({origin: 'us', season: 1}, callback);
```

<a name="d3-era-leaderboard"></a>
#### Leaderboard

Returns a leaderboard.

*Parameters*

`era` the era ID.

`leaderboard` the leaderboard to lookup, found in the Era API call.

*Usage*

```javascript
bnet.d3.era.leaderboard({origin: 'us', season: 1, leaderboard: 'rift-barbarian'}, callback);
```

---

<a name="d3-data"></a>
### Data Resources

<a name="d3-data-artisan"></a>
#### Artisan

*Parameters*

`artisan` the name of the artisan [`blacksmith`, `jeweller`, `mystic`]

*Usage*

```javascript
bnet.d3.data.artisan({origin: 'us', artisan: 'blacksmith'}, callback);
```

<a name="d3-data-follower"></a>
#### Follower

*Parameters*

`follower` the name of the follower [`templar`, `enchantress`, `scoundrel`]

*Usage*

```javascript
bnet.d3.data.follower({origin: 'us', follower: 'blacksmith'}, callback);
```

<a name="d3-data-item"></a>
#### Item

*Parameters*

`item` the item data string.

*Usage*

```javascript
bnet.d3.data.item({origin: 'us', item: 'CrABCL-oudQGEgcIBBWZWjYNHWU61OAdyg3pEx07J28kHevi5AUd8dNq1TCLAjj_AkAAUBJYBGD_AmorCgwIABDX3bKmiICA4DESGwi5u5abChIHCAQVIpaumDCPAjgAQAFYBJABAGorCgwIABCl3rKmiICA4DESGwiR9M-gAhIHCAQVIpaumDCLAjgAQAFYBJABAIABRqUBOydvJK0Bj5DKULUBAXBvArgB9aCdsg7AAQEYsuqy0wFQAFgC'} callback);
```

---

<a name="d3-profile"></a>
### Profile

<a name="d3-profile-career"></a>
#### Career

*Parameters*

`tag` the player's battle tag.

```javascript
bnet.d3.profile.career({origin: 'us', tag: 'skt-1884'}, callback);
```

<a name="d3-profile-hero"></a>
#### Hero

*Parameters*

`tag` the player battle tag.

`hero` the hero ID.

```javascript
bnet.d3.profile.hero({origin: 'us', tag: 'skt-1884', hero: 287801}, callback);
```

---
