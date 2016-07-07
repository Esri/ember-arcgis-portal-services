import Ember from 'ember';

export default Ember.Route.extend({
  itemsService: Ember.inject.service('items-service'),
  model(){
    let item = this.modelFor('items.item');
    return Ember.RSVP.hash({
      item: item,
      data: this.get('itemsService').getDataById(item.id)
    });
  }
});
