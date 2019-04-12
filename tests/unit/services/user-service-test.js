import Service from '@ember/service';
import { moduleFor, test } from 'ember-qunit';

moduleFor('service:user-service', 'Unit | Service | user service', {
  // Specify the other units that are required for this test.
  // needs: [ 'service:items-service', 'service:groups-service' ],
  beforeEach () {
    const session = Service.extend({
      // implement stuff that gets called in your tests here
    });
    this.register('service:session', session);
  }
});

test('it serializes tags', function (assert) {
  const service = this.subject();
  const user = {
    username: 'tomwayson',
    tags: ['test', 'test1']
  };
  assert.equal(service._serializeUser(user).tags, user.tags.join(', '), 'should return comma delimited list');
  user.tags = [];
  assert.equal(service._serializeUser(user).tags, 'user', 'should return default tag for empty array');
});
