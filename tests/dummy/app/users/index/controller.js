import { computed, observer } from '@ember/object';
import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({

  userService: service(),

  session: service(),

  queryParams: [ 'start', 'num', 'q', 'token', 'portalHostname' ],

  start: 1,

  q: null,

  query: '*',

  num: 10,

  portalHostname: '',

  portalHostnameCopy: reads('portalHostname'),

  token: '',

  tokenCopy: reads('token'),

  totalCount: computed('model.total', function () {
    return this.get('model.total');
  }),

  queryChanged: observer('q', function () {
    this.set('query', this.get('q'));
  }),

  // portalItemUrl: Ember.computed('session.portal', function () {
  //   let cbu = this.get('session.portal.customBaseUrl');
  //   let urlKey = this.get('session.portal.urlKey');
  //   return `https://${urlKey}.${cbu}/home/item.html?id=`;
  // }),

  actions: {
    filter () {
      this.set('q', this.get('query'));
      // reset the page
      this.set('start', 1);
      const queryParams = {
        q: this.get('query'),
        start: 1,
        num: this.get('num'),
        portalHostname: this.get('portalHostnameCopy'),
        token: this.get('tokenCopy')
      };
      this.transitionToRoute('users', { queryParams: queryParams });
    }
  }
});
