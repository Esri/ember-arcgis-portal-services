import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  /**
   * Create a hosted service
   */
  create (createParameters, username, folderId) {
    let portalRestUrl = this.get('portalRestUrl');
    let url;
    if (folderId) {
      url = `${portalRestUrl}/content/users/${username}/${folderId}/createService?f=json`;
    } else {
      url = `${portalRestUrl}/content/users/${username}/createService?f=json`;
    }
    return this._post(url, {
      outputType: 'featureService',
      createParameters: JSON.stringify(createParameters)
    });
  },

  addToDefinition (featureServiceUrl, definition, layerId) {
    let url;
    if (layerId) {
      url = featureServiceUrl.replace(/\/arcgis\/rest\/services\//i, '\/arcgis\/rest\/admin\/services\/') + layerId + '/addToDefinition?f=json';
    } else {
      url = featureServiceUrl.replace(/\/arcgis\/rest\/services\//i, '\/arcgis\/rest\/admin\/services\/') + '/addToDefinition?f=json';
    }
    return this._post(url, {
      'addToDefinition': JSON.stringify(definition)
    });
  },

  update (username, folderId, featureServiceItemId, metadata) {
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/content/users/${username}/${folderId}/items/${featureServiceItemId}/update?f=json`;
    return this._post(url, metadata);
  },

  /**
   * Shared logic for POST operations
   */
  _post (url, service) {
    let options = {
      method: 'POST',
      data: service
    };
    return this.request(url, options);
  }

});
