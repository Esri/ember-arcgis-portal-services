import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.authenticatedRoute('items', function () {
    this.route('bulk');
    this.route('item', {path: ':id'}, function () {
      this.route('index', {path: '/'});
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

  this.route('users', function () {
    this.route('user', { path: '/:username' });
  });

  this.route('portal');
  this.route('hack');
});

export default Router;
