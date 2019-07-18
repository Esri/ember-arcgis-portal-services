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

  userDefaultsJson: computed('model.userDefaultSettings', function () {
    return this.get('model.userDefaultSettings');
  }),

  signinSettingsJson: computed('model.signinSettings', function () {
    return this.get('model.signinSettings');
  }),

  jsonPortal: computed('model.portal', function () {
    return JSON.stringify(this.get('model.portal'), null, 4);
  }),

  hasPlatformSSO: computed('model.portal.platformSSO', function () {
    return this.get('model.portal.platformSSO');
  }),

  userDefaultsExample: computed('model.portal', function () {
    return JSON.stringify({
      role: 'org_publisher',
      userLicenseType: 'creatorUT',
      groups: ['group-id-you-want-users-joined-to']
    }, null, 4);
  }),

  signinSettingsExample: computed('model.signinSettings', function () {
    return JSON.stringify({
        "termsAndConditions": "Must love klaus",
        "hideCrossOrgSigninLink": true,
        "enableArcGISAutoSignups": false
    }, null, 4);
  }),

  setPlatformSSO (val) {
    // set it on the model...
    this.set('model.portal.platformSSO', val);
    let portal = this.get('model.portal');

    return this.get('portalService').update(portal);
  },

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
    },

    enablePlatformSSO () {
      this.setPlatformSSO(true);
    },

    disablePlatformSSO () {
      this.setPlatformSSO(false);
    },

    saveUserDefaults () {
      const userDefaults = this.get('userDefaultsJson');
      return this.get('portalService').setUserDefaultSettings(userDefaults);
    },

    saveSigninSettings () {
      const signinSettings = this.get('signinSettingsJson');
      return this.get('portalService').setSigninSettings(signinSettings);
    }
  }
});
