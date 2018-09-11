import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({

  groupsService: service(),

  actions: {
    sendMessage (groupId, messageModel) {
      const groupsService = this.get('groupsService');
      groupsService.sendEmailNotification(groupId, messageModel.subject, messageModel.message)
      .then(resp => {
        this.set('msg', {
          message: 'Message Sent',
          class: 'success'
        });
      })
      .catch(e => {
        this.set('msg', {
          message: 'Message Failed!',
          class: 'danger'
        });
      });
    }
  }
});
