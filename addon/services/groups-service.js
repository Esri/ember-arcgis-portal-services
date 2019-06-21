import { reject, resolve } from 'rsvp';
import { debug } from '@ember/debug';
import Service, { inject as service } from '@ember/service';
import serviceMixin from '../mixins/service-mixin';
import { handleError } from 'ember-arcgis-portal-services/utils/errors';
import { deprecate } from '@ember/application/deprecations';

import {
  searchGroups,
  getGroup,
  getGroupContent,
  getGroupUsers,
  createGroup,
  updateGroup,
  removeGroup,
  protectGroup,
  unprotectGroup,
  createGroupNotification,
  addGroupUsers
} from '@esri/arcgis-rest-portal';

export default Service.extend(serviceMixin, {

  portalService: service(),

  /**
   * Group Search
   */
  search (form, portalOpts) {
    const args = this.addOptions(form, portalOpts);
    return searchGroups(args)
    .catch(handleError);
  },

  /**
   * Get group by id
   */
  getById (id, portalOpts) {
    const args = this.addOptions({}, portalOpts);
    return getGroup(id, args)
    .catch(handleError);
  },

  /**
   * Get an array of groups by their id
   * will not return collaborationInfo or userMembership
   */
  getBulk (ids = [], portalOpts, start = 1, previous = []) {
    const q = ids.reduce((qString, id, i) => {
      if (i + 1 < ids.length) {
        return `${qString}${id} OR `;
      } else {
        return `${qString}${id}`;
      }
    }, '');

    const searchOpts = { q, start };

    return this.search(searchOpts, portalOpts)
      .then(res => {
        const allResults = res.results.concat(previous);
        if (res.nextStart > 0) return this.getBulk(ids, portalOpts, res.nextStart, allResults);
        else return allResults;
      });
  },

  /**
   * Get items in a group, by Group Id
   * TODO: Add Paging
   */
  getItemsById (id, portalOpts) {
    const args = this.addOptions({}, portalOpts);
    return getGroupContent(id, args)
    .catch(handleError);
  },

  /**
   * Create a group
   */
  create (group, portalOpts) {
    let clonedGroup = JSON.parse(JSON.stringify(group));

    // noticed this in the dummy app, hoping its not _too_ common
    if (group.tags && typeof group.tags === 'string') {
      clonedGroup.tags = this._cleanupTags(group.tags);
      debug(`GroupService:create expected tags to be an array of strings, not a single string`);
    }
    const args = this.addOptions({ group: clonedGroup }, portalOpts);
    return createGroup(args)
    .catch(handleError);
  },

  /**
   * Update an existing group
   */
  update (group, portalOpts) {
    let clonedGroup = JSON.parse(JSON.stringify(group));

    if (group.tags && typeof group.tags === 'string') {
      clonedGroup.tags = this._cleanupTags(group.tags);
      debug(`GroupService:create expected tags to be an array of strings, not a single string`);
    }
    const args = this.addOptions({ group: clonedGroup }, portalOpts);

    return updateGroup(args)
    .catch(handleError);
  },

  /**
   * Create a new group or update an existing one if it has an id
   */
  save (group, portalOpts) {
    if (group.id) {
      return this.update(group, portalOpts).then((response) => {
        // normalize response to include group like create() does
        response.group = group;
        response.group.id = response.groupId;
        return response;
      });
    } else {
      return this.create(group, portalOpts);
    }
  },

  /**
   * Get the users that are members of a group
   */
  users (id, portalOpts) {
    const args = this.addOptions({}, portalOpts);
    return getGroupUsers(id, args)
    .catch(handleError);
  },

  /**
   * Add users to a group
   */
  addUsers (id, users, portalOpts) {
    const args = this.addOptions({ id, users }, portalOpts);
    return addGroupUsers(args);
  },

  /**
   * Add admins to a group
   */
  addAdmins (id, admins, portalOpts) {
    const args = this.addOptions({ id, admins }, portalOpts);
    return addGroupUsers(args);
  },

  /**
   * Invites users to group
   * @param {string} id Group id
   * @param {boolean} string Whether to make the invited user an admin
   * @param {number} id The time before the invite expires in minutes (only certain values allowed... defaults to 2 weeks)
   * @param {string[]} users Array of usernames
   * @param {Object} portalOpts Portal options
   */
  inviteUsers (id, users, admin = false, expiration = 20160, portalOpts) {
    const data = {
      users: users.join(','),
      role: admin ? 'group_admin' : 'group_member',
      expiration: expiration
    };
    const urlPath = `/community/groups/${id}/invite?f=json`;
    const options = {
      method: 'POST',
      data: data
    };
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Remove users from a group
   */
  removeUsers (id, users, portalOpts) {
    const data = {
      users: users.join(',')
    };
    const urlPath = `/community/groups/${id}/removeUsers?f=json`;
    const options = {
      method: 'POST',
      data: data
    };
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Reassign ownership of the group
   */
  reassign (/* id, username */) {
    debug('group-service.reassign not implemented!');
  },

  /**
   * Protect a group in AGO from deletion
   */
  protect (id, portalOpts) {
    const args = this.addOptions({ id }, portalOpts);
    return protectGroup(args)
    .catch(handleError);
  },

  /**
   * Unprotect a group in AGO from deletion
   */
  unprotect (id, portalOpts) {
    const args = this.addOptions({ id }, portalOpts);
    return unprotectGroup(args)
    .catch(handleError);
  },

  /**
   * Delete a group from AGO
   */
  remove (id, portalOpts) {
    const args = this.addOptions({ id }, portalOpts);
    return removeGroup(args)
    .catch(handleError);
  },

  /**
   * request for current user to join a group
   */
  join (id, portalOpts) {
    const urlPath = `/community/groups/${id}/join?f=json`;
    const options = {
      method: 'POST'
    };
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * request for current user to leave a group
   */
  leave (id, portalOpts) {
    const urlPath = `/community/groups/${id}/leave?f=json`;
    const options = {
      method: 'POST'
    };
    return this.request(urlPath, options, portalOpts);
  },

  /**
   * Returns a boolean of user's group admin status
   */
  isUserGroupAdmin (id, username, portalOpts) {
    this.getUserMembership(id, username, portalOpts)
      .then((result) => {
        return result === 'admin';
      });
  },
  /**
   * Return the type of group membership of a user
   */
  getUserMembership (id, username, portalOpts) {
    let result = 'nonmember';
    return this.users(id, portalOpts)
      .then((response) => {
        // check if username is in the admin hash...
        if (response.owner === username) {
          result = 'owner';
        }
        if (response.admins.includes(username)) {
          result = 'admin';
        }
        if (response.users.includes(username)) {
          result = 'user';
        }
        return result;
      })
      .catch((err) => {
        debug(`GroupService:getUserMembership ${id} for ${username} errored: ${err}`);
        return result;
      });
  },

  /**
   * Update membership(s) from user to admin or admin to user
   */
  updateUserMemberships (id, users, type, portalOpts) {
    let data = {};
    if (type === 'user') {
      data.admins = users;
    } else if (type === 'admin') {
      data.users = users;
    } else {
      let error = new Error(`Please pass in a type (user or admin) for ${users} when updating memberships`);
      return reject(error);
    }
    const urlPath = `/community/groups/${id}/updateUsers?f=json`;
    const options = {
      method: 'POST',
      data: data
    };
    return this.request(urlPath, options, portalOpts);
  },

  ensureUniqueGroupName (title, step = 0, portalOpts) {
    let combinedName = title;

    if (step) {
      combinedName = `${title} ${step}`;
    }

    return this.doesGroupExist(combinedName, portalOpts)
    .then((result) => {
      // if result === true, then we need to step the name...
      if (result) {
        step++;
        return this.ensureUniqueGroupName(title, step, portalOpts);
      }
      return combinedName;
    });
  },

  /**
   * Check if a group exists with a specific name
   */
  doesGroupExist (title, portalOpts) {
    let orgIdPromise;
    if (portalOpts && portalOpts.portalHostname) {
      orgIdPromise = this.get('portalService').self(portalOpts)
      .then(portalResp => portalResp.id);
    } else {
      orgIdPromise = resolve(this.get('session.portal.id'));
    }

    return orgIdPromise
    .then(orgId => ({ q: `title:"(${title}" accountid:${orgId})` }))
    .then(query => {
      return this.search(query, portalOpts);
    })
    .then(searchResponse => searchResponse.results.length > 0)
    .catch((err) => {
      debug('Error checking if group exists: ' + JSON.stringify(err));
    });
  },

  // notifications api stuff
  // see http://mediawikidev.esri.com/index.php/ArcGIS.com/User_Notifications
  sendGroupMessage (groupId, subject, message, users = [], notificationChannelType = 'email', portalOpts) {
    deprecate('use .sendEmailNotification(...), sendBuiltinNotification(...) or .sendPushNotification(...)', false, {id: 'sendMessageDeprecation', until: '10.0.0'});
    return this._createNotification(groupId, subject, message, users, 'email', null, null, portalOpts);
  },

  sendEmailNotification (groupId, subject, message, users = [], portalOpts) {
    return this._createNotification(groupId, subject, message, users, 'email', null, null, portalOpts);
  },

  sendBuiltinNotification (groupId, subject, message, users = [], portalOpts) {
    return this._createNotification(groupId, subject, message, users, 'builtin', null, null, portalOpts);
  },

  sendPushNotification (groupId, data, users = [], clientId, silent, portalOpts) {
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
    return this._createNotification(groupId, null, data, users, 'push', clientId, silent, portalOpts);
  },

  _createNotification (groupId, subject, message, users = [], notificationChannelType, clientId, silentNotification, portalOpts) {
    // const notifyAll = !users.length;
    const data = {
      id: groupId,
      subject,
      message,
      users: users.join(','),
      notificationChannelType,
      clientId,
      silentNotification
    };

    const args = this.addOptions(data, portalOpts);
    return createGroupNotification(args);
  },

  /**
   * just in case there are instances in the parent app
   * that set tags: "foo, bar, baz"
   * instead of tags: ["foo", "bar", "baz"]
   */
  _cleanupTags (tags) {
    // cast to a cleaned up array of strings
    return tags.split(',').map(tag => tag.trim());
  }
});
