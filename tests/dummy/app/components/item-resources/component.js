import { debug } from '@ember/debug';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import layout from './template';
import fetch from 'ember-network/fetch';

export default Component.extend({
  layout,
  itemsService: service('items-service'),

  session: service(),
  token: alias('session.token'),
  isLoading: true,
  urlToResource: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
  // Lazy load the resources
  didInsertElement () {
    this._getResources();
  },
  resourceBaseUrl: computed('session', 'item', function () {
    let portalHostName = this.get('session.portalHostName');
    let item = this.get('item');
    return `//${portalHostName}/sharing/rest/content/items/${item.id}/resources/`;
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
      this.get('onRemoveResource')(resource)
      .then(() => {
        this._getResources();
      });
    },
    filesChanged (files) {
      debug('Files changed!'); // files[0]
      this.get('onUploadFile')(files[0])
      .then(() => {
        this._getResources();
      });
    },
    sendJson () {
      let obj = {
        foo: 'bar'
      };
      this.get('onJsonUpload')(obj)
      .then(() => {
        this._getResources();
      });
    },
    sendText () {
      // fetch the content of the url as a string
      // get the fileName from the url...
      let parts = this.get('urlToResource').split('/');
      let filename = parts[parts.length - 1] + '.txt';
      return fetch(this.get('urlToResource'))
      .then((response) => {
        return response.text();
      })
      .then((cssAsString) => {
        this.get('cssAsString', cssAsString);
        return this.get('onTextUpload')(cssAsString, filename)
        .then(() => {
          this._getResources();
        });
      });
      // let text = ''
      // this.get('onTextUpload')(text)
      // .then(() => {
      //   this._getResources();
      // });
    }
  }
});
