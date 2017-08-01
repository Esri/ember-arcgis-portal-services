import Ember from 'ember';

export default Ember.Route.extend({
  userService: Ember.inject.service('user-service'),
  folderService: Ember.inject.service('folders-service'),
  model (params) {
    // get the user info...
    return Ember.RSVP.hashSettled({
      user: this.get('userService').getByName(params.username),
      folders: this.get('folderService').getUserFolders(params.username)
    })
    .then((result) => {
      return {
        user: result.user.value,
        folders: result.folders.value
      };
    });
  }
});
