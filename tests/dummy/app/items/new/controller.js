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
      console.log('Saving item...');
      // transfer values from the modelJson --> model
      let item = this.get('itemJson');

      if (this.get('dataJson')) {
        item.text = JSON.stringify(this.get('dataJson'));
      }

      this.get('itemsService').create(item)
        .then((resp) => {
          this.transitionToRoute('items.index');
        }, (error) => {
          alert('Error Creating Item: ' + error.message);
        })
        .catch((error) => {
          alert('Error Creating Item 2: ' + error.message);
        });
    },
    cancel: function () {
      // return to the item list
      this.transitionToRoute('items.index');
    }
  }
});
