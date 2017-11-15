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

test('drop nulls from form when encoding', function (assert) {
  let ServiceMixinObject = Ember.Object.extend(ServiceMixinMixin);
  let subject = ServiceMixinObject.create();
  let form = {
    title: 'a string',
    properties: JSON.stringify({
      key: 'value'
    }),
    tags: ['a', 'series', 'of', 'strings'],
    typeKeywords: [],
    falseyProp: false,
    truthyProp: true,
    nullyProp: null
  };
  const encoded = subject.encodeForm(form);
  assert.equal(encoded.includes('nully'), false, 'nullyProp should not be included');
  assert.ok(encoded.includes('tags'), 'tags should be included');
  assert.ok(encoded.includes('falseyProp'), 'falseyProp should be included');
  assert.ok(encoded.includes('truthyProp'), 'truthyProp should be included');
  assert.ok(encoded.includes('typeKeywords'), 'typeKeywords should be included');
  assert.ok(encoded.includes('properties'), 'properties should be included');
});
