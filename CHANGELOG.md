# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased
### Added
- get items by group id
### Changes
- correctly pull in parent app configuration
- refactor logic for getting portal base URL into mixin


## [0.2.4]
### Added
- `groups-service` with `.search(query)`
- `items-service` with
   - `.search(query)`
   - `.getById(:itemId)`
   - `.getDataById(:itemId)`
   - `.create(item)`, will create the data via `item.text` is sent
   - `.update(item)`, will update the data via `item.text` is sent
