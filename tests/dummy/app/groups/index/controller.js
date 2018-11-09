import { computed, observer } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  groupsService: service('groups-service'),
  session: service(),
  queryParams: ['start', 'num', 'q', 'owner', 'tags'],
  q: '*',
  query: '*',
  owner: null,
  tags: null,
  start: 1,
  num: 10,

  hasResults: computed('model.results', function () {
    let result = false;
    if (this.get('model.results.length')) {
      result = true;
    }
    return result;
  }),

  agoGroupsBaseUrl: computed('session', function () {
    return `https://${this.get('session.portalHostname')}/home/group.html`;
  }),

  queryChanged: observer('q', function () {
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
