import { hash } from 'rsvp';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({

  groupsService: service(),

  model: function (params) {
    this.set('groupId', params.id);
    return hash({
      users: this.get('groupsService').users(params.id),
      items: this.get('groupsService').getItemsById(params.id),
      groupId: params.id,
      messageModel: {
        subject: '',
        message: ''
      }
    });
  },

  actions: {
    remove (user) {
      this.get('groupsService').removeUsers(this.get('groupId'), [user])
      .then((resp) => {
        this.refresh();
      }, (err) => {
        alert(err);
      });
    }
  }
});
