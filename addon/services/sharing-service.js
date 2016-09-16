import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  shareItemWithEveryone (owner, itemId) {
    let data = {
      owner: owner,
      items: itemId,
      everyone: true,
      f: 'json'
    };
    return this.shareItems(data);
  },

  shareItemWithOrg (owner, itemId) {
    let data = {
      owner: owner,
      items: itemId,
      org: true,
      f: 'json'
    };
    return this.shareItems(data);
  },

  shareItemsWithGroups (owner, items, groups) {
    let data = {
      owner: owner,
      items: items.join(','),
      groups: groups.join(','),
      f: 'json'
    };
    return this.shareItems(data);
  },

  shareItemsWithControl (owner, items, groups) {
    let data = {
      owner: owner,
      items: items.join(','),
      groups: groups.join(','),
      confirmItemControl: true,
      f: 'json'
    };
    return this.shareItems(data);
  },

  shareItems (options) {
    const portalBaseUrl = this.get('portalRestUrl');
    let url = `${portalBaseUrl}/content/users/${options.owner}/shareItems`;
    return this._post(url, options);
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
