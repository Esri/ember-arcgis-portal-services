import Ember from 'ember';

export default Ember.Controller.extend({
  groupsService: Ember.inject.service('groups-service'),
  session: Ember.inject.service(),
  queryParams: ['start', 'num', 'q', 'owner', 'tags'],
  q: '*',
  query: '*',
  owner: null,
  tags: null,
  start: 1,
  num: 10,
  filtered: {},

  hasResults: Ember.computed('model.results', function () {
    let result = false;
    if (this.get('model.results.length')) {
      result = true;
    }
    return result;
  }),

  agoGroupsBaseUrl: Ember.computed('session', function () {
    return `https://${this.get('session.portalHostName')}/home/group.html`;
  }),

  queryChanged: Ember.observer('q', function () {
    this.set('query', this.get('q'));
  }),

  actions: {
    filter () {
      this.set('q', this.get('query'));
      // reset the page
      this.set('start', 1);
      this.transitionToRoute('items.index');
    }
  }
});
