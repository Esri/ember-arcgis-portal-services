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
   * Protect a group in AGO from deletion
   */
  protect (id, portalOpts) {
    const urlPath = `/community/groups/${id}/protect?f=json`;
    const options = {
      method: 'POST'
    };
    return this.request(urlPath, options, portalOpts);
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
  },

  /**
   * request for current user to join a group
   */
  join (id, portalOpts) {
    const urlPath = `/community/groups/${id}/join?f=json`;
    const options = {
      method: 'POST'
    };
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * request for current user to leave a group
   */
  leave (id, portalOpts) {
    const urlPath = `/community/groups/${id}/leave?f=json`;
    const options = {
      method: 'POST'
    };
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Returns a boolean of user's group admin status
   */
  isUserGroupAdmin (id, username, portalOpts) {
    this.getUserMembership(id, username, portalOpts)
      .then((result) => {
        return result === 'admin';
      });
  },
  /**
   * Return the type of group membership of a user
   */
  getUserMembership (id, username, portalOpts) {
    let result = 'nonmember';
    return this.users(id, portalOpts)
      .then((response) => {
        // check if username is in the admin hash...
        if (response.owner === username) {
          result = 'owner';
        }
        if (response.admins.includes(username)) {
          result = 'admin';
        }
        if (response.users.includes(username)) {
          result = 'user';
        }
        return result;
      })
      .catch((err) => {
        Ember.debug(`GroupService:getUserMembership ${id} for ${username} errored: ${err}`);
        return result;
      });
  },

  /**
   * Update membership(s) from user to admin or admin to user
   */
  updateUserMemberships (id, users, type, portalOpts) {
    let data = {};
    if (type === 'user') {
      data.admins = users;
    } else if (type === 'admin') {
      data.users = users;
    } else {
      let error = new Error(`Please pass in a type (user or admin) for ${users} when updating memberships`);
      return Ember.RSVP.reject(error);
    }
    const urlPath = `/community/groups/${id}/updateUsers?f=json`;
    const options = {
      method: 'POST',
      data: data
    };
    return this.request(urlPath, options, portalOpts);
  }
});
