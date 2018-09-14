// TODO: remove jQuery - this should have been caught by eslint
import $ from 'jquery';
import { computed } from '@ember/object';
import Service from '@ember/service';
import serviceMixin from '../mixins/service-mixin';

export default Service.extend(serviceMixin, {
  /**
   * Return the ArcGIS Geocode base url if it exists, if not use default
   */
  geocodeUrl: computed('hostAppConfig.geocodeUrl', function () {
    return this.get('hostAppConfig').APP.geocodeUrl || `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/`;
  }),

  findLocationAddress (inputString, options) {
    let geocodeUrl = this.get('geocodeUrl');
    let defaults = {
      outSR: 4326,
      maxLocations: 1,
      bbox: null
    };
    // TODO: find a non-jQuery way to deep merge options into defaults
    let ops = $.extend({}, defaults, options);
    let url = `${geocodeUrl}findAddressCandidates?f=json&singleLine=${inputString}&maxLocations=${ops.maxLocations}&outSR=${ops.outSR}`;

    if (ops.bbox) {
      if (ops.bbox.hasOwnProperty('xmin') && ops.bbox.hasOwnProperty('ymin') && ops.bbox.hasOwnProperty('xmax') && ops.bbox.hasOwnProperty('ymax')) {
        let bb = `${ops.bbox.xmin},${ops.bbox.ymin},${ops.bbox.xmax},${ops.bbox.ymax}`;
        url = `${url}&searchExtent=${bb}`;
      } else {
        throw new Error('options.bbox provided is not an object with xmin, ymin, xmax, and ymax key value pairs. :: geocode-service.js');
      }
    }

    return this.request(url);
  }
});
