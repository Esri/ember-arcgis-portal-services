import getServiceAdminUrl from 'ember-arcgis-portal-services/utils/get-service-admin-url';
import { module, test } from 'qunit';

module('Unit | Utility | get service admin url');

test('it works without layerId', function (assert) {
  const result = getServiceAdminUrl('https://servicesqa.arcgis.com/97KLIFOSt5CxbiRI/arcgis/rest/services/Hub%20Events%20Test%20Enable%202/FeatureServer', 'foo');
  assert.equal(result, `https://servicesqa.arcgis.com/97KLIFOSt5CxbiRI/arcgis/rest/admin/services/Hub%20Events%20Test%20Enable%202/FeatureServer/foo?f=json`);
});

test('it works with layerId', function (assert) {
  const result = getServiceAdminUrl('https://servicesqa.arcgis.com/97KLIFOSt5CxbiRI/arcgis/rest/services/Hub%20Events%20Test%20Enable%202/FeatureServer', 'foo', 0);
  assert.equal(result, `https://servicesqa.arcgis.com/97KLIFOSt5CxbiRI/arcgis/rest/admin/services/Hub%20Events%20Test%20Enable%202/FeatureServer/0/foo?f=json`);
});
