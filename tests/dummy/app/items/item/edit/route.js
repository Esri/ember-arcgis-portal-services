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
    let validTypes = ['Web Mapping Application', 'Web Map', 'Dashboard', 'Hub Site Application', 'Hub Page', 'Hub Initiative', 'Hub Initiative Template', 'Map Service', 'Solution', 'StoryMap', 'Web Experience', 'Hub Project'];
    if (validTypes.includes(item.type)) {
      return hash({
        item: item,
        data: this.get('itemsService').getDataById(item.id)
        .then((result) => {
          if (result) {
            return result;
          } else {
            return { noData: `Portal API returned nothing for the data` };
          }
        }, () => {
          return { error: 'Fetching data resulted in an error. Check console.' };
        })
      });
    } else {
      return resolve({
        item: item,
        data: { noData: ` Item type is not in whitelist to retrieve data: [${validTypes.join(', ')}]` }
      });
    }
  }
});
