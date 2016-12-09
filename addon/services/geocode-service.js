import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {
  /**
   * Return the ArcGIS Geocode base url if it exists, if not use default
   */
  geocodeUrl: Ember.computed('hostAppConfig.geocodeUrl', function () {
    return this.get('hostAppConfig').APP.geocodeUrl || `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/`;
  }),

  findLocationAddress (inputString, options) {
    let geocodeUrl = this.get('geocodeUrl');
    let defaults = {
      outSR: 4326,
      maxLocations: 1,
      bbox: null
    };
    let ops = Ember.$.extend({}, defaults, options);
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
