/* Copyright 2017-2018 Esri - Apache 2.0 */
/* jshint node: true */
'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: require('./package').name,
  isDevelopingAddon: function () {
    return false;
  },

  included (/* app */) {
    this._super.included.apply(this, arguments);
    // bundle scripts from vendor folder
    this.import('vendor/@esri/arcgis-rest-request/request.umd.js');
    this.import('vendor/@esri/arcgis-rest-auth/auth.umd.js');
    this.import('vendor/@esri/arcgis-rest-sharing/sharing.umd.js');
    this.import('vendor/@esri/arcgis-rest-items/items.umd.js');
    this.import('vendor/@esri/arcgis-rest-users/users.umd.js');
    this.import('vendor/@esri/arcgis-rest-groups/groups.umd.js');
    this.import('vendor/shims/@esri/arcgis-rest-auth.js');
    this.import('vendor/shims/@esri/arcgis-rest-request.js');
    this.import('vendor/shims/@esri/arcgis-rest-sharing.js');
    this.import('vendor/shims/@esri/arcgis-rest-items.js');
    this.import('vendor/shims/@esri/arcgis-rest-users.js');
    this.import('vendor/shims/@esri/arcgis-rest-groups.js');
  },

  treeForVendor (vendorTree) {
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

    var arcgisItemsTree = new Funnel(path.dirname(require.resolve('@esri/arcgis-rest-items/dist/umd/items.umd.js')), {
      files: ['items.umd.js', 'items.umd.js.map'],
      destDir: '@esri/arcgis-rest-items'
    });

    var arcgisUsersTree = new Funnel(path.dirname(require.resolve('@esri/arcgis-rest-users/dist/umd/users.umd.js')), {
      files: ['users.umd.js', 'users.umd.js.map'],
      destDir: '@esri/arcgis-rest-users'
    });

    var arcgisGroupsTree = new Funnel(path.dirname(require.resolve('@esri/arcgis-rest-groups/dist/umd/groups.umd.js')), {
      files: ['groups.umd.js', 'groups.umd.js.map'],
      destDir: '@esri/arcgis-rest-groups'
    });

    var treesToMerge = [
      arcgisRequestTree,
      arcgisAuthTree,
      arcgisSharingTree,
      arcgisItemsTree,
      arcgisUsersTree,
      arcgisGroupsTree
    ];
    // if we got a vendorTree, and add it in
    if (vendorTree) {
      treesToMerge.unshift(vendorTree);
    }

    return new MergeTrees(treesToMerge);
  }
};
