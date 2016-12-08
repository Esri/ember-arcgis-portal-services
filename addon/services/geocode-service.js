import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {
  /**
   * Return the ArcGIS Geocode base url if it exists, if not use default
   */
  geocodeUrl: Ember.computed('hostAppConfig.geocodeUrl', function () {
    return this.get('hostAppConfig').APP.geocodeUrl ? this.get('hostAppConfig').APP.geocodeUrl : `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/`;
  }),

  findLocationAddress (inputString, bbox) {
    let geocodeUrl = this.get('geocodeUrl');
    // TODO - modify this variable
      // - does the middle of the below string needs to be more mature
      // - bbox seems to handle itself when it is undefined
    let url = `${geocodeUrl}find?text=${inputString}&isCollection=false&outSR=4326&f=json&maxlocations=1&${bbox}`;
    return this.request(url);
  }
});
