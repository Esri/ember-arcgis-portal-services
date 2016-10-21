import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    let item = this.modelFor('items.item');
    return item;
  }
});
