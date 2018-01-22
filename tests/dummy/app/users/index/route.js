import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({

  userService: service(),

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

    let portalOpts;
    if (params.portalHostname) {
      portalOpts.portalHostname = params.portalHostname;
    }
    if (params.token) {
      portalOpts.token = params.token;
    }

    return this.get('userService').searchPortalUsers(agoParams, portalOpts);
  },

});
