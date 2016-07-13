import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin,{

  /**
   * Group Search
   */
  search(form){

    let qs = this.encodeForm(form);
    let portalRestUrl = this.getPortalRestUrl();
    //q=title%3A${window.encodeURIComponent(q)}+AND+access%3Apublic+AND+isopendata%3Atrue&sortField=title&num=100&f=json
    let url = `${portalRestUrl}/community/groups?${qs}`;

    return this.request(url);
  },

  /**
   * Get the item json
   */
  getById(groupId){
    let qs = this.encodeForm({});
    let portalRestUrl = this.getPortalRestUrl();
    let url = `${portalRestUrl}/content/groups/${groupId}?${qs}`;
    return this.request(url);
  }
});
