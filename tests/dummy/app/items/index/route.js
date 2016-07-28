import Ember from 'ember';

export default Ember.Route.extend({
  itemsService: Ember.inject.service('items-service'),
  queryParams:{
    'start': {refreshModel:true},
    'num': {refreshModel:true},
    'q': {refreshModel:true},
    'owner':{refreshModel:true},
    'tags':{refreshModel:true},
    'type':{refreshModel:true}
  },

  lastAgoQuery:'',

  createAgoQuery: function(query, owner, tags, type){
    console.log(`Query ${query} owner ${owner} tags ${tags} type ${type}` );
    let parts = [];
    if(query){
      parts.push(query);
    }

    if(owner){
      parts.push('owner:' + owner);
    }

    if(tags){
      if(tags.indexOf(',')){
        let ta = tags.split(',');
        ta.map(function(t){
          parts.push('tags:' + t);
        });
      }else{
        parts.push('tags:' + tags);
      }
    }

    if(type){
      parts.push('type:"' + type + '"');
    }
    console.log('parts: ' + JSON.stringify(parts));
    let agoQuery = parts.join(' AND ');
    console.log('AGO Query: ' + agoQuery);
    return agoQuery;
  },


  model(params){
    let agoQuery = this.createAgoQuery(params.q, params.owner, params.tags, params.type);
    let agoParams = {
      q: agoQuery,
      start: params.start,
      num: params.num
    };
    //only if there is no query string, add the bbox
    if(!agoQuery){
      agoParams.bbox = "-180,-90,180,90"
    }
    //if the query changes, reset the paging
    if(this.get('lastAgoQuery') !== agoQuery){
      this.set('lastAgoQuery', agoQuery);
      //reset paging
      agoParams.start = 1;
    }
    return this.get('itemsService').search(agoParams);
  }
});
