import EmberObject from '@ember/object';
import ServiceMixinMixin from 'ember-arcgis-portal-services/mixins/service-mixin';
import { module, test } from 'qunit';
import fetch from 'fetch';

module('Unit | Mixin | service mixin');

function includes (str, target) {
  let included = false;
  if (str.indexOf(target) > -1) {
    included = true;
  }
  return included;
}

// Replace this with your real tests.
test('fixing a jacked up portal url', function (assert) {
  let ServiceMixinObject = EmberObject.extend(ServiceMixinMixin);
  let subject = ServiceMixinObject.create();
  const url = subject.fixUrl('https://LINUX1.ESRI.COM:7080/arcgis', {httpsPort: 7443}, 'https:');
  assert.equal(url, 'https://linux1.esri.com:7443/arcgis');
});

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

test('addOptions, unauthenticated', function (assert) {
  let ServiceMixinObject = EmberObject.extend(ServiceMixinMixin);
  let subject = ServiceMixinObject.create();

  subject.set('session', {
    // NOTE: I'm guessing {} ~= an unauthenticated session
  });

  const enriched = subject.addOptions({foo: 'bar'});

  assert.equal(enriched.foo, 'bar', 'original props should still be present');
  assert.equal(enriched.fetch, fetch, 'fetch should be tacked on');
  assert.notOk(enriched.params, 'token param should NOT be set');
  assert.notOk(enriched.authentication, 'auth from torii should NOT be tacked on');
  // TODO: this would be better tested w/ a stub
  assert.equal(enriched.portal, subject.getPortalRestUrl(), 'should be whatever getPortalRestUrl() does w/ an unauthenticated session');
});

test('addOptions, authenticated sesssion', function (assert) {
  let ServiceMixinObject = EmberObject.extend(ServiceMixinMixin);
  let subject = ServiceMixinObject.create();

  subject.set('session', {
    portalHostname: 'https://session.host.com',
    token: 'tokenFromSession',
    // NOTE: not sure if it is realistic to have authMgr.portal out of sync
    // just here to make sure we don't use authMgr.portal instead of portalHostname
    authMgr: { portal: 'https://somehow.this.got/stale' },
  });

  const enriched = subject.addOptions({foo: 'bar'});

  assert.equal(enriched.foo, 'bar', 'original props should still be present');
  assert.equal(enriched.fetch, fetch, 'fetch should be tacked on');
  assert.equal(enriched.params.token, 'tokenFromSession', 'token param should come from session');
  assert.equal(enriched.authentication, undefined, 'auth from torii should NOT be tacked on');
  // NOTE: this is actually testing getPortalRestUrl() as well
  // TODO: relace this w/ a stub once we have getPortalRestUrl() tests
  assert.equal(enriched.portal, 'https://session.host.com/sharing/rest', 'a portalHostname should be pulled from the session too.');
});

test('addOptions, authenticated session with portal options', function (assert) {
  let ServiceMixinObject = EmberObject.extend(ServiceMixinMixin);
  let subject = ServiceMixinObject.create();

  subject.set('session', {
    portalHostname: 'https://session.host.com',
    token: 'tokenFromSession',
    // NOTE: not sure if it is realistic to have authMgr.portal out of sync
    // just here to make sure we don't use authMgr.portal instead of portalHostname
    authMgr: { portal: 'https://somehow.this.got/stale' },
  });

  const enriched = subject.addOptions({foo: 'bar'}, {token: 'token', portalHostname: 'https://super.custom'});

  assert.equal(enriched.foo, 'bar', 'original props should still be present');
  assert.equal(enriched.fetch, fetch, 'fetch should be tacked on');
  assert.equal(enriched.params.token, 'token', 'creds from portalOpts should take precedence');
  assert.equal(enriched.authentication, undefined, 'auth from torii should NOT be tacked on');
  // NOTE: this is actually testing getPortalRestUrl() as well
  // TODO: relace this w/ a stub once we have getPortalRestUrl() tests
  assert.equal(enriched.portal, 'https://super.custom/sharing/rest', 'portal from portalOpts should take precedence');
});

// NOTE: I don't know how realistic this test scenario is
test('addOptions, unauthenticated session with portal options', function (assert) {
  let ServiceMixinObject = EmberObject.extend(ServiceMixinMixin);
  let subject = ServiceMixinObject.create();

  subject.set('session', {
    // NOTE: I'm guessing {} ~= an unauthenticated session
  });

  const enriched = subject.addOptions({foo: 'bar'}, {token: 'token', portalHostname: 'https://super.custom'});

  assert.equal(enriched.foo, 'bar', 'original props should still be present');
  assert.equal(enriched.fetch, fetch, 'fetch should be tacked on');
  assert.equal(enriched.params.token, 'token', 'creds from portalOpts should take precedence');
  assert.equal(enriched.authentication, undefined, 'auth from torii should NOT be tacked on');
  // NOTE: this is actually testing getPortalRestUrl() as well
  // TODO: relace this w/ a stub once we have getPortalRestUrl() tests
  assert.equal(enriched.portal, 'https://super.custom/sharing/rest', 'portal from portalOpts should take precedence');
});
