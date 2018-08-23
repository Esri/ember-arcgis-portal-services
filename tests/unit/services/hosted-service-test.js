import { resolve } from 'rsvp';
import Service from '@ember/service';
import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleFor('service:hosted-service', 'Unit | Service | hosted service', {
  beforeEach () {
    const session = Service.extend({
      // implement stuff that gets called in your tests here
    });
    this.register('service:session', session);
  }
});

test('it returns the passed service name when it is unique', function (assert) {
  assert.expect(2);

  const service = this.subject();

  this.stub(service, 'serviceExists', function (serviceName) {
    const available = true;
    return resolve({ available });
  });

  service.ensureUniqueServiceName('my unique service name', 'my-org-id')
  .then(result => {
    assert.equal(result, 'my unique service name');
    assert.ok(service.serviceExists.calledOnce);
  });
});

test('it returns a unique service name when passed name is not unique', function (assert) {
  assert.expect(2);

  const service = this.subject();

  let callCount = 0;

  this.stub(service, 'serviceExists', function (serviceName) {
    const available = serviceName === 'Hub Events 3';
    callCount++;
    return resolve({ available });
  });

  service.ensureUniqueServiceName('Hub Events', 'my-org-id')
  .then(result => {
    assert.equal(result, 'Hub Events 3');
    assert.equal(callCount, 4);
  });
});
