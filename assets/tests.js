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
    assert.ok(false, 'items/bulk/controller.js should pass ESLint.\n44:1  - Trailing spaces not allowed. (no-trailing-spaces)\n44:1  - More than 1 blank line not allowed. (no-multiple-empty-lines)');
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
define('dummy/tests/unit/services/arcgis-ajax-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:arcgis-ajax', 'Unit | Service | arcgis ajax', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('dummy/tests/unit/services/arcgis-ajax-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/services/arcgis-ajax-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/arcgis-ajax-test.js should pass ESLint.\n');
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
    assert.ok(false, 'unit/services/geocode-service-test.js should pass ESLint.\n9:27  - Missing space before function parentheses. (space-before-function-paren)');
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
