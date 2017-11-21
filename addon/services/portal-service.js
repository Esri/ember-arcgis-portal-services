import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {
  session: Ember.inject.service('session'),

  getById (id, portalOpts) {
    const urlPath = `/portals/${id}?f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  self (portalOpts) {
    const urlPath = `/portals/self?f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  /**
   * Update the portal
   */
  update (portal, portalOpts) {
    // console.log('Portal Service got update for ' + portal.id);
    const urlPath = `/portals/${portal.id || 'self'}/update?f=json`;
    const serializedPortal = this._serializePortal(portal);
    return this._post(urlPath, serializedPortal, portalOpts);
  },

  /**
   * Serialize Portal
   * There is not much we can actually update on this object, so
   * we strip it down A LOT.
   */
  _serializePortal (portal) {
    const allowedProperties = [ 'access', 'creditAssignments' ];

    let result = allowedProperties.reduce((acc, property) => {
      if (portal.hasOwnProperty(property)) {
        acc[property] = portal[property];
      }
      return acc;
    }, {});

    if (portal.portalProperties) {
      result.portalProperties = JSON.stringify(portal.portalProperties);
    }

    return result;
  },

  /**
   * Shared logic for POST operations
   */
  _post (urlPath, obj, portalOpts) {
    const options = {
      method: 'POST',
      data: obj
    };
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Upload a resource (file) to an item
   */
  uploadResource (file, portalOpts) {
    // Valid types
    // const validTypes = ['json', 'xml', 'txt', 'png', 'jpeg', 'gif', 'bmp', 'pdf', 'mp3', 'mp4', 'zip'];
    // TODO: Check type
    const urlPath = `/portals/self/addresource?f=json`;
    let options = {};
    options.body = new FormData();
    // stuff the file into the formData...
    options.body.append('file', file);
    options.body.append('text', null);
    options.body.append('key', file.name);
    options.method = 'POST';
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Add a resource
   */
  addResource (name, content, portalOpts) {
    const urlPath = `/portals/self/addresource?f=json`;
    const options = {
      method: 'POST',
      data: {
        key: name,
        text: content
      }
    };
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Get the resources associated with an Item
   */
  getResources (portalOpts) {
    const urlPath = `/portals/self/resources?f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  /**
   * Remove a resource
   */
  removeResource (resourceName, portalOpts) {
    const urlPath = `/portals/self/removeresource?f=json`;
    return this.request(urlPath, { method: 'POST', data: { key: resourceName } }, portalOpts);
  },

  /**
  * Paged access to users in a portal
  */
  users (portalId, start = 1, num = 100, portalOpts) {
    const urlPath = `/portals/${portalId}/users/?f=json&start=${start}&num=${num}`;
    return this.request(urlPath, null, portalOpts);
  },

  configureSocialProviders (opts, portalOpts) {
    /*
      portalOpts: {
        signUpMode: Automatic | ???
        providers: facebook,google
        level: 1 | 2
        role (optional): org_user (default) | org_publisher | id of custom role
        userCreditAssignment (optional): <number>
        groups (optional): groupId1, groupId2, ...
      }
    */
    const urlPath = `/portals/self/socialProviders/configure?f=json`;
    return this._post(urlPath, opts, portalOpts);
  },

  checkUsername (username, portalOpts) {
    const urlPath = `/community/checkUsernames?f=json&usernames=${username}`;
    return this.request(urlPath, null, portalOpts);
  },

  checkUrlKey (urlKey, portalOpts) {
    const urlPath = `/portals/isUrlKeyAvailable?urlKey=${urlKey}&f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  activate (opts, portalOpts) {
    const urlPath = `/portals/activate?f=json`;
    return this._post(urlPath, opts, portalOpts);
  }

});
