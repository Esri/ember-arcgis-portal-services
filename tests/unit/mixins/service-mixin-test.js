import EmberObject from '@ember/object';
import ServiceMixinMixin from 'ember-arcgis-portal-services/mixins/service-mixin';
import { module, test } from 'qunit';
import fetch from 'fetch';

module('Unit | Mixin | service mixin');

// Replace this with your real tests.
test('fixing a jacked up portal url', function (assert) {
  let ServiceMixinObject = EmberObject.extend(ServiceMixinMixin);
  let subject = ServiceMixinObject.create();
  const url = subject.fixUrl('https://LINUX1.ESRI.COM:7080/arcgis', {httpsPort: 7443}, 'https:');
  assert.equal(url, 'https://linux1.esri.com:7443/arcgis');
});

function includes (str, target) {
  let included = false;
  if (str.indexOf(target) > -1) {
    included = true;
  }
  return included;
}

test('drop nulls from form when encoding', function (assert) {
  let ServiceMixinObject = EmberObject.extend(ServiceMixinMixin);
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
  // had been using .includes in the tests, but that would fail in phantom...
  assert.notOk(includes(encoded, 'nullyProp'), 'nullyProp should not be included');
  assert.ok(includes(encoded, 'tags'), 'tags should be included');
  assert.ok(includes(encoded, 'falseyProp'), 'falseyProp should be included');
  assert.ok(includes(encoded, 'truthyProp'), 'truthyProp should be included');
  assert.ok(includes(encoded, 'typeKeywords'), 'typeKeywords should be included');
  assert.ok(includes(encoded, 'properties'), 'properties should be included');
});

test('addOptions, bare bones', function (assert) {
  let ServiceMixinObject = EmberObject.extend(ServiceMixinMixin);
  let subject = ServiceMixinObject.create();

  subject.set('session', {
    authMgr: {}
  });

  const enriched = subject.addOptions({foo: 'bar'});

  assert.equal(enriched.foo, 'bar', 'original props should still be present');
  assert.equal(enriched.fetch, fetch, 'fetch should be tacked on');
  assert.deepEqual(enriched.authentication, {}, 'auth from torii should be tacked on');
});

test('addOptions, with portal options', function (assert) {
  let ServiceMixinObject = EmberObject.extend(ServiceMixinMixin);
  let subject = ServiceMixinObject.create();

  subject.set('session', {
    authMgr: {}
  });

  const enriched = subject.addOptions({foo: 'bar'}, {token: 'token', portalHostname: 'https://super.custom'});

  assert.equal(enriched.foo, 'bar', 'original props should still be present');
  assert.equal(enriched.fetch, fetch, 'fetch should be tacked on');
  assert.equal(enriched.params.token, 'token', 'creds from portalOpts should take precedence');
  assert.equal(enriched.authentication, undefined, 'auth from torii should NOT be tacked on');
  assert.equal(enriched.portal, 'https://super.custom/sharing/rest', 'the portal should come along for the ride too');
});
