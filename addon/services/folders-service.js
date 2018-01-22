import Service from '@ember/service';
import serviceMixin from '../mixins/service-mixin';

export default Service.extend(serviceMixin, {

  /**
   * Get users folders
   */
  getUserFolders (username, portalOpts) {
    let urlPath = `/content/users/${username}?f=json&num=1`;
    return this.request(urlPath, {method: 'GET'}, portalOpts)
      .then((response) => {
        return response.folders;
      });
  },

  /**
   * Check if a folder already exists...
   */
  folderExists (folderTitle, username, portalOpts) {
    return this.getUserFolders(username, portalOpts)
      .then((folders) => {
        let match = folders.find((folder) => {
          return folder.title === folderTitle;
        });
        if (match) {
          return true;
        } else {
          return false;
        }
      });
  },

  /**
   * Create a new folder
   */
  create (folderTitle, username, portalOpts) {
    let urlPath = `/content/users/${username}/createFolder?f=json`;
    return this._post(urlPath, {title: folderTitle}, portalOpts)
      .then((response) => {
        return response.folder;
      });
  },

  /**
   * Remove a folder and all it's contents
   */
  remove (folderId, username, portalOpts) {
    let urlPath = `/content/users/${username}/${folderId}/delete?f=json`;
    return this.request(urlPath, { method: 'POST' }, portalOpts);
  },

  /**
   * Shared logic for POST operations
   */
  _post (urlPath, folder, portalOpts) {
    let options = {
      method: 'POST',
      data: folder
    };
    return this.request(urlPath, options, portalOpts);
  }
});
