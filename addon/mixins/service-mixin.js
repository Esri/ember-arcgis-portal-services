import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Mixin.create({
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
  portalRestUrl: Ember.computed('session.portalHostName', function () {
    let baseUrl = this.get('portalUrl');
    return baseUrl + '/sharing/rest';
  }),

  /**
   * Return the ArcGIS Portal base url (for visiting pages etc)
   * Defaults to https because there is no negative to using it
   */
  portalUrl: Ember.computed('session.portalHostName', function () {
    return 'https://' + this.get('session.portalHostName');
  }),

  encodeForm (form = {}) {
    // Ember.merge(form, this.get('defaultParams'));
    return Object.keys(form).map((key) => {
      return [key, form[key]].map(encodeURI).join('=');
    }).join('&');
  },

  /**
   * Fetch does not reject on non-200 responses, so we need to check this manually
   */
  checkStatusAndParseJson (response) {
    var error;
    if (response.status >= 200 && response.status < 300) {
      // check if this is one of those groovy 200-but-a-400 things
      return response.json().then((json) => {
        if (json.error) {
          // cook an error
          error = new Error(json.error.message);
          error.response = response;
          Ember.debug('Error in response:  ' + json.error.message);
          throw error;
        } else {
          return json;
        }
      });
    } else {
      // Response has non 200 http code
      error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  },

  /**
   * Fetch based request method
   */
  request (url, options) {
    let opts = options || {};

    if (opts.method && opts.method === 'POST') {
      // if we are POSTing, we need to manually set the content-type because AGO
      // actually does care about this header
      if (!opts.headers) {
        opts.headers = {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/x-www-form-urlencoded'
        };
      }
      // if a body was passed, we need to set the content type to multipart
      if (opts.body) {
        delete opts.headers['Content-Type'];// = 'multipart/form-data';
      }

      // if we have a data, create a formData from it
      if (opts.data) {
        var form = this.encodeForm(opts.data);
        opts.body = form;
      }
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

    return fetch(url, opts)
      .then(this.checkStatusAndParseJson);
  }
});
