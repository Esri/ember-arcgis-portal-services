import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  itemsService: Ember.inject.service('items-service'),
  isLoading: true,
  // Lazy load the resources
  didInsertElement () {
    var item = this.get('item');
    this.get('itemsService').getResources(item.id)
    .then((resources) => {
      this.set('model', resources);
      this.set('isLoading', false);
    });
  },
  actions: {
    destroy (resource) {
      var item = this.get('item');
      this.get('itemsService').destroyResource(item.id, item.owner, resource.resource);
    },
    filesChanged (files) {
      Ember.debug('Files changed!'); // files[0]
      var item = this.get('item');
      this.get('itemsService').addResource(item.id, item.owner, files[0]);
    }
  }
});
