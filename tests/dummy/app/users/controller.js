import Ember from 'ember';

export default Ember.Controller.extend({

  userService: Ember.inject.service(),

  session: Ember.inject.service(),

  queryParams: [ 'start', 'num', 'q', 'token', 'portalHostname' ],

  start: 1,

  q: null,

  query: '*',

  num: 10,

  portalHostname: '',

  portalHostnameCopy: Ember.computed.reads('portalHostname'),

  token: '',

  tokenCopy: Ember.computed.reads('token'),

  totalCount: Ember.computed('model.total', function () {
    return this.get('model.total');
  }),

  queryChanged: Ember.observer('q', function () {
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
});
