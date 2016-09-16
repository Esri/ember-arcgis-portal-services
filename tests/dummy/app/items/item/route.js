import Ember from 'ember';

export default Ember.Route.extend({
  itemsService: Ember.inject.service('items-service'),

  model (params) {
    Ember.debug('Items.item route got id: ' + params.id);
    return this.get('itemsService').getById(params.id);
  }
});
