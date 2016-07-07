import Ember from 'ember';
import ENV from '../config/environment';
export default Ember.Route.extend({

  actions: {
    accessDenied: function() {
      this.transitionTo('signin');
    },
    signout: function() {
      //depending on the type of auth, we need to do different things
      if(ENV.torii.providers['arcgis-oauth-bearer'].display && ENV.torii.providers['arcgis-oauth-bearer'].display === 'iframe'){
        //redirect the window to the signout url
        window.location = this.get('session.signoutUrl');
      }else{
        this.get('session').close();
        //this.transitionTo('index');
      }
    }
  }
});
