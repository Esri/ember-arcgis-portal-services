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

  // register an application for OAuth access
  registerApp (itemId, redirectUris, appType = 'browser', portalOpts) {
    const urlPath = `/oauth2/registerApp?f=json`;
    const options = {
      method: 'POST',
      data: {
        itemId,
        appType,
        redirect_uris: JSON.stringify(redirectUris)
      }
    };
    return this.request(urlPath, options, portalOpts);
  },

  // update an app's OAuth registration
  // TODO: have this take other params that can be updated as options
  updateApp (clientId, redirectUris, portalOpts) {
    const urlPath = `/oauth2/apps/${clientId}/update?f=json`;
    const options = {
      method: 'POST',
      data: {
        client_id: clientId,
        redirect_uris: JSON.stringify(redirectUris)
      }
    };
    return this.request(urlPath, options, portalOpts);
  }
});
