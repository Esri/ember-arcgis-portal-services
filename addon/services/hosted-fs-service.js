import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  /**
   * Create a hosted service
   */
  create (createParameters, username, folderId, portalOpts) {
    let urlPath = `/content/users/${username}/createService?f=json`;
    if (folderId) {
      urlPath = `/content/users/${username}/${folderId}/createService?f=json`;
    }
    return this._post(urlPath, {
      outputType: 'featureService',
      createParameters: JSON.stringify(createParameters)
    }, portalOpts);
  },

  /**
   * Add to the service definition
   */
  addToDefinition (featureServiceUrl, definition, layerId, portalOpts) {
    let adminUrl = featureServiceUrl.replace(/\/arcgis\/rest\/services\//i, '/arcgis/rest/admin/services/');
    let urlPath = `${adminUrl}/addToDefinition?f=json`;
    if (layerId) {
      urlPath = `${adminUrl}/${layerId}/addToDefinition?f=json`;
    }
    return this._post(urlPath, {
      'addToDefinition': JSON.stringify(definition)
    }, portalOpts);
  },

  // /**
  //  * Update metadata for an item
  //  * TODO: Can this be moved to items-service? Looks like it's just updating the metadata...
  //  */
  // updateMetadata (itemId, owner, metadata, folderId, portalOpts) {
  //   let urlPath = `/content/users/${owner}/${folderId}/items/${itemId}/update?f=json`;
  //   if (folderId) {
  //     urlPath = `/content/users/${owner}/items/${itemId}/update?f=json`;
  //   }
  //   return this._post(urlPath, metadata, portalOpts);
  // },

  remove (itemId, owner, portalOpts) {
    Ember.error('Use items-service.remove(...) to remove a hosted feature service');
  },

  /**
   * Shared logic for POST operations
   */
  _post (urlPath, service, portalOpts) {
    let options = {
      method: 'POST',
      data: service
    };
    return this.request(urlPath, options, portalOpts);
  }

});
