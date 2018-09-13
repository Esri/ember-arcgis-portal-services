import { hashSettled } from 'rsvp';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  userService: service('user-service'),
  folderService: service('folders-service'),
  model (params) {
    // get the user info...
    const userService = this.get('userService');
    return hashSettled({
      user: userService.getByName(params.username),
      folders: this.get('folderService').getUserFolders(params.username),
      notifications: userService.getNotifications()
    });
  },
  setupController (controller, model) {
    controller.set('model', {
      user: model.user.value,
      folders: model.folders.value,
      notifications: model.notifications.value.notifications
    });
  },
  actions: {
    forceRefresh () {
      this.refresh();
    }
  }

});
