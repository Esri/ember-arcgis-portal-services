import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {

  /**
   * Get the url for item page
   */
  getItemPageUrl (id, portalOpts) {
    return `${this.getPortalUrl(portalOpts)}/home/item.html?id=${id}`;
  },

  /**
   * Item Search
   */
  search (form, portalOpts) {
    const qs = this.encodeForm(form);
    const urlPath = `/search?${qs}&f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  /**
   * Get the item json
   */
  getById (itemId, portalOpts) {
    const qs = this.encodeForm({});
    const urlPath = `/content/items/${itemId}?${qs}&f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  /**
   * Get the `/data` as json. If nothing is returned by AGO
   * and empty object (`{}`) will be returned by this call
   */
  getDataById (itemId, portalOpts) {
    const qs = this.encodeForm({});
    const urlPath = `/content/items/${itemId}/data?${qs}&f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  /**
   * Update an existing item
   * will update the `/data` if the `.text` value is present
   */
  update (item, portalOpts) {
    const urlPath = `/content/users/${item.owner}/items/${item.id}/update?f=json`;
    return this._post(urlPath, item, portalOpts);
  },

  /**
   * Create a new item in a particular folder
   * will create the `/data` if the `.text` value is present
   */
  createInFolder (item, folderId, portalOpts) {
    let urlPath = `/content/users/${item.owner}/addItem?f=json`;
    if (folderId) {
      urlPath = `/content/users/${item.owner}/${folderId}/addItem?f=json`;
    }
    return this._post(urlPath, item, portalOpts);
  },

  /**
   * Create a new item
   * will create the `/data` if the `.text` value is present
   */
  create (item, portalOpts) {
    // just call createInFolder with null folderId
    return this.createInFolder(item, null, portalOpts);
  },

  /**
   * Delete an item from AGO
   */
  remove (itemId, owner, portalOpts) {
    const urlPath = `/content/users/${owner}/items/${itemId}/delete?f=json`;
    return this._post(urlPath, {}, portalOpts);
  },

  protect (itemId, owner, portalOpts) {
    const urlPath = `/content/users/${owner}/items/${itemId}/protect?f=json`;
    return this._post(urlPath, {}, portalOpts);
  },

  unprotect (itemId, owner, portalOpts) {
    const urlPath = `/content/users/${owner}/items/${itemId}/unprotect?f=json`;
    return this._post(urlPath, {}, portalOpts);
  },

  /**
   * Upload a resource (file) to an item
   */
  uploadResource (itemId, owner, file, filename, replace = false, portalOpts) {
    // Valid types
    // const validTypes = ['json', 'xml', 'txt', 'png', 'jpeg', 'gif', 'bmp', 'pdf', 'mp3', 'mp4', 'zip'];
    // TODO: Check type
    let action = 'addResources';
    if (replace) {
      action = 'updateResources';
    }
    const urlPath = `/content/users/${owner}/items/${itemId}/${action}?f=json`;
    const options = {};
    options.body = new FormData();
    // stuff the file into the formData...
    if (filename) {
      options.body.append('file', file, filename);
    } else {
      options.body.append('file', file);
    }
    options.method = 'POST';
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Add a resource
   */
  addResource (itemId, owner, name, content, portalOpts) {
    const urlPath = `/content/users/${owner}/items/${itemId}/addResources?f=json`;
    const options = {
      method: 'POST',
      data: {
        fileName: name,
        text: content
      }
    };
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Update a resource
   */
  updateResource (itemId, owner, name, content, portalOpts) {
    const urlPath = `/content/users/${owner}/items/${itemId}/updateResources?f=json`;
    const options = {
      method: 'POST',
      data: {
        fileName: name,
        text: content
      }
    };
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Get the resources associated with an Item
   */
  getResources (itemId, portalOpts) {
    const urlPath = `/content/items/${itemId}/resources?f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  /**
   * Remove a resource
   */
  removeResource (itemId, owner, resource, portalOpts) {
    const urlPath = `/content/users/${owner}/items/${itemId}/removeResources?f=json`;
    return this.request(urlPath, {
      method: 'POST',
      data: {
        resource: resource
      }
    }, portalOpts);
  },

  /**
   * Add a relationship between two items
   */
  addRelationship (username, originItemId, destinationItemId, relationshipType, portalOpts) {
    let urlPath = `/content/users/${username}/addRelationship?f=json`;
    return this.request(urlPath, {
      method: 'POST',
      data: {
        relationshipType: relationshipType,
        originItemId: originItemId,
        destinationItemId: destinationItemId
      }
    }, portalOpts);
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
    // Convert properties to a string
    if (clone.properties) {
      clone.properties = JSON.stringify(clone.properties);
    }
    return clone;
  },
  /**
   * Shared logic for POST operations
   */
  _post (urlPath, item, portalOpts) {
    const serializedItem = this._serializeItem(item);

    const options = {
      method: 'POST',
      data: serializedItem
    };
    return this.request(urlPath, options, portalOpts);
  }

});
