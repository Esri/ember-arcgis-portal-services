import getServiceAdminUrl from 'ember-arcgis-portal-services/utils/get-service-admin-url';
import Service from '@ember/service';
import serviceMixin from '../mixins/service-mixin';

export default Service.extend(serviceMixin, {

  /**
   * Feature Service names must be unique within an organization
   */
  serviceExists (serviceName, orgId, portalOpts) {
    let urlPath = `/portals/${orgId}/isServiceNameAvailable?f=json`;
    return this.request(urlPath, {
      method: 'POST',
      data: {
        name: serviceName,
        type: 'Feature Service'
      }
    }, portalOpts);
  },

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
   * Create a hosted service view
   */
  createView (createParameters, username, folderId, portalOpts) {
    let urlPath = `/content/users/${username}/createService?f=json`;
    if (folderId) {
      urlPath = `/content/users/${username}/${folderId}/createService?f=json`;
    }
    return this._post(urlPath, {
      outputType: 'featureService',
      isView: true,
      createParameters: JSON.stringify(createParameters)
    }, portalOpts);
  },

  /**
   * Add to the service definition
   */
  addToDefinition (featureServiceUrl, definition, layerId, portalOpts) {
    const url = getServiceAdminUrl(featureServiceUrl, 'addToDefinition', layerId);
    // since the fs has it's own url we use the requestUrl method
    return this.requestUrl(url, {
      method: 'POST',
      data: {
        'addToDefinition': JSON.stringify(definition)
      }
    }, portalOpts);
  },

  /**
   * Add to the service definition
   */
  updateDefinition (featureServiceUrl, definition, layerId, portalOpts) {
    const url = getServiceAdminUrl(featureServiceUrl, 'updateDefinition', layerId);
    // since the fs has it's own url we use the requestUrl method
    return this.requestUrl(url, {
      method: 'POST',
      data: {
        'updateDefinition': JSON.stringify(definition)
      }
    }, portalOpts);
  },

  /**
   * Delete from the service definition
   */
  deleteFromDefinition (featureServiceUrl, definition, layerId, portalOpts) {
    const url = getServiceAdminUrl(featureServiceUrl, 'deleteFromDefinition', layerId);
    // since the fs has it's own url we use the requestUrl method
    return this.requestUrl(url, {
      method: 'POST',
      data: {
        deleteFromDefinition: JSON.stringify(definition)
      }
    }, portalOpts);
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
