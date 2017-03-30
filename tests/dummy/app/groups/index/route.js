import Ember from 'ember';

export default Ember.Route.extend({
  groupsService: Ember.inject.service('groups-service'),
  queryParams: {
    'start': {refreshModel: true},
    'num': {refreshModel: true},
    'q': {refreshModel: true},
    'owner': {refreshModel: true},
    'tags': {refreshModel: true}
  },

  createAgoQuery: function (query, owner, tags) {
    console.log(`Query ${query} owner ${owner} tags ${tags}`);
    let parts = [];
    if (query) {
      parts.push(query);
    }

    if (owner) {
      parts.push('owner:' + owner);
    }

    if (tags) {
      if (tags.indexOf(',')) {
        let ta = tags.split(',');
        ta.map(function (t) {
          parts.push('tags:' + t);
        });
      } else {
        parts.push('tags:' + tags);
      }
    }

    console.log('parts: ' + JSON.stringify(parts));
    let agoQuery = parts.join(' AND ');
    console.log('AGO Query: ' + agoQuery);
    return agoQuery;
  },
  /**
   * Execute the query for groups...
   */
  model (params) {
    let agoQuery = this.createAgoQuery(params.q, params.owner, params.tags);
    let agoParams = {
      q: agoQuery,
      start: params.start,
      num: params.num,
      sortField: 'title'
    };

    return this.get('groupsService').search(agoParams);
    // return this.get('groupsService').search(agoParams, { portalHostname: 'flying6114.mapsdevext.arcgis.com', token: 'wNy4_35Sgj84dIOeqTk0weAhm7oOW-imUP_HG2UriBr5A-ZEZXppQzoXWDR4-SjZ3GpWHQjae0QM4h6X-aKQagmtHHQq5K2y60XiF5IL17Dt8j6d63Z6o4QgC3w7oJKGd-BVT8dBmNFWYCczGdd2NtGJHdPFmynM9mAWNSdm3ANRBIUjDwAWvs_F4qT2fs43' });
  },
  actions: {
    destroy (group) {
      this.get('groupsService').remove(group.id)
        .then(() => {
          // need to transition to the route so we pick up new entries
          Ember.debug('Group Deleted... transitioning route to get new results...');
          Ember.run.later(this, function () {
            this.refresh();
          }, 500);
        });
    }
  }
});
