import Ember from 'ember';
import ServiceMixinMixin from 'ember-arcgis-portal-services/mixins/service-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | service mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let ServiceMixinObject = Ember.Object.extend(ServiceMixinMixin);
  let subject = ServiceMixinObject.create();
  assert.ok(subject);
});
