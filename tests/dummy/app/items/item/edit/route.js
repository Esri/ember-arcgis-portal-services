import Ember from 'ember';

export default Ember.Route.extend({
  itemsService: Ember.inject.service('items-service'),
  model (params) {
    let item = this.modelFor('items.item');
    Ember.debug('Items.item.edit id: ' + params.id + ' item.id ' + item.id + JSON.stringify(params));
    return Ember.RSVP.hash({
      item: item,
      data: this.get('itemsService').getDataById(item.id)
    });
  }
});