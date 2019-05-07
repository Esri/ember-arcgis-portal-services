import { computed } from '@ember/object';
import Service from '@ember/service';
import serviceMixin from '../mixins/service-mixin';

export default Service.extend(serviceMixin, {
  /**
   * Return the ArcGIS Geocode base url if it exists, if not use default
   */
  geocodeUrl: computed('hostAppConfig.geocodeUrl', function () {
    return this.get('hostAppConfig').APP.geocodeUrl || `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/`;
  })
});
