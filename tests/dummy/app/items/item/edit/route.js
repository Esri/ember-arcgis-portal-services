import { hash, resolve } from 'rsvp';
import { debug } from '@ember/debug';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  itemsService: service('items-service'),
  model (params) {
    let item = this.modelFor('items.item');
    debug('Items.item.edit id: ' + params.id + ' item.id ' + item.id + JSON.stringify(params));

    // only get the data if this is a type with data!
    let validTypes = ['Web Mapping Application', 'Web Map', 'Dashboard', 'Hub Site Application', 'Hub Page', 'Hub Initiative', 'Map Service', 'Solution', 'StoryMap'];
    if (validTypes.includes(item.type)) {
      return hash({
        item: item,
        data: this.get('itemsService').getDataById(item.id)
        .then((result) => {
          if (result) {
            return result;
          } else {
            return { noData: ` Item type is not in whitelist to retrieve data: [${validTypes.join(', ')}]` };
          }
        }, () => {
          return {};
        })
      });
    } else {
      return resolve({
        item: item,
        data: {}
      });
    }
  }
});
