import { later } from '@ember/runloop';
import { debug } from '@ember/debug';
import { allSettled } from 'rsvp';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  itemsService: service('items-service'),
  queryParams: {
    'start': {refreshModel: true},
    'num': {refreshModel: true},
    'q': {refreshModel: true},
    'owner': {refreshModel: true},
    'tags': {refreshModel: true},
    'typeKeywords': {refreshModel: true},
    'type': {refreshModel: true}
  },

  lastAgoQuery: '',

  createAgoQuery: function (query, owner, tags, type, typeKeywords) {
    console.log(`Query ${query} owner ${owner} tags ${tags} type ${type} typeKeywords ${typeKeywords}`);
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
    let agoQuery = this.createAgoQuery(params.q, params.owner, params.tags, params.type, params.typeKeywords);
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
  },

  /**
   * Delete a page of results...
   */
  deletePage (query, start, ctl, increment) {
    let agoParams = {
      q: query,
      start: start,
      num: 100,
      sortField: 'title'
    };
    return this.get('itemsService').search(agoParams)
    .then((response) => {
      let batchPromises = [];
      response.results.forEach((item) => {
        let prms = this.get('itemsService').remove(item.id, item.owner)
          .then((result) => {
            ctl.incrementProperty('percent', increment);
          });
        batchPromises.push(prms);
      });
      return allSettled(batchPromises);
    });
  },

  actions: {
    /**
     * Nuke the items in the current search
     */
    nuke (total) {
      let ctl = this.controllerFor('items.bulk');
      let increment = (100 / total);
      let agoQuery = this.get('lastAgoQuery');
      let promises = [];
      for (let start = 0; start <= total; start = start + 100) {
        promises.push(this.deletePage(agoQuery, start, ctl, increment));
      }
      return allSettled(promises)
      .then((results) => {
        debug('DONE!');
        later(this, function () {
          this.refresh();
        }, 100);
      });
    },

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
