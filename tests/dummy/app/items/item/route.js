import Ember from 'ember';

export default Ember.Route.extend({
  itemsService: Ember.inject.service('items-service'),

  model(params){
    return this.get('itemsService').getById(params.id);
  }
});
