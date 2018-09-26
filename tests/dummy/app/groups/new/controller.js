import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  groupsService: service('groups-service'),
  isEditable: false,

  actions: {
    saveGroup () {
      // create the group
      let group = {
        title: this.get('title'),
        description: 'Collaboration group',
        tags: this.get('groupsService')._cleanupTags((this.get('tags'))),
        sortField: 'title',
        sortOrder: 'asc',
        access: 'org'
      };

      if (this.get('isEditable')) {
        group.capabilities = 'updateitemcontrol';
        group._edit_privacy = 'on';
        group._edit_contributors = 'on';
      }

      return this.get('groupsService').create(group);
    },
  }
});
