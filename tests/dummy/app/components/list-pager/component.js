import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'nav',
  totalCount: Ember.computed('model.total', function () {
    return this.get('model.total');
  }),

  totalPages: Ember.computed('totalCount', function () {
    let totalPages = Math.ceil(this.get('totalCount') / this.get('model.num'));
    return totalPages;
  }),
  lastPage: Ember.computed.alias('totalPages'),

  showPagination: Ember.computed.gt('totalPages', 1),

  prevStart: Ember.computed('model.start', function () {
    return this.get('model.start') - this.get('model.num');
  }),

  nextStart: Ember.computed('model.start', function () {
    return this.get('model.nextStart');
  }),

  isFirstPage: Ember.computed.equal('model.start', 1),

  isLastPage: Ember.computed('model.start', 'totalPages', function () {
    return (this.get('model.start') * this.get('model.num')) >= this.get('totalPages');
  }),

  pageRange: Ember.computed('model.num', 'totalPages', function () {
    let result = Ember.A();

    let currentPage = Math.ceil(this.get('model.start') / this.get('model.num'));
    let totalPages = this.get('totalPages');

    let start = (totalPages > 10 && currentPage > 6) ? currentPage - 5 : 1;
    let end = (totalPages > start + 9) ? start + 9 : totalPages;
    let num = this.get('model.num');
    for (let i = start; i <= end; i++) {
      let pageStart = (((i * num) - num) + 1);
      // console.log('i ' + i + ' pageStart:' + pageStart)
      result.push({ page: i, start: pageStart, className: (i === currentPage) ? 'active' : '' });
    }

    return result;
  }),

  range: Ember.computed('model.meta.queryParameters.page.number', 'isLastPage', function () {
    let range = {'start': 1, 'end': 10};
    let perPage = this.get('model.num');
    range.start = (perPage * this.get('page')) - perPage + 1;
    range.end = (perPage * this.get('page'));

    if (range.start < 1) { range.start = 1; } // no starting on 0
    if (this.get('isLastPage')) { range.end = this.get('totalCount'); } // last page magic

    return range;
  })
});
