import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  session: Ember.inject.service('session'),

  /**
   * User Search
   */
  search (form, portalOpts = {}) {
    const qs = this.encodeForm(form);
    let urlPath;
    if (this.get('session.isAuthenticated') || portalOpts.portalHostname) {
      urlPath = `/portals/self/users?${qs}&f=json`;
    } else {
      urlPath = `/community/users?${qs}&f=json`;
    }
    return this.request(urlPath, null, portalOpts);
  },

  getByName (username, portalOpts) {
    const urlPath = `/community/users/${username}?f=json`;
    return this.request(urlPath, null, portalOpts);
  },

});
