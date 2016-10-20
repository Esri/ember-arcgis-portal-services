import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  /**
   * Group Search
   */
  search (form) {
    let qs = this.encodeForm(form);
    const portalBaseUrl = this.get('portalRestUrl');
    let url = `${portalBaseUrl}/community/groups?${qs}`;
    return this.request(url);
  },

  /**
   * Get the item json
   */
  getById (id) {
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/community/groups/${id}`;
    return this.request(url);
  },

  /**
   * Get items in a group, by Group Id
   * TODO: Add Paging
   */
  getItemsById (id) {
    const portalBaseUrl = this.get('portalRestUrl');
    const url = `${portalBaseUrl}/content/groups/${id}?f=json`;
    return this.request(url);
  },

  /**
   * Create a group
   */
  create (group) {
    const portalBaseUrl = this.get('portalRestUrl');
    let url = `${portalBaseUrl}/community/createGroup?f=json`;
    return this._post(url, group);
  },

  /**
   * Update an existing group
   */
  update (group) {
    let portalBaseUrl = this.get('portalRestUrl');
    let url = `${portalBaseUrl}/community/groups/${group.id}/update?f=json`;
    return this._post(url, group);
  },

  /**
   * Create a new group or update an existing one if it has an id
   */
  save (group) {
    if (group.id) {
      return this.update(group).then((response) => {
        // normalize response to include group like create() does
        response.group = group;
        response.group.id = response.groupId;
        return response;
      });
    } else {
      return this.create(group);
    }
  },

  /**
   * Shared logic for POST operations
   */
  _post (url, group) {
    let options = {
      method: 'POST',
      data: group
    };
    return this.request(url, options);
  },

  /**
   * Get the users that are members of a group
   */
  users (id) {
    const portalBaseUrl = this.get('portalRestUrl');
    const url = `${portalBaseUrl}/community/groups/${id}/users?f=json`;
    return this.request(url);
  },

  /**
   * Add users to a group
   */
  addUsers (id, users) {
    let data = {
      users: users.join(',')
    };
    const portalBaseUrl = this.get('portalRestUrl');
    let url = `${portalBaseUrl}/community/groups/${id}/addUsers?f=json`;
    let options = {
      method: 'POST',
      data: data
    };
    return this.request(url, options);
  },

  /**
   * Reassign ownership of the group
   */
  reassign (id, username) {
    Ember.debug('group-service.reassign not implemented!');
  },

  /**
   * Delete a group from AGO
   */
  destroy (id) {
    const portalBaseUrl = this.get('portalRestUrl');
    let url = `${portalBaseUrl}/community/groups/${id}/delete?f=json`;
    let options = {
      method: 'POST'
    };
    return this.request(url, options);
  }
});
