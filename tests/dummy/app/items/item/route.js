import { debug } from '@ember/debug';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  itemsService: service('items-service'),

  model (params) {
    debug('Items.item route got id: ' + params.id);
    return this.get('itemsService').getById(params.id);
  }
});
