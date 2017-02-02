"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/application/route', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports['default'] = _ember['default'].Route.extend({

    actions: {
      accessDenied: function accessDenied() {
        this.transitionTo('signin');
      },
      signout: function signout() {
        // depending on the type of auth, we need to do different things
        if (_dummyConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].display && _dummyConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].display === 'iframe') {
          // redirect the window to the signout url
          window.location = this.get('session.signoutUrl');
        } else {
          this.get('session').close();
        }
      }
    }
  });
});
define("dummy/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 79
            }
          },
          "moduleName": "dummy/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("ember-arcgis-portal-services");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 17,
                "column": 24
              },
              "end": {
                "line": 17,
                "column": 50
              }
            },
            "moduleName": "dummy/application/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Home");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 8
            },
            "end": {
              "line": 17,
              "column": 50
            }
          },
          "moduleName": "dummy/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [17, 24], [17, 50]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 24
              },
              "end": {
                "line": 18,
                "column": 51
              }
            },
            "moduleName": "dummy/application/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Users");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 8
            },
            "end": {
              "line": 18,
              "column": 51
            }
          },
          "moduleName": "dummy/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["users"], [], 0, null, ["loc", [null, [18, 24], [18, 51]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 19,
                "column": 24
              },
              "end": {
                "line": 19,
                "column": 59
              }
            },
            "moduleName": "dummy/application/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Groups");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 8
            },
            "end": {
              "line": 19,
              "column": 59
            }
          },
          "moduleName": "dummy/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["groups.index"], [], 0, null, ["loc", [null, [19, 24], [19, 59]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 20,
                "column": 24
              },
              "end": {
                "line": 20,
                "column": 51
              }
            },
            "moduleName": "dummy/application/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Items");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 8
            },
            "end": {
              "line": 20,
              "column": 51
            }
          },
          "moduleName": "dummy/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["items"], [], 0, null, ["loc", [null, [20, 24], [20, 51]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child5 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 21,
                "column": 24
              },
              "end": {
                "line": 21,
                "column": 53
              }
            },
            "moduleName": "dummy/application/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Portal");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 8
            },
            "end": {
              "line": 21,
              "column": 53
            }
          },
          "moduleName": "dummy/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["portal"], [], 0, null, ["loc", [null, [21, 24], [21, 53]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 24,
              "column": 8
            },
            "end": {
              "line": 26,
              "column": 8
            }
          },
          "moduleName": "dummy/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "href", "#");
          var el3 = dom.createTextNode("Sign Out");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 0]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["signout"], [], ["loc", [null, [25, 24], [25, 44]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child7 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 27,
                  "column": 24
                },
                "end": {
                  "line": 27,
                  "column": 54
                }
              },
              "moduleName": "dummy/application/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Sign In");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 27,
                "column": 8
              },
              "end": {
                "line": 27,
                "column": 54
              }
            },
            "moduleName": "dummy/application/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "link-to", ["signin"], [], 0, null, ["loc", [null, [27, 24], [27, 54]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 26,
              "column": 8
            },
            "end": {
              "line": 28,
              "column": 8
            }
          },
          "moduleName": "dummy/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "active-link", [], [], 0, null, ["loc", [null, [27, 8], [27, 70]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 38,
            "column": 0
          }
        },
        "moduleName": "dummy/application/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "class", "navbar navbar-default");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "navbar-header");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "navbar-toggle collapsed");
        dom.setAttribute(el4, "data-toggle", "collapse");
        dom.setAttribute(el4, "data-target", "#navbar");
        dom.setAttribute(el4, "aria-expanded", "false");
        dom.setAttribute(el4, "aria-controls", "navbar");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "sr-only");
        var el6 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "id", "navbar");
        dom.setAttribute(el3, "class", "navbar-collapse collapse");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "nav navbar-nav");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "nav navbar-nav navbar-right");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "https://github.com/arcgis/ember-arcgis-portal-services");
        var el7 = dom.createTextNode("Github");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("/.nav-collapse ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("/.container-fluid ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [1, 1]);
        var element2 = dom.childAt(element1, [3]);
        var element3 = dom.childAt(element2, [1]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 3, 3);
        morphs[1] = dom.createMorphAt(element3, 1, 1);
        morphs[2] = dom.createMorphAt(element3, 3, 3);
        morphs[3] = dom.createMorphAt(element3, 5, 5);
        morphs[4] = dom.createMorphAt(element3, 7, 7);
        morphs[5] = dom.createMorphAt(element3, 9, 9);
        morphs[6] = dom.createMorphAt(dom.childAt(element2, [3]), 1, 1);
        morphs[7] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], ["class", "navbar-brand"], 0, null, ["loc", [null, [12, 8], [12, 79]]]], ["block", "active-link", [], [], 1, null, ["loc", [null, [17, 8], [17, 66]]]], ["block", "active-link", [], [], 2, null, ["loc", [null, [18, 8], [18, 67]]]], ["block", "active-link", [], [], 3, null, ["loc", [null, [19, 8], [19, 75]]]], ["block", "active-link", [], [], 4, null, ["loc", [null, [20, 8], [20, 67]]]], ["block", "active-link", [], [], 5, null, ["loc", [null, [21, 8], [21, 69]]]], ["block", "if", [["get", "session.isAuthenticated", ["loc", [null, [24, 14], [24, 37]]], 0, 0, 0, 0]], [], 6, 7, ["loc", [null, [24, 8], [28, 15]]]], ["content", "outlet", ["loc", [null, [36, 4], [36, 14]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7]
    };
  })());
});
define('dummy/blueprints/surge', ['exports', 'ember-cli-surge/blueprints/surge'], function (exports, _emberCliSurgeBlueprintsSurge) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliSurgeBlueprintsSurge['default'];
    }
  });
});
define('dummy/components/active-link', ['exports', 'ember-cli-active-link-wrapper/components/active-link'], function (exports, _emberCliActiveLinkWrapperComponentsActiveLink) {
  exports['default'] = _emberCliActiveLinkWrapperComponentsActiveLink['default'];
});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dummyConfigEnvironment) {

  var name = _dummyConfigEnvironment['default'].APP.name;
  var version = _dummyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('dummy/components/file-input/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend(_ember['default'].Evented, {
    tagName: 'input',
    type: 'file',
    classNames: ['inputfile'],
    attributeBindings: ['type', 'multiple', 'name', 'id'],
    multiple: false,
    change: function change(event) {
      var input = event.target;
      if (!_ember['default'].isEmpty(input.files)) {
        if (this.get('onChange')) {
          this.get('onChange')(input.files);
        }
      }
    }
  });
});
define('dummy/components/group-search-form/component', ['exports', 'ember', 'dummy/components/group-search-form/template'], function (exports, _ember, _dummyComponentsGroupSearchFormTemplate) {
  exports['default'] = _ember['default'].Component.extend({
    layout: _dummyComponentsGroupSearchFormTemplate['default'],
    tagName: 'form',
    classNames: ['form-inline'],

    submit: function submit() {
      if (this.get('query') === '') {
        this.set('query', null);
      }
      this.get('onFilter')();
      return false;
    },
    actions: {
      filter: function filter() {
        if (this.get('query') === '') {
          this.set('query', null);
        }
        this.get('onFilter')();
      }
    }
  });
});
define("dummy/components/group-search-form/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "dummy/components/group-search-form/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-group");
        var el2 = dom.createTextNode("\n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(element0, 5, 5);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "query", ["loc", [null, [2, 17], [2, 22]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "placeholder", "Search"], ["loc", [null, [2, 3], [2, 66]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "owner", ["loc", [null, [3, 17], [3, 22]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "placeholder", "Owner"], ["loc", [null, [3, 3], [3, 65]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "tags", ["loc", [null, [4, 17], [4, 21]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "placeholder", "Tags"], ["loc", [null, [4, 3], [4, 63]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('dummy/components/item-resources/component', ['exports', 'ember', 'dummy/components/item-resources/template', 'ember-network/fetch'], function (exports, _ember, _dummyComponentsItemResourcesTemplate, _emberNetworkFetch) {
  exports['default'] = _ember['default'].Component.extend({
    layout: _dummyComponentsItemResourcesTemplate['default'],
    itemsService: _ember['default'].inject.service('items-service'),

    session: _ember['default'].inject.service(),
    token: _ember['default'].computed.alias('session.token'),
    isLoading: true,
    urlToResource: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
    // Lazy load the resources
    didInsertElement: function didInsertElement() {
      this._getResources();
    },
    resourceBaseUrl: _ember['default'].computed('session', 'item', function () {
      var portalHostName = this.get('session.portalHostName');
      var item = this.get('item');
      return '//' + portalHostName + '/sharing/rest/content/items/' + item.id + '/resources/';
    }),
    _getResources: function _getResources() {
      var _this = this;

      this.set('isLoading', true);
      this.get('onFetchResources')().then(function (resources) {
        _this.set('model', resources);
        _this.set('isLoading', false);
      });
    },

    actions: {
      destroy: function destroy(resource) {
        var _this2 = this;

        this.get('onRemoveResource')(resource).then(function () {
          _this2._getResources();
        });
      },
      filesChanged: function filesChanged(files) {
        var _this3 = this;

        _ember['default'].debug('Files changed!'); // files[0]
        this.get('onUploadFile')(files[0]).then(function () {
          _this3._getResources();
        });
      },
      sendJson: function sendJson() {
        var _this4 = this;

        var obj = {
          foo: 'bar'
        };
        this.get('onJsonUpload')(obj).then(function () {
          _this4._getResources();
        });
      },
      sendText: function sendText() {
        var _this5 = this;

        // fetch the content of the url as a string
        // get the fileName from the url...
        var parts = this.get('urlToResource').split('/');
        var filename = parts[parts.length - 1] + '.txt';
        return (0, _emberNetworkFetch['default'])(this.get('urlToResource')).then(function (response) {
          return response.text();
        }).then(function (cssAsString) {
          _this5.get('cssAsString', cssAsString);
          return _this5.get('onTextUpload')(cssAsString, filename).then(function () {
            _this5._getResources();
          });
        });
        // let text = ''
        // this.get('onTextUpload')(text)
        // .then(() => {
        //   this._getResources();
        // });
      }
    }
  });
});
define("dummy/components/item-resources/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "dummy/components/item-resources/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("Loading resources...");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 6
              },
              "end": {
                "line": 16,
                "column": 6
              }
            },
            "moduleName": "dummy/components/item-resources/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createElement("a");
            dom.setAttribute(el3, "target", "_blank");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "type", "button");
            dom.setAttribute(el3, "class", "btn btn-danger");
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "glyphicon glyphicon-trash");
            dom.setAttribute(el4, "aria-hidden", "true");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1, 0]);
            var element2 = dom.childAt(element0, [3, 0]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element1, 'href');
            morphs[1] = dom.createMorphAt(element1, 0, 0);
            morphs[2] = dom.createElementMorph(element2);
            return morphs;
          },
          statements: [["attribute", "href", ["concat", [["get", "resourceBaseUrl", ["loc", [null, [13, 23], [13, 38]]], 0, 0, 0, 0], ["get", "res.resource", ["loc", [null, [13, 42], [13, 54]]], 0, 0, 0, 0], "?token=", ["get", "token", ["loc", [null, [13, 65], [13, 70]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "res.resource", ["loc", [null, [13, 90], [13, 106]]], 0, 0, 0, 0], ["element", "action", ["destroy", ["get", "res", ["loc", [null, [14, 77], [14, 80]]], 0, 0, 0, 0]], [], ["loc", [null, [14, 58], [14, 82]]], 0, 0]],
          locals: ["res"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 27,
              "column": 0
            }
          },
          "moduleName": "dummy/components/item-resources/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("Resources");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("table");
          dom.setAttribute(el1, "class", "table table-striped");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("thead");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Name");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Actions");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("tbody");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "form-group");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2, "for", "fileUrl");
          var el3 = dom.createTextNode("Url to Resource");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primay");
          var el2 = dom.createTextNode("Send Fetch and Upload File");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("pre");
          var el2 = dom.createElement("code");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [9]);
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3, 3]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [7]), 3, 3);
          morphs[3] = dom.createElementMorph(element3);
          morphs[4] = dom.createMorphAt(dom.childAt(fragment, [11, 0]), 0, 0);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.resources", ["loc", [null, [11, 14], [11, 29]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [11, 6], [16, 15]]]], ["inline", "upload-button", [], ["onChange", ["subexpr", "action", ["filesChanged"], [], ["loc", [null, [19, 27], [19, 50]]], 0, 0]], ["loc", [null, [19, 2], [19, 52]]], 0, 0], ["inline", "input", [], ["type", ["subexpr", "@mut", [["get", "text", ["loc", [null, [22, 17], [22, 21]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "urlToResource", ["loc", [null, [22, 28], [22, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "placeholder", "Url to Resource"], ["loc", [null, [22, 4], [22, 94]]], 0, 0], ["element", "action", ["sendText"], [], ["loc", [null, [24, 33], [24, 54]]], 0, 0], ["content", "cssAsString", ["loc", [null, [25, 13], [25, 28]]], 0, 0, 0, 0]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 28,
            "column": 0
          }
        },
        "moduleName": "dummy/components/item-resources/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "isLoading", ["loc", [null, [1, 6], [1, 15]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [27, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('dummy/components/item-search-form/component', ['exports', 'ember', 'dummy/components/item-search-form/template'], function (exports, _ember, _dummyComponentsItemSearchFormTemplate) {
  exports['default'] = _ember['default'].Component.extend({
    layout: _dummyComponentsItemSearchFormTemplate['default'],
    tagName: 'form',
    classNames: ['form-inline'],

    submit: function submit() {
      if (this.get('query') === '') {
        this.set('query', null);
      }
      this.get('onFilter')();
      return false;
    },
    actions: {
      filter: function filter() {
        if (this.get('query') === '') {
          this.set('query', null);
        }
        this.get('onFilter')();
      }
    }
  });
});
define("dummy/components/item-search-form/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "dummy/components/item-search-form/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "input-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n     ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "input-group-btn");
        var el4 = dom.createTextNode("\n       ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn-default");
        dom.setAttribute(el4, "type", "submit");
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "glyphicon glyphicon-search");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n     ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n   ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /input-group ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(element0, 4, 4);
        morphs[2] = dom.createMorphAt(element0, 6, 6);
        morphs[3] = dom.createMorphAt(element0, 8, 8);
        morphs[4] = dom.createMorphAt(element0, 10, 10);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "query", ["loc", [null, [3, 18], [3, 23]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "placeholder", "Search"], ["loc", [null, [3, 4], [3, 67]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "owner", ["loc", [null, [8, 17], [8, 22]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "placeholder", "Owner"], ["loc", [null, [8, 3], [8, 65]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "type", ["loc", [null, [9, 17], [9, 21]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "placeholder", "Type"], ["loc", [null, [9, 3], [9, 63]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "typeKeywords", ["loc", [null, [10, 17], [10, 29]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "placeholder", "Type Keywords"], ["loc", [null, [10, 3], [10, 80]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "tags", ["loc", [null, [11, 17], [11, 21]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "placeholder", "Tags"], ["loc", [null, [11, 3], [11, 63]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('dummy/components/json-editor', ['exports', 'ember-cli-jsoneditor/components/json-editor'], function (exports, _emberCliJsoneditorComponentsJsonEditor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliJsoneditorComponentsJsonEditor['default'];
    }
  });
});
define('dummy/components/list-pager/component', ['exports', 'ember', 'dummy/components/list-pager/template'], function (exports, _ember, _dummyComponentsListPagerTemplate) {
  exports['default'] = _ember['default'].Component.extend({
    layout: _dummyComponentsListPagerTemplate['default'],
    tagName: 'nav',
    totalCount: _ember['default'].computed('model.total', function () {
      return this.get('model.total');
    }),

    totalPages: _ember['default'].computed('totalCount', function () {
      var totalPages = Math.ceil(this.get('totalCount') / this.get('model.num'));
      return totalPages;
    }),
    lastPage: _ember['default'].computed.alias('totalPages'),

    showPagination: _ember['default'].computed.gt('totalPages', 1),

    prevStart: _ember['default'].computed('model.start', function () {
      return this.get('model.start') - this.get('model.num');
    }),

    nextStart: _ember['default'].computed('model.start', function () {
      return this.get('model.nextStart');
    }),

    isFirstPage: _ember['default'].computed.equal('model.start', 1),

    isLastPage: _ember['default'].computed('model.start', 'totalPages', function () {
      return this.get('model.start') * this.get('model.num') >= this.get('totalPages');
    }),

    pageRange: _ember['default'].computed('model.num', 'totalPages', function () {
      var result = _ember['default'].A();

      var currentPage = Math.ceil(this.get('model.start') / this.get('model.num'));
      var totalPages = this.get('totalPages');

      var start = totalPages > 10 && currentPage > 6 ? currentPage - 5 : 1;
      var end = totalPages > start + 9 ? start + 9 : totalPages;
      var num = this.get('model.num');
      for (var i = start; i <= end; i++) {
        var pageStart = i * num - num + 1;
        // console.log('i ' + i + ' pageStart:' + pageStart)
        result.push({ page: i, start: pageStart, className: i === currentPage ? 'active' : '' });
      }

      return result;
    }),

    range: _ember['default'].computed('model.meta.queryParameters.page.number', 'isLastPage', function () {
      var range = { 'start': 1, 'end': 10 };
      var perPage = this.get('model.num');
      range.start = perPage * this.get('page') - perPage + 1;
      range.end = perPage * this.get('page');

      if (range.start < 1) {
        range.start = 1;
      } // no starting on 0
      if (this.get('isLastPage')) {
        range.end = this.get('totalCount');
      } // last page magic

      return range;
    })
  });
});
define("dummy/components/list-pager/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 2
              },
              "end": {
                "line": 11,
                "column": 2
              }
            },
            "moduleName": "dummy/components/list-pager/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "disabled");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "aria-label", "");
            var el3 = dom.createTextNode("«");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "disabled");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "aria-label", "");
            var el3 = dom.createTextNode("‹");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 13,
                  "column": 6
                },
                "end": {
                  "line": 13,
                  "column": 49
                }
              },
              "moduleName": "dummy/components/list-pager/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("«");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 16,
                  "column": 6
                },
                "end": {
                  "line": 16,
                  "column": 58
                }
              },
              "moduleName": "dummy/components/list-pager/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("‹");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 2
              },
              "end": {
                "line": 18,
                "column": 2
              }
            },
            "moduleName": "dummy/components/list-pager/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
            return morphs;
          },
          statements: [["block", "link-to", [["subexpr", "query-params", [], ["start", 1], ["loc", [null, [13, 17], [13, 39]]], 0, 0]], [], 0, null, ["loc", [null, [13, 6], [13, 61]]]], ["block", "link-to", [["subexpr", "query-params", [], ["start", ["get", "prevStart", ["loc", [null, [16, 37], [16, 46]]], 0, 0, 0, 0]], ["loc", [null, [16, 17], [16, 47]]], 0, 0]], [], 1, null, ["loc", [null, [16, 6], [16, 70]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child2 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 27,
                  "column": 6
                },
                "end": {
                  "line": 27,
                  "column": 61
                }
              },
              "moduleName": "dummy/components/list-pager/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "num.page", ["loc", [null, [27, 49], [27, 61]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 25,
                "column": 2
              },
              "end": {
                "line": 29,
                "column": 2
              }
            },
            "moduleName": "dummy/components/list-pager/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createMorphAt(element0, 1, 1);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", [["get", "num.className", ["loc", [null, [26, 17], [26, 30]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "link-to", [["subexpr", "query-params", [], ["start", ["get", "num.start", ["loc", [null, [27, 37], [27, 46]]], 0, 0, 0, 0]], ["loc", [null, [27, 17], [27, 47]]], 0, 0]], [], 0, null, ["loc", [null, [27, 6], [27, 73]]]]],
          locals: ["num"],
          templates: [child0]
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 32,
                "column": 2
              },
              "end": {
                "line": 39,
                "column": 2
              }
            },
            "moduleName": "dummy/components/list-pager/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "disabled");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            var el3 = dom.createTextNode("›");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "disabled");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            var el3 = dom.createTextNode("»");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 41,
                  "column": 6
                },
                "end": {
                  "line": 41,
                  "column": 58
                }
              },
              "moduleName": "dummy/components/list-pager/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("›");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 44,
                  "column": 6
                },
                "end": {
                  "line": 44,
                  "column": 57
                }
              },
              "moduleName": "dummy/components/list-pager/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("»");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 39,
                "column": 2
              },
              "end": {
                "line": 46,
                "column": 2
              }
            },
            "moduleName": "dummy/components/list-pager/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
            return morphs;
          },
          statements: [["block", "link-to", [["subexpr", "query-params", [], ["start", ["get", "nextStart", ["loc", [null, [41, 37], [41, 46]]], 0, 0, 0, 0]], ["loc", [null, [41, 17], [41, 47]]], 0, 0]], [], 0, null, ["loc", [null, [41, 6], [41, 70]]]], ["block", "link-to", [["subexpr", "query-params", [], ["start", ["get", "lastStart", ["loc", [null, [44, 37], [44, 46]]], 0, 0, 0, 0]], ["loc", [null, [44, 17], [44, 47]]], 0, 0]], [], 1, null, ["loc", [null, [44, 6], [44, 69]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 48,
              "column": 0
            }
          },
          "moduleName": "dummy/components/list-pager/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1, "class", "pagination");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [0]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element1, 1, 1);
          morphs[1] = dom.createMorphAt(element1, 3, 3);
          morphs[2] = dom.createMorphAt(element1, 5, 5);
          return morphs;
        },
        statements: [["block", "if", [["get", "isFirstPage", ["loc", [null, [4, 8], [4, 19]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [4, 2], [18, 9]]]], ["block", "each", [["get", "pageRange", ["loc", [null, [25, 10], [25, 19]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [25, 2], [29, 11]]]], ["block", "if", [["get", "isLastPage", ["loc", [null, [32, 8], [32, 18]]], 0, 0, 0, 0]], [], 3, 4, ["loc", [null, [32, 2], [46, 9]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 49,
            "column": 0
          }
        },
        "moduleName": "dummy/components/list-pager/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "showPagination", ["loc", [null, [1, 6], [1, 20]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [48, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('dummy/components/portal-resources/component', ['exports', 'ember', 'dummy/components/portal-resources/template'], function (exports, _ember, _dummyComponentsPortalResourcesTemplate) {
  exports['default'] = _ember['default'].Component.extend({
    layout: _dummyComponentsPortalResourcesTemplate['default'],
    isLoading: true,
    session: _ember['default'].inject.service(),
    // Lazy load the resources
    didInsertElement: function didInsertElement() {
      this._getResources();
    },
    resourceBaseUrl: _ember['default'].computed('session', 'item', function () {
      var portalHostName = this.get('session.portalHostName');
      var portalId = this.get('session.portal.id');
      return '//' + portalHostName + '/sharing/rest/portals/' + portalId + '/resources/';
    }),
    _getResources: function _getResources() {
      var _this = this;

      this.set('isLoading', true);
      this.get('onFetchResources')().then(function (resources) {
        _this.set('model', resources);
        _this.set('isLoading', false);
      });
    },

    actions: {
      destroy: function destroy(resource) {
        var _this2 = this;

        this.get('onRemoveResource')(resource.key).then(function () {
          _this2._getResources();
        });
      },
      filesChanged: function filesChanged(files) {
        var _this3 = this;

        _ember['default'].debug('Files changed!'); // files[0]
        this.get('onUploadFile')(files).then(function () {
          _this3._getResources();
        });
      },
      sendJson: function sendJson() {
        var _this4 = this;

        var obj = {
          settings: {
            groupId: '4bdcf2f7e42843cebbe43b69a8d56bdb'
          }
        };
        this.get('onJsonUpload')(obj).then(function () {
          _this4._getResources();
        });
      }
    }
  });
});
define("dummy/components/portal-resources/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "dummy/components/portal-resources/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("Loading resources...");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 6
              },
              "end": {
                "line": 16,
                "column": 6
              }
            },
            "moduleName": "dummy/components/portal-resources/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createElement("a");
            dom.setAttribute(el3, "target", "_blank");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "type", "button");
            dom.setAttribute(el3, "class", "btn btn-danger");
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "glyphicon glyphicon-trash");
            dom.setAttribute(el4, "aria-hidden", "true");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1, 0]);
            var element2 = dom.childAt(element0, [3, 0]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element1, 'href');
            morphs[1] = dom.createMorphAt(element1, 0, 0);
            morphs[2] = dom.createElementMorph(element2);
            return morphs;
          },
          statements: [["attribute", "href", ["concat", [["get", "resourceBaseUrl", ["loc", [null, [13, 23], [13, 38]]], 0, 0, 0, 0], ["get", "res.key", ["loc", [null, [13, 42], [13, 49]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "res.key", ["loc", [null, [13, 69], [13, 80]]], 0, 0, 0, 0], ["element", "action", ["destroy", ["get", "res", ["loc", [null, [14, 77], [14, 80]]], 0, 0, 0, 0]], [], ["loc", [null, [14, 58], [14, 82]]], 0, 0]],
          locals: ["res"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 21,
              "column": 0
            }
          },
          "moduleName": "dummy/components/portal-resources/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("Resources");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("table");
          dom.setAttribute(el1, "class", "table table-striped");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("thead");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Name");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Actions");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("tbody");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primay");
          var el2 = dom.createTextNode("Send Json File");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [7]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3, 3]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[2] = dom.createElementMorph(element3);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.resources", ["loc", [null, [11, 14], [11, 29]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [11, 6], [16, 15]]]], ["inline", "upload-button", [], ["onChange", ["subexpr", "action", ["filesChanged"], [], ["loc", [null, [19, 27], [19, 50]]], 0, 0]], ["loc", [null, [19, 2], [19, 52]]], 0, 0], ["element", "action", ["sendJson"], [], ["loc", [null, [20, 33], [20, 54]]], 0, 0]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "dummy/components/portal-resources/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "isLoading", ["loc", [null, [1, 6], [1, 15]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [21, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('dummy/components/torii-iframe-placeholder', ['exports', 'torii/components/torii-iframe-placeholder'], function (exports, _toriiComponentsToriiIframePlaceholder) {
  exports['default'] = _toriiComponentsToriiIframePlaceholder['default'];
});
define('dummy/components/upload-button/component', ['exports', 'ember', 'dummy/components/upload-button/template'], function (exports, _ember, _dummyComponentsUploadButtonTemplate) {
  exports['default'] = _ember['default'].Component.extend({
    layout: _dummyComponentsUploadButtonTemplate['default']
  });
});
define("dummy/components/upload-button/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "dummy/components/upload-button/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        dom.setAttribute(el1, "for", "file");
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "glyphicon glyphicon-cloud-upload");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("Choose a file");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "file-input", [], ["onChange", ["subexpr", "@mut", [["get", "onChange", ["loc", [null, [1, 22], [1, 30]]], 0, 0, 0, 0]], [], [], 0, 0], "name", "file", "id", "file"], ["loc", [null, [1, 0], [1, 55]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('dummy/ember-arcgis-portal-services/tests/modules/ember-arcgis-portal-services/mixins/service-mixin.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-services/mixins/service-mixin.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-services/mixins/service-mixin.js should pass ESLint.\n');
  });
});
define('dummy/ember-arcgis-portal-services/tests/modules/ember-arcgis-portal-services/services/geocode-service.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-services/services/geocode-service.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-services/services/geocode-service.js should pass ESLint.\n');
  });
});
define('dummy/ember-arcgis-portal-services/tests/modules/ember-arcgis-portal-services/services/groups-service.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-services/services/groups-service.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-services/services/groups-service.js should pass ESLint.\n');
  });
});
define('dummy/ember-arcgis-portal-services/tests/modules/ember-arcgis-portal-services/services/items-service.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-services/services/items-service.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/ember-arcgis-portal-services/services/items-service.js should pass ESLint.\n84:1  - More than 1 blank line not allowed. (no-multiple-empty-lines)');
  });
});
define('dummy/ember-arcgis-portal-services/tests/modules/ember-arcgis-portal-services/services/oauth-service.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-services/services/oauth-service.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-services/services/oauth-service.js should pass ESLint.\n');
  });
});
define('dummy/ember-arcgis-portal-services/tests/modules/ember-arcgis-portal-services/services/portal-service.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-services/services/portal-service.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-services/services/portal-service.js should pass ESLint.\n');
  });
});
define('dummy/ember-arcgis-portal-services/tests/modules/ember-arcgis-portal-services/services/sharing-service.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-services/services/sharing-service.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-services/services/sharing-service.js should pass ESLint.\n');
  });
});
define('dummy/ember-arcgis-portal-services/tests/modules/ember-arcgis-portal-services/services/user-service.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-services/services/user-service.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-services/services/user-service.js should pass ESLint.\n');
  });
});
define('dummy/ext/torii-provider-arcgis', ['exports', 'torii/services/torii-session', 'torii-provider-arcgis/mixins/gatekeeper'], function (exports, _toriiServicesToriiSession, _toriiProviderArcgisMixinsGatekeeper) {

  _toriiServicesToriiSession['default'].reopen(_toriiProviderArcgisMixinsGatekeeper['default']);
});
/**
 * ext/torii-provider-arcgis.js
 *
 * This file simply re-opens the Torii Session object,
 * using the GateKeeper mixin
 */
define('dummy/groups/group/edit/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("dummy/groups/group/edit/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/groups/group/edit/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('dummy/groups/group/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("dummy/groups/group/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/groups/group/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('dummy/groups/group/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    groupsService: _ember['default'].inject.service(),

    model: function model(params) {
      this.set('groupId', params.id);
      return this.get('groupsService').users(params.id);
    },

    actions: {
      remove: function remove(user) {
        var _this = this;

        this.get('groupsService').removeUsers(this.get('groupId'), [user]).then(function (resp) {
          _this.refresh();
        }, function (err) {
          alert(err);
        });
      }
    }
  });
});
define("dummy/groups/group/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 8
            },
            "end": {
              "line": 14,
              "column": 8
            }
          },
          "moduleName": "dummy/groups/group/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "type", "button");
          dom.setAttribute(el3, "class", "btn btn-danger");
          var el4 = dom.createTextNode(" ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          dom.setAttribute(el4, "class", "glyphicon glyphicon-trash");
          dom.setAttribute(el4, "aria-hidden", "true");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3, 0]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [["content", "user", ["loc", [null, [11, 16], [11, 24]]], 0, 0, 0, 0], ["element", "action", ["remove", ["get", "user", ["loc", [null, [12, 79], [12, 83]]], 0, 0, 0, 0]], [], ["loc", [null, [12, 61], [12, 85]]], 0, 0]],
        locals: ["user"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "dummy/groups/group/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        dom.setAttribute(el3, "class", "table table-striped");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("thead");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Username");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Revoke Access");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tbody");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1, 3]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.users", ["loc", [null, [9, 16], [9, 27]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [9, 8], [14, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('dummy/groups/index/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    groupsService: _ember['default'].inject.service('groups-service'),
    session: _ember['default'].inject.service(),
    queryParams: ['start', 'num', 'q', 'owner', 'tags'],
    q: '*',
    query: '*',
    owner: null,
    tags: null,
    start: 1,
    num: 10,
    filtered: {},

    hasResults: _ember['default'].computed('model.results', function () {
      var result = false;
      if (this.get('model.results.length')) {
        result = true;
      }
      return result;
    }),

    agoGroupsBaseUrl: _ember['default'].computed('session', function () {
      return 'https://' + this.get('session.portalHostName') + '/home/group.html';
    }),

    queryChanged: _ember['default'].observer('q', function () {
      this.set('query', this.get('q'));
    }),

    actions: {
      filter: function filter() {
        this.set('q', this.get('query'));
        // reset the page
        this.set('start', 1);
        this.transitionToRoute('items.index');
      }
    }
  });
});
define('dummy/groups/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    groupsService: _ember['default'].inject.service('groups-service'),
    queryParams: {
      'start': { refreshModel: true },
      'num': { refreshModel: true },
      'q': { refreshModel: true },
      'owner': { refreshModel: true },
      'tags': { refreshModel: true }
    },

    createAgoQuery: function createAgoQuery(query, owner, tags) {
      console.log('Query ' + query + ' owner ' + owner + ' tags ' + tags);
      var parts = [];
      if (query) {
        parts.push(query);
      }

      if (owner) {
        parts.push('owner:' + owner);
      }

      if (tags) {
        if (tags.indexOf(',')) {
          var ta = tags.split(',');
          ta.map(function (t) {
            parts.push('tags:' + t);
          });
        } else {
          parts.push('tags:' + tags);
        }
      }

      console.log('parts: ' + JSON.stringify(parts));
      var agoQuery = parts.join(' AND ');
      console.log('AGO Query: ' + agoQuery);
      return agoQuery;
    },
    /**
     * Execute the query for groups...
     */
    model: function model(params) {
      var agoQuery = this.createAgoQuery(params.q, params.owner, params.tags);
      var agoParams = {
        q: agoQuery,
        start: params.start,
        num: params.num,
        sortField: 'title'
      };

      return this.get('groupsService').search(agoParams);
    },
    actions: {
      destroy: function destroy(group) {
        var _this = this;

        this.get('groupsService').remove(group.id).then(function () {
          // need to transition to the route so we pick up new entries
          _ember['default'].debug('Group Deleted... transitioning route to get new results...');
          _ember['default'].run.later(_this, function () {
            this.refresh();
          }, 500);
        });
      }
    }
  });
});
define("dummy/groups/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 15
            },
            "end": {
              "line": 3,
              "column": 86
            }
          },
          "moduleName": "dummy/groups/index/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("New Group");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 25,
                  "column": 14
                },
                "end": {
                  "line": 25,
                  "column": 58
                }
              },
              "moduleName": "dummy/groups/index/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "group.title", ["loc", [null, [25, 14], [25, 58]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 29,
                  "column": 12
                },
                "end": {
                  "line": 29,
                  "column": 142
                }
              },
              "moduleName": "dummy/groups/index/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "glyphicon glyphicon-pencil");
              dom.setAttribute(el1, "aria-hidden", "true");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 8
              },
              "end": {
                "line": 34,
                "column": 8
              }
            },
            "moduleName": "dummy/groups/index/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "type", "button");
            dom.setAttribute(el3, "class", "btn btn-danger");
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "glyphicon glyphicon-trash");
            dom.setAttribute(el4, "aria-hidden", "true");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            dom.setAttribute(el3, "target", "_blank");
            dom.setAttribute(el3, "class", "btn btn-default");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "glyphicon glyphicon-share");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [7]);
            var element2 = dom.childAt(element1, [3]);
            var element3 = dom.childAt(element1, [5]);
            var morphs = new Array(6);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
            morphs[3] = dom.createMorphAt(element1, 1, 1);
            morphs[4] = dom.createElementMorph(element2);
            morphs[5] = dom.createAttrMorph(element3, 'href');
            return morphs;
          },
          statements: [["block", "link-to", ["groups.group", ["get", "group", ["loc", [null, [25, 51], [25, 56]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [25, 14], [25, 58]]]], ["content", "group.access", ["loc", [null, [26, 14], [26, 30]]], 0, 0, 0, 0], ["content", "group.owner", ["loc", [null, [27, 14], [27, 29]]], 0, 0, 0, 0], ["block", "link-to", ["groups.group.edit", ["get", "item", ["loc", [null, [29, 43], [29, 47]]], 0, 0, 0, 0]], ["class", "btn btn-default"], 1, null, ["loc", [null, [29, 12], [29, 154]]]], ["element", "action", ["destroy", ["get", "group", ["loc", [null, [30, 77], [30, 82]]], 0, 0, 0, 0]], [], ["loc", [null, [30, 58], [30, 84]]], 0, 0], ["attribute", "href", ["concat", [["get", "agoGroupsBaseUrl", ["loc", [null, [31, 23], [31, 39]]], 0, 0, 0, 0], "?id=", ["get", "group.id", ["loc", [null, [31, 47], [31, 55]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
          locals: ["group"],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 2
            },
            "end": {
              "line": 37,
              "column": 2
            }
          },
          "moduleName": "dummy/groups/index/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("table");
          dom.setAttribute(el1, "class", "table table-striped");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("thead");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Title");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Access");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Owner");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Actions");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("tbody");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.results", ["loc", [null, [23, 16], [23, 29]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [23, 8], [34, 17]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 37,
              "column": 2
            },
            "end": {
              "line": 39,
              "column": 2
            }
          },
          "moduleName": "dummy/groups/index/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "alert alert-warning");
          var el2 = dom.createTextNode("No items found for query ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(".");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "q", ["loc", [null, [38, 62], [38, 67]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 43,
            "column": 0
          }
        },
        "moduleName": "dummy/groups/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("Groups ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-12");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element4, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(element4, 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [2, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["groups.new"], ["class", "btn btn-primary pull-right"], 0, null, ["loc", [null, [3, 15], [3, 86]]]], ["inline", "group-search-form", [], ["onFilter", ["subexpr", "action", ["filter"], [], ["loc", [null, [4, 33], [4, 50]]], 0, 0], "owner", ["subexpr", "@mut", [["get", "owner", ["loc", [null, [5, 12], [5, 17]]], 0, 0, 0, 0]], [], [], 0, 0], "tags", ["subexpr", "@mut", [["get", "tags", ["loc", [null, [6, 11], [6, 15]]], 0, 0, 0, 0]], [], [], 0, 0], "query", ["subexpr", "@mut", [["get", "q", ["loc", [null, [7, 12], [7, 13]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 4], [7, 15]]], 0, 0], ["block", "if", [["get", "hasResults", ["loc", [null, [13, 8], [13, 18]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [13, 2], [39, 9]]]], ["inline", "log", [["get", "filtered", ["loc", [null, [42, 6], [42, 14]]], 0, 0, 0, 0]], [], ["loc", [null, [42, 0], [42, 16]]], 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define('dummy/groups/new/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    groupsService: _ember['default'].inject.service('groups-service'),
    isEditable: false,

    actions: {
      saveGroup: function saveGroup() {
        // create the group
        var group = {
          title: this.get('title'),
          description: 'Collaboration group',
          tags: this.get('tags'),
          sortField: 'title',
          sortOrder: 'asc',
          access: 'org'
        };

        if (this.get('isEditable')) {
          group.capabilities = 'updateitemcontrol';
          group._edit_privacy = 'on';
          group._edit_contributors = 'on';
        }

        return this.get('groupsService').create(group);
      }
    }
  });
});
define('dummy/groups/new/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("dummy/groups/new/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 44,
            "column": 0
          }
        },
        "moduleName": "dummy/groups/new/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        dom.setAttribute(el3, "class", "form-horizontal");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("fieldset");
        var el5 = dom.createTextNode("\n\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" Form Name ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("legend");
        var el6 = dom.createTextNode("Create new Group");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" Text input");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-group");
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "class", "col-md-4 control-label");
        dom.setAttribute(el6, "for", "textinput");
        var el7 = dom.createTextNode("Name");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-4");
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "help-block");
        var el8 = dom.createTextNode("Name of the Group is required");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" Text input");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-group");
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "class", "col-md-4 control-label");
        dom.setAttribute(el6, "for", "textinput");
        var el7 = dom.createTextNode("Tags");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-4");
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" Multiple Checkboxes ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-group");
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "class", "col-md-4 control-label");
        dom.setAttribute(el6, "for", "checkboxes");
        var el7 = dom.createTextNode("Editing");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-4");
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "checkbox");
        var el8 = dom.createTextNode("\n        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("label");
        dom.setAttribute(el8, "for", "checkboxes-0");
        var el9 = dom.createTextNode("\n          ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n          Members can edit items?\n        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n    	");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "class", "btn btn-primary");
        var el6 = dom.createTextNode("Save");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1, 1]);
        var element1 = dom.childAt(element0, [17]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [7, 3]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [11, 3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [15, 3, 1, 1]), 1, 1);
        morphs[3] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "title", ["loc", [null, [13, 20], [13, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control input-md", "placeholder", "My New Group"], ["loc", [null, [13, 6], [13, 84]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "tags", ["loc", [null, [22, 20], [22, 24]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control input-md", "placeholder", "siteCollaboration"], ["loc", [null, [22, 6], [22, 88]]], 0, 0], ["inline", "input", [], ["type", "checkbox", "name", "isEditable", "checked", ["subexpr", "@mut", [["get", "isEditable", ["loc", [null, [32, 60], [32, 70]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [32, 10], [32, 72]]], 0, 0], ["element", "action", ["saveGroup"], [], ["loc", [null, [38, 36], [38, 58]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('dummy/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("dummy/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 75,
            "column": 0
          }
        },
        "moduleName": "dummy/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("ember-arcgis-portal-services");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("This is the demo app (aka dummy) for this project.\n      The demo app is NOT the expected user interface - it is merely a test-harness used\n      during development and testing, and serves as an example of how to use the Services\n      in  your own application.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("The addon itself is simply the services used to communicate with the Portal API");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createTextNode("Services and Methods");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-4");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("ItemsService");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("search");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("getById");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("getDataById");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("create");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("update");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("remove");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("getItemPageUrl");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("uploadResource");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("addResource");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("getResources");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("removeResource");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("OAuthService");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("registerApp");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("updateApp");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-4");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("GroupsService");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("search");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("getById");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("getItemsById");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("create");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("update");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("remove");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("users");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("addUsers");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("reassign");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("UsersService");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("search");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("getByName");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-4");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("SharingService");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("shareItemWithEveryone");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("shareItemWithOrg");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("shareItemsWithGroups");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("shareItemsWithControl");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("shareItems");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("PortalService");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3, "class", "small");
        var el4 = dom.createTextNode("Works against the current user's portal. Does not provide auth checks.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("update");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("uploadResource");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("addResource");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("getResources");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("removeResource");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("portalUsers");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [74, 0], [74, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dummyConfigEnvironment['default'].APP.name, _dummyConfigEnvironment['default'].APP.version)
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/initialize-torii-callback', ['exports', 'torii/redirect-handler'], function (exports, _toriiRedirectHandler) {
  exports['default'] = {
    name: 'torii-callback',
    before: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      application.deferReadiness();
      _toriiRedirectHandler['default'].handle(window)['catch'](function () {
        application.advanceReadiness();
      });
    }
  };
});
define('dummy/initializers/initialize-torii-session', ['exports', 'torii/bootstrap/session', 'torii/configuration'], function (exports, _toriiBootstrapSession, _toriiConfiguration) {
  exports['default'] = {
    name: 'torii-session',
    after: 'torii',

    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      var configuration = (0, _toriiConfiguration.getConfiguration)();
      if (!configuration.sessionServiceName) {
        return;
      }

      (0, _toriiBootstrapSession['default'])(application, configuration.sessionServiceName);

      var sessionFactoryName = 'service:' + configuration.sessionServiceName;
      application.inject('adapter', configuration.sessionServiceName, sessionFactoryName);
    }
  };
});
define('dummy/initializers/initialize-torii', ['exports', 'torii/bootstrap/torii', 'torii/configuration', 'dummy/config/environment'], function (exports, _toriiBootstrapTorii, _toriiConfiguration, _dummyConfigEnvironment) {

  var initializer = {
    name: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      (0, _toriiConfiguration.configure)(_dummyConfigEnvironment['default'].torii || {});
      (0, _toriiBootstrapTorii['default'])(application);
      application.inject('route', 'torii', 'service:torii');
    }
  };

  exports['default'] = initializer;
});
define('dummy/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/torii-provider-arcgis', ['exports', 'dummy/ext/torii-provider-arcgis'], function (exports, _dummyExtToriiProviderArcgis) {
  exports.initialize = initialize;

  function initialize() {}
  // do nothing here...

  // we need to export this stuff...

  exports['default'] = {
    name: 'torii-provider-arcgis',
    initialize: initialize
  };
});
/**
 * initializers/torii-provider-arcgis.js
 *
 * This file is simply here so that it includes the extention file
 * which reopen's the Torii Session, and adds additional methods
 * to it which are useful for ArcGIS Online Sessions
 */
define('dummy/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("dummy/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('dummy/instance-initializers/setup-routes', ['exports', 'torii/bootstrap/routing', 'torii/configuration', 'torii/router-dsl-ext'], function (exports, _toriiBootstrapRouting, _toriiConfiguration, _toriiRouterDslExt) {
  exports['default'] = {
    name: 'torii-setup-routes',
    initialize: function initialize(applicationInstance, registry) {
      var configuration = (0, _toriiConfiguration.getConfiguration)();

      if (!configuration.sessionServiceName) {
        return;
      }

      var router = applicationInstance.get('router');
      var setupRoutes = function setupRoutes() {
        var authenticatedRoutes = router.router.authenticatedRoutes;
        var hasAuthenticatedRoutes = !Ember.isEmpty(authenticatedRoutes);
        if (hasAuthenticatedRoutes) {
          (0, _toriiBootstrapRouting['default'])(applicationInstance, authenticatedRoutes);
        }
        router.off('willTransition', setupRoutes);
      };
      router.on('willTransition', setupRoutes);
    }
  };
});
define('dummy/instance-initializers/walk-providers', ['exports', 'torii/lib/container-utils', 'torii/configuration'], function (exports, _toriiLibContainerUtils, _toriiConfiguration) {
  exports['default'] = {
    name: 'torii-walk-providers',
    initialize: function initialize(applicationInstance) {
      var configuration = (0, _toriiConfiguration.getConfiguration)();
      // Walk all configured providers and eagerly instantiate
      // them. This gives providers with initialization side effects
      // like facebook-connect a chance to load up assets.
      for (var key in configuration.providers) {
        if (configuration.providers.hasOwnProperty(key)) {
          (0, _toriiLibContainerUtils.lookup)(applicationInstance, 'torii-provider:' + key);
        }
      }
    }
  };
});
define('dummy/items/bulk/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    itemsService: _ember['default'].inject.service('items-service'),
    session: _ember['default'].inject.service(),
    queryParams: ['start', 'num', 'q', 'owner', 'tags', 'type'],
    start: 1,
    q: null,
    query: '*',
    num: 10,
    owner: null,
    tags: null,
    typeKeywords: null,
    type: null,
    showConfirmation: false,
    totalCount: _ember['default'].computed('model.total', function () {
      return this.get('model.total');
    }),
    percent: 0,
    progressStyle: _ember['default'].computed('percent', function () {
      return _ember['default'].String.htmlSafe('width:' + this.get('percent') + '%;');
    }),

    queryChanged: _ember['default'].observer('q', function () {
      this.set('query', this.get('q'));
    }),

    portalItemUrl: _ember['default'].computed('session.portal', function () {
      var cbu = this.get('session.portal.customBaseUrl');
      var urlKey = this.get('session.portal.urlKey');
      return 'https://' + urlKey + '.' + cbu + '/home/item.html?id=';
    }),

    actions: {
      filter: function filter() {
        this.set('q', this.get('query'));
        // reset the page
        this.set('start', 1);
        this.transitionToRoute('items.index');
      },
      prenuke: function prenuke() {
        this.set('showConfirmation', true);
      }

    }
  });
});
define('dummy/items/bulk/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    itemsService: _ember['default'].inject.service('items-service'),
    queryParams: {
      'start': { refreshModel: true },
      'num': { refreshModel: true },
      'q': { refreshModel: true },
      'owner': { refreshModel: true },
      'tags': { refreshModel: true },
      'typeKeywords': { refreshModel: true },
      'type': { refreshModel: true }
    },

    lastAgoQuery: '',

    createAgoQuery: function createAgoQuery(query, owner, tags, type, typeKeywords) {
      console.log('Query ' + query + ' owner ' + owner + ' tags ' + tags + ' type ' + type + ' typeKeywords ' + typeKeywords);
      var parts = [];
      if (query) {
        parts.push(query);
      }

      if (owner) {
        parts.push('owner:' + owner);
      }

      if (tags) {
        if (tags.indexOf(',')) {
          var ta = tags.split(',');
          ta.map(function (t) {
            parts.push('tags:' + t);
          });
        } else {
          parts.push('tags:' + tags);
        }
      }

      if (typeKeywords) {
        if (typeKeywords.indexOf(',')) {
          var ta = typeKeywords.split(',');
          ta.map(function (t) {
            parts.push('typekeywords:' + t);
          });
        } else {
          parts.push('typekeywords:' + typeKeywords);
        }
      }

      if (type) {
        parts.push('type:"' + type + '"');
      }

      console.log('parts: ' + JSON.stringify(parts));
      var agoQuery = parts.join(' AND ');
      console.log('AGO Query: ' + agoQuery);
      return agoQuery;
    },

    model: function model(params) {
      var agoQuery = this.createAgoQuery(params.q, params.owner, params.tags, params.type, params.typeKeywords);
      var agoParams = {
        q: agoQuery,
        start: params.start,
        num: params.num,
        sortField: 'title'
      };
      // only if there is no query string, add the bbox
      if (!agoQuery) {
        agoParams.bbox = '-180,-90,180,90';
      }
      // if the query changes, reset the paging
      if (this.get('lastAgoQuery') !== agoQuery) {
        this.set('lastAgoQuery', agoQuery);
        // reset paging
        agoParams.start = 1;
      }
      return this.get('itemsService').search(agoParams);
    },

    /**
     * Delete a page of results...
     */
    deletePage: function deletePage(query, start, ctl, increment) {
      var _this = this;

      var agoParams = {
        q: query,
        start: start,
        num: 100,
        sortField: 'title'
      };
      return this.get('itemsService').search(agoParams).then(function (response) {
        var batchPromises = [];
        response.results.forEach(function (item) {
          var prms = _this.get('itemsService').remove(item.id, item.owner).then(function (result) {
            ctl.incrementProperty('percent', increment);
          });
          batchPromises.push(prms);
        });
        return _ember['default'].RSVP.allSettled(batchPromises);
      });
    },

    actions: {
      /**
       * Nuke the items in the current search
       */
      nuke: function nuke(total) {
        var _this2 = this;

        var ctl = this.controllerFor('items.bulk');
        var increment = 100 / total;
        var agoQuery = this.get('lastAgoQuery');
        var promises = [];
        for (var start = 0; start <= total; start = start + 100) {
          promises.push(this.deletePage(agoQuery, start, ctl, increment));
        }
        return _ember['default'].RSVP.allSettled(promises).then(function (results) {
          _ember['default'].debug('DONE!');
          _ember['default'].run.later(_this2, function () {
            this.refresh();
          }, 100);
        });
      },

      destroy: function destroy(item) {
        var _this3 = this;

        this.get('itemsService').remove(item.id, item.owner).then(function () {
          // need to transition to the route so we pick up new entries
          _ember['default'].debug('Item Deleted... transitioning route to get new results...');
          _ember['default'].run.later(_this3, function () {
            this.refresh();
          }, 100);
        });
      }
    }
  });
});
define("dummy/items/bulk/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 6
              },
              "end": {
                "line": 35,
                "column": 6
              }
            },
            "moduleName": "dummy/items/bulk/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-6 col-md-offset-3");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "panel panel-danger");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "panel-heading");
            var el4 = dom.createTextNode("BULK DELETE!!!");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "panel-body");
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("p");
            var el5 = dom.createTextNode("Please be aware that there is no undo. This will delete all the items that match the current criteria. Done. Gone. Finito.\n            Also this may take a while... so kick back while we abuse the API.\n            ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "progress");
            var el5 = dom.createTextNode("\n              ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("div");
            dom.setAttribute(el5, "class", "progress-bar progress-bar-danger progress-bar-striped active");
            dom.setAttribute(el5, "role", "progressbar");
            dom.setAttribute(el5, "aria-valuenow", "60");
            dom.setAttribute(el5, "aria-valuemin", "0");
            dom.setAttribute(el5, "aria-valuemax", "100");
            var el6 = dom.createTextNode("\n                ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("span");
            dom.setAttribute(el6, "class", "sr-only");
            var el7 = dom.createTextNode("0% Complete");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode("\n              ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "panel-footer");
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("button");
            dom.setAttribute(el4, "class", "btn btn-danger btn-block");
            var el5 = dom.createTextNode("Yes, I get it - Delete all ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(" items");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element5 = dom.childAt(fragment, [1, 1]);
            var element6 = dom.childAt(element5, [3, 3, 1]);
            var element7 = dom.childAt(element5, [5, 1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element6, 'style');
            morphs[1] = dom.createElementMorph(element7);
            morphs[2] = dom.createMorphAt(element7, 1, 1);
            return morphs;
          },
          statements: [["attribute", "style", ["concat", [["get", "progressStyle", ["loc", [null, [25, 173], [25, 186]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["nuke", ["get", "totalCount", ["loc", [null, [31, 69], [31, 79]]], 0, 0, 0, 0]], [], ["loc", [null, [31, 53], [31, 81]]], 0, 0], ["content", "totalCount", ["loc", [null, [31, 109], [31, 123]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 47,
                  "column": 16
                },
                "end": {
                  "line": 47,
                  "column": 66
                }
              },
              "moduleName": "dummy/items/bulk/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "item.title", ["loc", [null, [47, 52], [47, 66]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.8.2",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 51,
                      "column": 18
                    },
                    "end": {
                      "line": 51,
                      "column": 75
                    }
                  },
                  "moduleName": "dummy/items/bulk/template.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                  dom.insertBoundary(fragment, 0);
                  dom.insertBoundary(fragment, null);
                  return morphs;
                },
                statements: [["content", "tag", ["loc", [null, [51, 68], [51, 75]]], 0, 0, 0, 0]],
                locals: [],
                templates: []
              };
            })();
            return {
              meta: {
                "revision": "Ember@2.8.2",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 50,
                    "column": 18
                  },
                  "end": {
                    "line": 52,
                    "column": 18
                  }
                },
                "moduleName": "dummy/items/bulk/template.hbs"
              },
              isEmpty: false,
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                  ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("  \n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["block", "link-to", ["items.index", ["subexpr", "query-params", [], ["tags", ["get", "tag", ["loc", [null, [51, 62], [51, 65]]], 0, 0, 0, 0]], ["loc", [null, [51, 43], [51, 66]]], 0, 0]], [], 0, null, ["loc", [null, [51, 18], [51, 87]]]]],
              locals: ["tag"],
              templates: [child0]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 48,
                  "column": 14
                },
                "end": {
                  "line": 54,
                  "column": 14
                }
              },
              "moduleName": "dummy/items/bulk/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("small");
              dom.setAttribute(el1, "style", "display:block;width:400px");
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("                ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
              return morphs;
            },
            statements: [["block", "each", [["get", "item.tags", ["loc", [null, [50, 26], [50, 35]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [50, 18], [52, 27]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        var child2 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 57,
                  "column": 16
                },
                "end": {
                  "line": 57,
                  "column": 88
                }
              },
              "moduleName": "dummy/items/bulk/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "item.owner", ["loc", [null, [57, 74], [57, 88]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child3 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 58,
                  "column": 16
                },
                "end": {
                  "line": 58,
                  "column": 85
                }
              },
              "moduleName": "dummy/items/bulk/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "item.type", ["loc", [null, [58, 72], [58, 85]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child4 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 60,
                  "column": 14
                },
                "end": {
                  "line": 60,
                  "column": 142
                }
              },
              "moduleName": "dummy/items/bulk/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "glyphicon glyphicon-pencil");
              dom.setAttribute(el1, "aria-hidden", "true");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 45,
                "column": 10
              },
              "end": {
                "line": 65,
                "column": 10
              }
            },
            "moduleName": "dummy/items/bulk/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "type", "button");
            dom.setAttribute(el3, "class", "btn btn-danger");
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "glyphicon glyphicon-trash");
            dom.setAttribute(el4, "aria-hidden", "true");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            dom.setAttribute(el3, "target", "_blank");
            dom.setAttribute(el3, "class", "btn btn-default");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "glyphicon glyphicon-share");
            dom.setAttribute(el4, "aria-hidden", "true");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1]);
            var element2 = dom.childAt(element0, [9]);
            var element3 = dom.childAt(element2, [3]);
            var element4 = dom.childAt(element2, [5]);
            var morphs = new Array(8);
            morphs[0] = dom.createMorphAt(element1, 0, 0);
            morphs[1] = dom.createMorphAt(element1, 3, 3);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
            morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
            morphs[4] = dom.createMorphAt(dom.childAt(element0, [7]), 0, 0);
            morphs[5] = dom.createMorphAt(element2, 1, 1);
            morphs[6] = dom.createElementMorph(element3);
            morphs[7] = dom.createAttrMorph(element4, 'href');
            return morphs;
          },
          statements: [["block", "link-to", ["items.item.index", ["get", "item", ["loc", [null, [47, 46], [47, 50]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [47, 16], [47, 78]]]], ["block", "if", [["get", "item.tags", ["loc", [null, [48, 20], [48, 29]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [48, 14], [54, 21]]]], ["content", "item.access", ["loc", [null, [56, 16], [56, 31]]], 0, 0, 0, 0], ["block", "link-to", ["items.index", ["subexpr", "query-params", [], ["owner", ["get", "item.owner", ["loc", [null, [57, 61], [57, 71]]], 0, 0, 0, 0]], ["loc", [null, [57, 41], [57, 72]]], 0, 0]], [], 2, null, ["loc", [null, [57, 16], [57, 100]]]], ["block", "link-to", ["items.index", ["subexpr", "query-params", [], ["type", ["get", "item.type", ["loc", [null, [58, 60], [58, 69]]], 0, 0, 0, 0]], ["loc", [null, [58, 41], [58, 70]]], 0, 0]], [], 3, null, ["loc", [null, [58, 16], [58, 97]]]], ["block", "link-to", ["items.item.edit", ["get", "item", ["loc", [null, [60, 43], [60, 47]]], 0, 0, 0, 0]], ["class", "btn btn-default"], 4, null, ["loc", [null, [60, 14], [60, 154]]]], ["element", "action", ["destroy", ["get", "item", ["loc", [null, [61, 79], [61, 83]]], 0, 0, 0, 0]], [], ["loc", [null, [61, 60], [61, 85]]], 0, 0], ["attribute", "href", ["concat", [["get", "portalItemUrl", ["loc", [null, [62, 25], [62, 38]]], 0, 0, 0, 0], ["get", "item.id", ["loc", [null, [62, 42], [62, 49]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
          locals: ["item"],
          templates: [child0, child1, child2, child3, child4]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 4
            },
            "end": {
              "line": 69,
              "column": 4
            }
          },
          "moduleName": "dummy/items/bulk/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("Found ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Items ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "btn btn-danger");
          var el3 = dom.createTextNode("Delete all ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("table");
          dom.setAttribute(el1, "class", "table table-striped");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("thead");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Title");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Access");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Owner");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Type");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Actions");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("tbody");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element8 = dom.childAt(fragment, [1]);
          var element9 = dom.childAt(element8, [3]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(element8, 1, 1);
          morphs[1] = dom.createElementMorph(element9);
          morphs[2] = dom.createMorphAt(element9, 1, 1);
          morphs[3] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[4] = dom.createMorphAt(dom.childAt(fragment, [5, 3]), 1, 1);
          morphs[5] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          return morphs;
        },
        statements: [["content", "totalCount", ["loc", [null, [15, 16], [15, 30]]], 0, 0, 0, 0], ["element", "action", ["prenuke"], [], ["loc", [null, [15, 68], [15, 88]]], 0, 0], ["content", "totalCount", ["loc", [null, [15, 100], [15, 114]]], 0, 0, 0, 0], ["block", "if", [["get", "showConfirmation", ["loc", [null, [16, 12], [16, 28]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [16, 6], [35, 13]]]], ["block", "each", [["get", "model.results", ["loc", [null, [45, 18], [45, 31]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [45, 10], [65, 19]]]], ["inline", "list-pager", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [68, 25], [68, 30]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [68, 6], [68, 32]]], 0, 0]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 69,
              "column": 4
            },
            "end": {
              "line": 71,
              "column": 4
            }
          },
          "moduleName": "dummy/items/bulk/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "alert alert-warning");
          var el2 = dom.createTextNode("No items found for query ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(".");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "q", ["loc", [null, [70, 62], [70, 67]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 74,
            "column": 0
          }
        },
        "moduleName": "dummy/items/bulk/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("Bulk Delete");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-12");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 1]), 1, 1);
        return morphs;
      },
      statements: [["inline", "item-search-form", [], ["onFilter", ["subexpr", "action", ["filter"], [], ["loc", [null, [4, 32], [4, 49]]], 0, 0], "owner", ["subexpr", "@mut", [["get", "owner", ["loc", [null, [5, 12], [5, 17]]], 0, 0, 0, 0]], [], [], 0, 0], "tags", ["subexpr", "@mut", [["get", "tags", ["loc", [null, [6, 11], [6, 15]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "type", ["loc", [null, [7, 11], [7, 15]]], 0, 0, 0, 0]], [], [], 0, 0], "typeKeywords", ["subexpr", "@mut", [["get", "typeKeywords", ["loc", [null, [8, 19], [8, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "query", ["subexpr", "@mut", [["get", "query", ["loc", [null, [9, 12], [9, 17]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 4], [9, 19]]], 0, 0], ["block", "if", [["get", "totalCount", ["loc", [null, [14, 10], [14, 20]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [14, 4], [71, 11]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('dummy/items/index/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    itemsService: _ember['default'].inject.service('items-service'),
    session: _ember['default'].inject.service(),
    queryParams: ['start', 'num', 'q', 'owner', 'tags', 'type'],
    start: 1,
    q: null,
    query: '*',
    num: 10,
    owner: null,
    tags: null,
    typeKeywords: null,
    type: null,

    totalCount: _ember['default'].computed('model.total', function () {
      return this.get('model.total');
    }),

    queryChanged: _ember['default'].observer('q', function () {
      this.set('query', this.get('q'));
    }),

    portalItemUrl: _ember['default'].computed('session.portal', function () {
      var cbu = this.get('session.portal.customBaseUrl');
      var urlKey = this.get('session.portal.urlKey');
      return 'https://' + urlKey + '.' + cbu + '/home/item.html?id=';
    }),

    actions: {
      filter: function filter() {
        this.set('q', this.get('query'));
        // reset the page
        this.set('start', 1);
        this.transitionToRoute('items.index');
      }

    }
  });
});
define('dummy/items/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    itemsService: _ember['default'].inject.service('items-service'),
    queryParams: {
      'start': { refreshModel: true },
      'num': { refreshModel: true },
      'q': { refreshModel: true },
      'owner': { refreshModel: true },
      'tags': { refreshModel: true },
      'typeKeywords': { refreshModel: true },
      'type': { refreshModel: true }
    },

    lastAgoQuery: '',

    createAgoQuery: function createAgoQuery(query, owner, tags, type, typeKeywords) {
      console.log('Query ' + query + ' owner ' + owner + ' tags ' + tags + ' type ' + type + ' typeKeywords ' + typeKeywords);
      var parts = [];
      if (query) {
        parts.push(query);
      }

      if (owner) {
        parts.push('owner:' + owner);
      }

      if (tags) {
        if (tags.indexOf(',')) {
          var ta = tags.split(',');
          ta.map(function (t) {
            parts.push('tags:' + t);
          });
        } else {
          parts.push('tags:' + tags);
        }
      }

      if (typeKeywords) {
        if (typeKeywords.indexOf(',')) {
          var ta = typeKeywords.split(',');
          ta.map(function (t) {
            parts.push('typekeywords:' + t);
          });
        } else {
          parts.push('typekeywords:' + typeKeywords);
        }
      }

      if (type) {
        parts.push('type:"' + type + '"');
      }

      console.log('parts: ' + JSON.stringify(parts));
      var agoQuery = parts.join(' AND ');
      console.log('AGO Query: ' + agoQuery);
      return agoQuery;
    },

    model: function model(params) {
      var agoQuery = this.createAgoQuery(params.q, params.owner, params.tags, params.type, params.typeKeywords);
      var agoParams = {
        q: agoQuery,
        start: params.start,
        num: params.num,
        sortField: 'title'
      };
      // only if there is no query string, add the bbox
      if (!agoQuery) {
        agoParams.bbox = '-180,-90,180,90';
      }
      // if the query changes, reset the paging
      if (this.get('lastAgoQuery') !== agoQuery) {
        this.set('lastAgoQuery', agoQuery);
        // reset paging
        agoParams.start = 1;
      }
      return this.get('itemsService').search(agoParams);
    },

    actions: {
      destroy: function destroy(item) {
        var _this = this;

        this.get('itemsService').remove(item.id, item.owner).then(function () {
          // need to transition to the route so we pick up new entries
          _ember['default'].debug('Item Deleted... transitioning route to get new results...');
          _ember['default'].run.later(_this, function () {
            this.refresh();
          }, 100);
        });
      }
    }
  });
});
define("dummy/items/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 20
            },
            "end": {
              "line": 3,
              "column": 95
            }
          },
          "moduleName": "dummy/items/index/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("New Item");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 27,
                  "column": 16
                },
                "end": {
                  "line": 27,
                  "column": 66
                }
              },
              "moduleName": "dummy/items/index/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "item.title", ["loc", [null, [27, 52], [27, 66]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.8.2",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 31,
                      "column": 18
                    },
                    "end": {
                      "line": 31,
                      "column": 75
                    }
                  },
                  "moduleName": "dummy/items/index/template.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                  dom.insertBoundary(fragment, 0);
                  dom.insertBoundary(fragment, null);
                  return morphs;
                },
                statements: [["content", "tag", ["loc", [null, [31, 68], [31, 75]]], 0, 0, 0, 0]],
                locals: [],
                templates: []
              };
            })();
            return {
              meta: {
                "revision": "Ember@2.8.2",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 30,
                    "column": 18
                  },
                  "end": {
                    "line": 32,
                    "column": 18
                  }
                },
                "moduleName": "dummy/items/index/template.hbs"
              },
              isEmpty: false,
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                  ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("  \n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["block", "link-to", ["items.index", ["subexpr", "query-params", [], ["tags", ["get", "tag", ["loc", [null, [31, 62], [31, 65]]], 0, 0, 0, 0]], ["loc", [null, [31, 43], [31, 66]]], 0, 0]], [], 0, null, ["loc", [null, [31, 18], [31, 87]]]]],
              locals: ["tag"],
              templates: [child0]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 28,
                  "column": 14
                },
                "end": {
                  "line": 34,
                  "column": 14
                }
              },
              "moduleName": "dummy/items/index/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("small");
              dom.setAttribute(el1, "style", "display:block;width:400px");
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("                ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
              return morphs;
            },
            statements: [["block", "each", [["get", "item.tags", ["loc", [null, [30, 26], [30, 35]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [30, 18], [32, 27]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        var child2 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 37,
                  "column": 16
                },
                "end": {
                  "line": 37,
                  "column": 88
                }
              },
              "moduleName": "dummy/items/index/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "item.owner", ["loc", [null, [37, 74], [37, 88]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child3 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 38,
                  "column": 16
                },
                "end": {
                  "line": 38,
                  "column": 85
                }
              },
              "moduleName": "dummy/items/index/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "item.type", ["loc", [null, [38, 72], [38, 85]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child4 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 40,
                  "column": 14
                },
                "end": {
                  "line": 40,
                  "column": 142
                }
              },
              "moduleName": "dummy/items/index/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "glyphicon glyphicon-pencil");
              dom.setAttribute(el1, "aria-hidden", "true");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 25,
                "column": 10
              },
              "end": {
                "line": 45,
                "column": 10
              }
            },
            "moduleName": "dummy/items/index/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "type", "button");
            dom.setAttribute(el3, "class", "btn btn-danger");
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "glyphicon glyphicon-trash");
            dom.setAttribute(el4, "aria-hidden", "true");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            dom.setAttribute(el3, "target", "_blank");
            dom.setAttribute(el3, "class", "btn btn-default");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "glyphicon glyphicon-share");
            dom.setAttribute(el4, "aria-hidden", "true");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1]);
            var element2 = dom.childAt(element0, [9]);
            var element3 = dom.childAt(element2, [3]);
            var element4 = dom.childAt(element2, [5]);
            var morphs = new Array(8);
            morphs[0] = dom.createMorphAt(element1, 0, 0);
            morphs[1] = dom.createMorphAt(element1, 3, 3);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
            morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
            morphs[4] = dom.createMorphAt(dom.childAt(element0, [7]), 0, 0);
            morphs[5] = dom.createMorphAt(element2, 1, 1);
            morphs[6] = dom.createElementMorph(element3);
            morphs[7] = dom.createAttrMorph(element4, 'href');
            return morphs;
          },
          statements: [["block", "link-to", ["items.item.index", ["get", "item", ["loc", [null, [27, 46], [27, 50]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [27, 16], [27, 78]]]], ["block", "if", [["get", "item.tags", ["loc", [null, [28, 20], [28, 29]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [28, 14], [34, 21]]]], ["content", "item.access", ["loc", [null, [36, 16], [36, 31]]], 0, 0, 0, 0], ["block", "link-to", ["items.index", ["subexpr", "query-params", [], ["owner", ["get", "item.owner", ["loc", [null, [37, 61], [37, 71]]], 0, 0, 0, 0]], ["loc", [null, [37, 41], [37, 72]]], 0, 0]], [], 2, null, ["loc", [null, [37, 16], [37, 100]]]], ["block", "link-to", ["items.index", ["subexpr", "query-params", [], ["type", ["get", "item.type", ["loc", [null, [38, 60], [38, 69]]], 0, 0, 0, 0]], ["loc", [null, [38, 41], [38, 70]]], 0, 0]], [], 3, null, ["loc", [null, [38, 16], [38, 97]]]], ["block", "link-to", ["items.item.edit", ["get", "item", ["loc", [null, [40, 43], [40, 47]]], 0, 0, 0, 0]], ["class", "btn btn-default"], 4, null, ["loc", [null, [40, 14], [40, 154]]]], ["element", "action", ["destroy", ["get", "item", ["loc", [null, [41, 79], [41, 83]]], 0, 0, 0, 0]], [], ["loc", [null, [41, 60], [41, 85]]], 0, 0], ["attribute", "href", ["concat", [["get", "portalItemUrl", ["loc", [null, [42, 25], [42, 38]]], 0, 0, 0, 0], ["get", "item.id", ["loc", [null, [42, 42], [42, 49]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
          locals: ["item"],
          templates: [child0, child1, child2, child3, child4]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 49,
                "column": 6
              },
              "end": {
                "line": 49,
                "column": 86
              }
            },
            "moduleName": "dummy/items/index/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Bulk Actions");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 4
            },
            "end": {
              "line": 50,
              "column": 4
            }
          },
          "moduleName": "dummy/items/index/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("Found ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Items");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("table");
          dom.setAttribute(el1, "class", "table table-striped");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("thead");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Title");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Access");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Owner");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Type");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Actions");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("tbody");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3, 3]), 1, 1);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          return morphs;
        },
        statements: [["content", "totalCount", ["loc", [null, [15, 16], [15, 30]]], 0, 0, 0, 0], ["block", "each", [["get", "model.results", ["loc", [null, [25, 18], [25, 31]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [25, 10], [45, 19]]]], ["inline", "list-pager", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [48, 25], [48, 30]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [48, 6], [48, 32]]], 0, 0], ["block", "link-to", ["items.bulk"], ["class", "btn btn-warning btn-lrg pull-right"], 1, null, ["loc", [null, [49, 6], [49, 98]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 50,
              "column": 4
            },
            "end": {
              "line": 52,
              "column": 4
            }
          },
          "moduleName": "dummy/items/index/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "alert alert-warning");
          var el2 = dom.createTextNode("No items found for query ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(".");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "q", ["loc", [null, [51, 62], [51, 67]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 55,
            "column": 0
          }
        },
        "moduleName": "dummy/items/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("Item Search ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-12");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element5 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element5, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(element5, 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [2, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["items.new"], ["class", "btn btn-warning btn-lrg pull-right"], 0, null, ["loc", [null, [3, 20], [3, 107]]]], ["inline", "item-search-form", [], ["onFilter", ["subexpr", "action", ["filter"], [], ["loc", [null, [4, 32], [4, 49]]], 0, 0], "owner", ["subexpr", "@mut", [["get", "owner", ["loc", [null, [5, 12], [5, 17]]], 0, 0, 0, 0]], [], [], 0, 0], "tags", ["subexpr", "@mut", [["get", "tags", ["loc", [null, [6, 11], [6, 15]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "type", ["loc", [null, [7, 11], [7, 15]]], 0, 0, 0, 0]], [], [], 0, 0], "typeKeywords", ["subexpr", "@mut", [["get", "typeKeywords", ["loc", [null, [8, 19], [8, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "query", ["subexpr", "@mut", [["get", "query", ["loc", [null, [9, 12], [9, 17]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 4], [9, 19]]], 0, 0], ["block", "if", [["get", "totalCount", ["loc", [null, [14, 10], [14, 20]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [14, 4], [52, 11]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define('dummy/items/item/edit/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    itemsService: _ember['default'].inject.service('items-service'),

    sharingService: _ember['default'].inject.service('sharing-service'),

    itemJson: _ember['default'].computed('model', function () {
      _ember['default'].debug('ItemJson being reset...');
      return this.get('model.item');
    }).volatile(),

    dataJson: _ember['default'].computed('model', function () {
      _ember['default'].debug('DataJson being reset...');
      return this.get('model.data');
    }).volatile(),
    // itemJson: Ember.computed.reads('model.item').volatile,
    // datason: Ember.computed.reads('model.data').volatile,

    dataJsonString: _ember['default'].computed('model', function () {
      return JSON.stringify(this.get('dataJson'), null, ' ');
    }),

    actions: {

      protectItem: function protectItem() {
        var _this = this;

        var itemId = this.get('model.item.id');
        var owner = this.get('model.item.owner');
        return this.get('itemsService').protect(itemId, owner).then(function (result) {
          if (result.success) {
            _this.set('model.item.protected', true);
          } else {
            _ember['default'].debug('Protect call failed: ' + JSON.stringify(result));
          }
        });
      },

      unprotectItem: function unprotectItem() {
        var _this2 = this;

        var itemId = this.get('model.item.id');
        var owner = this.get('model.item.owner');
        return this.get('itemsService').unprotect(itemId, owner).then(function (result) {
          if (result.success) {
            _this2.set('model.item.protected', false);
          } else {
            _ember['default'].debug('Unprotect call failed: ' + JSON.stringify(result));
          }
        });
      },

      save: function save() {
        var _this3 = this;

        // get the item
        var item = this.get('model.item');
        item.text = JSON.stringify(this.get('model.data'));

        this.get('itemsService').update(item).then(function (resp) {
          _this3.transitionToRoute('items.index');
        });
      },
      cancel: function cancel() {
        // return to the item list
        this.transitionToRoute('items.index');
      },
      removeResource: function removeResource(resource) {
        var item = this.get('model.item');
        return this.get('itemsService').removeResource(item.id, item.owner, resource.resource);
      },
      uploadFile: function uploadFile(file) {
        var item = this.get('model.item');
        return this.get('itemsService').uploadResource(item.id, item.owner, file);
      },
      sendJson: function sendJson(jsonObj) {
        var item = this.get('model.item');
        return this.get('itemsService').addResource(item.id, item.owner, 'theme.json', JSON.stringify(jsonObj));
      },
      sendText: function sendText(text, fileName) {
        var item = this.get('model.item');
        return this.get('itemsService').addResource(item.id, item.owner, fileName, text);
      },
      fetchResources: function fetchResources() {
        var item = this.get('model.item');
        return this.get('itemsService').getResources(item.id);
      },

      shareWithEveryone: function shareWithEveryone() {
        var _this4 = this;

        var item = this.get('model.item');
        this.get('sharingService').shareItemWithEveryone(item.owner, item.id).then(function (result) {
          _this4.set('model.item.access', 'everyone');
        });
      },
      shareWithOrg: function shareWithOrg() {
        var _this5 = this;

        var item = this.get('model.item');
        this.get('sharingService').shareItemWithOrg(item.owner, item.id).then(function (result) {
          _this5.set('model.item.access', 'org');
        });
      },
      shareWithGroups: function shareWithGroups() {
        var _this6 = this;

        var item = this.get('model.item');
        var data = {
          owner: item.owner,
          items: [item.id].join(','),
          everyone: false,
          org: false,
          confirmItemControl: true,
          f: 'json'
        };
        this.get('sharingService').shareItem(data).then(function (result) {
          _this6.set('model.item.access', 'shared');
        });
      }

    }

  });
});
define('dummy/items/item/edit/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    itemsService: _ember['default'].inject.service('items-service'),
    model: function model(params) {
      var item = this.modelFor('items.item');
      _ember['default'].debug('Items.item.edit:: item.id ' + item.id);
      return _ember['default'].RSVP.hashSettled({
        item: item,
        data: this.get('itemsService').getDataById(item.id)
      }).then(function (hashResults) {
        _ember['default'].debug('Items.item.edit route returning model...');
        var model = {
          item: hashResults.item.value,
          data: hashResults.data.value
        };
        if (!model.item.title === model.data.values.title) {
          _ember['default'].debug('Items.item.edit route returning model but item and data do not match!!!!!');
        }
        return model;
      });
    }
  });
});
define("dummy/items/item/edit/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 47,
            "column": 0
          }
        },
        "moduleName": "dummy/items/item/edit/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("Edit ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "name", "button");
        dom.setAttribute(el4, "class", "btn btn-default pull-right");
        var el5 = dom.createTextNode("Cancel");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "name", "button");
        dom.setAttribute(el4, "class", "btn btn-primary pull-right");
        var el5 = dom.createTextNode("Save");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-6");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("Sharing: ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("This only handles sharing to the org or everyone");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "btn-group");
        dom.setAttribute(el3, "role", "group");
        dom.setAttribute(el3, "aria-label", "...");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "btn btn-default");
        var el5 = dom.createTextNode("Only Existing Groups");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "btn btn-default");
        var el5 = dom.createTextNode("Org");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "btn btn-default");
        var el5 = dom.createTextNode("Everyone");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-6");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("Protected: ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Set Delete Protection");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "btn-group");
        dom.setAttribute(el3, "role", "group");
        dom.setAttribute(el3, "aria-label", "...");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "btn btn-default");
        var el5 = dom.createTextNode("Protect");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "btn btn-default");
        var el5 = dom.createTextNode("Unprotect");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-6");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createTextNode("Item Json");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-6");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createTextNode("Data Json");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element0, [5]);
        var element3 = dom.childAt(fragment, [2]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element4, [5]);
        var element6 = dom.childAt(element5, [1]);
        var element7 = dom.childAt(element5, [3]);
        var element8 = dom.childAt(element5, [5]);
        var element9 = dom.childAt(element3, [3]);
        var element10 = dom.childAt(element9, [5]);
        var element11 = dom.childAt(element10, [1]);
        var element12 = dom.childAt(element10, [3]);
        var morphs = new Array(13);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createElementMorph(element2);
        morphs[3] = dom.createMorphAt(dom.childAt(element4, [1]), 1, 1);
        morphs[4] = dom.createElementMorph(element6);
        morphs[5] = dom.createElementMorph(element7);
        morphs[6] = dom.createElementMorph(element8);
        morphs[7] = dom.createMorphAt(dom.childAt(element9, [1]), 1, 1);
        morphs[8] = dom.createElementMorph(element11);
        morphs[9] = dom.createElementMorph(element12);
        morphs[10] = dom.createMorphAt(dom.childAt(element3, [5]), 3, 3);
        morphs[11] = dom.createMorphAt(dom.childAt(element3, [7]), 3, 3);
        morphs[12] = dom.createMorphAt(dom.childAt(fragment, [4, 1]), 1, 1);
        return morphs;
      },
      statements: [["content", "model.title", ["loc", [null, [3, 13], [3, 28]]], 0, 0, 0, 0], ["element", "action", ["cancel"], [], ["loc", [null, [4, 76], [4, 95]]], 0, 0], ["element", "action", ["save"], [], ["loc", [null, [5, 76], [5, 93]]], 0, 0], ["content", "model.item.access", ["loc", [null, [11, 17], [11, 38]]], 0, 0, 0, 0], ["element", "action", ["shareWithGroups"], [], ["loc", [null, [14, 52], [14, 80]]], 0, 0], ["element", "action", ["shareWithOrg"], [], ["loc", [null, [15, 52], [15, 77]]], 0, 0], ["element", "action", ["shareWithEveryone"], [], ["loc", [null, [16, 52], [16, 82]]], 0, 0], ["content", "model.item.protected", ["loc", [null, [20, 19], [20, 43]]], 0, 0, 0, 0], ["element", "action", ["protectItem"], [], ["loc", [null, [23, 52], [23, 76]]], 0, 0], ["element", "action", ["unprotectItem"], [], ["loc", [null, [24, 52], [24, 78]]], 0, 0], ["inline", "json-editor", [], ["json", ["subexpr", "@mut", [["get", "model.item", ["loc", [null, [29, 23], [29, 33]]], 0, 0, 0, 0]], [], [], 0, 0], "mode", "code", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.item", ["loc", [null, [29, 68], [29, 78]]], 0, 0, 0, 0]], [], ["loc", [null, [29, 63], [29, 79]]], 0, 0]], [], ["loc", [null, [29, 55], [29, 80]]], 0, 0]], ["loc", [null, [29, 4], [29, 82]]], 0, 0], ["inline", "json-editor", [], ["json", ["subexpr", "@mut", [["get", "model.data", ["loc", [null, [33, 23], [33, 33]]], 0, 0, 0, 0]], [], [], 0, 0], "mode", "code", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.data", ["loc", [null, [33, 68], [33, 78]]], 0, 0, 0, 0]], [], ["loc", [null, [33, 63], [33, 79]]], 0, 0]], [], ["loc", [null, [33, 55], [33, 80]]], 0, 0]], ["loc", [null, [33, 4], [33, 82]]], 0, 0], ["inline", "item-resources", [], ["item", ["subexpr", "@mut", [["get", "model.item", ["loc", [null, [38, 26], [38, 36]]], 0, 0, 0, 0]], [], [], 0, 0], "onFetchResources", ["subexpr", "action", ["fetchResources"], [], ["loc", [null, [39, 23], [39, 48]]], 0, 0], "onRemoveResource", ["subexpr", "action", ["removeResource"], [], ["loc", [null, [40, 23], [40, 48]]], 0, 0], "onUploadFile", ["subexpr", "action", ["uploadFile"], [], ["loc", [null, [41, 19], [41, 40]]], 0, 0], "onJsonUpload", ["subexpr", "action", ["sendJson"], [], ["loc", [null, [42, 19], [42, 38]]], 0, 0], "onTextUpload", ["subexpr", "action", ["sendText"], [], ["loc", [null, [43, 19], [43, 38]]], 0, 0]], ["loc", [null, [38, 4], [44, 8]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('dummy/items/item/index/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    jsonString: _ember['default'].computed('model', function () {
      return JSON.stringify(this.get('model'), null, ' ');
    })
  });
});
define('dummy/items/item/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var item = this.modelFor('items.item');
      return item;
    }
  });
});
define("dummy/items/item/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "dummy/items/item/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("pre");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "model.title", ["loc", [null, [3, 8], [3, 23]]], 0, 0, 0, 0], ["content", "jsonString", ["loc", [null, [4, 9], [4, 23]]], 0, 0, 0, 0], ["content", "outlet", ["loc", [null, [7, 0], [7, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('dummy/items/item/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    itemsService: _ember['default'].inject.service('items-service'),

    model: function model(params) {
      _ember['default'].debug('Items.item route got id: ' + params.id);
      return this.get('itemsService').getById(params.id);
    }
  });
});
define("dummy/items/item/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/items/item/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('dummy/items/new/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    itemsService: _ember['default'].inject.service('items-service'),

    itemJson: _ember['default'].computed('model.item', function () {
      return this.get('model.item');
    }),

    dataJson: _ember['default'].computed('model.data', function () {
      return this.get('model.data');
    }),

    actions: {
      save: function save() {
        var _this = this;

        console.log('Saving item...');
        // transfer values from the modelJson --> model
        var item = this.get('itemJson');

        if (this.get('dataJson')) {
          item.text = JSON.stringify(this.get('dataJson'));
        }

        this.get('itemsService').create(item).then(function (resp) {
          _this.transitionToRoute('items.index');
        }, function (error) {
          alert('Error Creating Item: ' + error.message);
        })['catch'](function (error) {
          alert('Error Creating Item 2: ' + error.message);
        });
      },
      cancel: function cancel() {
        // return to the item list
        this.transitionToRoute('items.index');
      }
    }
  });
});
define('dummy/items/new/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      var owner = this.get('session.currentUser.username');
      return {
        'item': {
          'title': 'REPLACE ME',
          'type': 'Web Mapping Application',
          'owner': owner,
          'typeKeywords': ['JavaScript', 'Map', 'Mapping Site', 'Online Map', 'Ready To Use', 'selfConfigured', 'Web Map'],
          'description': 'REPLACE ME',
          'tags': ['odpage'],
          'snippet': 'Snippet is shorter.',
          'spatialReference': null,
          'accessInformation': null,
          'licenseInfo': 'CC-BY-SA',
          'culture': 'en-us',
          'properties': null,
          'url': null,
          'access': 'private',
          'listed': false
        },
        'data': {
          'source': 'ALLPOWERFULOPENDATABUWHAHAHAAH',
          'folderId': null,
          'values': {
            'place': 'content in here'
          }
        }
      };
    }
  });
});
define("dummy/items/new/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "dummy/items/new/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("Create new Item\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "name", "button");
        dom.setAttribute(el4, "class", "btn btn-default pull-right");
        var el5 = dom.createTextNode("Cancel");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "name", "button");
        dom.setAttribute(el4, "class", "btn btn-primary pull-right");
        var el5 = dom.createTextNode("Save");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-6");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createTextNode("Item Json");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-6");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createTextNode("Data Json");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var element3 = dom.childAt(fragment, [2]);
        var morphs = new Array(4);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createElementMorph(element2);
        morphs[2] = dom.createMorphAt(dom.childAt(element3, [1]), 3, 3);
        morphs[3] = dom.createMorphAt(dom.childAt(element3, [3]), 3, 3);
        return morphs;
      },
      statements: [["element", "action", ["cancel"], [], ["loc", [null, [4, 76], [4, 95]]], 0, 0], ["element", "action", ["save"], [], ["loc", [null, [5, 76], [5, 93]]], 0, 0], ["inline", "json-editor", [], ["json", ["subexpr", "@mut", [["get", "itemJson", ["loc", [null, [12, 23], [12, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "mode", "code", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "itemJson", ["loc", [null, [12, 66], [12, 74]]], 0, 0, 0, 0]], [], ["loc", [null, [12, 61], [12, 75]]], 0, 0]], [], ["loc", [null, [12, 53], [12, 76]]], 0, 0]], ["loc", [null, [12, 4], [12, 78]]], 0, 0], ["inline", "json-editor", [], ["json", ["subexpr", "@mut", [["get", "dataJson", ["loc", [null, [16, 23], [16, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "mode", "code", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "dataJson", ["loc", [null, [16, 66], [16, 74]]], 0, 0, 0, 0]], [], ["loc", [null, [16, 61], [16, 75]]], 0, 0]], [], ["loc", [null, [16, 53], [16, 76]]], 0, 0]], ["loc", [null, [16, 4], [16, 78]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('dummy/items/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("dummy/items/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/items/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('dummy/mixins/active-link', ['exports', 'ember-cli-active-link-wrapper/mixins/active-link'], function (exports, _emberCliActiveLinkWrapperMixinsActiveLink) {
  exports['default'] = _emberCliActiveLinkWrapperMixinsActiveLink['default'];
});
define('dummy/portal/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    portalService: _ember['default'].inject.service('portal-service'),
    actions: {
      removeResource: function removeResource(resourceName) {
        return this.get('portalService').removeResource(resourceName);
      },

      uploadFile: function uploadFile(file) {
        return this.get('portalService').uploadResource(file[0]);
      },

      sendJson: function sendJson(jsonObj) {
        return this.get('portalService').addResource('opendata.json', JSON.stringify(jsonObj));
      },

      fetchResources: function fetchResources() {
        return this.get('portalService').getResources();
      }
    }
  });
});
define('dummy/portal/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    session: _ember['default'].inject.service(),
    portalService: _ember['default'].inject.service('portal-service'),

    model: function model() {
      return _ember['default'].RSVP.hash({
        portal: this.get('session.portal'),
        resources: this.get('portalService').getResources()
      });
    }
  });
});
define("dummy/portal/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "dummy/portal/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["content", "model.portal.name", ["loc", [null, [3, 8], [3, 29]]], 0, 0, 0, 0], ["inline", "portal-resources", [], ["onFetchResources", ["subexpr", "action", ["fetchResources"], [], ["loc", [null, [5, 23], [5, 48]]], 0, 0], "onRemoveResource", ["subexpr", "action", ["removeResource"], [], ["loc", [null, [6, 23], [6, 48]]], 0, 0], "onUploadFile", ["subexpr", "action", ["uploadFile"], [], ["loc", [null, [7, 19], [7, 40]]], 0, 0], "onJsonUpload", ["subexpr", "action", ["sendJson"], [], ["loc", [null, [8, 19], [8, 38]]], 0, 0]], ["loc", [null, [4, 4], [9, 8]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType,
    rootURL: _dummyConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.authenticatedRoute('items', function () {
      this.route('bulk');
      this.route('item', { path: ':id' }, function () {
        this.route('index', { path: '/' });
        this.route('edit');
      });
      this.route('new');
    });
    this.authenticatedRoute('groups');
    this.route('signin');

    this.route('groups', function () {
      this.route('group', { path: '/:id' }, function () {
        this.route('edit');
      });
      this.route('new');
    });

    this.route('users');

    this.route('portal');
  });

  exports['default'] = Router;
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('dummy/services/arcgis-ajax', ['exports', 'ember-arcgis-portal-services/services/arcgis-ajax'], function (exports, _emberArcgisPortalServicesServicesArcgisAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalServicesServicesArcgisAjax['default'];
    }
  });
});
define('dummy/services/geocode-service', ['exports', 'ember-arcgis-portal-services/services/geocode-service'], function (exports, _emberArcgisPortalServicesServicesGeocodeService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalServicesServicesGeocodeService['default'];
    }
  });
});
define('dummy/services/groups-service', ['exports', 'ember-arcgis-portal-services/services/groups-service'], function (exports, _emberArcgisPortalServicesServicesGroupsService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalServicesServicesGroupsService['default'];
    }
  });
});
define('dummy/services/items-service', ['exports', 'ember-arcgis-portal-services/services/items-service'], function (exports, _emberArcgisPortalServicesServicesItemsService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalServicesServicesItemsService['default'];
    }
  });
});
define('dummy/services/oauth-service', ['exports', 'ember-arcgis-portal-services/services/oauth-service'], function (exports, _emberArcgisPortalServicesServicesOauthService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalServicesServicesOauthService['default'];
    }
  });
});
define('dummy/services/popup', ['exports', 'torii/services/popup'], function (exports, _toriiServicesPopup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _toriiServicesPopup['default'];
    }
  });
});
define('dummy/services/portal-service', ['exports', 'ember-arcgis-portal-services/services/portal-service'], function (exports, _emberArcgisPortalServicesServicesPortalService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalServicesServicesPortalService['default'];
    }
  });
});
define('dummy/services/sharing-service', ['exports', 'ember-arcgis-portal-services/services/sharing-service'], function (exports, _emberArcgisPortalServicesServicesSharingService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalServicesServicesSharingService['default'];
    }
  });
});
define('dummy/services/torii-session', ['exports', 'torii/services/session'], function (exports, _toriiServicesSession) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _toriiServicesSession['default'];
    }
  });
});
define('dummy/services/torii', ['exports', 'torii/services/torii'], function (exports, _toriiServicesTorii) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _toriiServicesTorii['default'];
    }
  });
});
define('dummy/services/user-service', ['exports', 'ember-arcgis-portal-services/services/user-service'], function (exports, _emberArcgisPortalServicesServicesUserService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalServicesServicesUserService['default'];
    }
  });
});
define('dummy/signin/route', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports['default'] = _ember['default'].Route.extend({
    deactivate: function deactivate() {
      // if you are using iframes, you will need to remove the
      // iframe from the DOM here so torii gets notified that the
      // auth attempt was cancelled.
      _ember['default'].debug('route:signin:deactivate fired...');
    },

    actions: {
      signin: function signin() {
        var _this = this;

        this.get('session').open('arcgis-oauth-bearer').then(function (authorization) {
          _ember['default'].debug('AUTH SUCCESS: ', authorization);
          // transition to some secured route or... so whatever is needed
          _this.controller.transitionToRoute('index');
        })['catch'](function (err) {
          _ember['default'].debug('AUTH ERROR: ', err);
        });
      },

      /**
       * In order to show the iframe when this route loads
       * we add a didTransition hook, and then schedule the
       * session.open to be called after it's rendered
       */
      didTransition: function didTransition() {
        // only do this if we are using iframe style
        if (_dummyConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].display && _dummyConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].display === 'iframe') {
          // --- USE THIS BLOCK IN YOUR APP --
          _ember['default'].run.schedule('afterRender', this, function () {
            var _this2 = this;

            this.get('session').open('arcgis-oauth-bearer').then(function (authorization) {
              _ember['default'].debug('AUTH SUCCESS: ', authorization);
              // transition to secured route
              _this2.controller.transitionToRoute('secure');
            })['catch'](function (err) {
              _ember['default'].debug('AUTH ERROR: ' + JSON.stringify(err));
            });
          });
          // -----------------------------------
        }
      }
    }
  });
});
define("dummy/signin/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 8,
              "column": 4
            }
          },
          "moduleName": "dummy/signin/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          var el2 = dom.createTextNode("ArcGIS IFrame Authentication");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("This style of login only works for apps hosted on *.arcgis.com domains.\n    This allows for the authentication to occur in an iframe instead of a full-page\n    redirect or a pop-out window.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 4
            },
            "end": {
              "line": 13,
              "column": 4
            }
          },
          "moduleName": "dummy/signin/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          var el2 = dom.createTextNode("Sign In");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("In order to work with the ArcGIS.com API, you need to login using ArcGIS.com credentials.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Press the button below to open the pop-up and sign-in.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-primary");
          dom.setAttribute(el1, "type", "button");
          var el2 = dom.createTextNode("Show Sign In");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [7]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["signin"], [], ["loc", [null, [12, 50], [12, 69]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "dummy/signin/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-6");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-6");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "if", [["get", "usingIframe", ["loc", [null, [3, 10], [3, 21]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [3, 4], [13, 11]]]], ["content", "torii-iframe-placeholder", ["loc", [null, [16, 4], [16, 32]]], 0, 0, 0, 0], ["content", "outlet", ["loc", [null, [19, 0], [19, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('dummy/torii-adapters/application', ['exports', 'dummy/torii-adapters/arcgis-oauth-bearer'], function (exports, _dummyToriiAdaptersArcgisOauthBearer) {
  exports['default'] = _dummyToriiAdaptersArcgisOauthBearer['default'];
});
define('dummy/torii-adapters/arcgis-oauth-bearer', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports['default'] = _ember['default'].Object.extend({

    authCookieName: 'esri_auth',

    portalBaseUrl: 'https://www.arcgis.com/',

    signoutUrl: _ember['default'].computed('portalBaseUrl', function () {
      // baseURL is basically deprecated, in preference of rootURL.
      // So, we will use baseURL if present, but prefer rootURL
      var base = _dummyConfigEnvironment['default'].baseURL || _dummyConfigEnvironment['default'].rootURL;
      return this.get('portalBaseUrl') + '/sharing/rest/oauth2/signout?redirect_uri=' + window.location.protocol + '//' + window.location.host + base;
    }),

    /**
     * Initialize the adapter
     * As it starts up we basically check for various configuration
     * options, and update the defaults
     */
    init: function init() {
      this._super.init && this._super.init.apply(this, arguments);
      if (_dummyConfigEnvironment['default'].APP.authCookieName) {
        this.set('authCookieName', _dummyConfigEnvironment['default'].APP.authCookieName);
      }
      // Unless working against a portal instance, this can be left as the default
      if (_dummyConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].portalUrl) {
        this.set('portalBaseUrl', _dummyConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].portalUrl);
      } else {
        _ember['default'].warn('ENV.torii.providers[\'arcgis-oauth-bearer\'].portalUrl not defined. Defaulting to https://www.arcgis.com');
      }
    },

    /**
     * Open a session by fetching portal/self from
     * the portal
     */
    open: function open(authentication) {
      var _this = this;

      var token = authentication.authorizationToken.token;
      var expires = Date.now() + authentication.authorizationToken.expires_in * 1000; // seconds from now

      // Ember.debug('torii:adapter:arcgis-oauth-bearer:open token...' + token);
      var portalSelfUrl = this.get('portalBaseUrl') + '/sharing/rest/portals/self?f=json&token=' + token;

      var signoutUrl = this.get('signoutUrl');
      // Ember.debug('signoutUrl ' + signoutUrl);
      // now use the token to call portal self
      // TODO: If we have a cookie but the token is invalid (i.e. for a different portal)
      // then this call will return a 499-in-a-200.
      return new _ember['default'].RSVP.Promise(function (resolve, reject) {
        // Ember.debug('torii:adapter:arcgis-oauth-bearer:open making portal/self call...');
        _ember['default'].$.ajax({
          url: portalSelfUrl,
          dataType: 'json',
          success: _ember['default'].run.bind(null, function (data) {
            // Ember.debug('torii:adapter:arcgis-oauth-bearer:open portals/self call returned: ' + JSON.stringify(data));
            if (data.error) {
              _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:open portals/self call shows token was not valid.');
              reject(data);
            } else {
              resolve(data);
            }
          }),
          error: _ember['default'].run.bind(null, reject)
        });
      }).then(function (portal) {
        // Ember.debug('torii:adapter:arcgis-oauth-bearer:open got response from portal/self & assigning to session');
        // The returned object is merged onto the session (basically).

        // separate the portal and user so they are separate props on the session object
        var user = portal.user;
        delete portal.user;

        // TODO find a cleaner means to handle this iframe jiggery pokery
        if (!_dummyConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].display || _dummyConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].display !== 'iframe') {
          // basically - if we are not using the iframe, we need to handle the
          // login persistence ourselves so cook up an object and stuff it
          // in localStorage
          var cookieData = _this._createCookieData(token, expires, user, portal);
          _this._store('torii-provider-arcgis', cookieData);
        }

        return {
          portal: portal,
          currentUser: user,
          token: token,
          signoutUrl: signoutUrl
        };
      });
    },

    /**
     * Close a session (aka log out the user)
     */
    close: function close() {
      return new _ember['default'].RSVP.Promise(function (resolve /*, reject */) {
        // always nuke the localStorage things
        if (window.localStorage) {
          window.localStorage.removeItem('torii-provider-arcgis');
        }
        // TODO find a cleaner means to handle this iframe jiggery pokery
        if (_dummyConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].display && _dummyConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].display === 'iframe') {
          throw new Error('To log out of ArcGIS Online, you should redirect the browser to ' + this.get('signoutUrl'));
        }
        resolve();
      });
    },

    /**
     * Rehydrate a session by looking for the esri_auth cookie
     */
    fetch: function fetch() {
      console.debug('torii-provider-arcgis.fetch called...');
      var self = this;
      return new _ember['default'].RSVP.Promise(function (resolve, reject) {
        // try for a cookie...
        var result = self._checkCookie(self.get('authCookieName'));
        // failing that look in localStorage
        if (!result.valid) {
          result = self._checkLocalStorage('torii-provider-arcgis');
        }

        if (result.valid) {
          // degate to the ope function to do the work...
          _ember['default'].debug('Fetch has valid client-side information... opening session...');

          // calcuate expires_in based on current timestamp
          var now = Date.now();
          var expiresIn = (result.authData.expires - now) / 1000;

          // create the expected object for open
          var authData = {
            authorizationToken: {
              token: result.authData.token,
              expires_in: expiresIn
            }
          };
          resolve(self.open(authData));
        } else {
          _ember['default'].debug('Fetch did not find valid client-side information... rejecting');
          reject();
        }
      });
    },

    /**
     * Checks local storage for auth data
     */
    _checkLocalStorage: function _checkLocalStorage(keyName) {
      _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:checkLocalStorage keyName ' + keyName);
      var result = {
        valid: false
      };

      if (window.localStorage) {
        var stored = window.localStorage.getItem(keyName);
        if (stored) {
          result.authData = JSON.parse(stored);
          if (new Date(result.authData.expires) > new Date()) {
            _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:checkLocalStorage authdata has not expired yet ');
            result.valid = true;
          }
        }
      }
      return result;
    },

    /**
     * Stores auth data in local storage
     */
    _store: function _store(keyName, object) {
      if (window.localStorage) {
        window.localStorage.setItem(keyName, JSON.stringify(object));
      }
    },

    /**
     * Helper to ensure consisten serialization
     */
    _createCookieData: function _createCookieData(token, expires, user, portal) {
      var data = {
        token: token,
        accountId: user.orgId,
        create: user.created,
        culture: user.culture,
        customBaseUrl: portal.customBaseUrl,
        email: user.username,
        expires: expires,
        persistent: false,
        region: user.region,
        role: user.role
      };
      return data;
    },

    /**
     * Check for and validate a cookie by name
     */
    _checkCookie: function _checkCookie(cookieName) {
      var result = {
        valid: false
      };

      var cookieString = decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(cookieName).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null; // eslint-disable-line

      if (cookieString) {
        // Ember.debug('torii:adapter:arcgis-oauth-bearer:checkCookie: Found cookie...');
        // parse it
        var cookieData = JSON.parse(cookieString);
        // check if it has expired

        if (new Date(cookieData.expires) > new Date()) {
          // ok it's still valid... we still don't know if
          // it is valid for the env we are working with so but we will return it
          _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:checkCookie: cookie has not expired yet...');
        } else {
          // There is an occasional bug where it seems that we can have valid tokens
          // with expires values in the past. Where this gets really odd is that
          // when we make a call to /authorize ahd this borked cookie is sent along
          // the cookie is not overwritten w/ an updated cookie.
          // Thus, we return the auth data in either case
          _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:checkCookie: cookie has expired - but we are still going to try to use it');
        }
        result.authData = cookieData;
        result.valid = true;
      }
      return result;
    }

  });
});
define('dummy/torii-provider-arcgis/tests/modules/torii-provider-arcgis/mixins/gatekeeper.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/torii-provider-arcgis/mixins/gatekeeper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/torii-provider-arcgis/mixins/gatekeeper.js should pass ESLint.');
  });
});
define('dummy/torii-providers/arcgis-oauth-bearer', ['exports', 'torii/providers/oauth2-bearer', 'torii/configuration', 'dummy/config/environment', 'ember'], function (exports, _toriiProvidersOauth2Bearer, _toriiConfiguration, _dummyConfigEnvironment, _ember) {

  var ArcGISOAuth = _toriiProvidersOauth2Bearer['default'].extend({
    name: 'arcgis-oauth-bearer',

    // Allow the portalUrl to be passed in, but default to ago
    portalUrl: (0, _toriiConfiguration.configurable)('portalUrl', 'https://www.arcgis.com'),

    // construct the authorize end-point url based on the portalUrl
    baseUrl: (0, _toriiConfiguration.configurable)('baseUrl', function () {
      return this.get('portalUrl') + '/sharing/oauth2/authorize';
    }),

    showSocialLogins: (0, _toriiConfiguration.configurable)('showSocialLogins', false),

    display: (0, _toriiConfiguration.configurable)('display', 'default'),

    expiration: (0, _toriiConfiguration.configurable)('expiration', 20160),

    locale: (0, _toriiConfiguration.configurable)('locale', 'en-us'),

    // These params must be present in on the provider
    requiredUrlParams: ['response_type', 'showSocialLogins', 'display', 'expiration', 'locale'],
    // additional params that this provider accepts
    optionalUrlParams: ['client', 'parent'],
    // params the provider will extract from the redirected url
    responseParams: ['token', 'state', 'expires_in'],

    customRedirectUri: (0, _toriiConfiguration.configurable)('customRedirectUri', ''),

    _currentBaseUrl: function _currentBaseUrl() {
      return [window.location.protocol, '//', window.location.host].join('');
    },
    /**
     * shows the pop-up/iframe - we override the base implementation so
     * we can merge the passed in options into the object before we show
     * the login
     */
    open: function open(options) {
      options = options || {};

      if (this.get('display') === 'iframe') {
        // if we are using an iframe, we need to set the parent to the current domain
        options.parent = window.location.protocol + '//' + window.location.hostname;
      }

      // since we want any passed in options to map up to the optional params...
      this.setProperties(options);

      var uri = '';
      // Check for a customized redirect uri. This can be useful if your app
      // is hosted by rails or some other server-side rendering system, or
      // if you have multiple apps fronted by nginx and you want to centralize
      // the redirects.
      if (this.get('customRedirectUri')) {
        uri = this.get('customRedirectUri');
      } else {
        // Set the redirectUri to the redirect.html that's in the addon's public
        // folder and exposed at /<addon-name>/redirect.html
        // By default torii redirects to the whole ember app, which can be really slow
        // given that it's just 10 lines of js that's needed
        if (_dummyConfigEnvironment['default'].baseURL || _dummyConfigEnvironment['default'].rootURL) {
          var path = _dummyConfigEnvironment['default'].baseURL || _dummyConfigEnvironment['default'].rootURL;
          uri = this._currentBaseUrl() + path + 'torii-provider-arcgis/redirect.html';
        } else {
          uri = this._currentBaseUrl() + '/' + 'torii-provider-arcgis/redirect.html';
        }
      }

      this.set('redirectUri', uri);

      var name = this.get('name');
      var url = this.buildUrl();
      var redirectUri = this.get('redirectUri');
      var responseParams = this.get('responseParams');

      return this.get('popup').open(url, responseParams, options).then(function (authData) {
        var missingResponseParams = [];

        responseParams.forEach(function (param) {
          if (authData[param] === undefined) {
            missingResponseParams.push(param);
          }
        });

        if (missingResponseParams.length) {
          throw new Error('The response from the provider is missing ' + 'these required response params: ' + missingResponseParams.join(', '));
        }
        _ember['default'].debug('session.open is returning with data...');
        return {
          authorizationToken: authData,
          provider: name,
          redirectUri: redirectUri
        };
      });
    }

  });

  exports['default'] = ArcGISOAuth;
});
/**
 * arcgis-oauth.js
 *
 * torii provider that works with ArcGIS.com oauth
 */
define('dummy/users/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    itemsService: _ember['default'].inject.service('items-service'),

    session: _ember['default'].inject.service(),

    queryParams: ['start', 'num', 'q'],

    start: 1,

    q: null,

    query: '*',

    num: 10,

    totalCount: _ember['default'].computed('model.total', function () {
      return this.get('model.total');
    }),

    queryChanged: _ember['default'].observer('q', function () {
      this.set('query', this.get('q'));
    }),

    // portalItemUrl: Ember.computed('session.portal', function () {
    //   let cbu = this.get('session.portal.customBaseUrl');
    //   let urlKey = this.get('session.portal.urlKey');
    //   return `https://${urlKey}.${cbu}/home/item.html?id=`;
    // }),

    actions: {
      filter: function filter() {
        this.set('q', this.get('query'));
        // reset the page
        this.set('start', 1);
        this.transitionToRoute('items.index');
      }

    }
  });
});
define('dummy/users/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    userService: _ember['default'].inject.service(),

    queryParams: {
      'start': { refreshModel: true },
      'num': { refreshModel: true },
      'q': { refreshModel: true }
    },

    lastAgoQuery: '',

    createAgoQuery: function createAgoQuery(query, owner, tags, type, typeKeywords) {
      console.log('Query ' + query + ' owner ' + owner + ' tags ' + tags + ' type ' + type + ' typeKeywords ' + typeKeywords);
      var parts = [];
      if (query) {
        parts.push(query);
      }

      console.log('parts: ' + JSON.stringify(parts));
      var agoQuery = parts.join(' AND ');
      console.log('AGO Query: ' + agoQuery);
      return agoQuery;
    },

    model: function model(params) {
      var agoQuery = this.createAgoQuery(params.q, params.owner, params.tags, params.type, params.typeKeywords);
      var agoParams = {
        q: agoQuery,
        start: params.start,
        num: params.num,
        sortField: 'fullname'
      };

      // if the query changes, reset the paging
      if (this.get('lastAgoQuery') !== agoQuery) {
        this.set('lastAgoQuery', agoQuery);
        // reset paging
        agoParams.start = 1;
      }
      return this.get('userService').search(agoParams);
    }

  });
});
define("dummy/users/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2",
            "loc": {
              "source": null,
              "start": {
                "line": 22,
                "column": 10
              },
              "end": {
                "line": 27,
                "column": 10
              }
            },
            "moduleName": "dummy/users/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
            return morphs;
          },
          statements: [["content", "item.fullName", ["loc", [null, [24, 16], [24, 33]]], 0, 0, 0, 0], ["content", "item.email", ["loc", [null, [25, 16], [25, 30]]], 0, 0, 0, 0]],
          locals: ["item"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 4
            },
            "end": {
              "line": 31,
              "column": 4
            }
          },
          "moduleName": "dummy/users/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("Found ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Items");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("table");
          dom.setAttribute(el1, "class", "table table-striped");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("thead");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Full Name");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("th");
          var el4 = dom.createTextNode("Email");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("tbody");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3, 3]), 1, 1);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["content", "totalCount", ["loc", [null, [15, 16], [15, 30]]], 0, 0, 0, 0], ["block", "each", [["get", "model.users", ["loc", [null, [22, 18], [22, 29]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [22, 10], [27, 19]]]], ["inline", "list-pager", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [30, 25], [30, 30]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [30, 6], [30, 32]]], 0, 0]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 31,
              "column": 4
            },
            "end": {
              "line": 33,
              "column": 4
            }
          },
          "moduleName": "dummy/users/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "alert alert-warning");
          var el2 = dom.createTextNode("No items found for query ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(".");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "q", ["loc", [null, [32, 62], [32, 67]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 36,
            "column": 0
          }
        },
        "moduleName": "dummy/users/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("User Search");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-12");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "totalCount", ["loc", [null, [14, 10], [14, 20]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [14, 4], [33, 11]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-arcgis-portal-services","version":"0.8.8+b62e374f"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map
