import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  type: 'file',
  classNames: ['inputfile'],
  attributeBindings: ['type', 'multiple', 'name', 'id'],
  multiple: false,
  change (event) {
    const input = event.target;
    if (!Ember.isEmpty(input.files)) {
      this.get('onFileSelected')(input.files);
    }
    return false;
  }
});
