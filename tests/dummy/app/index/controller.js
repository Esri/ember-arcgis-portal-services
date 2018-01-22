import { computed } from '@ember/object';
import Controller from '@ember/controller';
import ENV from '../config/environment';

export default Controller.extend({
  env: computed(function () {
    return ENV.environment;
  }),
});
