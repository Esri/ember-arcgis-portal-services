import { A } from '@ember/array';
import { alias, gt, equal } from '@ember/object/computed';
import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  tagName: 'nav',
  totalCount: computed('model.total', function () {
    return this.get('model.total');
  }),

  totalPages: computed('totalCount', function () {
    let totalPages = Math.ceil(this.get('totalCount') / this.get('model.num'));
    return totalPages;
  }),
  lastPage: alias('totalPages'),

  showPagination: gt('totalPages', 1),

  prevStart: computed('model.start', function () {
    return this.get('model.start') - this.get('model.num');
  }),

  nextStart: computed('model.start', function () {
    return this.get('model.nextStart');
  }),

  isFirstPage: equal('model.start', 1),

  isLastPage: computed('model.start', 'totalPages', function () {
    return (this.get('model.start') * this.get('model.num')) >= this.get('totalPages');
  }),

  pageRange: computed('model.num', 'totalPages', function () {
    let result = A();

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

  range: computed('model.meta.queryParameters.page.number', 'isLastPage', function () {
    let range = {'start': 1, 'end': 10};
    let perPage = this.get('model.num');
    range.start = (perPage * this.get('page')) - perPage + 1;
    range.end = (perPage * this.get('page'));

    if (range.start < 1) { range.start = 1; } // no starting on 0
    if (this.get('isLastPage')) { range.end = this.get('totalCount'); } // last page magic

    return range;
  })
});
