import Ember from 'ember';

export default Ember.Controller.extend({
  itemsService: Ember.inject.service('items-service'),
  queryParams: ['q'],
  q:'',
  query:'*',
  start:1,
  num:100,

  hasResults: Ember.computed('filtered', function(){
    let result = false;
    if(this.get('filtered.results.length')){
      result = true;
    }
    return result;
  }),

  filtered: {},

  queryChanged: Ember.observer('q', function(){
    this.set('query', this.get('q'));
    this.search(this.get('q'));
  }),

  init(){
    this._super(...arguments);
    if(this.get('q') === ''){
      this.search("*");
    }
  },

  search(query){
    let username = this.get('session.currentUser.username');
    //construct the query
    let form = {
      q:`title:${query} AND owner:${username}`, //AND access:public AND isopendata:true
      sortField:'title',

      num:this.get('num'),
      start:this.get('start'),
    };

    this.get('itemsService').search(form)
      .then((response)=> {
        console.info('Response has ' + response.results.length + ' results');
        this.set('filtered', response);
      });
  },

  actions: {
    search(value){
      this.set('q', value);
      this.search(value);
    },
    destroy(item){
      this.get('itemsService').destroy(item.id, item.owner)
      .then(()=>{
        this.search(this.get('query'));
      });
    }
  }
});
