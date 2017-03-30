import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  /**
   * Group Search
   */
  search (form, portalOpts) {
    let qs = this.encodeForm(form);
    const portalBaseUrl = this.getPortalRestUrl(portalOpts);
    let url = `${portalBaseUrl}/community/groups?${qs}&f=json`;
    return this.request(url, null, portalOpts);
  },

  /**
   * Get the item json
   */
  getById (id, portalOpts) {
    const portalBaseUrl = this.getPortalRestUrl(portalOpts);
    let url = `${portalBaseUrl}/community/groups/${id}?f=json`;
    return this.request(url, null, portalOpts);
  },

  /**
   * Get items in a group, by Group Id
   * TODO: Add Paging
   */
  getItemsById (id, portalOpts) {
    const portalBaseUrl = this.getPortalRestUrl(portalOpts);
    const url = `${portalBaseUrl}/content/groups/${id}?f=json`;
    return this.request(url, null, portalOpts);
  },

  /**
   * Create a group
   */
  create (group, portalOpts) {
    const portalBaseUrl = this.getPortalRestUrl(portalOpts);
    let url = `${portalBaseUrl}/community/createGroup?f=json`;
    return this._post(url, group, portalOpts);
  },

  /**
   * Update an existing group
   */
  update (group, portalOpts) {
    const portalBaseUrl = this.getPortalRestUrl(portalOpts);
    let url = `${portalBaseUrl}/community/groups/${group.id}/update?f=json`;
    return this._post(url, group, portalOpts);
  },

  /**
   * Create a new group or update an existing one if it has an id
   */
  save (group, portalOpts) {
    if (group.id) {
      return this.update(group, portalOpts).then((response) => {
        // normalize response to include group like create() does
        response.group = group;
        response.group.id = response.groupId;
        return response;
      });
    } else {
      return this.create(group, portalOpts);
    }
  },

  /**
   * Shared logic for POST operations
   */
  _post (url, group, portalOpts) {
    let options = {
      method: 'POST',
      data: group
    };
    return this.request(url, options, portalOpts);
  },

  /**
   * Get the users that are members of a group
   */
  users (id, portalOpts) {
    const portalBaseUrl = this.getPortalRestUrl(portalOpts);
    const url = `${portalBaseUrl}/community/groups/${id}/users?f=json`;
    return this.request(url, null, portalOpts);
  },

  /**
   * Add users to a group
   */
  addUsers (id, users, portalOpts) {
    let data = {
      users: users.join(',')
    };
    const portalBaseUrl = this.getPortalRestUrl(portalOpts);
    let url = `${portalBaseUrl}/community/groups/${id}/addUsers?f=json`;
    let options = {
      method: 'POST',
      data: data
    };
    return this.request(url, options, portalOpts);
  },

  /**
   * Remove users to a group
   */
  removeUsers (id, users, portalOpts) {
    let data = {
      users: users.join(',')
    };
    const portalBaseUrl = this.getPortalRestUrl(portalOpts);
    let url = `${portalBaseUrl}/community/groups/${id}/removeUsers?f=json`;
    let options = {
      method: 'POST',
      data: data
    };
    return this.request(url, options, portalOpts);
  },

  /**
   * Reassign ownership of the group
   */
  reassign (/* id, username */) {
    Ember.debug('group-service.reassign not implemented!');
  },

  /**
   * Delete a group from AGO
   */
  remove (id, portalOpts) {
    const portalBaseUrl = this.getPortalRestUrl(portalOpts);
    let url = `${portalBaseUrl}/community/groups/${id}/delete?f=json`;
    let options = {
      method: 'POST'
    };
    return this.request(url, options, portalOpts);
  }
});
