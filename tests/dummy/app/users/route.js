import Ember from 'ember';

export default Ember.Route.extend({

  userService: Ember.inject.service(),

  queryParams: {
    'start': {refreshModel: true},
    'num': {refreshModel: true},
    'q': {refreshModel: true},
    portalHostname: { refreshModel: true },
    token: { refreshModel: true }
  },

  lastAgoQuery: '',

  createAgoQuery: function (query, owner, tags, type, typeKeywords) {
    console.log(`Query ${query} owner ${owner} tags ${tags} type ${type} typeKeywords ${typeKeywords}`);
    let parts = [];
    if (query) {
      parts.push(query);
    }

    console.log('parts: ' + JSON.stringify(parts));
    let agoQuery = parts.join(' AND ');
    console.log('AGO Query: ' + agoQuery);
    return agoQuery;
  },

  model (params) {
    let agoQuery = this.createAgoQuery(params.q, params.owner, params.tags, params.type, params.typeKeywords);
    let agoParams = {
      q: agoQuery,
      start: params.start,
      num: params.num,
      sortField: 'fullname'
    };

    // if the query changes, reset the paging
    if (this.get('lastAgoQuery') !== agoQuery) {
      this.set('lastAgoQuery', agoQuery);
      // reset paging
      agoParams.start = 1;
    }

    const portalOpts = {
      portalHostname: params.portalHostname,
      token: params.token
    };

    return this.get('userService').search(agoParams, portalOpts);
    // return this.get('userService').search(agoParams, { portalHostname: 'flying6114.mapsdevext.arcgis.com', token: 'wNy4_35Sgj84dIOeqTk0weAhm7oOW-imUP_HG2UriBr5A-ZEZXppQzoXWDR4-SjZ3GpWHQjae0QM4h6X-aKQagmtHHQq5K2y60XiF5IL17Dt8j6d63Z6o4QgC3w7oJKGd-BVT8dBmNFWYCczGdd2NtGJHdPFmynM9mAWNSdm3ANRBIUjDwAWvs_F4qT2fs43' });
  },

});
