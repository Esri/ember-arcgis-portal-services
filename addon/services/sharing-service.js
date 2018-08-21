import { deprecate } from '@ember/application/deprecations';
import { A } from '@ember/array';
import { debug } from '@ember/debug';
import { reject, resolve } from 'rsvp';
import Service, { inject as service } from '@ember/service';
import serviceMixin from '../mixins/service-mixin';
import { setItemAccess } from '@esri/arcgis-rest-sharing';

export default Service.extend(serviceMixin, {

  itemService: service('items-service'),
  groupService: service('groups-service'),

  /**
   * Set access
   * access options null | org | everyone
   */
  setAccess (owner, itemId, access = null, portalOpts) {
    if (access === 'everyone') {
      access = 'public';
    }

    const args = this.addOptions({
      id: itemId,
      owner,
      access,
    }, portalOpts);

    return setItemAccess(args);
  },
  /**
   * Share an item with a group, optionally with item control
   */
  shareWithGroup (owner, itemId, groupId, confirmItemControl = false, portalOpts) {
    return this.changeGroupSharing('share', owner, itemId, groupId, confirmItemControl, portalOpts);
  },
  /**
   * Unshare item with a group
   */
  unShareWithGroup (owner, itemId, groupId, portalOpts) {
    return this.changeGroupSharing('unshare', owner, itemId, groupId, false, portalOpts);
  },
  /**
   * Change sharing of an item with a group, optionally with item control
   * In order to make this more deterministic, we issue a query
   * to check if the item is already shared to the group.
   * We also determine the correct url to use, and
   * if the user is not the owner, or orgAdmin, check if the user is an groupAdmin
   * which would allow them to change sharing of items in the group
   */
  changeGroupSharing (action, owner, itemId, groupId, confirmItemControl = false, portalOpts) {
    const username = this.get('session.currentUser.username');
    const isAdmin = this.get('session').isAdmin();
    const resultProp = action === 'share' ? 'notSharedWith' : 'notUnsharedFrom';
    // check if the item is already shared with group...
    return this.isItemSharedWithGroup(itemId, groupId, portalOpts)
    .then((result) => {
      // if we are sharing and result is true OR we are unsharing and result is false... short circuit
      if ((action === 'share' && result === true) || (action === 'unshare' && result === false)) {
        // item is shared so we can short-circuit here and send back the same structure ago would
        let obj = {itemId: itemId, shortcut: true};
        obj[resultProp] = [];
        return resolve(obj);
      } else {
        // is the user a member of the group?
        return this.get('groupService').getUserMembership(groupId, username)
          .then((membership) => {
            let urlPathPromise = null;
            if (!membership) {
              // reject the whole thing...
              urlPathPromise = reject(`This item can not be shared by ${username} as they are not a member of the specified group ${groupId}.`);
            } else {
              // user is a member of the group - now we figure out if/how they can share it...
              // if user is the owner, or orgAdmin, they can share to the group using the item-owner url...
              if (owner === username) {
                urlPathPromise = resolve(`/content/users/${owner}/items/${itemId}/${action}`);
              } else {
                if (membership === 'admin' || isAdmin) {
                  urlPathPromise = resolve(`/content/items/${itemId}/${action}`);
                } else {
                  // user can not share item to group b/c they don't own the item
                  urlPathPromise = reject(`This item can not be ${action} by ${username} as they are neither the owner, a groupAdmin of ${groupId}, nor an org_admin.`);
                }
              }
            }
            return urlPathPromise;
          })
          .then((urlPath) => {
            // actuall do the sharing...
            let data = {
              f: 'json',
              groups: groupId
            };
            if (confirmItemControl) {
              data.confirmItemControl = true;
            }
            return this._post(urlPath, data);
          })
          .then((result) => {
            if (result[resultProp].length) {
              let msg = `Item ${itemId} could not be ${action} to group ${groupId}.`;
              debug(msg);
              return reject(msg);
            } else {
              // all is well
              return result;
            }
          });
      } // else
    }); // then
  },

  /**
   * Means to check if an item is already shard to a group
   * This *may* give a false-false if the user making the call
   * does not have access to the group
   */
  isItemSharedWithGroup (itemId, groupId, portalOpts) {
    const query = {
      q: `id: ${itemId} AND group: ${groupId}`,
      start: 1,
      num: 10,
      sortField: 'title'
    };
    return this.get('itemService').search(query, portalOpts)
    .then((searchResult) => {
      if (searchResult.total === 0) {
        return false;
      } else {
        // Check that the item actually was returned
        let results = A(searchResult.results);
        let itm = results.find((itm) => {
          return itm.id === itemId;
        });
        if (itm) {
          return true;
        } else {
          return false;
        }
      }
    });
  },

  /**
   * Deprecated but proxy to the new callls
   */
  shareItemWithEveryone (owner, itemId, portalOpts) {
    deprecate('use .setAccess(owner,itemId, access).', false, {id: 'shareWithEveryoneDeprecation', until: '10.0.0'});
    return this.setAccess(owner, itemId, 'everyone', portalOpts);
  },

  shareItemWithOrg (owner, itemId, portalOpts) {
    deprecate('use .setAccess(owner,itemId, access).', false, {id: 'shareWithEveryoneDeprecation', until: '10.0.0'});
    return this.setAccess(owner, itemId, 'org', portalOpts);
  },

  /**
   * Deprecated without proxies to new calls
   */
  shareItemsWithGroups (/* owner, items, groups */) {
    deprecate('use .shareWithGroup(owner,itemId, groupId, confirmItemControl).', false, {id: 'shareItemsWithGroupsDeprecation', until: '10.0.0'});
    return reject('sharing-service::shareItemsWithGroups is Deprecated. Use .shareItemWithGroup(owner,itemId, groupId, confirmItemControl).');
  },
  //
  shareItemsWithControl (/* owner, items, groups */) {
    deprecate('use .shareWithGroup(owner,itemId, groupId, confirmItemControl).', false, {id: 'shareItemsWithControlDeprecation', until: '10.0.0'});
    return reject('sharing-service::shareItemsWithControl is Deprecated. Use .shareItemWithGroup(owner,itemId, groupId, confirmItemControl).');
  },
  //
  shareItems (/* options */) {
    deprecate('use .shareItemWithGroup(...) or .setAccess(...)', false, {id: 'shareItemsDeprecation', until: '10.0.0'});
    return reject('sharing-service::shareItemsWithControl is Deprecated. Use .shareItemWithGroup(...) or .setAccess(...)');
  },

  /**
   * Shared logic for POST operations
   */
  _post (urlPath, data, portalOpts) {
    const options = {
      method: 'POST',
      data: data
    };

    return this.request(urlPath, options, portalOpts);
  }

});
