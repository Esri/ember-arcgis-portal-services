import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  /**
   * Group Search
   */
  search (form, portalOpts) {
    const qs = this.encodeForm(form);
    const urlPath = `/community/groups?${qs}&f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  /**
   * Get the item json
   */
  getById (id, portalOpts) {
    const urlPath = `/community/groups/${id}?f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  /**
   * Get items in a group, by Group Id
   * TODO: Add Paging
   */
  getItemsById (id, portalOpts) {
    const urlPath = `/content/groups/${id}?f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  /**
   * Create a group
   */
  create (group, portalOpts) {
    const urlPath = `/community/createGroup?f=json`;
    return this._post(urlPath, group, portalOpts);
  },

  /**
   * Update an existing group
   */
  update (group, portalOpts) {
    const urlPath = `/community/groups/${group.id}/update?f=json`;
    return this._post(urlPath, group, portalOpts);
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
  _post (urlPath, group, portalOpts) {
    const options = {
      method: 'POST',
      data: group
    };
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Get the users that are members of a group
   */
  users (id, portalOpts) {
    const urlPath = `/community/groups/${id}/users?f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  /**
   * Add users to a group
   */
  addUsers (id, users, portalOpts) {
    const data = {
      users: users.join(',')
    };
    const urlPath = `/community/groups/${id}/addUsers?f=json`;
    const options = {
      method: 'POST',
      data: data
    };
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Remove users to a group
   */
  removeUsers (id, users, portalOpts) {
    const data = {
      users: users.join(',')
    };
    const urlPath = `/community/groups/${id}/removeUsers?f=json`;
    const options = {
      method: 'POST',
      data: data
    };
    return this.request(urlPath, options, portalOpts);
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
    const urlPath = `/community/groups/${id}/delete?f=json`;
    const options = {
      method: 'POST'
    };
    return this.request(urlPath, options, portalOpts);
  }
});
