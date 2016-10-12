import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  isSuccess (status, headers, payload) {
    let isSuccess = this._super(...arguments);
    // handle case where ArcGIS REST service returns 200
    // but response body contains an error
    if (isSuccess && payload.error) {
      return false;
    }
    return isSuccess;
  }
});
