import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin, {
  findLocationAddress (inputString) {
    let geocodeUrl = this.get('geocodeUrl');
    // TODO - the end of the below string needs to be more mature
    let url = `${geocodeUrl}${inputString}&isCollection=false&outSR=4326&f=json&maxlocations=1`;

    // TODO add bbox from config. LA bbox --> &bbox=-118.9138,33.7148,-117.5735,34.3895`;
    return this.request(url);
  }
});
