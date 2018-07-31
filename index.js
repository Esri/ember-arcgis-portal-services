/*    Copyright 2017 Esri
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License. */

/* jshint node: true */
'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-arcgis-portal-services',
  isDevelopingAddon: function () {
    return false;
  },

  included( /* app */ ) {
    this._super.included.apply(this, arguments);
    // bundle scripts from vendor folder
    this.import('vendor/@esri/arcgis-rest-request/request.umd.js');
    this.import('vendor/@esri/arcgis-rest-auth/auth.umd.js');
    this.import('vendor/@esri/arcgis-rest-sharing/sharing.umd.js');
  },

  treeForVendor(vendorTree) {
    var arcgisRequestTree = new Funnel(path.dirname(require.resolve('@esri/arcgis-rest-request/dist/umd/request.umd.js')), {
      files: ['request.umd.js', 'request.umd.js.map'],
      destDir: '@esri/arcgis-rest-request'
    });

    var arcgisAuthTree = new Funnel(path.dirname(require.resolve('@esri/arcgis-rest-auth/dist/umd/auth.umd.js')), {
      files: ['auth.umd.js', 'auth.umd.js.map'],
      destDir: '@esri/arcgis-rest-auth'
    });

    var arcgisSharingTree = new Funnel(path.dirname(require.resolve('@esri/arcgis-rest-sharing/dist/umd/sharing.umd.js')), {
      files: ['sharing.umd.js', 'sharing.umd.js.map'],
      destDir: '@esri/arcgis-rest-sharing'
    });

    var treesToMerge = [arcgisRequestTree, arcgisAuthTree, arcgisSharingTree];
    // if we got a vendorTree, and add it in
    if (vendorTree) {
      treesToMerge = [vendorTree, arcgisRequestTree, arcgisAuthTree, arcgisSharingTree];
    }

    return new MergeTrees(treesToMerge);
  }
};
