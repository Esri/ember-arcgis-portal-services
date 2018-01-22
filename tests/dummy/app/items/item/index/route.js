import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    let item = this.modelFor('items.item');
    return item;
  }
});
