import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'form',
  classNames: [ 'form-inline' ],

  submit () {
    if (this.get('query') === '') {
      this.set('query', null);
    }
    this.get('onFilter')();
    return false;
  },
  actions: {
    filter () {
      if (this.get('query') === '') {
        this.set('query', null);
      }
      this.get('onFilter')();
    }
  }
});
