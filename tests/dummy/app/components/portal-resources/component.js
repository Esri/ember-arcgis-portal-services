import { debug } from '@ember/debug';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  isLoading: true,
  session: service(),
  // Lazy load the resources
  didInsertElement () {
    this._getResources();
  },
  resourceBaseUrl: computed('session', 'item', function () {
    let portalHostName = this.get('session.portalHostName');
    let portalId = this.get('session.portal.id');
    return `//${portalHostName}/sharing/rest/portals/${portalId}/resources/`;
  }),
  _getResources () {
    this.set('isLoading', true);
    this.get('onFetchResources')()
    .then((resources) => {
      this.set('model', resources);
      this.set('isLoading', false);
    });
  },

  actions: {
    destroy (resource) {
      this.get('onRemoveResource')(resource.key)
      .then(() => {
        this._getResources();
      });
    },
    filesChanged (files) {
      debug('Files changed!'); // files[0]
      this.get('onUploadFile')(files)
      .then(() => {
        this._getResources();
      });
    },
    sendJson () {
      let obj = {
        settings: {
          groupId: '4bdcf2f7e42843cebbe43b69a8d56bdb'
        }
      };
      this.get('onJsonUpload')(obj)
      .then(() => {
        this._getResources();
      });
    }
  }
});
