import { copy } from '@ember/object/internals';
import Service from '@ember/service';
import serviceMixin from '../mixins/service-mixin';
import fetchImageAsBlob from 'ember-arcgis-portal-services/utils/fetch-image-as-blob';
import addOptions from 'ember-arcgis-portal-services/utils/add-options';
import {
  searchItems,
  getItem,
  getItemData,
  updateItem,
  createItemInFolder,
  removeItem,
  protectItem,
  unprotectItem
} from '@esri/arcgis-rest-items';

export default Service.extend(serviceMixin, {

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
    const args = addOptions({ searchForm: form }, portalOpts, this);
    return searchItems(args);
  },

  /**
   * Get the item json
   */
  getById (itemId, portalOpts) {
    const args = addOptions({}, portalOpts, this);
    return getItem(itemId, args);
  },

  /**
   * Get the `/data` as json. If nothing is returned by AGO
   * and empty object (`{}`) will be returned by this call
   */
  getDataById (itemId, portalOpts) {
    const args = addOptions({}, portalOpts, this);
    return getItemData(itemId, args);
  },

  /**
   * Update an existing item
   * will update the `/data` if the `.text` value is present
   */
  update (item, portalOpts) {
    const args = addOptions({ item, owner: item.owner }, portalOpts, this);
    return updateItem(args);
  },

  /**
   * Create a new item in a particular folder
   * will create the `/data` if the `.text` value is present
   */
  createInFolder (item, folderId, portalOpts) {
    const args = addOptions({
      item,
      owner: item.owner,
      folder: folderId
    }, portalOpts, this);

    return createItemInFolder(args);
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
    const args = addOptions({
      id: itemId,
      owner
    }, portalOpts, this);

    return removeItem(args);
  },

  protect (itemId, owner, portalOpts) {
    const args = addOptions({
      id: itemId,
      owner
    }, portalOpts, this);

    return protectItem(args);
  },

  unprotect (itemId, owner, portalOpts) {
    const args = addOptions({
      id: itemId,
      owner
    }, portalOpts, this);

    return unprotectItem(args);
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
   * Upload a blob (image) as the thumbnail
   */
  uploadThumbnail (itemId, owner, blob, filename, portalOpts) {
    const urlPath = `/content/users/${owner}/items/${itemId}/update?f=json`;
    const options = {};
    options.body = new FormData();
    options.body.append('thumbnail', blob, filename);
    options.method = 'POST';
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Fetch an image from a url, and upload it as a resource to an existing item
   */
  addImageResourceFromUrl (itemId, owner, filename, url) {
    return fetchImageAsBlob(url)
      .then((blob) => {
        //  upload as a resources
        return this.uploadResource(itemId, owner, blob, filename);
      });
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
    const urlPath = `/content/items/${itemId}/resources?f=json&num=1000`;
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
   * Remove a relationship
   */
  removeRelationship (username, originItemId, destinationItemId, relationshipType, portalOpts) {
    let urlPath = `/content/users/${username}/deleteRelationship?f=json`;
    return this.request(urlPath, {
      method: 'POST',
      data: {
        originItemId: originItemId,
        destinationItemId: destinationItemId,
        relationshipType: relationshipType
      }
    }, portalOpts);
  },
  /**
   * Get related items
   */
  getRelatedItems (itemId, relationshipType, direction, portalOpts) {
    let urlPath = `/content/items/${itemId}/relatedItems?f=json&relationshipType=${relationshipType}&direction=${direction}`;
    return this.request(urlPath, {
      method: 'GET'
    }, portalOpts);
  },

  /**
   * Extra logic to transform the item prior to POSTing it
   */
  _serializeItem (item) {
    let clone = copy(item, true);
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

    if (clone.serviceProxyParams) {
      clone.serviceProxyParams = JSON.stringify(clone.serviceProxyParams);
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
