import { hashSettled } from 'rsvp';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  userService: service('user-service'),
  folderService: service('folders-service'),
  model (params) {
    // get the user info...
    return hashSettled({
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
