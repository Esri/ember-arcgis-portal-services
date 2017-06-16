/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // portalBaseUrl: 'https://qaext.arcgis.com',
      // arcgisPortal: {
      //   domain: 'arcgis.com',
      //   env: 'qaext',
      //   maps: 'mapsqa',
      // },
    },
    torii: {
      sessionServiceName: 'session',
      providers: {
        'arcgis-oauth-bearer': {
          apiKey: 'x3u9xkfpYyYbJu08', // production
          // apiKey: 'VpiQwiuWl7KMTGys', // qaext
          // portalUrl: 'https://qaext.arcgis.com'
          portalUrl: 'https://www.arcgis.com'
        }
      }
    }
  };

  // ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = ENV.APP.portalBaseUrl;

  if (environment === 'development') {
    const env = 'dev';

    // PROD
    ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'x3u9xkfpYyYbJu08';
    ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = `https://www.arcgis.com`;

    // ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'ifq94vTWyyZclwNz';
    // ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = `https://${env}ext.arcgis.com`;

    // if you need to test against QA API/data:
    // const env = 'qa';
    // ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'VpiQwiuWl7KMTGys';
  }

  if (environment === 'surge') {
    ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'dis8Iu8I0bACZOba';
    ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = 'https://devext.arcgis.com';
  }

  if (environment === 'github') {
    ENV.locationType = 'hash';
    ENV.rootURL = '/ember-arcgis-portal-services/';
    ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'VpiQwiuWl7KMTGys';
    ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = 'https://qaext.arcgis.com';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.rootURL = '/ember-arcgis-portal-services/';
  }

  return ENV;
};
