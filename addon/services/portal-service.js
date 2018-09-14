import Service, { inject as service } from '@ember/service';
import serviceMixin from '../mixins/service-mixin';
import { deprecate } from '@ember/application/deprecations';
import fetch from 'fetch';

export default Service.extend(serviceMixin, {
  session: service('session'),

  getById (id, portalOpts) {
    const urlPath = `/portals/${id}?f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  self (portalOpts) {
    const urlPath = `/portals/self?f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  /**
   * Update the portal
   */
  update (portal, portalOpts) {
    const urlPath = `/portals/${portal.id || 'self'}/update?f=json`;
    const serializedPortal = this._serializePortal(portal);
    return this._post(urlPath, serializedPortal, portalOpts);
  },

  /**
   * Serialize Portal
   * There is not much we can actually update on this object, so
   * we strip it down A LOT.
   */
  _serializePortal (portal) {
    const allowedProperties = [ 'access', 'creditAssignments', 'name', 'urlKey' ];

    let result = allowedProperties.reduce((acc, property) => {
      if (portal.hasOwnProperty(property)) {
        acc[property] = portal[property];
      }
      return acc;
    }, {});

    if (portal.portalProperties) {
      result.portalProperties = JSON.stringify(portal.portalProperties);
    }

    return result;
  },

  /**
   * Shared logic for POST operations
   */
  _post (urlPath, obj, portalOpts) {
    const options = {
      method: 'POST',
      data: obj
    };
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Upload a resource (file) to an item
   */
  uploadResource (file, key = null, portalOpts) {
    const urlPath = `/portals/self/addResource?f=json`;
    let options = {};
    options.body = new FormData();
    // stuff the file into the formData...
    options.body.append('file', file);
    options.body.append('text', '');
    if (key) {
      options.body.append('key', key);
    } else {
      options.body.append('key', file.name);
    }
    options.method = 'POST';

    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Fetch an image from a url, and upload it as a resource to an existing item
   */
  addImageResourceFromUrl (url, filename) {
    // get the image from the url...
    return fetch(url)
      .then((response) => {
        // get the blob...
        return response.blob();
      })
      .then((blob) => {
        //  upload as a resource
        return this.uploadResource(blob, filename);
      });
  },

  /**
   * Add a resource
   */
  addResource (name, content, portalOpts) {
    const urlPath = `/portals/self/addResource?f=json`;
    const options = {
      method: 'POST',
      data: {
        key: name,
        text: content
      }
    };
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Add an approved app to the portal.
   * This is used to create app launcher short-cuts
   */
  addApprovedApp (itemId, properties, portalOpts) {
    const urlPath = `/portals/self/addApprovedApp?f=json`;
    const options = {
      method: 'POST',
      data: {
        itemId: itemId,
        appProperties: JSON.stringify(properties),
      }
    };
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Get the list of approved apps
   */
  getApprovedApps (portalOpts) {
    const urlPath = `/portals/self/approvedApps?returnAllApps=true&f=json`;
    const options = {
      method: 'GET'
    };
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Get the resources associated with an Item
   */
  getResources (portalOpts) {
    const urlPath = `/portals/self/resources?f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  /**
   * Remove a resource
   */
  removeResource (resourceName, portalOpts) {
    const urlPath = `/portals/self/removeresource?f=json`;
    return this.request(urlPath, { method: 'POST', data: { key: resourceName } }, portalOpts);
  },

  /**
  * Paged access to users in a portal
  */
  users (portalId, start = 1, num = 100, portalOpts) {
    const urlPath = `/portals/${portalId}/users/?f=json&start=${start}&num=${num}`;
    return this.request(urlPath, null, portalOpts);
  },

  configureSocialProviders (opts, portalOpts) {
    /*
      portalOpts: {
        signUpMode: Automatic | ???
        providers: facebook,google
        level: 1 | 2
        role (optional): org_user (default) | org_publisher | id of custom role
        userCreditAssignment (optional): <number>
        groups (optional): groupId1, groupId2, ...
      }
    */
    const urlPath = `/portals/self/socialProviders/configure?f=json`;
    return this._post(urlPath, opts, portalOpts);
  },

  checkUsername (username, portalOpts) {
    const urlPath = `/community/checkUsernames?f=json&usernames=${username}`;
    return this.request(urlPath, null, portalOpts);
  },

  checkUrlKey (urlKey, portalOpts) {
    const urlPath = `/portals/isUrlKeyAvailable?urlKey=${urlKey}&f=json`;
    return this.request(urlPath, null, portalOpts);
  },

  activate (opts, portalOpts) {
    const urlPath = `/portals/activate?f=json`;
    return this._post(urlPath, opts, portalOpts);
  },

  // notifications api stuff
  // see http://mediawikidev.esri.com/index.php/ArcGIS.com/User_Notifications
  sendMessage (subject, message, users = [], notificationChannelType = 'email', portalOpts) {
    deprecate('use .sendEmailNotification(...), sendBuiltinNotification(...) or .sendPushNotification(...)', false, {id: 'sendMessageDeprecation', until: '10.0.0'});
    return this._createNotification(subject, message, users, 'email', null, null, portalOpts);
  },

  sendEmailNotification (subject, message, users = [], portalOpts) {
    return this._createNotification(subject, message, users, 'email', null, null, portalOpts);
  },

  sendBuiltinNotification (subject, message, users = [], portalOpts) {
    return this._createNotification(subject, message, users, 'builtin', null, null, portalOpts);
  },

  sendPushNotification (data, users = [], clientId, silent, portalOpts) {
    // data is an object that will be passed as the `message` parameter
    // {
    //   "title": "title",
    //   "message" : "message",
    //   "title-loc-key" : "title-loc-key",
    //   "title-loc-args" : [arg1,arg2,...],
    //   "loc-key": "loc-key",
    //   "loc-args":[arg1, arg2, arg3...],
    //   "category":"category",
    //   "badge": badge,
    //   "sound": "sound",
    //   "customProperties" :{
    //     "key":"value",
    //     "key1":"value1",
    //       ....
    //   }
    // }
    return this._createNotification(null, data, users, 'push', clientId, silent, portalOpts);
  },

  _createNotification (subject, message, users = [], notificationChannelType, clientId, silentNotification, portalOpts) {
    const opts = {
      subject,
      message,
      users: users.join(','),
      notificationChannelType,
      clientId,
      silentNotification
    };
    const urlPath = `/portals/self/createNotification?f=json`;
    return this._post(urlPath, opts, portalOpts);
  }

});
