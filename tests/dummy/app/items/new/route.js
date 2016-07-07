import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    let owner = this.get('session.currentUser.username');
      return {
        "item": {
           "title": "REPLACE ME",
           "type": "Web Mapping Application",
           "owner": owner,
           "typeKeywords": [
             "JavaScript",
             "Map",
             "Mapping Site",
             "Online Map",
             "Ready To Use",
             "selfConfigured",
             "Web Map"
           ],
           "description": "REPLACE ME",
           "tags": ["odpage"],
           "snippet": "Snippet is shorter.",
           "spatialReference": null,
           "accessInformation": null,
           "licenseInfo": "CC-BY-SA",
           "culture": "en-us",
           "properties": null,
           "url": null,
           "access": "private",
           "listed": false,
        },
      "data": {
        "source": "ALLPOWERFULOPENDATABUWHAHAHAAH",
        "folderId": null,
        "values": {
          "place":"content in here"
        }
      }
    };
  }
});
