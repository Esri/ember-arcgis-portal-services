import Ember from 'ember';
import ENV from '../config/environment';
const { Controller } = Ember;

export default Controller.extend({
  env: Ember.computed(function () {
    return ENV.environment;
  }),
});
