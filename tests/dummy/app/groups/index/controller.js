import Ember from 'ember';

export default Ember.Controller.extend({
  groupsService: Ember.inject.service('groups-service'),
  session: Ember.inject.service(),
  queryParams: ['q'],
  q: '*',
  query: '*',
  start: 1,
  num: 100,
  filtered: {},

  hasResults: Ember.computed('filtered', function () {
    let result = false;
    if (this.get('filtered.results.length')) {
      result = true;
    }
    return result;
  }),

  agoGroupsBaseUrl: Ember.computed('session', function () {
    return `https://${this.get('session.portalHostName')}/home/group.html`;
  }),

  queryChanged: Ember.observer('q', function () {
    this.set('query', this.get('q'));
    this.search(this.get('q'));
  }),

  init () {
    this._super(...arguments);
    if (this.get('q') === '') {
      this.search('*');
    }
  },

  search (query) {
    // construct the query
    let form = {
      q: `title:${query}`, // AND access:public AND isopendata:true
      sortField: 'title',
      num: this.get('num'),
      start: this.get('start')
    };

    this.get('groupsService').search(form)
      .then((response) => {
        console.info('Response has ' + response.results.length + ' results');
        this.set('filtered', response);
      });
  },

  actions: {
    search (value) {
      this.set('q', value);
      this.search(value);
    }
  }
});
