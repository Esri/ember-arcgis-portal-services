import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {


  /**
   * User Search
   */
  search (form) {
    let qs = this.encodeForm(form);
    const portalBaseUrl = this.get('portalRestUrl');
    let url = `${portalBaseUrl}/community/users?${qs}&f=json`;
    return this.request(url);
  },

  getByName (username) {
    const portalBaseUrl = this.get('portalRestUrl');
    let url = `${portalBaseUrl}/community/users/${username}?f=json`;
    return this.request(url);
  }

});
