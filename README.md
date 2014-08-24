#battlenet-api

A Node JS wrapper for the Battle.net API

## How to use

Simply `require()` the Battle.net API in your application:

```javascript
var bnet = require('battlenet-api');
```

And then access the API methods to request data:

```javascript
bnet.wow.character.profile(obj, callback);
```

## Documentation

Each API method receives a parameters object for the request, and a callback function to execute once the request has completed. The available request parameters are explained for each method below.

`callback` takes three arguments: `error`, `response`, and `body`.

### World of Warcraft

The World of Warcraft API methods are available through the `wow` object of the Battle.net API.

```javascript
var wow = bnet.wow;
```

Each API method will take `region` as one of its required parameters. The possible values are `us`, `eu`, `kr`, `tw`.

#### Character

##### Achievement

**Required Parameters**

`region` the region of the achievment.

`id` the unique achievement ID.

**Example Usage**
```javascript
bnet.wow.achievement({region: 'us', id: 2144}, function(err, resp, body) {
    console.log(body);
});
```

##### Profile

**Required Parameters**

`region` the region of the character.

`realm` the slugified realm of the character. See Realm Status for more info.

`name` the name of the character.

**Example Usage**
```javascript
bnet.wow.character.profile({region: 'us', realm: 'proudmoore', name: 'charni'}, function(err, resp, body) {
    console.log(body);
});
```
