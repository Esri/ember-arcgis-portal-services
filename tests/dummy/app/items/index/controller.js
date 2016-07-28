import Ember from 'ember';

export default Ember.Controller.extend({
  itemsService: Ember.inject.service('items-service'),
  session: Ember.inject.service(),
  queryParams:['start','num','q', 'owner', 'tags', 'type'],
  start: 1,
  q:null,
  query:'*',
  start:1,
  num:10,
  owner:null,
  tags:null,
  type:null,

  totalCount: Ember.computed('model.total', function(){
    return this.get('model.total');
  }),

  queryChanged: Ember.observer('q', function(){
    this.set('query', this.get('q'));
  }),

  portalItemUrl: Ember.computed('session.portal', function(){
    let cbu = this.get('session.portal.customBaseUrl');
    let urlKey = this.get('session.portal.urlKey');
    return `https://${urlKey}.${cbu}/home/item.html?id=`;
  }),



  actions: {
    filter(){
      this.set('q', this.get('query'));
      //reset the page
      this.set('start',1);
      this.transitionToRoute('items.index');
    },
    destroy(item){
      this.get('itemsService').destroy(item.id, item.owner)
      .then(()=>{
        this.search(this.get('query'));
      });
    }
  }
});
