import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {
  /**
   * Create a new folder
   */
  create (folder, username) {
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/content/users/${username}/createFolder?f=json`;
    return this._post(url, folder);
  },

  /**
   * Shared logic for POST operations
   */
  _post (url, folder) {
    let options = {
      method: 'POST',
      data: folder
    };
    return this.request(url, options);
  }
});
