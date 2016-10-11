import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  // register an application for OAuth access
  registerApp (itemId, redirectUris, appType = 'browser') {
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/oauth2/registerApp?f=json`;
    let options = {
      method: 'POST',
      data: {
        itemId,
        appType,
        redirect_uris: JSON.stringify(redirectUris)
      }
    };
    return this.request(url, options);
  },

  // update an app's OAuth registration
  // TODO: have this take other params that can be updated as options
  updateApp (clientId, redirectUris) {
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/oauth2/apps/${clientId}/update?f=json`;
    let options = {
      method: 'POST',
      data: {
        client_id: clientId,
        redirect_uris: JSON.stringify(redirectUris)
      }
    };
    return this.request(url, options);
  }
});
