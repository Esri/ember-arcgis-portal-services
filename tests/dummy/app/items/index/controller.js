import { computed, observer } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  itemsService: service('items-service'),
  session: service(),
  queryParams: ['start', 'num', 'q', 'owner', 'tags', 'type'],
  start: 1,
  q: '*',
  query: '*',
  num: 10,
  owner: null,
  tags: null,
  typeKeywords: null,
  type: null,
  properties: null,

  totalCount: computed('model.total', function () {
    return this.get('model.total');
  }),

  queryChanged: observer('q', function () {
    this.set('query', this.get('q'));
  }),

  portalItemUrl: computed('session.portal', function () {
    let cbu = this.get('session.portal.customBaseUrl');
    let urlKey = this.get('session.portal.urlKey');
    return `https://${urlKey}.${cbu}/home/item.html?id=`;
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
