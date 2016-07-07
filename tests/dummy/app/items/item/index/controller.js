import Ember from 'ember';

export default Ember.Controller.extend({
  jsonString: Ember.computed('model', function(){
    return JSON.stringify(this.get('model'),null, ' ');
  })
});
