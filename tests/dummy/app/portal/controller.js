import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  dirty: false,

  portalService: service('portal-service'),

  createDate: computed('model.portal', function () {
    return new Date(this.get('model.portal.created')).toISOString();
  }),
  modifyDate: computed('model.portal', function () {
    return new Date(this.get('model.portal.modified')).toISOString();
  }),
  propertiesJson: computed('model.portal', function () {
    return this.get('model.portal.portalProperties');
  }),

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
    },
    saveChanges () {
      let portal = this.get('model.portal');
      let props = this.get('propertiesJson');
      portal.portalProperties = props;
      // save changes back to the portal
      return this.get('portalService').update(portal)
        .then((result) => {
          if (result.success) {
            this.set('dirty', false);
          }
        });
    }
  }
});
