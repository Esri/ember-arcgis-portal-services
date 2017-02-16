'use strict';

define('dummy/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('dummy/tests/application/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - application/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/components/file-input/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/file-input/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/file-input/component.js should pass ESLint.\n');
  });
});
define('dummy/tests/components/group-search-form/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/group-search-form/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/group-search-form/component.js should pass ESLint.\n');
  });
});
define('dummy/tests/components/item-resources/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/item-resources/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/item-resources/component.js should pass ESLint.\n');
  });
});
define('dummy/tests/components/item-search-form/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/item-search-form/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/item-search-form/component.js should pass ESLint.\n');
  });
});
define('dummy/tests/components/list-pager/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/list-pager/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/list-pager/component.js should pass ESLint.\n');
  });
});
define('dummy/tests/components/portal-resources/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/portal-resources/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/portal-resources/component.js should pass ESLint.\n');
  });
});
define('dummy/tests/components/upload-button/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/upload-button/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/upload-button/component.js should pass ESLint.\n');
  });
});
define("dummy/tests/ember-sinon-qunit/test", ["exports", "ember-sinon-qunit/test-support/test"], function (exports, _emberSinonQunitTestSupportTest) {
  exports["default"] = function () {
    console.warn("Using deprecated import path for ember-sinon-qunit; use `import test from 'ember-sinon-qunit/test-support/test';` instead.");
    return _emberSinonQunitTestSupportTest["default"].apply(this, arguments);
  };
});
// backwards compatibility
define('dummy/tests/groups/group/edit/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - groups/group/edit/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'groups/group/edit/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/groups/group/index/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - groups/group/index/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'groups/group/index/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/groups/group/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - groups/group/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'groups/group/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/groups/index/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - groups/index/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'groups/index/controller.js should pass ESLint.\n');
  });
});
define('dummy/tests/groups/index/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - groups/index/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'groups/index/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/groups/new/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - groups/new/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'groups/new/controller.js should pass ESLint.\n');
  });
});
define('dummy/tests/groups/new/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - groups/new/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'groups/new/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _dummyTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _dummyResolver, _dummyConfigEnvironment) {

  var resolver = _dummyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/torii', ['exports'], function (exports) {
  exports.stubValidSession = stubValidSession;

  function stubValidSession(application, sessionData) {
    var session = application.__container__.lookup('service:session');
    var sm = session.get('stateMachine');
    Ember.run(function () {
      sm.send('startOpen');
      sm.send('finishOpen', sessionData);
    });
  }
});
define('dummy/tests/index/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - index/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'index/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/items/bulk/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - items/bulk/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'items/bulk/controller.js should pass ESLint.\n');
  });
});
define('dummy/tests/items/bulk/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - items/bulk/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'items/bulk/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/items/index/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - items/index/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'items/index/controller.js should pass ESLint.\n');
  });
});
define('dummy/tests/items/index/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - items/index/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'items/index/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/items/item/edit/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - items/item/edit/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'items/item/edit/controller.js should pass ESLint.\n');
  });
});
define('dummy/tests/items/item/edit/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - items/item/edit/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'items/item/edit/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/items/item/index/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - items/item/index/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'items/item/index/controller.js should pass ESLint.\n');
  });
});
define('dummy/tests/items/item/index/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - items/item/index/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'items/item/index/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/items/item/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - items/item/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'items/item/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/items/new/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - items/new/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'items/new/controller.js should pass ESLint.\n');
  });
});
define('dummy/tests/items/new/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - items/new/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'items/new/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/items/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - items/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'items/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/portal/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - portal/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'portal/controller.js should pass ESLint.\n');
  });
});
define('dummy/tests/portal/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - portal/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'portal/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('dummy/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('dummy/tests/signin/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - signin/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'signin/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
define('dummy/tests/unit/mixins/service-mixin-test', ['exports', 'ember', 'ember-arcgis-portal-services/mixins/service-mixin', 'qunit'], function (exports, _ember, _emberArcgisPortalServicesMixinsServiceMixin, _qunit) {

  (0, _qunit.module)('Unit | Mixin | service mixin');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var ServiceMixinObject = _ember['default'].Object.extend(_emberArcgisPortalServicesMixinsServiceMixin['default']);
    var subject = ServiceMixinObject.create();
    assert.ok(subject);
  });
});
define('dummy/tests/unit/mixins/service-mixin-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/mixins/service-mixin-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/service-mixin-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/unit/services/geocode-service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:geocode-service', 'Unit | Service | geocode service', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('dummy/tests/unit/services/geocode-service-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/services/geocode-service-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/geocode-service-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/unit/services/groups-service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:groups-service', 'Unit | Service | groups service', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('dummy/tests/unit/services/groups-service-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/services/groups-service-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/groups-service-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/unit/services/items-service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:groups-service', 'Unit | Service | groups service', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('dummy/tests/unit/services/items-service-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/services/items-service-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/items-service-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/unit/services/oauth-service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:oauth-service', 'Unit | Service | oauth service', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('dummy/tests/unit/services/oauth-service-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/services/oauth-service-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/oauth-service-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/unit/services/sharing-service-test', ['exports', 'ember', 'ember-qunit', 'ember-sinon-qunit/test-support/test'], function (exports, _ember, _emberQunit, _emberSinonQunitTestSupportTest) {

  (0, _emberQunit.moduleFor)('service:sharing-service', 'Unit | Service | sharing service', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberSinonQunitTestSupportTest['default'])('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });

  // Replace this with your real tests.
  (0, _emberSinonQunitTestSupportTest['default'])('owner setAccess to everyone', function (assert) {
    var session = _ember['default'].Service.extend({
      currentUser: {
        username: 'fakeuser'
      },
      isAdmin: function isAdmin() {
        return false;
      }
    });
    this.register('service:session', session);
    var service = this.subject();
    // stub the ._post so we can inspect things
    this.stub(service, '_post', function (url, data) {
      return _ember['default'].RSVP.resolve({ 'itemId': '3efakeId', notSharedWith: [] });
    });

    return service.setAccess('fakeuser', '3efakeId', 'everyone').then(function (response) {
      assert.equal(response.itemId, '3efakeId');
      // validate the url
      var args = service._post.getCall(0).args;
      var url = args[0];
      var data = args[1];
      assert.ok(url.indexOf('/content/users/fakeuser/items/3efakeId/share') > -1, '<user-item-url>/share should be used');
      assert.ok(data.everyone, 'everyone should be true');
      assert.ok(data.org, 'org should be true');
      assert.equal(data.items, '3efakeId');
      assert.ok(service._post.calledOnce);
    });
  });

  (0, _emberSinonQunitTestSupportTest['default'])('owner setAccess to no one', function (assert) {
    var session = _ember['default'].Service.extend({
      currentUser: {
        username: 'fakeuser'
      },
      isAdmin: function isAdmin() {
        return false;
      }
    });
    this.register('service:session', session);
    var service = this.subject();
    // stub the ._post so we can inspect things
    this.stub(service, '_post', function (url, data) {
      return _ember['default'].RSVP.resolve({ 'itemId': '3efakeId', notSharedWith: [] });
    });

    return service.setAccess('fakeuser', '3efakeId').then(function (response) {
      assert.equal(response.itemId, '3efakeId');
      // validate the url
      var args = service._post.getCall(0).args;
      var url = args[0];
      var data = args[1];
      assert.ok(url.indexOf('/content/users/fakeuser/items/3efakeId/share') > -1, '<user-item-url>/share should be used');
      assert.notOk(data.everyone, 'everyone should be false');
      assert.notOk(data.org, 'org should be false');
      assert.equal(data.items, '3efakeId');
      assert.ok(service._post.calledOnce);
    });
  });

  (0, _emberSinonQunitTestSupportTest['default'])('admin setAccess to everyone', function (assert) {
    var session = _ember['default'].Service.extend({
      currentUser: {
        username: 'fakeadmin'
      },
      isAdmin: function isAdmin() {
        return true;
      }
    });
    this.register('service:session', session);
    var service = this.subject();
    // stub the ._post so we can inspect things
    this.stub(service, '_post', function (url, data) {
      return _ember['default'].RSVP.resolve({ 'itemId': '3efakeId', notSharedWith: [] });
    });

    return service.setAccess('fakeuser', '3efakeId', 'everyone').then(function (response) {
      assert.equal(response.itemId, '3efakeId');
      // validate the url
      var args = service._post.getCall(0).args;
      var url = args[0];
      var data = args[1];
      assert.ok(url.indexOf('/content/users/fakeuser/items/3efakeId/share') > -1, '<user-item-url>/share should be used');
      assert.ok(data.everyone, 'everyone should be true');
      assert.ok(data.org, 'org should be true');
      assert.equal(data.items, '3efakeId');
      assert.ok(service._post.calledOnce);
    });
  });

  (0, _emberSinonQunitTestSupportTest['default'])('non-owner can not share item to the world', function (assert) {
    var session = _ember['default'].Service.extend({
      currentUser: {
        username: 'otherfakeuser'
      },
      isAdmin: function isAdmin() {
        return false;
      }
    });
    this.register('service:session', session);
    var service = this.subject();
    // stub the ._post so we can inspect things
    this.stub(service, '_post', function (url, data) {
      return _ember['default'].RSVP.resolve({ 'itemId': '3efakeId' });
    });

    return service.setAccess('fakeuser', '3efakeId', 'everyone')['catch'](function (err) {
      assert.ok(err.indexOf('otherfakeuser') > -1, 'Error should include current username');
      assert.notOk(service._post.called);
    });
  });

  (0, _emberSinonQunitTestSupportTest['default'])('owner share to group', function (assert) {
    var session = _ember['default'].Service.extend({
      currentUser: {
        username: 'fakeuser'
      },
      isAdmin: function isAdmin() {
        return false;
      }
    });
    this.register('service:session', session);
    var service = this.subject();
    // stub the ._post so we can inspect things
    this.stub(service, '_post', function (url, data) {
      return _ember['default'].RSVP.resolve({ 'itemId': '3efakeId', notSharedWith: [] });
    });

    this.stub(service, 'isItemSharedWithGroup', function (q) {
      return _ember['default'].RSVP.resolve(false);
    });

    return service.shareWithGroup('fakeuser', '3efakeId', '4efakeGroupId').then(function (response) {
      assert.equal(response.itemId, '3efakeId');
      // validate the url
      var postArgs = service._post.getCall(0).args;
      var url = postArgs[0];
      var data = postArgs[1];
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

  (0, _emberSinonQunitTestSupportTest['default'])('owner re-share to group', function (assert) {
    var session = _ember['default'].Service.extend({
      currentUser: {
        username: 'fakeuser'
      },
      isAdmin: function isAdmin() {
        return false;
      }
    });
    this.register('service:session', session);
    var service = this.subject();
    // stub the ._post so we can inspect things
    this.stub(service, '_post', function (url, data) {
      return _ember['default'].RSVP.resolve({ 'itemId': '3efakeId', notSharedWith: [] });
    });

    this.stub(service, 'isItemSharedWithGroup', function (q) {
      return _ember['default'].RSVP.resolve(true);
    });

    return service.shareWithGroup('fakeuser', '3efakeId', '4efakeGroupId').then(function (response) {
      assert.equal(response.itemId, '3efakeId');
      // we should not call post...
      assert.equal(service._post.callCount, 0, '_post should not be called');
      // validate the call to the search
      assert.ok(service.isItemSharedWithGroup.calledOnce, 'isItemSharedWithGroup should be called');
    });
  });

  (0, _emberSinonQunitTestSupportTest['default'])('admin re-share to group', function (assert) {
    var session = _ember['default'].Service.extend({
      currentUser: {
        username: 'fakeadmin'
      },
      isAdmin: function isAdmin() {
        return true;
      }
    });
    this.register('service:session', session);
    var service = this.subject();
    // stub the ._post so we can inspect things
    this.stub(service, '_post', function (url, data) {
      return _ember['default'].RSVP.resolve({ 'itemId': '3efakeId', notSharedWith: [] });
    });

    this.stub(service, 'isItemSharedWithGroup', function (q) {
      return _ember['default'].RSVP.resolve(true);
    });

    return service.shareWithGroup('fakeuser', '3efakeId', '4efakeGroupId').then(function (response) {
      assert.equal(response.itemId, '3efakeId');
      // we should not call post...
      assert.equal(service._post.callCount, 0, '_post should not be called');
      // validate the call to the search
      assert.ok(service.isItemSharedWithGroup.calledOnce, 'isItemSharedWithGroup should be called');
    });
  });

  (0, _emberSinonQunitTestSupportTest['default'])('owner share to group with itemControl', function (assert) {
    var session = _ember['default'].Service.extend({
      currentUser: {
        username: 'fakeuser'
      },
      isAdmin: function isAdmin() {
        return false;
      }
    });
    this.register('service:session', session);
    var service = this.subject();
    // stub the ._post so we can inspect things
    this.stub(service, '_post', function (url, data) {
      return _ember['default'].RSVP.resolve({ 'itemId': '3efakeId', notSharedWith: [] });
    });

    this.stub(service, 'isItemSharedWithGroup', function (q) {
      return _ember['default'].RSVP.resolve(false);
    });

    return service.shareWithGroup('fakeuser', '3efakeId', '4efakeGroupId', true).then(function (response) {
      assert.equal(response.itemId, '3efakeId');
      // validate the url
      var args = service._post.getCall(0).args;
      var url = args[0];
      var data = args[1];
      assert.ok(url.indexOf('/content/users/fakeuser/items/3efakeId/share') > -1, '<user-item-url>/share should be used');
      assert.notOk(data.everyone, 'everyone should be falsy');
      assert.notOk(data.org, 'org should be falsy');
      assert.ok(data.confirmItemControl, 'confirmItemControl should be true');
      assert.equal(data.items, '3efakeId');
      assert.equal(data.groups, '4efakeGroupId');
      assert.ok(service._post.calledOnce);
    });
  });

  (0, _emberSinonQunitTestSupportTest['default'])('owner share to group message response', function (assert) {
    var session = _ember['default'].Service.extend({
      currentUser: {
        username: 'fakeuser'
      },
      isAdmin: function isAdmin() {
        return false;
      }
    });
    this.register('service:session', session);
    var service = this.subject();
    // stub the ._post so we can inspect things
    this.stub(service, '_post', function (url, data) {
      return _ember['default'].RSVP.resolve({ 'itemId': '3efakeId', notSharedWith: ['4efakeGroupId'] });
    });
    this.stub(service, 'isItemSharedWithGroup', function (q) {
      return _ember['default'].RSVP.resolve(false);
    });
    return service.shareWithGroup('fakeuser', '3efakeId', '4efakeGroupId')['catch'](function (err) {
      var args = service._post.getCall(0).args;
      var url = args[0];
      var data = args[1];
      assert.ok(url.indexOf('/content/users/fakeuser/items/3efakeId/share') > -1, '<user-item-url>/share should be used');
      assert.notOk(data.everyone, 'everyone should be falsy');
      assert.notOk(data.org, 'org should be falsy');
      assert.equal(data.items, '3efakeId');
      assert.equal(data.groups, '4efakeGroupId');
      assert.ok(service._post.calledOnce);
      assert.ok(err.indexOf('could not be shared to group 4efakeGroupId'));
    });
  });

  (0, _emberSinonQunitTestSupportTest['default'])('non-owner can not share item to group', function (assert) {
    var session = _ember['default'].Service.extend({
      currentUser: {
        username: 'otherfakeuser'
      },
      isAdmin: function isAdmin() {
        return false;
      }
    });
    this.register('service:session', session);
    var service = this.subject();
    // stub the ._post so we can inspect things
    this.stub(service, '_post', function (url, data) {
      return _ember['default'].RSVP.resolve({ 'itemId': '3efakeId' });
    });

    return service.shareWithGroup('fakeuser', '3efakeId', '4efakeGroupId')['catch'](function (err) {
      assert.ok(err.indexOf('otherfakeuser') > -1, 'Error should include current username');
      assert.notOk(service._post.called);
    });
  });

  (0, _emberSinonQunitTestSupportTest['default'])('isItemSharedWithGroup returns false if item not in group search result', function (assert) {
    var itemService = _ember['default'].Service.extend({
      search: function search() {
        return _ember['default'].RSVP.resolve({
          total: 0,
          results: []
        });
      }
    });
    this.register('service:items-service', itemService);
    var service = this.subject();

    return service.isItemSharedWithGroup('3efakeId', '4efakeGroupId').then(function (result) {
      assert.equal(result, false, 'item should not be in group');
    });
  });

  (0, _emberSinonQunitTestSupportTest['default'])('isItemSharedWithGroup returns true if item is in group search result', function (assert) {
    var itemService = _ember['default'].Service.extend({
      search: function search(itemId, groupId) {
        return _ember['default'].RSVP.resolve({
          total: 1,
          results: [{ id: '3efakeId' }]
        });
      }
    });
    this.register('service:items-service', itemService);
    var service = this.subject();

    return service.isItemSharedWithGroup('3efakeId', '4efakeGroupId').then(function (result) {
      assert.equal(result, true, 'item should be in group');
    });
  });
});
define('dummy/tests/unit/services/sharing-service-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/services/sharing-service-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/sharing-service-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/users/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - users/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'users/controller.js should pass ESLint.\n');
  });
});
define('dummy/tests/users/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - users/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'users/route.js should pass ESLint.\n');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
