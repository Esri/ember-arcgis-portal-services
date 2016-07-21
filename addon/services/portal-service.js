import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  getPortalRestUrl(){
    let portalBaseUrl = 'https://www.arcgis.com';

    //check for and use the url configured in the host app
    if(this.get('hostAppConfig.APP.portalBaseUrl')){
      portalBaseUrl = this.get('hostAppConfig.APP.portalBaseUrl');
    }
    console.debug('Item Service portalBaseUrl: ' + portalBaseUrl);
    return portalBaseUrl + '/sharing/rest';
  },
  /**


  /**
   * Update an existing item
   * will update the `/data` if the `.text` value is present
   */
  update(portal){
    console.log('Portal Service got update for ' + portal.id);
    let portalRestUrl = this.getPortalRestUrl();
    let url = `${portalRestUrl}/portals/${portal.id}/update?f=json`;
    return this._post(url, portal);
  },

  /**
   * Shared logic for POST operations
   */
  _post(url, obj){

    let options = {
      method:'POST',
      data: obj
    };
    return this.request(url, options);
  },



});
