import { copy } from '@ember/object/internals';
import { deprecate } from '@ember/application/deprecations';
import Service, { inject as service } from '@ember/service';
import serviceMixin from '../mixins/service-mixin';
import {
  getUserNotifications,
  removeNotification,
  getUserInvitations,
  getUserInvitation,
  acceptInvitation,
  declineInvitation
} from '@esri/arcgis-rest-users';

export default Service.extend(serviceMixin, {

  session: service('session'),

  /**
   * User Search
   */
  search (form, portalOpts) {
    deprecate('use .searchPortalUsers(...) or .searchCommunityUsers(...)', false, {id: 'searchDeprecation', until: '10.0.0'});
    if (this.get('session.isAuthenticated') || (portalOpts && portalOpts.portalHostname)) {
      return this.searchPortalUsers(...arguments);
    } else {
      return this.searchCommunityUsers(...arguments);
    }
  },

  searchPortalUsers (form, portalOpts) {
    // all users in the org
    // q is ignored!
    // but you can do things like firstname=
    const qs = this.encodeForm(form);
    let urlPath = `/portals/self/users?${qs}&f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  searchCommunityUsers (form, portalOpts) {
    // all users in the portal
    // q works and you can do q=orgid:...
    // but you get less info than with allUsers
    const qs = this.encodeForm(form);
    let urlPath = `/community/users?${qs}&f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  getByName (username, portalOpts) {
    const urlPath = `/community/users/${username}?f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  /**
   * Update an existing user
   * will update the `/data` if the `.text` value is present
   */
  update (user, portalOpts, formData) {
    const urlPath = `/community/users/${user.username}/update?f=json`;
    return this._post(urlPath, formData || user, portalOpts);
  },

  signup (user, portalOpts) {
    const urlPath = `/community/signup?f=json`;
    return this._post(urlPath, user, portalOpts);
  },

  getNotifications (portalOpts) {
    const args = this.addOptions({}, portalOpts);
    return getUserNotifications(args);
  },

  removeNotification (id, portalOpts) {
    const args = this.addOptions({id}, portalOpts);
    return removeNotification(args);
  },

  getInvitations (portalOpts) {
    const args = this.addOptions({}, portalOpts);
    return getUserInvitations(args);
  },

  getInvitationById (invitationId, portalOpts) {
    const args = this.addOptions({invitationId}, portalOpts);
    return getUserInvitation(args);
  },

  acceptInvitation (invitationId, portalOpts) {
    const args = this.addOptions({invitationId}, portalOpts);
    return acceptInvitation(args);
  },

  declineInvitation (invitationId, portalOpts) {
    const args = this.addOptions({invitationId}, portalOpts);
    return declineInvitation(args);
  },

  /**
   * Extra logic to transform the item prior to POSTing it
   */
  _serializeUser (user) {
    let clone = copy(user, true);

    // groups are ignored
    delete clone.groups;

    // Array items need to become comma delim strings
    if (user.tags && user.tags.join) {
      clone.tags = user.tags.join(', ');
      if (clone.tags === '') {
        // NOTE: you can't currently reset the tags to an empty array
        // despite what the docs say here:
        // http://resources.arcgis.com/en/help/arcgis-rest-api/#/Update_User/02r3000000m0000000/
        clone.tags = 'user';
      }
    }

    return clone;
  },

  /**
   * Shared logic for POST operations
   */
  _post (urlPath, item, portalOpts) {
    const options = { method: 'POST' };
    if (item.toString() === '[object FormData]') {
      options.data = item;
      options.headers = {
        'Accept': '*/*',
        'Content-Type': 'multipart/form-data; boundary=------chase-is-really-cool'
      }
    } else {
      options.data = this._serializeUser(item);
    }
    return this.request(urlPath, options, portalOpts);
  }

});
