import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  /**
   * Group Search
   */
  search (form) {
    let qs = this.encodeForm(form);
    const portalBaseUrl = this.get('portalRestUrl');
    // q=title%3A${window.encodeURIComponent(q)}+AND+access%3Apublic+AND+isopendata%3Atrue&sortField=title&num=100&f=json
    let url = `${portalBaseUrl}/community/groups?${qs}`;
    return this.request(url);
  },

  getItemsById (id) {
    const portalBaseUrl = this.get('portalRestUrl');
    const url = `${portalBaseUrl}/content/groups/${id}?f=json`;
    return this.request(url);
  }

});
