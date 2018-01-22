import { resolve } from 'rsvp';
import Service from '@ember/service';
import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleFor('service:sharing-service', 'Unit | Service | sharing service', {
  // Specify the other units that are required for this test.
  needs: [ 'service:items-service', 'service:groups-service' ],
  beforeEach () {
    const session = Service.extend({
      // implement stuff that gets called in your tests here
    });
    this.register('service:session', session);
  }
});

// Replace this with your real tests.
test('it exists', function (assert) {
  let service = this.subject();
  assert.ok(service);
});

// Replace this with your real tests.
test('owner setAccess to everyone', function (assert) {
  let session = Service.extend({
    currentUser: {
      username: 'fakeuser'
    },
    isAdmin: function () {
      return false;
    }
  });
  this.register('service:session', session);
  let service = this.subject();
  // stub the ._post so we can inspect things
  this.stub(service, '_post', function (url, data) {
    return resolve({'itemId': '3efakeId', notSharedWith: []});
  });

  return service.setAccess('fakeuser', '3efakeId', 'everyone')
  .then((response) => {
    assert.equal(response.itemId, '3efakeId');
    // validate the url
    let args = service._post.getCall(0).args;
    let url = args[0];
    let data = args[1];
    assert.ok(url.indexOf('/content/users/fakeuser/items/3efakeId/share') > -1, '<user-item-url>/share should be used');
    assert.ok(data.everyone, 'everyone should be true');
    assert.ok(data.org, 'org should be true');
    assert.equal(data.items, '3efakeId');
    assert.ok(service._post.calledOnce);
  });
});

test('owner setAccess to no one', function (assert) {
  let session = Service.extend({
    currentUser: {
      username: 'fakeuser'
    },
    isAdmin: function () {
      return false;
    }
  });
  this.register('service:session', session);
  let service = this.subject();
  // stub the ._post so we can inspect things
  this.stub(service, '_post', function (url, data) {
    return resolve({'itemId': '3efakeId', notSharedWith: []});
  });

  return service.setAccess('fakeuser', '3efakeId')
  .then((response) => {
    assert.equal(response.itemId, '3efakeId');
    // validate the url
    let args = service._post.getCall(0).args;
    let url = args[0];
    let data = args[1];
    assert.ok(url.indexOf('/content/users/fakeuser/items/3efakeId/share') > -1, '<user-item-url>/share should be used');
    assert.notOk(data.everyone, 'everyone should be false');
    assert.notOk(data.org, 'org should be false');
    assert.equal(data.items, '3efakeId');
    assert.ok(service._post.calledOnce);
  });
});

test('admin setAccess to everyone', function (assert) {
  let session = Service.extend({
    currentUser: {
      username: 'fakeadmin'
    },
    isAdmin: function () {
      return true;
    }
  });
  this.register('service:session', session);
  let service = this.subject();
  // stub the ._post so we can inspect things
  this.stub(service, '_post', function (url, data) {
    return resolve({'itemId': '3efakeId', notSharedWith: []});
  });

  return service.setAccess('fakeuser', '3efakeId', 'everyone')
  .then((response) => {
    assert.equal(response.itemId, '3efakeId');
    // validate the url
    let args = service._post.getCall(0).args;
    let url = args[0];
    let data = args[1];
    assert.ok(url.indexOf('/content/users/fakeuser/items/3efakeId/share') > -1, '<user-item-url>/share should be used');
    assert.ok(data.everyone, 'everyone should be true');
    assert.ok(data.org, 'org should be true');
    assert.equal(data.items, '3efakeId');
    assert.ok(service._post.calledOnce);
  });
});

test('non-owner can not share item to the world', function (assert) {
  let session = Service.extend({
    currentUser: {
      username: 'otherfakeuser'
    },
    isAdmin: function () {
      return false;
    }
  });
  this.register('service:session', session);
  let service = this.subject();
  // stub the ._post so we can inspect things
  this.stub(service, '_post', function (url, data) {
    return resolve({'itemId': '3efakeId'});
  });

  return service.setAccess('fakeuser', '3efakeId', 'everyone')
  .catch((err) => {
    assert.ok(err.indexOf('otherfakeuser') > -1, 'Error should include current username');
    assert.notOk(service._post.called);
  });
});

test('owner share to group', function (assert) {
  let session = Service.extend({
    currentUser: {
      username: 'fakeuser'
    },
    isAdmin: function () {
      return false;
    }
  });
  this.register('service:session', session);
  let groupSvc = Service.extend({
    getUserMembership (id, username) {
      return resolve('member');
    }
  });
  this.register('service:groups-service', groupSvc);
  let service = this.subject();
  // stub the ._post so we can inspect things
  this.stub(service, '_post', function (url, data) {
    return resolve({'itemId': '3efakeId', notSharedWith: []});
  });

  this.stub(service, 'isItemSharedWithGroup', function (q) {
    return resolve(false);
  });

  return service.shareWithGroup('fakeuser', '3efakeId', '4efakeGroupId')
  .then((response) => {
    assert.equal(response.itemId, '3efakeId');
    // validate the url
    let postArgs = service._post.getCall(0).args;
    let url = postArgs[0];
    let data = postArgs[1];
    assert.ok(url.indexOf('/content/users/fakeuser/items/3efakeId/share') > -1, '<user-item-url>/share should be used');
    assert.notOk(data.everyone, 'everyone should be falsy');
    assert.notOk(data.org, 'org should be falsy');
    assert.notOk(data.confirmItemControl, 'confirmItemControl should be falsy');
    assert.equal(data.items, '3efakeId');
    assert.equal(data.groups, '4efakeGroupId');
    assert.ok(service._post.calledOnce);
    // validate the call to the search
    assert.ok(service.isItemSharedWithGroup.calledOnce);
  });
});

test('owner re-share to group', function (assert) {
  let session = Service.extend({
    currentUser: {
      username: 'fakeuser'
    },
    isAdmin: function () {
      return false;
    }
  });
  this.register('service:session', session);
  let service = this.subject();
  // stub the ._post so we can inspect things
  this.stub(service, '_post', function (url, data) {
    return resolve({'itemId': '3efakeId', notSharedWith: []});
  });

  this.stub(service, 'isItemSharedWithGroup', function (q) {
    return resolve(true);
  });

  return service.shareWithGroup('fakeuser', '3efakeId', '4efakeGroupId')
  .then((response) => {
    assert.equal(response.itemId, '3efakeId');
    // we should not call post...
    assert.equal(service._post.callCount, 0, '_post should not be called');
    // validate the call to the search
    assert.ok(service.isItemSharedWithGroup.calledOnce, 'isItemSharedWithGroup should be called');
  });
});

test('admin re-share to group', function (assert) {
  let session = Service.extend({
    currentUser: {
      username: 'fakeadmin'
    },
    isAdmin: function () {
      return true;
    }
  });
  this.register('service:session', session);
  let service = this.subject();
  // stub the ._post so we can inspect things
  this.stub(service, '_post', function (url, data) {
    return resolve({'itemId': '3efakeId', notSharedWith: []});
  });

  this.stub(service, 'isItemSharedWithGroup', function (q) {
    return resolve(true);
  });

  return service.shareWithGroup('fakeuser', '3efakeId', '4efakeGroupId')
  .then((response) => {
    assert.equal(response.itemId, '3efakeId');
    // we should not call post...
    assert.equal(service._post.callCount, 0, '_post should not be called');
    // validate the call to the search
    assert.ok(service.isItemSharedWithGroup.calledOnce, 'isItemSharedWithGroup should be called');
  });
});

test('owner share to group with itemControl', function (assert) {
  let session = Service.extend({
    currentUser: {
      username: 'fakeuser'
    },
    isAdmin: function () {
      return false;
    }
  });
  this.register('service:session', session);
  let groupSvc = Service.extend({
    getUserMembership (id, username) {
      return resolve('member');
    }
  });
  this.register('service:groups-service', groupSvc);
  let service = this.subject();
  // stub the ._post so we can inspect things
  this.stub(service, '_post', function (url, data) {
    return resolve({'itemId': '3efakeId', notSharedWith: []});
  });

  this.stub(service, 'isItemSharedWithGroup', function (q) {
    return resolve(false);
  });

  return service.shareWithGroup('fakeuser', '3efakeId', '4efakeGroupId', true)
  .then((response) => {
    assert.equal(response.itemId, '3efakeId');
    // validate the url
    let args = service._post.getCall(0).args;
    let url = args[0];
    let data = args[1];
    assert.ok(url.indexOf('/content/users/fakeuser/items/3efakeId/share') > -1, '<user-item-url>/share should be used');
    assert.notOk(data.everyone, 'everyone should be falsy');
    assert.notOk(data.org, 'org should be falsy');
    assert.ok(data.confirmItemControl, 'confirmItemControl should be true');
    assert.equal(data.items, '3efakeId');
    assert.equal(data.groups, '4efakeGroupId');
    assert.ok(service._post.calledOnce);
  });
});

test('owner share to group message response', function (assert) {
  let session = Service.extend({
    currentUser: {
      username: 'fakeuser'
    },
    isAdmin: function () {
      return false;
    }
  });
  this.register('service:session', session);
  let groupSvc = Service.extend({
    getUserMembership (id, username) {
      return resolve('member');
    }
  });
  this.register('service:groups-service', groupSvc);
  let service = this.subject();
  // stub the ._post so we can inspect things
  this.stub(service, '_post', function (url, data) {
    return resolve({'itemId': '3efakeId', notSharedWith: ['4efakeGroupId']});
  });
  this.stub(service, 'isItemSharedWithGroup', function (q) {
    return resolve(false);
  });
  return service.shareWithGroup('fakeuser', '3efakeId', '4efakeGroupId')
  .catch((err) => {
    let args = service._post.getCall(0).args;
    let url = args[0];
    let data = args[1];
    assert.ok(url.indexOf('/content/users/fakeuser/items/3efakeId/share') > -1, '<user-item-url>/share should be used');
    assert.notOk(data.everyone, 'everyone should be falsy');
    assert.notOk(data.org, 'org should be falsy');
    assert.equal(data.items, '3efakeId');
    assert.equal(data.groups, '4efakeGroupId');
    assert.ok(service._post.calledOnce, 'service _post should be called once');
    assert.ok(err.indexOf('could not be shared to group 4efakeGroupId'));
  });
});

test('non-owner can not share item to group', function (assert) {
  let session = Service.extend({
    currentUser: {
      username: 'otherfakeuser'
    },
    isAdmin: function () {
      return false;
    }
  });
  this.register('service:session', session);
  let groupSvc = Service.extend({
    getUserMembership (id, username) {
      return resolve('member');
    }
  });
  this.register('service:groups-service', groupSvc);
  let service = this.subject();
  // stub the ._post so we can inspect things
  this.stub(service, '_post', function (url, data) {
    return resolve({'itemId': '3efakeId'});
  });
  this.stub(service, 'isItemSharedWithGroup', function (q) {
    return resolve(false);
  });
  return service.shareWithGroup('fakeuser', '3efakeId', '4efakeGroupId')
  .catch((err) => {
    assert.ok(err.indexOf('otherfakeuser') > -1, 'Error should include current username');
    assert.notOk(service._post.called);
  });
});

test('isItemSharedWithGroup returns false if item not in group search result', function (assert) {
  let itemService = Service.extend({
    search: function () {
      return resolve({
        total: 0,
        results: []
      });
    }
  });
  this.register('service:items-service', itemService);
  let service = this.subject();

  return service.isItemSharedWithGroup('3efakeId', '4efakeGroupId')
  .then((result) => {
    assert.equal(result, false, 'item should not be in group');
  });
});

test('isItemSharedWithGroup returns true if item is in group search result', function (assert) {
  let itemService = Service.extend({
    search: function (itemId, groupId) {
      return resolve({
        total: 1,
        results: [{id: '3efakeId'}]
      });
    }
  });
  this.register('service:items-service', itemService);
  let service = this.subject();

  return service.isItemSharedWithGroup('3efakeId', '4efakeGroupId')
  .then((result) => {
    assert.equal(result, true, 'item should be in group');
  });
});
