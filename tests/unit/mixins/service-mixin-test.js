import Ember from 'ember';
import ServiceMixinMixin from 'ember-arcgis-portal-services/mixins/service-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | service mixin');

// Replace this with your real tests.
test('fixing a jacked up portal url', function (assert) {
  let ServiceMixinObject = Ember.Object.extend(ServiceMixinMixin);
  let subject = ServiceMixinObject.create();
  const url = subject.fixUrl('https://LINUX1.ESRI.COM:7080/arcgis', {httpsPort: 7443}, 'https:');
  assert.equal(url, 'https://linux1.esri.com:7443/arcgis');
});
