import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {
  session: Ember.inject.service('session'),

  /**
   * Update the portal
   */
  update (portal, portalOpts) {
    // console.log('Portal Service got update for ' + portal.id);
    const portalRestUrl = this.getPortalRestUrl(portalOpts);
    let url = `${portalRestUrl}/portals/${portal.id}/update?f=json`;
    let serializedPortal = this._serializePortal(portal);
    return this._post(url, serializedPortal, portalOpts);
  },

  /**
   * Serialize Portal
   * There is not much we can actually update on this object, so
   * we strip it down A LOT.
   */
  _serializePortal (portal) {
    let clone = {};
    // if more properties are needed, please open a PR on this project
    if (portal.portalProperties) {
      clone.portalProperties = JSON.stringify(portal.portalProperties);
    }

    return clone;
  },

  /**
   * Shared logic for POST operations
   */
  _post (url, obj, portalOpts) {
    let options = {
      method: 'POST',
      data: obj
    };
    return this.request(url, options, portalOpts);
  },

  /**
   * Upload a resource (file) to an item
   */
  uploadResource (file, portalOpts) {
    // Valid types
    // const validTypes = ['json', 'xml', 'txt', 'png', 'jpeg', 'gif', 'bmp', 'pdf', 'mp3', 'mp4', 'zip'];
    // TODO: Check type
    // const portalId = this.get('session.portal.id');
    const portalRestUrl = this.getPortalRestUrl(portalOpts);
    let url = `${portalRestUrl}/portals/self/addresource?f=json`;
    let options = {};
    options.body = new FormData();
    // stuff the file into the formData...
    options.body.append('file', file);
    options.body.append('text', null);
    options.body.append('key', file.name);
    options.method = 'POST';
    return this.request(url, options, portalOpts);
  },

  /**
   * Add a resource
   */
  addResource (name, content, portalOpts) {
    // const portalId = this.get('session.portal.id');
    const portalRestUrl = this.getPortalRestUrl(portalOpts);
    let url = `${portalRestUrl}/portals/self/addresource?f=json`;
    let options = {
      method: 'POST',
      data: {
        key: name,
        text: content
      }
    };
    return this.request(url, options, portalOpts);
  },

  /**
   * Get the resources associated with an Item
   */
  getResources (portalOpts) {
    // const portalId = this.get('session.portal.id');
    const portalRestUrl = this.getPortalRestUrl(portalOpts);
    let url = `${portalRestUrl}/portals/self/resources?f=json`;
    return this.request(url, null, portalOpts);
  },

  /**
   * Remove a resource
   */
  removeResource (resourceName, portalOpts) {
    const portalRestUrl = this.getPortalRestUrl(portalOpts);
    let url = `${portalRestUrl}/portals/self/removeresource?f=json`;
    return this.request(url, { method: 'POST', data: { key: resourceName } }, portalOpts);
  },

  /**
  * Paged access to users in a portal
  */
  users (portalId, start = 1, num = 100, portalOpts) {
    const portalRestUrl = this.getPortalRestUrl(portalOpts);
    let url = `${portalRestUrl}/portals/${portalId}/users/?f=json&start=${start}&num=${num}`;
    return this.request(url, null, portalOpts);
  }

});
