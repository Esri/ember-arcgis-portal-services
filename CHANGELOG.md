# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### changed
- upgraded arcgis-rest-js to 1.9.0

## [1.7.1]
- bump to torii-provider-arcgis v2.0.0 so session.authMgr has correct portal

## [1.7.0]
### Fixed
- use pre-rest-js format for error codes and messages
- unauthenticated rest-js requestOptions use portal, authenticated use authentication

## [1.6.0]
### Added
- `hosted-service` `ensureUniqueServiceName` method

## [1.5.5]
### Fixed
- don't ever set authentication option; revert to previous portal/token logic

## [1.5.4]
### Fixed
- ensure `requestOptions.portal` is formed properly to search for ArcGIS Enterprise Sites

## [1.5.3]
### Fixed
- make sure to pass through custom `portalHostname`s from a session when no `portalOpts` are defined.

## [1.5.2]
### Fixed
- handle portalOpts urls appropriately whether they supply a protocol or not

## [1.5.1]
### Changed
- use @esri/arcgis-rest-sharing for `sharing-service:setAccess`
- use @esri/arcgis-rest-items for `items-service`
- upgrade to torii-provider-arcgis `v1.1.6`

### Removed
- `item-service._serializeItem()`
- `item-service._post()`

## 1.5.0
### Added
- `hosted-service:deleteFromDefinition` method

## 1.4.0
### Added
- `group-service:inviteUsers` method

## 1.3.3
### Fixed
- don't send token to geometry service hosted at ArcGISOnline.com

## 1.3.2
### Changed
- `utils/fetch-image-as-blob.js` sends same-origin credentials by default
- `item-service:addImageResourceFromUrl` now uses `fetch-image-as-blob`

## 1.3.1
### Fixed
- typo in `fetch` when setting credentials

## 1.3.0
### Added
- `fetch` now defaults to `credentials: 'same-origin'` for all requests, enabling web-tier authentication

## 1.2.0
### Added
- `geometry-service:project` now takes portalOpts and will send tokens to non `arcgisonline.com` services if provided.

## 1.1.0
### Added
- `portal-services:addImageResourceFromUrl` method
- `portal-services:addApprovedApp` method
- `portal-services:getApprovedApps` method

## 1.0.0
### Added
- `sendNotification` method on portal service
### Changed
- swapped the deprecated `ember-network` for `ember-fetch`
### Removed
- unused `geometry-service.projectAjax` fn which could not work as the ajax service was not included

## 0.29.0
### Changed
- upgrade to ember 2.18

## 0.28.0
### Added
- `sendGroupMessage` method in group-service and added message submit form on groups

## 0.27.1
### Fixed
- invalid querystring on `items-service` `getById` & `getDataById`

## 0.27.0
### Added
- `item-service` `uploadThumbnail` method
- upload thumbnail in dummy app

## 0.26.0
### Added
- `portal-service` `activate` method
- `user-service` `signup` method

### Changed
- `portal-service::update` will now update `urlKey` and `name`

## 0.25.1
### Changed
- `service-mixin::encodeForm` no longer sends field for null properties, thus avoiding `"null"` values in items

## 0.25.0
### Added
- `portal-service` `checkUsername` & `checkUrlKey` methods

## 0.24.0
### Added
- `groups-service` `ensureUniqueGroupName` & `doesGroupExist` methods

## 0.23.1
### Fixed
- bad params in `project` function

## 0.23.0
### Added
- added `geometry-service` that will use the Portal's configured geom service OR the main AGO one.

## 0.22.0
### Added
- itemsService.addImageResourceFromUrl

### Fixed
- issue deploying to dev

## 0.21.1
### Fixed
- rename incorrect function call

## 0.21.0
### Fixed
- don't trust session.portalHostname :(

## 0.20.3
### Fixed
- GetBulk works with more than one group


## 0.20.2
### Fixed
- Don't add protocol to portal url if it already has one

## 0.20.1
### Added
- npm script to deploy a prod version @ surge.sh.

## Changed
- `hosted-service.serviceExists` now works
- changed calls to `session.portalHostName` to `session.portalHostname`

## Fixed
- relative portal url is respected

## 0.20.0
## Added
- groupsService::protect
- groupsService::unprotect

## 0.19.0
### Added
- `getBulk` gets an array of groups by their ids

## 0.18.0
### Added
- portalService::self
- portalService::configureSocialProviders

### Changed
- portalService::update now updates a few more properties besides portalProperties

## 0.17.0

### Added
- groupsService::updateUserMemberships

## 0.16.0

### Added
- group service methods to join/leave a group

## 0.15.0

### Added
- hosted feature service updateDefinition method

### Fixed
- hosted feature service addToDefinition works for layer id 0

## 0.14.0
### Added
- portal service getById method

### Fixed
- serviceMixin::returnUrl handles rejections better

### Changed
- If a string is passed to serviceMixin::encodeForm it simply returns a string


## 0.13.5
### Added
- added `items-service.removeRelationship (username, itemId, destItemId, relType, portalOpts)`


## 0.13.4
### Added
- `folder-service` and dummy/users/user route which allows you to CRD folders
- added `hosted-service` - create a hosted service item, and add layers/tables, and check if a service name exists
- added `hosted-service.createView`
- added `items-service.getRelatedItems(itemId, relationshipType, direction, portalOpts)`
- added `items-service.addRelationship (username, itemId, destItemId, relType, portalOpts)`
- added `requestUrl(url)` to `service-mixin`

### Changed
- removed debugging message echoing the url of all requests

## 0.13.1, 0.13.2, 0.13.3
### Yanked

## 0.13.0
### Added
- `update` method on user-service

## 0.12.0
### Changed
- If `portalOpts` is provided use the token specified on it (even if undefined).

## [0.11.1]
### Changed
- update README

## [0.11.0]
### Changed
- refactor of `sharing-service::shareWithGroup` to call `changeGroupSharing`

### Added
- added `sharing-service::changeGroupSharing` which can share/unshare, and has better handling of membership / rights to share/unshare
- added `sharing-service::unShareWithGroup` which calls `changeGroupSharing`
- added `/hack` route to dummy where we can add various test harnesses

## [0.10.4]
### Added
- user-service::searchCommunityUsers
- user-service:searchPortalUsers

### Changed
- deprecated userService.search

## [0.10.3]
### Added
- all public functions take an optional `portalOpts` parameter


## [0.10.2]
### Fixed
- jshint errors

## [0.10.1]
### Added
- allow `sharingService.setAccess(owner, itemId, access)`  to accept `public` or `everyone`


## [0.10.0]
### Added
- `sharingService.setAccess(owner, itemId, access)` where access is null | 'org' | 'everyone'
- `sharingService.shareWithGroup(owner, itemId, groupId, confirmItemControl)`
- `sharingService.isItemSharedWithGroup(itemId, groupId)`
### Changed
- deprecated all previous methods / calls as they were non-deterministic

## [0.9.0]
### Changed
- `portalService.update` was not working; now it will update the `portalProperties` hash only.
- all tests (minimal as they are) pass.

## [0.8.9]
### Added
- `portal-service.update` throws "this.getPortalRestUrl is undefined"

## [0.8.8]
### Added
- `items-service.protect` and `items-service.unprotect`

## [0.8.7]
### Changed
- serialize `item.properties` into a string when saving items
### Added
- additional group controls in dummy

## [0.8.6]
### Added
- sharing controls on item detail view in dummy
- added `surge` and `github` environment settings
- updated `npm run deploy` to use the `github` environment


## [0.8.5]
### Added
- `item-service.uploadResource(itemId, owner, file, replace = false)` optional param so we can replace resources

## [0.8.4]
### Added
- geocode-service::findLocationAddress method
- geocode-service::geocodeUrl method

## [0.8.3]
### Added
- items-service::uploadResource added optional `filename` parameter


## [0.8.2]
### Added
- groups-service::removeUsers method

## [0.8.1]
- `item-service.updateResource(itemId, owner, name, content)`

## [0.8.0]
### Added
-  `item-service.uploadResource(itemId, owner, file)`
-  `item-service.addResource(itemId, owner, name, content)`
-  `portal-service.getResources`
-  `portal-service.removeResource(resourceName)`
-  `portal-service.uploadResource(file)`
-  `portal-service.addResource(name, content)`

## [0.7.3]
### Changed
- removed errand `debugger` dbouwman--


## [0.7.2]
### Changed
- the mixin now correctly encodes form fields using `encodeURIComponent`, which allows `&` chars in the `text` payload
- renamed the `groups-service.destroy` method to `.remove`

## [0.7.1]
### Changed
- added more consistent error formatting
- added groups/new route to dummy

## [0.7.0]
### Changed
- relies on `session.portalHostName` instead of `ENV.APP.arcgisPortal.*`. This makes configuration more consistent and removes duplication urls in the app config file.

## [0.6.0]
### Changed
- moved to `ember-network/fetch` to make this fastboot compatible

### Added
- `item-service.addResource(itemId, owner, file)`
- `item-service.getResources(itemId) `
- `item-service.destroyResource(itemId, owner, resource)`

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

[Unreleased]: https://github.com/Esri/ember-arcgis-portal-services/compare/v1.7.1...HEAD
[1.7.1]: https://github.com/Esri/ember-arcgis-portal-services/compare/v1.7.0...v1.7.1
[1.7.0]: https://github.com/Esri/ember-arcgis-portal-services/compare/v1.6.0...v1.7.0
[1.6.0]: https://github.com/Esri/ember-arcgis-portal-services/compare/v1.5.5...v1.6.0
[1.5.5]: https://github.com/Esri/ember-arcgis-portal-services/compare/v1.5.4...v1.5.5
[1.5.4]: https://github.com/Esri/ember-arcgis-portal-services/compare/v1.5.3...v1.5.4
[1.5.3]: https://github.com/Esri/ember-arcgis-portal-services/compare/v1.5.2...v1.5.3
[1.5.2]: https://github.com/Esri/ember-arcgis-portal-services/compare/v1.5.1...v1.5.2
[1.5.1]: https://github.com/Esri/ember-arcgis-portal-services/compare/v1.5.0...v1.5.1
