import { computed } from '@ember/object';
import Service from '@ember/service';
import serviceMixin from '../mixins/service-mixin';

export default Service.extend(serviceMixin, {

  /**
   * Return the portal's Geometry Service base url if it exists, if not use default
   */
  geometryServerUrl: computed('session.portal', function () {
    return this.getWithDefault('session.portal.helperServices.geometry.url', 'https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer');
  }),

  /**
   * Project some geometries
   */
  project (inSR, outSR, geometryType, geometries, portalOpts) {
    let projectUrl = `${this.get('geometryServerUrl')}/project`;
    var gparam = {
      geometryType: geometryType,
      geometries: geometries
    };
    var options = {
      method: 'POST',
      data: {
        geometries: JSON.stringify(gparam),
        transformForward: false,
        transformation: '',
        inSR: inSR,
        outSR: outSR,
        f: 'json'
      }
    };
    // we dont' want to send any tokens ever if we are using the default server...
    if (projectUrl.indexOf('arcgisonline') > -1) {
      if (portalOpts) {
        portalOpts.token = '';
      } else {
        // create a portalOpts so the session token does not get sent
        portalOpts = {
          token: ''
        };
      }
    }
    return this.requestUrl(projectUrl, options, portalOpts);
  }
});
