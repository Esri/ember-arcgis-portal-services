import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {


  /**
   * User Search
   */
  search (form) {
    let qs = this.encodeForm(form);
    const portalBaseUrl = this.get('portalRestUrl');
    let url = `${portalBaseUrl}/community/users?${qs}`;
    return this.request(url);
  },

  getByName (username) {
    const portalBaseUrl = this.get('portalRestUrl');
    let url = `${portalBaseUrl}/community/${username}`;
    return this.request(url);
  }

});
