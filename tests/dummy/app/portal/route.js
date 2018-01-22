import { hash } from 'rsvp';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  session: service(),
  portalService: service('portal-service'),

  model () {
    return hash({
      portal: this.get('session.portal'),
      resources: this.get('portalService').getResources()
    });
  }
});
