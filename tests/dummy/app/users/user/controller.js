import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  folderExists: false,
  session: service('session'),
  folderService: service('folders-service'),
  userService: service('user-service'),
  portalService: service('portal-service'),
  notificationType: 'email',
  selectedInvitationJson: computed('selectedInvitation', function () {
    const selectedInvitation = this.get('selectedInvitation');
    if (selectedInvitation) {
      return JSON.stringify(selectedInvitation, null, 4);
    }
  }),
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
        this.send('forceRefresh');
      })
      .catch(_ => { alert('boo'); });
    },
    sendNotification (subject, message, notificationType) {
      const methodNameHash = {
        email: 'sendEmailNotification',
        builtin: 'sendBuiltinNotification',
        push: 'sendPushNotification'
      };
      const methodName = methodNameHash[notificationType];

      const args = [message, [this.get('session.currentUser.username')]];
      if (notificationType === 'push') {
        // TODO: add clientId!
      } else {
        args.unshift(subject);
      }

      this.get('portalService')[methodName](...args)
      .then(resp => {
        this.setProperties({ notificationSubject: undefined, notificationMessage: undefined, notificationType: 'email' });
        this.send('forceRefresh');
      })
      .catch(_ => alert('boo'));
    },
    acceptInvitation (invitation) {
      this.get('userService').acceptInvitation(invitation.id)
      .then(resp => {
        this.send('forceRefresh');
      })
      .catch(_ => { alert('boo'); });
    },
    declineInvitation (invitation) {
      this.get('userService').declineInvitation(invitation.id)
      .then(resp => {
        this.send('forceRefresh');
      })
      .catch(_ => { alert('boo'); });
    },
    showInvitationDetails (invitation) {
      this.get('userService').getInvitationById(invitation.id)
      .then(invitationDetail => {
        this.set('selectedInvitation', invitationDetail);
      });
    }
  }
});
