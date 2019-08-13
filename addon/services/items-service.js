import Service from '@ember/service';
import serviceMixin from '../mixins/service-mixin';
import fetchImageAsBlob from 'ember-arcgis-portal-services/utils/fetch-image-as-blob';
import { handleError } from 'ember-arcgis-portal-services/utils/errors';
import {
  searchItems,
  getItem,
  getItemData,
  updateItem,
  createItemInFolder,
  moveItem,
  removeItem,
  protectItem,
  unprotectItem
} from '@esri/arcgis-rest-portal';

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
    const args = this.addOptions(form, portalOpts);
    return searchItems(args)
    .catch(handleError);
  },

  /**
   * Get the item json
   */
  getById (itemId, portalOpts) {
    const args = this.addOptions({}, portalOpts);
    return getItem(itemId, args)
    .catch(handleError);
  },

  /**
   * Get the `/data` as json. If nothing is returned by AGO
   * and empty object (`{}`) will be returned by this call
   */
  getDataById (itemId, portalOpts) {
    const args = this.addOptions({}, portalOpts);
    return getItemData(itemId, args)
    .catch(handleError);
  },

  /**
   * Get the `/groups` as json
   */
  getGroupsById (itemId, portalOpts) {
    const urlPath = `/content/items/${itemId}/groups?f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  /**
   * Update an existing item
   * will update the `/data` if the `.text` value is present
   */
  update (item, portalOpts) {
    const args = this.addOptions({ item, owner: item.owner }, portalOpts);
    return updateItem(args)
    .catch(handleError);
  },

  /**
   * Create a new item in a particular folder
   * will create the `/data` if the `.text` value is present
   */
  createInFolder (item, folderId, portalOpts) {
    const args = this.addOptions({
      item,
      owner: item.owner,
      folderId
    }, portalOpts);

    return createItemInFolder(args)
    .catch(handleError);
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
   * Move a item to a folder
   */
  move (itemId, folderId, portalOpts) {
    const args = this.addOptions({ itemId, folderId }, portalOpts);

    return moveItem(args)
    .catch(handleError);
  },

  /**
   * Delete an item from AGO
   */
  remove (itemId, owner, portalOpts) {
    const args = this.addOptions({
      id: itemId,
      owner
    }, portalOpts);

    return removeItem(args)
    .catch(handleError);
  },

  protect (itemId, owner, portalOpts) {
    const args = this.addOptions({
      id: itemId,
      owner
    }, portalOpts);

    return protectItem(args)
    .catch(handleError);
  },

  unprotect (itemId, owner, portalOpts) {
    const args = this.addOptions({
      id: itemId,
      owner
    }, portalOpts);

    return unprotectItem(args)
    .catch(handleError);
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
   * Export item
   */
  export (username, itemId, {title, exportFormat}, portalOpts) {
    let urlPath = `/content/users/${username}/export`;
    return this.request(urlPath, {
      method: 'POST',
      data: {
        itemId,
        title,
        exportFormat,
        f: 'json'
      }
    }, portalOpts)
    .then(job => {
      let jobStatusUrl = `/content/users/${username}/items/${job.exportItemId}/status`
      job.getStatus = () => {
        return this.request(jobStatusUrl, {
          method: 'POST',
          data: {
            jobId: job.jobId,
            jobType: 'export',
            f: 'json'
          }
        }, portalOpts);
      }
      return job
    });
  }
});
