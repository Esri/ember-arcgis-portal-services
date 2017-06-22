///////////////////////////////////////////////////////////////////////////
// Copyright 2017 Esri
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​
///////////////////////////////////////////////////////////////////////////

import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  /**
   * Feature Service names must be unique within an organization
   */
  serviceExists (serviceName, orgId, portalOpts) {
    let urlPath = `/${orgId}/isServiceNameAvailable?f=json`;
    return this.requestUrl(urlPath, {
      method: 'GET',
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
    let adminUrl = featureServiceUrl.replace(/\/arcgis\/rest\/services\//i, '/arcgis/rest/admin/services/');
    let url = `${adminUrl}/addToDefinition?f=json`;
    if (layerId || layerId === 0) {
      url = `${adminUrl}/${layerId}/addToDefinition?f=json`;
    }
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
    let adminUrl = featureServiceUrl.replace(/\/arcgis\/rest\/services\//i, '/arcgis/rest/admin/services/');
    let url = `${adminUrl}/updateDefinition?f=json`;
    if (layerId || layerId === 0) {
      url = `${adminUrl}/${layerId}/updateDefinition?f=json`;
    }
    // since the fs has it's own url we use the requestUrl method
    return this.requestUrl(url, {
      method: 'POST',
      data: {
        'updateDefinition': JSON.stringify(definition)
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
