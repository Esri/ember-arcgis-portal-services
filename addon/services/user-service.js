import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  session: Ember.inject.service('session'),

  /**
   * User Search
   */
  search (form, portalOpts) {
    Ember.deprecate('use .searchPortalUsers(...) or .searchCommunityUsers(...)', false, {id: 'searchDeprecation', until: '10.0.0'});
    if (this.get('session.isAuthenticated') || (portalOpts && portalOpts.portalHostname)) {
      return this.searchPortalUsers(...arguments);
    } else {
      return this.searchCommunityUsers(...arguments);
    }
  },

  searchPortalUsers (form, portalOpts) {
    // all users in the org
    // q is ignored!
    // but you can do things like firstname=
    const qs = this.encodeForm(form);
    let urlPath = `/portals/self/users?${qs}&f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  searchCommunityUsers (form, portalOpts) {
    // all users in the portal
    // q works and you can do q=orgid:...
    // but you get less info than with allUsers
    const qs = this.encodeForm(form);
    let urlPath = `/community/users?${qs}&f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  getByName (username, portalOpts) {
    const urlPath = `/community/users/${username}?f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  /**
   * Update an existing user
   * will update the `/data` if the `.text` value is present
   */
  update (user, portalOpts) {
    const urlPath = `/community/users/${user.username}/update?f=json`;
    return this._post(urlPath, user, portalOpts);
  },

  /**
   * Extra logic to transform the item prior to POSTing it
   */
  _serializeUser (user) {
    let clone = Ember.copy(user, true);

    // groups are ignored
    delete clone.groups;

    // Array items need to become comma delim strings
    if (user.tags && user.tags.join) {
      clone.tags = user.tags.join(', ');
      if (clone.tags === '') {
        // NOTE: you can't currently reset the tags to an empty array
        // despite what the docs say here:
        // http://resources.arcgis.com/en/help/arcgis-rest-api/#/Update_User/02r3000000m0000000/
        clone.tags = 'user';
      }
    }

    return clone;
  },

  /**
   * Shared logic for POST operations
   */
  _post (urlPath, item, portalOpts) {
    const serializedItem = this._serializeUser(item);

    const options = {
      method: 'POST',
      data: serializedItem
    };
    return this.request(urlPath, options, portalOpts);
  }

});
