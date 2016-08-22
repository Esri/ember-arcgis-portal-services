import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin,{

  /**
   * Item Search
   */
  search(form){
    let qs = this.encodeForm(form);
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/search?${qs}`;
    return this.request(url);
  },

  /**
   * Get the item json
   */
  getById(itemId){
    let qs = this.encodeForm({});
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/content/items/${itemId}?${qs}`;
    return this.request(url);
  },

  /**
   * Get the `/data` as json. If nothing is returned by AGO
   * and empty object (`{}`) will be returned by this call
   */
  getDataById(itemId){
    let qs = this.encodeForm({});
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/content/items/${itemId}/data?${qs}`;
    return this.request(url);
  },

  /**
   * Update an existing item
   * will update the `/data` if the `.text` value is present
   */
  update(item){
    console.log('Items Service got update for ' + item.title);
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/content/users/${item.owner}/items/${item.id}/update?f=json`;
    return this._post(url, item);
  },

  /**
   * Create a new item
   * will create the `/data` if the `.text` value is present
   */
  create(item){
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/content/users/${item.owner}/addItem?f=json`;
    return this._post(url, item);
  },

  /**
   * Delete an item from AGO
   */
  destroy(itemId, owner){
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/content/users/${owner}/items/${itemId}/delete?f=json`;
    return this._post(url, {});
  },

  /**
   * Extra logic to transform the item prior to POSTing it
   */
  _serializeItem(item){
    let clone = Ember.copy(item, true);
    //Array items need to become comma delim strings
    if(clone.typeKeywords){
      clone.typeKeywords = item.typeKeywords.join(', ');
    }
    if(clone.tags){
      clone.tags = item.tags.join(', ');
    }
    //convert .data to .text
    if(clone.data){
      clone.text = JSON.stringify(clone.data);
      delete clone.data;
    }
    return clone;
  },
  /**
   * Shared logic for POST operations
   */
  _post(url, item){

    let serializedItem = this._serializeItem(item);

    let options = {
      method:'POST',
      data: serializedItem
    };
    return this.request(url, options);
  },

});
