import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  /**
   * Group Search
   */
  search (form) {
    let qs = this.encodeForm(form);
    const portalBaseUrl = this.get('portalRestUrl');
    let url = `${portalBaseUrl}/community/groups?${qs}`;
    return this.request(url);
  },

  getItemsById (id) {
    const portalBaseUrl = this.get('portalRestUrl');
    const url = `${portalBaseUrl}/content/groups/${id}?f=json`;
    return this.request(url);
  },


  create (group){
    const portalBaseUrl = this.get('portalRestUrl');
    let url = `${portalBaseUrl}/community/createGroup?f=json`;
    let options = {
      method:'POST',
      data: group
    };
    return this.request(url, options);
  },

  users(id){
    const portalBaseUrl = this.get('portalRestUrl');
    const url = `${portalBaseUrl}/community/groups/${id}/users?f=json`;
    return this.request(url);
  },

  addUsers(id, users){
    let data = {
      users: users.join(',')
    };
    const portalBaseUrl = this.get('portalRestUrl');
    let url = `${portalBaseUrl}/community/groups/${id}/addUsers?f=json`;
    let options = {
      method:'POST',
      data: data
    };
    return this.request(url, options);
  },

  reassign(id, username){
    Ember.debug('group-service.reassign not implemented!');
  },


});
