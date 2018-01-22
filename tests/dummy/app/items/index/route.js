import { later } from '@ember/runloop';
import { debug } from '@ember/debug';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  itemsService: service('items-service'),
  queryParams: {
    'start': {refreshModel: true},
    'num': {refreshModel: true},
    'q': {refreshModel: true},
    'properties': {refreshModel: true},
    'owner': {refreshModel: true},
    'tags': {refreshModel: true},
    'typeKeywords': {refreshModel: true},
    'type': {refreshModel: true}
  },

  lastAgoQuery: '',

  createAgoQuery: function (query, owner, tags, type, typeKeywords, properties) {
    console.log(`Query ${query} owner ${owner} tags ${tags} type ${type} typeKeywords ${typeKeywords}`);
    let parts = [];
    if (query) {
      parts.push(query);
    }

    if (owner) {
      parts.push('owner:' + owner);
    }

    if (properties) {
      parts.push('properties:' + properties);
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

    if (typeKeywords) {
      if (typeKeywords.indexOf(',')) {
        let ta = typeKeywords.split(',');
        ta.map(function (t) {
          parts.push('typekeywords:' + t);
        });
      } else {
        parts.push('typekeywords:' + typeKeywords);
      }
    }

    if (type) {
      parts.push('type:"' + type + '"');
    }

    console.log('parts: ' + JSON.stringify(parts));
    let agoQuery = parts.join(' AND ');
    console.log('AGO Query: ' + agoQuery);
    return agoQuery;
  },

  model (params) {
    let agoQuery = this.createAgoQuery(params.q, params.owner, params.tags, params.type, params.typeKeywords, params.properties);
    let agoParams = {
      q: agoQuery,
      start: params.start,
      num: params.num,
      sortField: 'title'
    };
    // only if there is no query string, add the bbox
    if (!agoQuery) {
      agoParams.bbox = '-180,-90,180,90';
    }
    // if the query changes, reset the paging
    if (this.get('lastAgoQuery') !== agoQuery) {
      this.set('lastAgoQuery', agoQuery);
      // reset paging
      agoParams.start = 1;
    }
    return this.get('itemsService').search(agoParams);
    // return this.get('itemsService').search(agoParams, { portalHostname: 'flying6114.mapsdevext.arcgis.com', token: 'wNy4_35Sgj84dIOeqTk0weAhm7oOW-imUP_HG2UriBr5A-ZEZXppQzoXWDR4-SjZ3GpWHQjae0QM4h6X-aKQagmtHHQq5K2y60XiF5IL17Dt8j6d63Z6o4QgC3w7oJKGd-BVT8dBmNFWYCczGdd2NtGJHdPFmynM9mAWNSdm3ANRBIUjDwAWvs_F4qT2fs43' });
  },

  actions: {
    destroy (item) {
      this.get('itemsService').remove(item.id, item.owner)
      .then(() => {
        // need to transition to the route so we pick up new entries
        debug('Item Deleted... transitioning route to get new results...');
        later(this, function () {
          this.refresh();
        }, 100);
      });
    }
  }
});
