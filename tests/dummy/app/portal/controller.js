import Ember from 'ember';

export default Ember.Controller.extend({
  portalService: Ember.inject.service('portal-service'),
  actions: {
    removeResource (resourceName) {
      return this.get('portalService').removeResource(resourceName);
    },

    uploadFile (file) {
      return this.get('portalService').uploadResource(file[0]);
    },

    sendJson (jsonObj) {
      return this.get('portalService').addResource('opendata.json', JSON.stringify(jsonObj));
    },

    fetchResources () {
      return this.get('portalService').getResources();
    }
  }
});
