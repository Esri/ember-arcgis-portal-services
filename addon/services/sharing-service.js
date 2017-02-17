import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  itemService: Ember.inject.service('items-service'),

  /**
   * Set access
   * access options null | org | everyone
   */
  setAccess (owner, itemId, access = null) {
    const portalBaseUrl = this.get('portalRestUrl');
    let url = `${portalBaseUrl}/content/users/${owner}/items/${itemId}/share`;
    let username = this.get('session.currentUser.username');
    let isAdmin = this.get('session').isAdmin();
    // Reject if the current user is neither the owner nor an orgAdmin
    if (owner !== username && !isAdmin) {
      return Ember.RSVP.reject(`This item can not be shared by ${username} as they are neither the owner, nor an org_admin.`);
    }
    let data = {
      items: itemId,
      f: 'json',
      org: false,
      everyone: false
    };
    // handle the access
    if (access) {
      if (access === 'org') {
        data.org = true;
        data.everyone = false;
      }

      if (access === 'everyone' || access === 'public') {
        data.everyone = true;
        data.org = true;
      }
    }

    return this._post(url, data);
  },

  /**
   * Share an item with a group, optionally with item control
   * In order to make this more deterministic, we issue a query
   * to check if the item is already shared to the group. If it is
   * we short-circuit and do not make the sharing call.
   */
  shareWithGroup (owner, itemId, groupId, confirmItemControl = false) {
    const portalBaseUrl = this.get('portalRestUrl');
    let url = `${portalBaseUrl}/content/users/${owner}/items/${itemId}/share`;
    let username = this.get('session.currentUser.username');
    let isAdmin = this.get('session').isAdmin();
    // Reject if the current user is neither the owner nor an orgAdmin
    if (owner !== username && !isAdmin) {
      return Ember.RSVP.reject(`This item can not be shared by ${username} as they are neither the owner, nor an org_admin.`);
    }
    // create a query to check if the item is already shared w/ the group...

    return this.isItemSharedWithGroup(itemId, groupId)
    .then((result) => {
      if (result === false) {
        // item is not shared with the group
        let data = {
          items: itemId,
          f: 'json',
          groups: groupId
        };
        if (confirmItemControl) {
          data.confirmItemControl = true;
        }
        return this._post(url, data)
        .then((result) => {
          if (result.notSharedWith.length) {
            let msg = `Item ${itemId} could not be shared to group ${groupId}. This is likely because the owner ${owner} is not a member of this group.`;
            Ember.debug(msg);
            return Ember.RSVP.reject(msg);
          } else {
            // all is well
            return result;
          }
        });
      } else {
        // item is shared so we can short-circuit here and send back the same structure ago would
        return Ember.RSVP.resolve({itemId: itemId, notSharedWith: []});
      }
    });
  },

  /**
   * Means to check if an item is already shard to a group
   * This *may* give a false-false if the user making the call
   * does not have access to the group
   */
  isItemSharedWithGroup (itemId, groupId) {
    let query = {
      q: `id: ${itemId} AND group: ${groupId}`,
      start: 1,
      num: 10,
      sortField: 'title'
    };
    return this.get('itemService').search(query)
    .then((searchResult) => {
      if (searchResult.total === 0) {
        return false;
      } else {
        // Check that the item actually was returned
        let results = Ember.A(searchResult.results);
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
  shareItemWithEveryone (owner, itemId) {
    Ember.deprecate('use .setAccess(owner,itemId, access).', false, {id: 'shareWithEveryoneDeprecation', until: '10.0.0'});
    return this.setAccess(owner, itemId, 'everyone');
  },

  shareItemWithOrg (owner, itemId) {
    Ember.deprecate('use .setAccess(owner,itemId, access).', false, {id: 'shareWithEveryoneDeprecation', until: '10.0.0'});
    return this.setAccess(owner, itemId, 'org');
  },

  /**
   * Deprecated without proxies to new calls
   */
  shareItemsWithGroups (owner, items, groups) {
    Ember.deprecate('use .shareItemWithGroup(owner,itemId, groupId, confirmItemControl).', false, {id: 'shareItemsWithGroupsDeprecation', until: '10.0.0'});
    return Ember.RSVP.reject('sharing-service::shareItemsWithGroups is Deprecated. Use .shareItemWithGroup(owner,itemId, groupId, confirmItemControl).');
  },
  //
  shareItemsWithControl (owner, items, groups) {
    Ember.deprecate('use .shareItemWithGroup(owner,itemId, groupId, confirmItemControl).', false, {id: 'shareItemsWithControlDeprecation', until: '10.0.0'});
    return Ember.RSVP.reject('sharing-service::shareItemsWithControl is Deprecated. Use .shareItemWithGroup(owner,itemId, groupId, confirmItemControl).');
  },
  //
  shareItems (options) {
    Ember.deprecate('use .shareItemWithGroup(...) or .setAccess(...)', false, {id: 'shareItemsDeprecation', until: '10.0.0'});
    return Ember.RSVP.reject('sharing-service::shareItemsWithControl is Deprecated. Use .shareItemWithGroup(...) or .setAccess(...)');
  },

  /**
   * Shared logic for POST operations
   */
  _post (url, data) {
    let options = {
      method: 'POST',
      data: data
    };

    return this.request(url, options);
  },

});
