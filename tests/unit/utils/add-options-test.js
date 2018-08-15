import addOptions from 'dummy/utils/add-options';
import { moduleFor, test } from 'ember-qunit';
import Service from '@ember/service';

moduleFor('util:add-options', 'Unit | Utility | add options', {
  // Specify the other units that are required for this test.
  // needs: [],
  beforeEach () {
    const session = Service.extend({
      isAuthenticated: true,
      currentUser: {
        firstName: 'Mike',
        fullName: 'Mike Juniper',
        username: 'mjuniper'
      },
      authMgr: {
        foo: 'bar'
      }
    });
    this.register('session', session);
  }
});

test('it works', function (assert) {
  let result = addOptions({ foo: 'bar' });
  assert.equal(result.foo, 'bar');
});

// test('it works with portal options', function (assert) {
//   let result = addOptions({ foo: 'bar' }, { token: 'token', portal: 'https://mine.com/sharing/rest' });
//   assert.equal(result.foo, 'bar');
// });

