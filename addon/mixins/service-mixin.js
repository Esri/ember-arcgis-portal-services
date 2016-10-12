import Ember from 'ember';


export default Ember.Mixin.create({
  arcgisAjax: Ember.inject.service(),
  session: Ember.inject.service('session'),

  hostAppConfig: Ember.computed(function () {
    return Ember.getOwner(this).resolveRegistration('config:environment');
  }),

  defaultParams: {
    f: 'json'
  },

  /**
   * Return the ArcGIS Portal Rest base url
   */
  portalRestUrl: Ember.computed('hostAppConfig.APP.portalBaseUrl', function () {
    let baseUrl = this.get('portalUrl');
    return baseUrl + '/sharing/rest';
  }),

  /**
   * Return the ArcGIS Portal base url (for visiting pages etc)
   */
  portalUrl: Ember.computed('hostAppConfig.APP.arcgisPortal', function () {
    let url = '';
    if (this.get('session.isAuthenticated')) {
      // delegate to session service
      url = `https://${this.get('session.orgPortalUrl')}`;
    } else {
      const domain = this.get('hostAppConfig.APP.arcgisPortal.domain') || 'arcgis.com';
      const subdomain = this.get('hostAppConfig.APP.arcgisPortal.env') || 'www';
      url = `https://${subdomain}.${domain}`;
    }
    Ember.debug('Portal Url: ' + url);

    return url;
  }),

  encodeForm (form = {}) {
    Ember.merge(form, this.get('defaultParams'));
    return Object.keys(form).map((key) => {
      return [key, form[key]].map(encodeURI).join('=');
    }).join('&');
  },

  /**
   * Centralized Request with ArcGIS Payload checking
   */
  request (url, options) {
    let opts = options || {};

    if (opts.method && opts.method === 'POST') {
      // if we are POSTing, we need to manually set the content-type because AGO
      // actually does care about this header
      opts.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      };
    }

    // append in the token
    if (this.get('session') && this.get('session.token')) {
      let token = this.get('session.token');
      // add a token
      if (url.indexOf('?') > -1) {
        url = url + '&token=' + token;
      } else {
        url = url + '?token=' + token;
      }
    }

    return this.get('arcgisAjax').request(url, options);
  }
});
