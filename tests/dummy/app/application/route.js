import Route from '@ember/routing/route';
import { debug } from '@ember/debug';
import ENV from '../config/environment';
export default Route.extend({
  beforeModel () {
    if (!window.fetch) {
      debug(`Loading Fetch Polyfill...`);
      // fetch polyfill is needed by arcgis-rest-request, which is use by cedar
      // TODO: it would be better to pass ember-fetch to arcgis-rest-request,
      // but I have not been able to get that to work yet
      let polyfillPromise = new Promise((resolve, reject) => {
        var js = document.createElement('script');
        let src = 'https://cdn.polyfill.io/v2/polyfill.min.js?features=fetch';
        if (this.get('appSettings.isPortal')) {
          // use locally bundled polyfill.io script
          src = `${ENV.APP.staticAssetBase}/assets/polyfills/ie-polyfill-io-fetch.min.js`;
        }
        js.src = src;
        js.onload = resolve;
        js.onerror = reject;
        document.head.appendChild(js);
      });
      return polyfillPromise.then(() => {
        debug(`Loaded Fetch Polyfill...`);
      })
      .catch(() => {
        debug(`Error loading fetch polyfill...`);
      });
    }
  },
  actions: {
    accessDenied: function () {
      this.transitionTo('signin');
    },
    signout: function () {
      // depending on the type of auth, we need to do different things
      if (ENV.torii.providers['arcgis-oauth-bearer'].display && ENV.torii.providers['arcgis-oauth-bearer'].display === 'iframe') {
        // redirect the window to the signout url
        window.location = this.get('session.signoutUrl');
      } else {
        this.get('session').close();
      }
    }
  }
});
