import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {
  /**
   * Return the ArcGIS Geocode base url if it exists, if not use default
   */
  geocodeUrl: Ember.computed('hostAppConfig.geocodeUrl', function () {
    return this.get('hostAppConfig').APP.geocodeUrl || `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/`;
  }),

  findLocationAddress (inputString, ops) {
    let geocodeUrl = this.get('geocodeUrl');
    let defaults = {
      outSR: 4326,
      maxLocations: 1,
      bbox: null
    };
    let options = Ember.$.extend({}, defaults, ops);
    let url = `${geocodeUrl}findAddressCandidates?f=json&singleLine=${inputString}&maxLocations=${options.maxLocations}&outSR=${options.outSR}`;

    if (typeof options.bbox === 'string') {
      throw new Error('The bbox used is a string, when it should be an object with xmin, ymin, xmax, and ymax key value pairs. :: geocode-service.js');
    }

    // this conditional is defending against 'null'
    if (options.bbox) {
      let bb = `${options.bbox.xmin},${options.bbox.ymin},${options.bbox.xmax},${options.bbox.ymax}`;
      url = `${url}&searchExtent=${bb}`;
    }

    return this.request(url);
  }
});
