import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.authenticatedRoute('items', function () {
    this.route('item', {path: ':id'}, function () {
      this.route('index', {path: '/'});
      this.route('edit');
    });
    this.route('new');
  });
  this.authenticatedRoute('groups');
  this.route('signin');
});

export default Router;
