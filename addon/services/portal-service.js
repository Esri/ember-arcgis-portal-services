import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {
  session: Ember.inject.service('session'),

  /**
   * Update an existing item
   * will update the `/data` if the `.text` value is present
   */
  update (portal) {
    console.log('Portal Service got update for ' + portal.id);
    let portalRestUrl = this.getPortalRestUrl();
    let url = `${portalRestUrl}/portals/${portal.id}/update?f=json`;
    return this._post(url, portal);
  },

  /**
   * Shared logic for POST operations
   */
  _post (url, obj) {
    let options = {
      method: 'POST',
      data: obj
    };
    return this.request(url, options);
  },

  /**
   * Upload a resource (file) to an item
   */
  uploadResource (file) {
    // Valid types
    // const validTypes = ['json', 'xml', 'txt', 'png', 'jpeg', 'gif', 'bmp', 'pdf', 'mp3', 'mp4', 'zip'];
    // TODO: Check type
    // const portalId = this.get('session.portal.id');
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/portals/self/addresource?f=json`;
    let options = {};
    options.body = new FormData();
    // stuff the file into the formData...
    options.body.append('file', file);
    options.body.append('text', null);
    options.body.append('key', file.name);
    options.method = 'POST';
    return this.request(url, options);
  },

  /**
   * Add a resource
   */
  addResource (name, content) {
    // const portalId = this.get('session.portal.id');
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/portals/self/addresource?f=json`;
    let options = {
      method: 'POST',
      data: {
        key: name,
        text: content
      }
    };
    return this.request(url, options);
  },

  /**
   * Get the resources associated with an Item
   */
  getResources () {
    // const portalId = this.get('session.portal.id');
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/portals/self/resources?f=json`;
    return this.request(url);
  },

  /**
   * Remove a resource
   */
  removeResource (resourceName) {
    // const portalId = this.get('session.portal.id');
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/portals/self/removeresource?f=json`;
    return this.request(url, {method: 'POST', data: {key: resourceName}});
  },

  /**
  * Paged access to users in a portal
  */
  users (portalId, start = 1, num = 100) {
    const portalBaseUrl = this.get('portalRestUrl');
    let url = `${portalBaseUrl}/portals/${portalId}/users/?f=json&start=${start}&num=${num}`;
    return this.request(url);
  }

});
