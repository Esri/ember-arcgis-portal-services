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
   * Get users folders
   */
  getUserFolders (username, portalOpts) {
    let urlPath = `/content/users/${username}?f=json&num=1`;
    return this.request(urlPath, {method: 'GET'}, portalOpts)
      .then((response) => {
        return response.folders;
      });
  },

  /**
   * Check if a folder already exists...
   */
  folderExists (folderTitle, username, portalOpts) {
    return this.getUserFolders(username, portalOpts)
      .then((folders) => {
        let match = folders.find((folder) => {
          return folder.title === folderTitle;
        });
        if (match) {
          return true;
        } else {
          return false;
        }
      });
  },

  /**
   * Create a new folder
   */
  create (folderTitle, username, portalOpts) {
    let urlPath = `/content/users/${username}/createFolder?f=json`;
    return this._post(urlPath, {title: folderTitle}, portalOpts)
      .then((response) => {
        return response.folder;
      });
  },

  /**
   * Remove a folder and all it's contents
   */
  remove (folderId, username, portalOpts) {
    let urlPath = `/content/users/${username}/${folderId}/delete?f=json`;
    return this.request(urlPath, { method: 'POST' }, portalOpts);
  },

  /**
   * Shared logic for POST operations
   */
  _post (urlPath, folder, portalOpts) {
    let options = {
      method: 'POST',
      data: folder
    };
    return this.request(urlPath, options, portalOpts);
  }
});
