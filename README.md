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

* Achievement
* Auction
* Battle Pet
  * Ability
  * Species
  * Stats
* Challenge
  * Realm Leaderboard
  * Region Leaderboard
* Character
  * Profile
  * Achievements
  * Appearance
  * Guild
  * Hunter Pets
  * Items
  * Mounts
  * Pets
  * Pet Slots
  * Progression
  * PVP
  * Quests
  * Reputation
  * Stats
  * Talents
  * Titles
  * Audit
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

Each API method will take `region` as one of its parameters. The possible values are `us`, `eu`, `kr`, `tw`.

### Achievement

*Parameters*
`region` the region of the achievment.

`id` the unique achievement ID.

*Usage*
```javascript
bnet.wow.achievement({region: 'us', id: 2144}, function(err, resp, body) {
    console.log(body);
});
```

### Character

All character requests require the following parameters:

`region` the region of the character.

`realm` the slugified realm of the character.

`name` the name of the character.

#### Profile

Returns basic profile data about the character.

*Usage*
```javascript
bnet.wow.character.profile({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

#### Achievements

Returns the achievement data of the character.

*Usage*
```javascript
bnet.wow.character.achievements({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

#### Appearance

Returns the appearance data of the character.

*Usage*
```javascript
bnet.wow.character.appearance({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

#### Guild

Returns the guild data of the character.

*Usage*
```javascript
bnet.wow.character.guild({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

#### Hunter Pets

Returns the hunter pet data of the character (where applicable).

*Usage*
```javascript
bnet.wow.character.hunterPets({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

#### Items

Returns the item data of the character.

*Usage*
```javascript
bnet.wow.character.items({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

#### Mounts

Returns the mount data of the character.

*Usage*
```javascript
bnet.wow.character.mounts({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

#### Pets

Returns the pet data of the character.

*Usage*
```javascript
bnet.wow.character.pets({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

#### Pet Slots

Returns the pet slots data of the character.

*Usage*
```javascript
bnet.wow.character.petSlots({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

#### Progression

Returns the progression data of the character.

*Usage*
```javascript
bnet.wow.character.progression({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

#### PVP

Returns the PVP data of the character.

*Usage*
```javascript
bnet.wow.character.pvp({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

#### Quests

Returns the quest data of the character.

*Usage*
```javascript
bnet.wow.character.quests({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

#### Reputation

Returns the reputation data of the character.

*Usage*
```javascript
bnet.wow.character.reputation({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

#### Stats

Returns the statistics data of the character.

*Usage*
```javascript
bnet.wow.character.stats({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

#### Talents

Returns the talent data of the character.

*Usage*
```javascript
bnet.wow.character.talents({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

#### Titles

Returns the title data of the character.

*Usage*
```javascript
bnet.wow.character.titles({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```

#### Audit

Returns an audit of the character's equipment.

*Usage*
```javascript
bnet.wow.character.audit({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```
