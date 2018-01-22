import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  itemsService: service('items-service'),

  itemJson: computed('model.item', function () {
    return this.get('model.item');
  }),

  dataJson: computed('model.data', function () {
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
