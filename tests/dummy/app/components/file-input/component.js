import Ember from 'ember';

export default Ember.Component.extend(Ember.Evented, {
  tagName: 'input',
  type: 'file',
  classNames: ['inputfile'],
  attributeBindings: ['type', 'multiple', 'name', 'id'],
  multiple: false,
  change (event) {
    const input = event.target;
    if (!Ember.isEmpty(input.files)) {
      if (this.get('onChange')) {
        this.get('onChange')(input.files);
      }
    }
  }
});
