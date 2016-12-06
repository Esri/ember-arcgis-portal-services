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
    this.route('group', { path: '/:id' });
    this.route('new');
  });

  this.route('users');

  this.route('portal');
});

export default Router;
