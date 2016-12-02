import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  portalService: Ember.inject.service('portal-service'),

  model () {
    return Ember.RSVP.hash({
      portal: this.get('session.portal'),
      resources: this.get('portalService').getResources()
    });
  }
});
