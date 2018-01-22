import Service from '@ember/service';
import serviceMixin from '../mixins/service-mixin';

export default Service.extend(serviceMixin, {

  // register an application for OAuth access
  registerApp (itemId, redirectUris, appType = 'browser', portalOpts) {
    const urlPath = `/oauth2/registerApp?f=json`;
    const options = {
      method: 'POST',
      data: {
        itemId,
        appType,
        redirect_uris: JSON.stringify(redirectUris)
      }
    };
    return this.request(urlPath, options, portalOpts);
  },

  // update an app's OAuth registration
  // TODO: have this take other params that can be updated as options
  updateApp (clientId, redirectUris, portalOpts) {
    const urlPath = `/oauth2/apps/${clientId}/update?f=json`;
    const options = {
      method: 'POST',
      data: {
        client_id: clientId,
        redirect_uris: JSON.stringify(redirectUris)
      }
    };
    return this.request(urlPath, options, portalOpts);
  }
});
