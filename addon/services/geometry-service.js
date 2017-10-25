import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  projectAjax (inSR, outSR, geometryType, geometries) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      // var serviceUrl = PrincipalService.portal().helperServices.geometry.url

      var serviceUrl = 'https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer/project';

      var gparam = {
        geometryType: geometryType,
        geometries: geometries
      };
      var params = {
        geometries: JSON.stringify(gparam),
        transformForward: false,
        transformation: '',
        inSR: inSR,
        outSR: outSR,
        f: 'json'
      };

      this.get('ajax').request(serviceUrl, {
        data: params
      }).then((json /* ,status,headers */) => {
        // xhr may have returned a 200, but
        // there could be an error payload...
        if (json.error) {
          // reject with the message
          reject(json.error.message);
        } else {
          // all good - resolve with json
          resolve(json);
        }
      }, (json, status, headers) => {
        Ember.Logger.error(json, status, headers());
        reject(status);
      });
    });
  },

  /**
   * Return the portal's Geometry Service base url if it exists, if not use default
   */
  geometryServerUrl: Ember.computed('hostAppConfig.geocodeUrl', function () {
    return this.getWithDefault('session.portal.helperServices.geometry.url', 'https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer');
  }),

  /**
   * Project some geometries
   */
  project (inSR, outSR, geometryType, geometries) {
    let projectUrl = `${this.get('geometryServerUrl')}/project`;
    var gparam = {
      geometryType: geometryType,
      geometries: geometries
    };
    var params = {
      geometries: JSON.stringify(gparam),
      transformForward: false,
      transformation: '',
      inSR: inSR,
      outSR: outSR,
      f: 'json'
    };

    return this.requestUrl(projectUrl, params);
  }
});
