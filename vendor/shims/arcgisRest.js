/* global define */
(function () {
  function vendorModule () {
    'use strict';

    return { 'default': self['arcgisRest'] };
  }

  define('arcgisRest', [], vendorModule);
})();
