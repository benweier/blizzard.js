# Battle.net API

A Node JS wrapper for the Battle.net API

# Install

Add `battlenet-api` to your application's `package.json` file and run:

```
npm install
```

Alternatively:
```
npm install battlenet-api --save
```

# How to use

Simply `require()` the Battle.net API within your application:

```javascript
var bnet = require('battlenet-api');
```

And then access the API methods to request data:

```javascript
bnet.wow.character.profile(obj, callback);
```

# Documentation

Each API method receives a parameters object for the request, and a callback function to execute once the request has completed. The available request parameters are explained for each method below.

`callback` takes three arguments: `error`, `response`, and `body`.

## Overview

### World of Warcraft

* [Achievement](#achievement)
* Auction
* Battle Pet
  * Ability
  * Species
  * Stats
* Challenge
  * Realm Leaderboard
  * Region Leaderboard
* [Character](#character)
  * [Profile](#character-profile)
  * [Achievements](#character-achievements)
  * [Appearance](#character-appearance)
  * [Guild](#character-guild)
  * [Hunter Pets](#character-hunterpets)
  * [Items](#character-items)
  * [Mounts](#character-mounts)
  * [Pets](#character-pets)
  * [Pet Slots](#character-petslots)
  * [Progression](#character-progression)
  * [PVP](#character-pvp)
  * [Quests](#character-quests)
  * [Reputation](#character-reputation)
  * [Stats](#character-stats)
  * [Talents](#character-talents)
  * [Titles](#character-titles)
  * [Audit](#character-audit)
  * [Aggregate](@character-aggregate)
* Guild
* Item
  * Item
  * Item Set
* PVP
  * Leaderboard
* Quest
* Realm Status
* Recipe
* Spell

## World of Warcraft

The World of Warcraft API methods are available through the `wow` object of the Battle.net API.

```javascript
var wow = bnet.wow;
```

Each API method will take `region` as one of its parameters. The possible values are `us`, `eu`, `kr`, `tw`. The China API is unavailable at this time.

<a name="achievement"></a>
### Achievement

*Parameters*
`region` [`us`, `eu`, `kr`, `tw`]

`id` the unique achievement ID.

*Usage*
```javascript
bnet.wow.achievement({region: 'us', id: 2144}, function(err, resp, body) {
    console.log(body);
});
```

<a name="achievement"></a>
### Auction

*Parameters*
`region` [`us`, `eu`, `kr`, `tw`].

`realm` the slugified realm name.

*Usage*
```javascript
bnet.wow.auction({region: 'us', realm: 'proudmoore'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character"></a>
### Character

All character requests require the following parameters:

`region` [`us`, `eu`, `kr`, `tw`].

`realm` the slugified realm of the character.

`name` the name of the character.

<a name="character-profile"></a>
#### Profile

Returns basic profile data about the character.

*Usage*
```javascript
bnet.wow.character.profile({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character-achievements"></a>
#### Achievements

Returns the achievement data of the character.

*Usage*
```javascript
bnet.wow.character.achievements({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character-appearance"></a>
#### Appearance

Returns the appearance data of the character.

*Usage*
```javascript
bnet.wow.character.appearance({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character-guild"></a>
#### Guild

Returns the guild data of the character.

*Usage*
```javascript
bnet.wow.character.guild({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character-hunterpets"></a>
#### Hunter Pets

Returns the hunter pet data of the character (where applicable).

*Usage*
```javascript
bnet.wow.character.hunterPets({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character-items"></a>
#### Items

Returns the item data of the character.

*Usage*
```javascript
bnet.wow.character.items({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character-mounts"></a>
#### Mounts

Returns the mount data of the character.

*Usage*
```javascript
bnet.wow.character.mounts({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character-pets"></a>
#### Pets

Returns the pet data of the character.

*Usage*
```javascript
bnet.wow.character.pets({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character-petslots"></a>
#### Pet Slots

Returns the pet slots data of the character.

*Usage*
```javascript
bnet.wow.character.petSlots({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character-progression"></a>
#### Progression

Returns the progression data of the character.

*Usage*
```javascript
bnet.wow.character.progression({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character-pvp"></a>
#### PVP

Returns the PVP data of the character.

*Usage*
```javascript
bnet.wow.character.pvp({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character-quests"></a>
#### Quests

Returns the quest data of the character.

*Usage*
```javascript
bnet.wow.character.quests({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character-reputation"></a>
#### Reputation

Returns the reputation data of the character.

*Usage*
```javascript
bnet.wow.character.reputation({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character-stats"></a>
#### Stats

Returns the statistics data of the character.

*Usage*
```javascript
bnet.wow.character.stats({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character-talents"></a>
#### Talents

Returns the talent data of the character.

*Usage*
```javascript
bnet.wow.character.talents({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character-titles"></a>
#### Titles

Returns the title data of the character.

*Usage*
```javascript
bnet.wow.character.titles({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character-audit"></a>
#### Audit

Returns an audit of the character's equipment.

*Usage*
```javascript
bnet.wow.character.audit({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

<a name="character-aggregate"></a>
#### Aggregate

Returns the specified character fields aggregated in a single request.

*Parameters*

`fields` an array of one or more character fields.

*Usage*
```javascript
bnet.wow.character.aggregate({region: 'us', realm: 'proudmoore', name: 'charni', fields: ['pets', 'petSlots']}, function(err, resp, body) {
    console.log(body);
});
```
