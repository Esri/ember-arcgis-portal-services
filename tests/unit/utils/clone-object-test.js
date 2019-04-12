import { cloneObject } from 'ember-arcgis-portal-services/utils/clone-object';
import { module, test } from 'qunit';

module('Unit | Utility | cloneObject', function (hooks) {
  // Replace this with your real tests.
  test('it works', function (assert) {
    const obj = {
      color: 'red',
      length: 12
    };
    const c = cloneObject(obj);
    assert.notEqual(c, obj);

    ['color', 'length'].map(prop => {
      assert.equal(c[prop], obj[prop]);
    });
  });
  test('can clone a deep object', function (assert) {
    const obj = {
      color: 'red',
      length: 12,
      field: {
        name: 'origin',
        type: 'string'
      }
    };
    const c = cloneObject(obj);
    assert.notEqual(c, obj);
    assert.notEqual(c.field, obj.field);

    ['color', 'length'].map(prop => {
      assert.equal(c[prop], obj[prop]);
    });
    ['name', 'type'].map(prop => {
      assert.equal(c[prop], obj[prop]);
    });
  });
});
