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
  assert.notOk(enriched.portal, 'portal should NOT be set');
});

test('addOptions, authenticated sesssion', function (assert) {
  let ServiceMixinObject = EmberObject.extend(ServiceMixinMixin);
  let subject = ServiceMixinObject.create();

  subject.set('session', {
    portalHostname: 'https://session.host.com',
    token: 'tokenFromSession',
    // NOTE: this would be the same as getPortalRestUrl()
    // so it shouldn't get overwitten
    authMgr: { portal: 'https://session.host.com/sharing/rest' },
  });

  const enriched = subject.addOptions({foo: 'bar'});

  assert.equal(enriched.foo, 'bar', 'original props should still be present');
  assert.equal(enriched.fetch, fetch, 'fetch should be tacked on');
  assert.notOk(enriched.params, 'should use authentication instead of token param');
  // NOTE: this is actually testing getPortalRestUrl() as well
  // TODO: relace this w/ a stub once we have getPortalRestUrl() tests
  assert.equal(enriched.authentication, subject.get('session.authMgr'), 'should get authentication from torii');
  assert.notOk(enriched.portal, 'should use authentication instead of portal');
});

test('addOptions, authenticated sesssion with out of sync portal', function (assert) {
  let ServiceMixinObject = EmberObject.extend(ServiceMixinMixin);
  let subject = ServiceMixinObject.create();

  subject.set('session', {
    portalHostname: 'https://session.host.com',
    token: 'tokenFromSession',
    // NOTE: not sure if it is realistic to have authMgr.portal out of sync
    authMgr: { portal: 'https://somehow.this.got/stale' },
  });

  const enriched = subject.addOptions({foo: 'bar'});

  assert.equal(enriched.foo, 'bar', 'original props should still be present');
  assert.equal(enriched.fetch, fetch, 'fetch should be tacked on');
  assert.notOk(enriched.params, 'should use authentication instead of token param');
  assert.equal(enriched.authentication, subject.get('session.authMgr'), 'should get authentication from torii');
  // NOTE: this is actually testing getPortalRestUrl() as well
  // TODO: relace this w/ a stub once we have getPortalRestUrl() tests
  assert.equal(enriched.authentication.portal, 'https://session.host.com/sharing/rest', 'stale torii portal should be updated');
  assert.notOk(enriched.portal, 'should use authentication instead of portal');
});

test('addOptions, authenticated session with authenticated portal options', function (assert) {
  let ServiceMixinObject = EmberObject.extend(ServiceMixinMixin);
  let subject = ServiceMixinObject.create();

  subject.set('session', {
    portalHostname: 'https://session.host.com',
    token: 'tokenFromSession',
    authMgr: { portal: 'https://session.host.com' },
  });

  const enriched = subject.addOptions({foo: 'bar'}, {token: 'tokenFromPortalOptions', portalHostname: 'https://super.custom'});

  assert.equal(enriched.foo, 'bar', 'original props should still be present');
  assert.equal(enriched.fetch, fetch, 'fetch should be tacked on');
  assert.notOk(enriched.params, 'should use authentication instead of token param');
  assert.notOk(enriched.portal, 'should use authentication instead of portal');
  // NOTE: this is actually testing getPortalRestUrl() as well
  // TODO: relace this w/ a stub once we have getPortalRestUrl() tests
  assert.equal(enriched.authentication.portal, 'https://super.custom/sharing/rest', 'authentication should have portal from portal options');
  return enriched.authentication.getToken()
  .then(token => {
    assert.equal(token, 'tokenFromPortalOptions', 'getToken() should return portal from portal options');
  });
});

test('addOptions, authenticated session with unauthenticated portal options', function (assert) {
  let ServiceMixinObject = EmberObject.extend(ServiceMixinMixin);
  let subject = ServiceMixinObject.create();

  subject.set('session', {
    portalHostname: 'https://session.host.com',
    token: 'tokenFromSession',
    authMgr: { portal: 'https://session.host.com' },
  });

  // NOTE: no token in these portal options
  const enriched = subject.addOptions({foo: 'bar'}, { portalHostname: 'https://super.custom' });

  assert.equal(enriched.foo, 'bar', 'original props should still be present');
  assert.equal(enriched.fetch, fetch, 'fetch should be tacked on');
  assert.notOk(enriched.params, 'should use authentication instead of token param');
  assert.notOk(enriched.autentication, 'should use portal instead of authentication');
  // NOTE: this is actually testing getPortalRestUrl() as well
  // TODO: relace this w/ a stub once we have getPortalRestUrl() tests
  assert.equal(enriched.portal, 'https://super.custom/sharing/rest', 'portal should have come from portal options');
});

// NOTE: this is how the README suggests you can work w/o torii
// https://github.com/Esri/ember-arcgis-portal-services#dependencies
test('addOptions, dummy session with portal options', function (assert) {
  let ServiceMixinObject = EmberObject.extend(ServiceMixinMixin);
  let subject = ServiceMixinObject.create();

  // a dummy session service
  subject.set('session', {
  });

  const enriched = subject.addOptions({foo: 'bar'}, {token: 'tokenFromPortalOptions', portalHostname: 'https://super.custom'});

  assert.equal(enriched.foo, 'bar', 'original props should still be present');
  assert.equal(enriched.fetch, fetch, 'fetch should be tacked on');
  assert.notOk(enriched.params, 'should use authentication instead of token param');
  assert.notOk(enriched.portal, 'should use authentication instead of portal');
  // NOTE: this is actually testing getPortalRestUrl() as well
  // TODO: relace this w/ a stub once we have getPortalRestUrl() tests
  assert.equal(enriched.authentication.portal, 'https://super.custom/sharing/rest', 'authentication should have portal from portal options');
  return enriched.authentication.getToken()
  .then(token => {
    assert.equal(token, 'tokenFromPortalOptions', 'getToken() should return portal from portal options');
  });
});
