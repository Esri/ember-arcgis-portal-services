import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  /**
   * Get the url for item page
   */
  getItemPageUrl (id) {
    return `${this.get('portalUrl')}/home/item.html?id=${id}`;
  },

  /**
   * Item Search
   */
  search (form) {
    let qs = this.encodeForm(form);
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/search?${qs}&f=json`;
    return this.request(url);
  },

  /**
   * Get the item json
   */
  getById (itemId) {
    let qs = this.encodeForm({});
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/content/items/${itemId}?${qs}&f=json`;
    return this.request(url);
  },

  /**
   * Get the `/data` as json. If nothing is returned by AGO
   * and empty object (`{}`) will be returned by this call
   */
  getDataById (itemId) {
    let qs = this.encodeForm({});
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/content/items/${itemId}/data?${qs}&f=json`;
    return this.request(url);
  },

  /**
   * Update an existing item
   * will update the `/data` if the `.text` value is present
   */
  update (item) {
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/content/users/${item.owner}/items/${item.id}/update?f=json`;
    return this._post(url, item);
  },

  /**
   * Create a new item
   * will create the `/data` if the `.text` value is present
   */
  create (item) {
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/content/users/${item.owner}/addItem?f=json`;
    return this._post(url, item);
  },

  /**
   * Delete an item from AGO
   */
  remove (itemId, owner) {
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/content/users/${owner}/items/${itemId}/delete?f=json`;
    return this._post(url, {});
  },

  /**
   * Upload a resource (file) to an item
   */
  uploadResource (itemId, owner, file) {
    // Valid types
    // const validTypes = ['json', 'xml', 'txt', 'png', 'jpeg', 'gif', 'bmp', 'pdf', 'mp3', 'mp4', 'zip'];
    // TODO: Check type
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/content/users/${owner}/items/${itemId}/addResources?f=json`;
    let options = {};
    options.body = new FormData();
    // stuff the file into the formData...
    options.body.append('file', file);
    options.method = 'POST';
    return this.request(url, options);
  },

  /**
   * Add a resource
   */
  addResource (itemId, owner, name, content) {
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/content/users/${owner}/items/${itemId}/addResources?f=json`;
    let options = {
      method: 'POST',
      data: {
        fileName: name,
        text: content
      }
    };
    return this.request(url, options);
  },

  /**
   * Get the resources associated with an Item
   */
  getResources (itemId) {
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/content/items/${itemId}/resources?f=json`;
    return this.request(url);
  },

  /**
   * Remove a resource
   */
  removeResource (itemId, owner, resource) {
    let portalRestUrl = this.get('portalRestUrl');
    let url = `${portalRestUrl}/content/users/${owner}/items/${itemId}/removeResources?f=json`;
    return this.request(url, {method: 'POST', data: {resource: resource}});
  },

  /**
   * Extra logic to transform the item prior to POSTing it
   */
  _serializeItem (item) {
    let clone = Ember.copy(item, true);
    // Array items need to become comma delim strings
    if (clone.typeKeywords) {
      clone.typeKeywords = item.typeKeywords.join(', ');
    }
    if (clone.tags) {
      clone.tags = item.tags.join(', ');
    }
    // convert .data to .text
    if (clone.data) {
      clone.text = JSON.stringify(clone.data);
      delete clone.data;
    }
    return clone;
  },
  /**
   * Shared logic for POST operations
   */
  _post (url, item) {
    let serializedItem = this._serializeItem(item);

    let options = {
      method: 'POST',
      data: serializedItem
    };
    return this.request(url, options);
  }

});
