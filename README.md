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

## Battle.net API Key

Your private Battle.net API key is input with the `BATTLENET_API_KEY` environment variable. This must be present in order to get a proper response. There are a variety of ways to set this variable but the easiest is to run your node server with the variable from the command line.

```
$ sudo BATTLENET_API_KEY=[your_api_key] node server.js
```

# Documentation

Each API method receives a parameters object for the request, and a callback function to execute once the request has completed. The available request parameters are explained for each method below.

`callback` takes three arguments: `error`, `response`, and `body`.

## Overview

### [World of Warcraft](#wow)

* [Achievement](#wow-achievement)
* [Auction](#wow-auction)
* [Battle Pet](#wow-battle-pet)
  * [Ability](#wow-battle-pet-ability)
  * [Species](#wow-battle-pet-species)
  * [Stats](#wow-battle-pet-stats)
* [Challenge](#wow-challenge)
  * [Realm Leaderboard](#wow-challenge-realm-leaderboard)
  * [Region Leaderboard](#wow-challenge-region-leaderboard)
* [Character](#wow-character)
  * [Aggregate](#character-aggregate)
  * [Achievements](#wow-character-achievements)
  * [Appearance](#wow-character-appearance)
  * [Audit](#wow-character-audit)
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

---

<a name="wow"></a>
## World of Warcraft

The World of Warcraft API methods are available through the `wow` object of the Battle.net API.

```javascript
var wow = bnet.wow;
```

**ALL** API methods take `origin` as one of the parameters. This indicates which regional API endpoint to use. The possible values are `us`, `eu`, `kr`, `tw`. The China API is unavailable at this time.

---

<a name="wow-achievement"></a>
### Achievement

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`]

`id` the unique achievement ID.

*Usage*

```javascript
bnet.wow.achievement({origin: 'us', id: 2144}, callback);
```

---

<a name="wow-auction"></a>
### Auction

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`realm` the slugified realm name.

*Usage*

```javascript
bnet.wow.auction({origin: 'us', realm: 'proudmoore'}, callback);
```

---

<a name="wow-battle-pet"></a>
### Battle Pet

<a name="wow-battle-pet-abilities"></a>
#### Abilities

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`id` the unique ID of the battle pet ability.

*Usage*

```javascript
bnet.wow.battlePet.ability({origin: 'us', id: 640}, callback);
```

<a name="wow-battle-pet-species"></a>
#### Species

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`id` the unique ID of the battle pet species.

*Usage*

```javascript
bnet.wow.battlePet.species({origin: 'us', id: 258}, callback);
```

<a name="wow-battle-pet-stats"></a>
#### Stats

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`id` the unique ID of the battle pet species.

`fields` an object containing the battle pet `level`, `breedId`, and `qualityId`

*Usage*

```javascript
bnet.wow.battlePet.stats({origin: 'us', id: 258, fields: { level: 25, breedId: 5, qualityId: 4 }}, callback);
```

---

<a name="wow-challenge"></a>
### Challenge

<a name="wow-challenge-realm-leaderboard"></a>
#### Realm Leaderboard

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`realm` the slugified realm name.

*Usage*

```javascript
bnet.wow.challenge.realmLeaderboard({origin: 'us', realm: 'proudmoore'}, callback);
```

<a name="wow-challenge-region-leaderboard"></a>
#### Region Leaderboard

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

*Usage*

```javascript
bnet.wow.challenge.regionLeaderboard({origin: 'us'}, callback);
```

---

<a name="wow-character"></a>
### Character

All character requests require the following parameters:

`origin` [`us`, `eu`, `kr`, `tw`].

`realm` the slugified realm of the character.

`name` the name of the character.

<a name="wow-character-profile"></a>
#### Profile

Returns basic profile data about the character.

*Usage*

```javascript
bnet.wow.character.profile({origin: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="wow-character-achievements"></a>
#### Achievements

Returns the achievement data of the character.

*Usage*

```javascript
bnet.wow.character.achievements({origin: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="wow-character-appearance"></a>
#### Appearance

Returns the appearance data of the character.

*Usage*

```javascript
bnet.wow.character.appearance({origin: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="wow-character-guild"></a>
#### Guild

Returns the guild data of the character.

*Usage*

```javascript
bnet.wow.character.guild({origin: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="wow-character-hunter-pets"></a>
#### Hunter Pets

Returns the hunter pet data of the character (where applicable).

*Usage*

```javascript
bnet.wow.character.hunterPets({origin: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="wow-character-items"></a>
#### Items

Returns the item data of the character.

*Usage*

```javascript
bnet.wow.character.items({origin: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="wow-character-mounts"></a>
#### Mounts

Returns the mount data of the character.

*Usage*

```javascript
bnet.wow.character.mounts({origin: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="wow-character-pets"></a>
#### Pets

Returns the pet data of the character.

*Usage*

```javascript
bnet.wow.character.pets({origin: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="wow-character-pet-slots"></a>
#### Pet Slots

Returns the pet slots data of the character.

*Usage*

```javascript
bnet.wow.character.petSlots({origin: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="wow-character-progression"></a>
#### Progression

Returns the progression data of the character.

*Usage*

```javascript
bnet.wow.character.progression({origin: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="wow-character-pvp"></a>
#### PVP

Returns the PVP data of the character.

*Usage*

```javascript
bnet.wow.character.pvp({origin: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="wow-character-quests"></a>
#### Quests

Returns the quest data of the character.

*Usage*

```javascript
bnet.wow.character.quests({origin: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="wow-character-reputation"></a>
#### Reputation

Returns the reputation data of the character.

*Usage*

```javascript
bnet.wow.character.reputation({origin: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="wow-character-stats"></a>
#### Stats

Returns the statistics data of the character.

*Usage*

```javascript
bnet.wow.character.stats({origin: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="wow-character-talents"></a>
#### Talents

Returns the talent data of the character.

*Usage*

```javascript
bnet.wow.character.talents({origin: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="wow-character-titles"></a>
#### Titles

Returns the title data of the character.

*Usage*

```javascript
bnet.wow.character.titles({origin: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="wow-character-audit"></a>
#### Audit

Returns an audit of the character's equipment.

*Usage*

```javascript
bnet.wow.character.audit({origin: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="wow-character-aggregate"></a>
#### Aggregate

Returns the specified character fields aggregated in a single request.

*Parameters*

`fields` an array of one or more character fields.

*Usage*

```javascript
bnet.wow.character.aggregate({origin: 'us', realm: 'proudmoore', name: 'charni', fields: ['pets', 'petSlots']}, callback);
```

---

<a name="wow-data"></a>
### Data Resources

<a name="wow-data-battlegroups"></a>
#### Battlegroups

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

*Usage*

```javascript
bnet.wow.data.battlegroups({origin: 'us'}, callback);
```

<a name="wow-data-character-achievements"></a>
#### Character Achievements

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

*Usage*

```javascript
bnet.wow.data.characterAchievements({origin: 'us'}, callback);
```

<a name="wow-data-character-classes"></a>
#### Character Classes

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

*Usage*

```javascript
bnet.wow.data.characterClasses({origin: 'us'}, callback);
```

<a name="wow-data-character-races"></a>
#### Character Races

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

*Usage*

```javascript
bnet.wow.data.characterRaces({origin: 'us'}, callback);
```

<a name="wow-data-guild-achievements"></a>
#### Guild Achievements

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

*Usage*

```javascript
bnet.wow.data.guildAchievements({origin: 'us'}, callback);
```

<a name="wow-data-guild-perks"></a>
#### Guild Perks

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

*Usage*

```javascript
bnet.wow.data.guildPerks({origin: 'us'}, callback);
```

<a name="wow-data-guild-rewards"></a>
#### Guild Rewards

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

*Usage*

```javascript
bnet.wow.data.guildRewards({origin: 'us'}, callback);
```

<a name="wow-data-item-classes"></a>
#### Item Classes

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

*Usage*

```javascript
bnet.wow.data.itemClasses({origin: 'us'}, callback);
```

<a name="wow-data-pet-types"></a>
#### Pet Types

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

*Usage*

```javascript
bnet.wow.data.petTypes({origin: 'us'}, callback);
```

<a name="wow-data-talents"></a>
#### Talents

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

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

`origin` [`us`, `eu`, `kr`, `tw`].

`id` the unique item ID.

*Usage*

```javascript
bnet.wow.item.item({origin: 'us', id: 18803}, callback);
```

<a name="wow-item-item-set"></a>
#### Item Set

Returns the item set data of the specified set ID.

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`id` the unique item set ID.

*Usage*

```javascript
bnet.wow.item.set({origin: 'us', id: 1060}, callback);
```

---

<a name="wow-guild"></a>
### Guild

All guild requests require the following parameters:

`origin` [`us`, `eu`, `kr`, `tw`].

`realm` the slugified realm of the guild.

`name` the name of the guild.

<a name="wow-character-aggregate"></a>
#### Aggregate

Returns the specified guild fields aggregated in a single request.

*Parameters*

`fields` an array of one or more guild fields.

*Usage*

```javascript
bnet.wow.guild.aggregate({origin: 'us', realm: 'proudmoore', name: 'black wolf mercenaries', fields: ['members', achievements]}, callback);
```

<a name="wow-guild-achievements"></a>
#### Achievements

Returns the achievement data of the guild.

*Usage*

```javascript
bnet.wow.guild.achievements({origin: 'us', realm: 'proudmoore', name: 'black wolf mercenaries'}, callback);
```

<a name="wow-guild-challenge"></a>
#### Challenge

Returns the challenge data of the guild.

*Usage*

```javascript
bnet.wow.guild.challenge({origin: 'us', realm: 'proudmoore', name: 'black wolf mercenaries'}, callback);
```

<a name="wow-guild-members"></a>
#### Members

Returns the members data of the guild.

*Usage*

```javascript
bnet.wow.guild.members({origin: 'us', realm: 'proudmoore', name: 'black wolf mercenaries'}, callback);
```

<a name="wow-guild-news"></a>
#### News

Returns the news data of the guild.

*Usage*

```javascript
bnet.wow.guild.news({origin: 'us', realm: 'proudmoore', name: 'black wolf mercenaries'}, callback);
```

<a name="wow-guild-profile"></a>
#### Profile

Returns basic profile data of the guild.

*Usage*

```javascript
bnet.wow.guild.profile({origin: 'us', realm: 'proudmoore', name: 'black wolf mercenaries'}, callback);
```

---

<a name="wow-pvp"></a>
### PVP

<a name="wow-pvp-leaderboards"></a>
#### Leaderboards

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`bracket` [`2v2`, `3v3`, `5v5`, `rbg`]

*Usage*

```javascript
bnet.wow.pvp({origin: 'us', bracket: '2v2'}, callback);
```

---

<a name="wow-quest"></a>
### Quest

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`id` the unique quest ID.

*Usage*

```javascript
bnet.wow.quest({origin: 'us', quest: 13146}, callback);
```

---

<a name="wow-realm-status"></a>
### Realm Status

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`fields` [optional] an array of one or more realms to limit.

*Usage*

All realms

```javascript
bnet.wow.realmStatus({origin: 'us']}, callback);
```

Selected realms

```javascript
bnet.wow.realmStatus({origin: 'us', realms: ['proudmoore', 'blackrock', 'frostmourne']]}, callback);
```

---

<a name="wow-recipe"></a>
### Recipe

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`id` the unique recipe ID.

*Usage*

```javascript
bnet.wow.recipe({origin: 'us', id: 33994]}, callback);
```

---

<a name="wow-spell"></a>
### Spell

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`id` the unique spell ID.

*Usage*

```javascript
bnet.wow.spell({origin: 'us', id: 8056]}, callback);
```

---

<a name="sc2"></a>
## Starcraft 2

The Starcraft 2 API methods are available through the `sc2` object of the Battle.net API.

```javascript
var sc2 = bnet.sc2;
```

**ALL** API methods take `origin` as one of the parameters. This indicates which regional API endpoint to use. The possible values are `us`, `eu`, `sea`, `kr`, `tw`.

---

<a name="sc2-profile"></a>
### Profile

All profile requests require the following parameters.

`origin` [`us`, `eu`, `sea`, `kr`, `tw`].

`id` the unique player ID.

`region` the player's region ID.

`name` the player's profile name.

<a name="sc2-profile-profile"></a>
#### Profile

Returns basic profile data for the specified player.

*Usage*

```javascript
bnet.sc2.profile.profile({origin: 'us', id: 2137104, region: 1, name: 'skt']}, callback);
```

<a name="sc2-profile-ladders"></a>
#### Ladders

Returns ladder data for the specified player.

*Usage*

```javascript
bnet.sc2.profile.ladders({origin: 'us', id: 2137104, region: 1, name: 'skt']}, callback);
```

<a name="sc2-profile-match-history"></a>
#### Match history

Returns match history data for the specified player.

*Usage*

```javascript
bnet.sc2.profile.matchHistory({origin: 'us', id: 2137104, region: 1, name: 'skt']}, callback);
```

---

<a name="sc2-ladder"></a>
### Ladder

*Parameters*

`origin` [`us`, `eu`, `sea`, `kr`, `tw`].

`id` the unique ladder ID.

*Usage*

```javascript
bnet.sc2.ladder({origin: 'us', id: 655]}, callback);
```

---

<a name="sc2-data"></a>
### Data Resources

<a name="sc2-data-achievements"></a>
#### Achievements

*Paramters*

`origin` [`us`, `eu`, `sea`, `kr`, `tw`].

*Usage*

```javascript
bnet.sc2.data.achievements({origin: 'us'}, callback);
```

<a name="sc2-data-rewards"></a>
#### Rewards

*Parameters*

`origin` [`us`, `eu`, `sea`, `kr`, `tw`].

*Usage*

```javascript
bnet.sc2.data.rewards({origin: 'us'}, callback);
```

---
