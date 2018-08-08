/* global define */
(function () {
  function vendorModule () {
    'use strict';

    return self['arcgisRest'];
  }

  define('@esri/arcgis-rest-sharing', [], vendorModule);
})();
