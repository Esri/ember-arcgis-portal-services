import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  session: Ember.inject.service('session'),

  /**
   * User Search
   */
  search (form) {
    const qs = this.encodeForm(form);
    const portalBaseUrl = this.get('portalRestUrl');
    var url;
    if (this.get('session.isAuthenticated')) {
      url = `${portalBaseUrl}/portals/self/users?${qs}&f=json`;
    } else {
      url = `${portalBaseUrl}/community/users?${qs}&f=json`;
    }
    return this.request(url);
  },

  getByName (username) {
    const portalBaseUrl = this.get('portalRestUrl');
    let url = `${portalBaseUrl}/community/users/${username}?f=json`;
    return this.request(url);
  }

});
