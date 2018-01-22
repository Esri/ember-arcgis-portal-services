import { isEmpty } from '@ember/utils';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'input',
  type: 'file',
  classNames: ['inputfile'],
  attributeBindings: ['type', 'multiple', 'name', 'id'],
  multiple: false,
  change (event) {
    const input = event.target;
    if (!isEmpty(input.files)) {
      this.get('onFileSelected')(input.files);
    }
    return false;
  }
});
