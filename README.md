# ember-arcgis-portal-services

[![npm version][npm-img]][npm-url]
[![build status][travis-img]][travis-url]
[![apache licensed](https://img.shields.io/badge/license-Apache-green.svg?style=flat-square)](https://raw.githubusercontent.com/Esri/ember-arcgis-portal-services/master/LICENSE)

[npm-img]: https://img.shields.io/npm/v/ember-arcgis-portal-services.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/ember-arcgis-portal-services
[travis-img]: https://img.shields.io/travis/Esri/ember-arcgis-portal-services/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/Esri/ember-arcgis-portal-services

Ember Services for working with ArcGIS Portal/Online

**Note**  This is still a very nascent project, and things will change.

We recommend locking to a specific version in your own `package.json` - although we try to avoid breaking changes,

### ArcGIS Portal Services
After adding this to your project, you will have a number of services available for injection into your routes/controllers/services.

### Dependencies
This project is now using `ember-fetch`, which is included in dependencies.

If you're using `torii` for oauth management, please also `npm install torii-provider-arcgis`. More information [here](https://github.com/dbouwman/torii-provider-arcgis).
Otherwise, you can use the `portalOpts` parameter described below, but you need a service named `session` in your app or addon. You can generate a dummy service using `ember generate service session`. *TODO: there's probably a better way to do this...*

### Installation
To consume this library in any ember application:
* `ember install ember-arcgis-portal-services`

### Shared Methods
All the services expose a set of shared helper properties and methods:

| Property | Returns | Description |
| --- | --- | --- |
| `geocodeUrl` | `string` | Return the geocode base url |

**NOTE: Most public methods take an optional portalOpts parameter. This takes the form:**

```
{
  portalHostname: 'https://some.portal.com',
  token: 'BZSOMETOKENQJ'
}
```

| Method |  Returns | Description |
| --- | --- | --- |
| `encodeForm` | `string` | This is used internally. Formats an object into a html form. In most cases, not necessary to call this.|
| `request (url, options, portalOpts)` | `promise` | This is used internally. Promisified xhr that does basic handling of Portal's 400-in-a-200 errors |
| `getPortalUrl()` | `string` | Get the portal url i.e. `https://org.maps.arcgis.com` |
| `getPortalRestUrl()` | `string` | Get the portal rest url i.e. `https://org.maps.arcgis.com/sharing/rest` |

### Items Service

| Method |  Returns | Description |
| --- | --- | --- |
| `search(form)` | `promise` | Executes via `/sharing/rest/search`. The form is an object properties matching the [search params](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Search/02r3000000mp000000/) |
| `getById(id, portalOpts)` | `promise` | Returns the Item. |
| `getDataById(id, portalOpts)` | `promise` | Returns the Item-Data (`/data`). |
| `update(item, portalOpts)` |  `promise` | Updates an existing item. The `.owner` property must be set. |
| `create(item, portalOpts)` |  `promise` | Creates an item. The `.owner` property must be set. |
| `remove(itemId, owner, portalOpts)` |  `promise` | Delete the item. |
| `protect(itemId, owner, portalOpts)` |  `promise` | Protect the item (to avoid accidental deletion). |
| `unprotect(itemId, owner, portalOpts)` |  `promise` | Unprotect the item. |
| `getRelatedItems(itemId, relationshipType, direction, portalOpts)` | `promise` | Related Items |
| `addRelationship (username, itemId, destItemId, relType, portalOpts)` | `promise` | Add a relationship between items |
| `removeRelationship (username, itemId, destItemId, relType, portalOpts)` | `promise` | Delete a relationship between items |
| `addImageResourceFromUrl (itemId, owner, filename, url)` | `promise` | Add an image at the specified url to the item as a resource |

### Groups Service

| Method |  Returns | Description |
| --- | --- | --- |
| `search(form, portalOpts)` | `promise` | Executes via `/sharing/rest/community/groups`. The form is an object properties matching the [search params](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Group_Search/02r3000000m1000000/) |
| `getById(id, portalOpts)` | `promise` | Returns the Group. |
| `getBulk(ids, portalOpts)` | `promise` | Returns an array of Groups. |
| `getItemsById(id, portalOpts)` | `promise` | Returns Items in the group. **Note:** Does not currently support paging. |
| `save(group, portalOpts)` |  `promise` | Creates or Updates a group.  |
| `update(group, portalOpts)` |  `promise` | Updates an existing group.  |
| `create(group, portalOpts)` |  `promise` | Creates an item. The `.owner` property must be set. |
| `remove(id, portalOpts)` |  `promise` | Delete the Group. |
| `protect(id, portalOpts)` |  `promise` | Protect the Group from deletion. |
| `unprotect(id, portalOpts)` |  `promise` | Unprotect the Group from deletion. |
| `users(id, portalOpts)` |  `promise` | Return array of users that are members of the Group. [Documentation](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Group_Users/02r30000006p000000/) |
| `addUsers(id, users, portalOpts)` |  `promise` | Adds users to the Group. Expects an array of usernames. |
| `reassign(id, username, portalOpts)` | `promise` | Reassign ownership of the group |
| `remove(id, portalOpts)` |  `promise` | Deletes a group from AGO |
| `join(id, portalOpts)` |  `promise` | Request for current user to join a group |
| `leave (id, portalOpts)` |  `promise` | Request for current user to leave a group |
| `isUserGroupAdmin (id, username, portalOpts)` |  `boolean` | User's group admin status |
| `getUserMembership (id, username, portalOpts)` |  `promise` | Return the type of group membership of a user |
| `updateUserMemberships (id, users, type, portalOpts)` |  `promise` | Updates membership(s) from user to admin or admin to user |
| `ensureUniqueGroupName (title, step, portalOpts)` |  `promise` | Return a group name guaranteed to be unique in the org |
| `doesGroupExist` (title, portalOpts) | `promise` | Return a boolean indicating whether the group exists in the org |

## Sharing Service

The sharing service separates setting Access (private/shared/org/everyone) from sharing with a group. This allows the methods to be more deterministic.

| Method |  Returns | Description |
| --- | --- | --- |
| `setAccess(owner, itemId, access, portalOpts)` | `promise` |  where access is null | 'org' | 'everyone' |
| `shareWithGroup(owner, itemId, groupId, confirmItemControl, portalOpts)` | `promise` | Shares an item with a group. `confirmItemControl` defaults to `false`. If set to `true` then `itemControl` (aka edit permission) is conferred via group membership |
| `unShareWithGroup(owner, itemId, groupId, portalOpts)` | `promise` | Un-Share an item with a group. |
| `changeGroupSharing(action, owner, itemId, groupId, portalOpts)` | `promise` | Actual implementation of the sharing. Action can be 'share' or 'unshare' |
| `isItemSharedWithGroup(itemId, groupId, portalOpts)` | `promise` | Checks to see if an item has already been shared with a group |

## User Service

| Method |  Returns | Description |
| --- | --- | --- |
| `search(form, portalOpts)` (deprecated) | `promise` | Delegates to allUsers if user is authenticated or portalOpts is provided, otherwise delegates to searchUsers |
| `searchCommunityUsers(form, portalOpts)` | `promise` | Executes via `/sharing/rest/community/users`. The form is an object properties matching the [search params](http://resources.arcgis.com/en/help/arcgis-rest-api/#/User_Search/02r3000000m6000000/) |
| `searchPortalUsers(form, portalOpts)` | `promise` | Executes via `/sharing/rest/portals/self/users`. The form is an object properties matching the [search params](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Users/02r30000009q000000/) |
| `getByName(username, portalOpts)` | `promise` | Get a user object by name. |
| `update(user, portalOpts)` | `promise` | Update a user |
| `signup (user, portalOpts)` | `promise` | Signs the user up to the organization |



## OAuth Service
**Note:** This is not used for authentication - rather its purpose is to allow Application Items to be programatically manipulated.

| Method |  Returns | Description |
| --- | --- | --- |
| `registerApp (itemId, redirectUris, appType = 'browser', portalOpts)` | `promise` | Registers an App item. Returning clientId, client secret etc |
| `updateApp(clientId, redirectUris, portalOpts)` | `promise` | Currently just supports changing the set of valid redirect uris. PR's accepted to expand this |

### Geocode Service

| Method |  Returns | Description |
| --- | --- | --- |
| `findLocationAddress(inputString)` | `promise` | Returns a location address based on an input string that moves through a specified or default geocode url |

### Portal Service

| Method |  Returns | Description |
| --- | --- | --- |
| `getById (id, portalOpts)` | `promise` | Get portal info by Id |
| `self (portalOpts)` | `promise` | Perform a portals/self call |
| `update(portal, portalOpts)` | `promise` | Update a portal. Lots of rules apply to what can be changed |
| `uploadResource (file)` | `promise` | Upload a file as a portal resource |
| `addResource (name, content, portalOpts)` | `promise` | Add a resource to a portal |
| `getResources () ` | `promise` | Get list of portal resources |
| `removeResource (resourceName, portalOpts)` | `promise` | Remove a resource from a porta |
| `users(portalId, start = 1, num = 100, portalOpts)` | `promise` | Get a portal users. |
| `configureSocialProviders (opts, portalOpts)` | `promise` | Configure social logins. |
| `checkUsername (username, portalOpts)` | `promise` | Checks whether the specified username is available |
| `checkUrlKey (urlKey, portalOpts)` | `promise` | Checks whether the specified urlKey is available |
| `activate (opts, portalOpts)` | `promise` | Activates the organization |

### Folders Service
| Method |  Returns | Description |
| --- | --- | --- |
| `getUserFolders (username, portalOpts)` | `promise` | Resolves with an array of folders |
| `folderExists (folderTitle, username, portalOpts)` | `promise` | Resolves with bool |
| `create (folderTitle, username, portalOpts)` | `promise` | Creates a folder |
| `remove (folderId, username, portalOpts)` | `promise` | Removes a folder |

### Hosted Service
Used to create/manage hosted feature services. Use the `feature-service` in `ember-arcgis-server-services` to work with features/records in the service.

| Method |  Returns | Description |
| --- | --- | --- |
| `serviceExists (serviceName, orgId, portalOpts)` | `promise` | Check if a service exists |
| `create (svcParams, username, folderId, portalOpts)` | `promise` | Create a Service + Item |
| `addToDefinition (fsUrl, definition, layerId, portalOpts)` | `promise` | Add/Edit a layer or table to the service |
| `updateDefinition (fsUrl, definition, layerId, portalOpts)` | `promise` | Update a service/layer's definition |

### environment.js

Configuration for how to connect to the portal is managed in the `torii` section. If you are using ArcGIS Online, the `portalUrl` property is not needed.

```js
// environment.js
...
torii: {
  sessionServiceName: 'session',
  providers: {
    'arcgis-oauth-bearer': {
      apiKey: 'SECRET-KEY-FOR-YOUR-APP',
      portalUrl: 'https://yourawesomeportal.com'
    }
  }
}
...
```

### Running

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests
**Note:** Currently there are no automated tests for this addon. PR's welcomed :)

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/" target="_blank" class="rg-linkified-code">http://ember-cli.com/](http://ember-cli.com/).

## Resources

* [ArcGIS Hub](http://doc.arcgis.com/en/hub/)
* [ArcGIS for Developers](https://developers.arcgis.com/)
* [ArcGIS Blog](http://blogs.esri.com/esri/arcgis/)
* [twitter@esri](http://twitter.com/esri)

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

### Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/Esri/contributing/blob/master/CONTRIBUTING.md).

### License

Copyright 2017 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE](./LICENSE) file.
