import Ember from 'ember';

export default Ember.Controller.extend({
  groupsService: Ember.inject.service('groups-service'),
  isEditable: false,

  actions: {
    saveGroup () {
      // create the group
      let group = {
        title: this.get('title'),
        description: 'Collaboration group',
        tags: this.get('tags'),
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
    }
  }
});
