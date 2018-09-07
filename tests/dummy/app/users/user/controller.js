import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  folderExists: false,
  session: service('session'),
  folderService: service('folders-service'),
  userService: service('user-service'),
  actions: {
    checkFolderExists (folderName) {
      let username = this.get('session.currentUser.username');
      this.get('folderService').folderExists(folderName, username)
      .then((result) => {
        this.set('folderExists', result);
      });
    },

    addFolder (folderName) {
      let username = this.get('session.currentUser.username');
      this.get('folderService').folderExists(folderName, username)
      .then((result) => {
        if (!result) {
          // add the folder...
          return this.get('folderService').create(folderName, username);
        } else {
          alert('Folder Exists!');
          return {};
        }
      })
      .then((result) => {
        this.get('model.folders').pushObject(result.folder);
      });
    },

    removeFolder (folder) {
      return this.get('folderService').remove(folder.id, folder.username)
      .then((result) => {
        // remove it from the model list...
        this.get('model.folders').without(folder);
      });
    },
    removeNotification (notification) {
      this.get('userService').removeNotification(notification.id)
      .then(resp => {
        if (resp.success) {
          this.send('forceRefresh');
        } else {
          throw new Error('oops');
        }
      })
      .catch(_ => { alert('boo'); });
    }
  }
});
