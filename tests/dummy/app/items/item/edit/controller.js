import Ember from 'ember';

export default Ember.Controller.extend({
  itemsService: Ember.inject.service('items-service'),

  itemJson: Ember.computed('model.item', function () {
    return this.get('model.item');
  }),

  dataJson: Ember.computed('model.data', function () {
    return this.get('model.data');
  }),

  actions: {
    save: function () {
      // get the item
      let item = this.get('itemJson');

      if (this.get('dataJson')) {
        item.text = JSON.stringify(this.get('dataJson'));
      }

      this.get('itemsService').update(item)
        .then((resp) => {
          this.transitionToRoute('items.index');
        });
    },
    cancel: function () {
      // return to the item list
      this.transitionToRoute('items.index');
    }
  }

});
