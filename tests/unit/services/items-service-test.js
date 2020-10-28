import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon';

module('Unit | Service | Items Service', function (hooks) {
  setupTest(hooks);

  test('should correctly concat foo', function (assert) {
    assert.expect(2);

    const itemsService = this.owner.lookup('service:items-service');
    const stub = sinon.stub(itemsService, 'request').returns(
      Promise.resolve({
        exportItemId: 'abc123',
      })
    );

    itemsService
      .export('test-user', 'asdf', {
        title: 'testing',
        exportFormat: 'CSV',
        enforceFieldVisibility: true,
      })
      .then((actual) => {
        assert.deepEqual(stub.firstCall.args[1], {
          method: 'POST',
          data: {
            itemId: 'asdf',
            title: 'testing',
            exportFormat: 'CSV',
            enforceFieldVisibility: true,
            f: 'json',
          },
        });
        assert.equal(typeof actual.getStatus, 'function');
      });
  });
});
