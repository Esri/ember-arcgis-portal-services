import { schedule } from '@ember/runloop';
import { debug } from '@ember/debug';
import Route from '@ember/routing/route';
import ENV from '../config/environment';
export default Route.extend({
  deactivate: function () {
    // if you are using iframes, you will need to remove the
    // iframe from the DOM here so torii gets notified that the
    // auth attempt was cancelled.
    debug('route:signin:deactivate fired...');
  },

  actions: {
    signin: function () {
      this.get('session').open('arcgis-oauth-bearer')
      .then((authorization) => {
        debug('AUTH SUCCESS: ', authorization);
        // transition to some secured route or... so whatever is needed
        this.controller.transitionToRoute('index');
      })
      .catch((err) => {
        debug('AUTH ERROR: ', err);
      });
    },

    /**
     * In order to show the iframe when this route loads
     * we add a didTransition hook, and then schedule the
     * session.open to be called after it's rendered
     */
    didTransition: function () {
      // only do this if we are using iframe style
      if (ENV.torii.providers['arcgis-oauth-bearer'].display && ENV.torii.providers['arcgis-oauth-bearer'].display === 'iframe') {
        // --- USE THIS BLOCK IN YOUR APP --
        schedule('afterRender', this, function () {
          this.get('session').open('arcgis-oauth-bearer')
          .then((authorization) => {
            debug('AUTH SUCCESS: ', authorization);
            // transition to secured route
            this.controller.transitionToRoute('secure');
          })
          .catch((err) => {
            debug('AUTH ERROR: ' + JSON.stringify(err));
          });
        });
      // -----------------------------------
      }
    }
  }
});
