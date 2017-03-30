import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  session: Ember.inject.service('session'),

  /**
   * User Search
   */
  search (form, portalOpts) {
    const qs = this.encodeForm(form);
    const portalRestUrl = this.getPortalRestUrl(portalOpts);
    var url;
    if (this.get('session.isAuthenticated')) {
      url = `${portalRestUrl}/portals/self/users?${qs}&f=json`;
    } else {
      url = `${portalRestUrl}/community/users?${qs}&f=json`;
    }
    return this.request(url, null, portalOpts);
  },

  getByName (username, portalOpts) {
    const portalRestUrl = this.getPortalRestUrl(portalOpts);
    let url = `${portalRestUrl}/community/users/${username}?f=json`;
    return this.request(url, null, portalOpts);
  },

});
