# ember-arcgis-portal-services

Ember Services for working with ArcGIS Portal/Online

**Note**  This is still a very nascent project, and things will change.

If you use this project, be sure to lock to a specific version in your package.json.

We expect this project to have many releases before the 1.0.0 "Public API" stablization.

## Portal Services
After adding this to your project, you will have a number of services available for injection into your routes/controllers/services.

## Dependencies
This project is now using `ember-network/fetch` to enable fastboot compatibility. Please also `ember install ember-network`
- `torii-provider-arcgis` install via `npm i torii-provider-arcgis`

### Shared Methods
All the services expose a set of shared helper properties and methods:

| Property | Returns | Description |
| --- | --- | --- |
| `portalRestUrl` | `string` | Return the ArcGIS Portal Rest base url |
| `portalUrl` | `string` | Return the ArcGIS Portal base url (for visiting pages etc) |
| `geocodeUrl` | `string` | Return the geocode base url |

| Method |  Returns |Description |
| --- | --- | --- |
| `encodeForm` | `string` | This is used internally. Formats an object into a html form. In most cases, not necessary to call this.|
| `request (url, options)` | `promise` | This is used internally. Promisified xhr that does not basic handling of Portal's 400-in-a-200 errors |

### Items Service

| Method |  Returns |Description |
| --- | --- | --- |
| `search(form)` | `promise` | Executes via `/sharing/rest/search`. The form is an object properties matching the [search params](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Search/02r3000000mp000000/) |
| `getById(id)` | `promise` | Returns the Item. |
| `getDataById(id)` | `promise` | Returns the Item-Data (`/data`). |
| `update(item)` |  `promise` | Updates an existing item. The `.owner` property must be set. |
| `create(item)` |  `promise` | Creates an item. The `.owner` property must be set. |
| `destroy(itemId, owner)` |  `promise` | Delete the item. |

### Groups Service

| Method |  Returns |Description |
| --- | --- | --- |
| `search(form)` | `promise` | Executes via `/sharing/rest/community/groups`. The form is an object properties matching the [search params](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Group_Search/02r3000000m1000000/) |
| `getById(id)` | `promise` | Returns the Group. |
| `getItemsById(id)` | `promise` | Returns Items in the group. **Note:** Does not currently support paging. |
| `save(group)` |  `promise` | Creates or Updates a group.  |
| `update(group)` |  `promise` | Updates an existing group.  |
| `create(group)` |  `promise` | Creates an item. The `.owner` property must be set. |
| `destroy(id)` |  `promise` | Delete the Group. |
| `users(id)` |  `promise` | Return array of users that are members of the Group. [Documentation](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Group_Users/02r30000006p000000/) |
| `addUsers(id, users)` |  `promise` | Adds users to the Group. Expects an array of usernames. |
| `reassign(id, username)` | `promise` | Reassign ownership of the group |

## Sharing Service

| Method |  Returns |Description |
| --- | --- | --- |
| `shareItemWithEveryone(owner, itemId)` | `promise` | Shares an item with everyone |
| `shareItemWithOrg(owner, itemId)` | `promise` | Shares an item with the Organization |
| `shareItemsWithGroups(owner, items, groups)` | `promise` | Shares a list of items with a list of groups. Both are arrays of ids. Owner must own all items |
| `shareItemsWithControl(owner,  items, groups)` | `promise` | Similar to `shareItemsWithGroups` except it confirms `itemControl` (aka edit permission conferred via group membership) |
| `shareItems(options)` | `promise` | Used internally by the other methods, but could be useful in some cases |

## User Service

| Method |  Returns |Description |
| --- | --- | --- |
| `search(form)` | `promise` | Executes via `/sharing/rest/community/users`. The form is an object properties matching the [search params](http://resources.arcgis.com/en/help/arcgis-rest-api/#/User_Search/02r3000000m6000000/) |
| `getByName(username)` | `promise` | Get a user object by name. |


## OAuth Service
**Note:** This is not  used for authentication - rather its purpose is to allow Application Items to be programatically manipulated.

| Method |  Returns |Description |
| --- | --- | --- |
| `registerApp (itemId, redirectUris, appType = 'browser')` | `promise` | Registers an App item as an actual AGO Application. Returning clientId, client secret etc |
| `updateApp(clientId, redirectUris)` | `promise` | Currently just supports changing the set of valid redirect uris. PR's accepted to expand this |

### Geocode Service

| Method |  Returns |Description |
| --- | --- | --- |
| `findLocationAddress(inputString)` | `promise` | Returns a location address based on an input string that moves through a specified or default geocode url |

### environment.js

Configuration for how to connect to the portal is managed in the `torii` section. If you are using ArcGIS Online, the `portalUrl` property is not needed.
```
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

## Installation

* `ember install ember-arcgis-portal-services`
* `npm install`
* `bower install`


## Running Tests
**Note:** Currently there are no automated tests for this addon. PR's welcomed :)

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`
