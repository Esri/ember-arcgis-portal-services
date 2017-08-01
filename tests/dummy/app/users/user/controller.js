import Ember from 'ember';

export default Ember.Controller.extend({
  folderExists: false,
  session: Ember.inject.service('session'),
  folderService: Ember.inject.service('folders-service'),
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
    }
  }
});
