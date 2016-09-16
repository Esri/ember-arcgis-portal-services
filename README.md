# ember-arcgis-portal-services

Ember Services for working with ArcGIS Portal/Online

**Note**  This is still a very nascent project, and things will change.

If you use this project, be sure to lock to a specific version in your package.json.

We expect this project to have many releases before the 1.0.0 "Public API" stablization.

### environment.js

You need to add a section in the `.APP` hash to add `arcgisPortal` details
```
// environment.js
...
APP: {
  // portalBaseUrl is still needed
  portalBaseUrl: 'https://qaext.arcgis.com',
  // this new hash is what we are transitioning to
  arcgisPortal: {
    domain: 'arcgis.com',
    env: 'www',
    maps: 'maps',
  },
},
...
```

## Installation

* `ember install ember-arcgis-portal-services`
* `npm install`
* `bower install`

## Running Test App

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
