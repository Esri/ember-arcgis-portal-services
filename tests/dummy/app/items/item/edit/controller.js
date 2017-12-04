import Ember from 'ember';

export default Ember.Controller.extend({
  itemsService: Ember.inject.service('items-service'),

  sharingService: Ember.inject.service('sharing-service'),

  itemJson: Ember.computed('model.item', function () {
    return this.get('model.item');
  }),

  dataJson: Ember.computed('model.data', function () {
    return this.get('model.data');
  }),

  thumbnailUrl: Ember.computed('model.item.thumbnail', function () {
    let portalHostname = this.get('session.portalHostName');
    let item = this.get('model.item');
    let url = `https://${portalHostname}/sharing/rest/content/items/${item.id}/info/${item.thumbnail}?w=400`;
    if (item.access !== 'public') {
      url = url + '&token=' + this.get('session.token');
    }
    return url;
  }),

  actions: {
    uploadThumbnail: function (files) {
      let file = files[0];
      let item = this.get('model.item');
      this.get('itemsService').uploadThumbnail(item.id, item.owner, file, file.name)
      .then((response) => {
        this.set('model.item.thumbnail', `thumbnail/${file.name}`);
      });
    },
    shareToGroup: function () {
      if (this.get('groupId')) {
        this.set('sharingMessage', 'Making sharing request');
        const item = this.get('model.item');
        this.get('sharingService').shareWithGroup(item.owner, item.id, this.get('groupId'), true)
        .then((result) => {
          this.set('sharingMessage', 'Successful sharing.');
        })
        .catch((err) => {
          this.set('sharingMessage', err);
        });
      } else {
        this.set('sharingMessage', 'No Group Id Provided!');
      }
    },
    protectItem: function () {
      const itemId = this.get('model.item.id');
      const owner = this.get('model.item.owner');
      return this.get('itemsService').protect(itemId, owner)
      .then((result) => {
        if (result.success) {
          this.set('model.item.protected', true);
        } else {
          Ember.debug('Protect call failed: ' + JSON.stringify(result));
        }
      });
    },

    unprotectItem: function () {
      const itemId = this.get('model.item.id');
      const owner = this.get('model.item.owner');
      return this.get('itemsService').unprotect(itemId, owner)
      .then((result) => {
        if (result.success) {
          this.set('model.item.protected', false);
        } else {
          Ember.debug('Unprotect call failed: ' + JSON.stringify(result));
        }
      });
    },

    save: function () {
      // get the item
      let item = this.get('itemJson');

      if (this.get('dataJson')) {
        item.text = JSON.stringify(this.get('dataJson'));
      }

      this.get('itemsService').update(item)
        .then((resp) => {
          this.transitionToRoute('items.index');
        });
    },
    cancel: function () {
      // return to the item list
      this.transitionToRoute('items.index');
    },
    removeResource (resource) {
      const item = this.get('model.item');
      return this.get('itemsService').removeResource(item.id, item.owner, resource.resource);
    },
    uploadFile (files, thing) {
      const file = files[0];
      const item = this.get('model.item');
      return this.get('itemsService').uploadResource(item.id, item.owner, file);
    },
    sendJson (jsonObj) {
      const item = this.get('model.item');
      return this.get('itemsService').addResource(item.id, item.owner, 'theme.json', JSON.stringify(jsonObj));
    },
    sendText (text, fileName) {
      const item = this.get('model.item');
      return this.get('itemsService').addResource(item.id, item.owner, fileName, text);
    },
    fetchResources () {
      const item = this.get('model.item');
      return this.get('itemsService').getResources(item.id);
    },

    shareWithEveryone () {
      let item = this.get('model.item');
      this.get('sharingService').setAccess(item.owner, item.id, 'everyone')
      .then((result) => {
        this.set('model.item.access', 'everyone');
      });
    },
    shareWithOrg () {
      let item = this.get('model.item');
      this.get('sharingService').setAccess(item.owner, item.id, 'org')
      .then((result) => {
        this.set('model.item.access', 'org');
      });
    },
    shareWithGroups () {
      let item = this.get('model.item');
      let data = {
        owner: item.owner,
        items: [item.id].join(','),
        everyone: false,
        org: false,
        confirmItemControl: true,
        f: 'json'
      };
      this.get('sharingService').shareItem(data)
      .then((result) => {
        this.set('model.item.access', 'shared');
      });
    },

  }

});
