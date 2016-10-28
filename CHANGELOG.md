# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased

## [0.5.1]
### Changed
- fix for missing `f=json` on `groups-service::getById`

## [0.5.0]
### Added
- README reflects the current API

### Removed
- moved `item-search-form` and `list-pager` components into the dummy app as they are no intended to be part of this addon.


## [0.4.0]
### Added
- add arcgis ajax service to reject 200 responses with errors
- add update, delete, and save methods to group service
- add oauth service to support registering and updating apps

## [0.3.0]
### Changed
- Upgrade to ember 2.8

## [0.2.1]
- Update portalUrl implementation

## [0.2.0]
- use of `APP.arcgisPortal` config node for determining urls
- update dummy app


## [0.1.3]
### Changes
- correctly pull in parent app configuration
- add `item-service.serializeItem(item)` internal function that will correctly serialize an item for POSTing to the item apis via jQuery
- add `portal-service` with `update`
- bumped to node 6.3.0 in `.nvmrc` and `.travis.yml`
- fix bugs/typos in sharing-service

## [0.1.2]
### Added
- `groups-service` with `.search(query)`
- `items-service` with
   - `.search(query)`
   - `.getById(:itemId)`
   - `.getDataById(:itemId)`
   - `.create(item)`, will create the data via `item.text` is sent
   - `.update(item)`, will update the data via `item.text` is sent
