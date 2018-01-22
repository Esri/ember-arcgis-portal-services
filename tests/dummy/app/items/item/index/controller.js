import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  jsonString: computed('model', function () {
    return JSON.stringify(this.get('model'), null, ' ');
  })
});
