'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'dummy',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
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
    // if you need to test against dev API/data:
    const env = 'dev';
    // dev item id: b1e048699a6943dfa9a5f1f6b325998c
    ENV.torii.providers['arcgis-oauth-bearer'].apiKey = '2Luiwqujuz7qQwo5';

    // if you need to test against QA API/data:
    // const env = 'qa';
    // ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'VpiQwiuWl7KMTGys';

    // set dev/qa portalUrl
    ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = `https://${env}ext.arcgis.com`;

    // PROD
    // ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'x3u9xkfpYyYbJu08';
    // ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = `https://www.arcgis.com`;
  }

  if (environment === 'devext') {
    // DEV App Item 015965c7e6b94a6e9b52b78ae95c0bce
    ENV.torii.providers['arcgis-oauth-bearer'].apiKey = '2Luiwqujuz7qQwo5';
    ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = 'https://devext.arcgis.com';
  }

  if (environment === 'koopernetes') {
    ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'arcgisonline';
    ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = 'https://gis.koopernetes.com/portal';
  }

  if (environment === 'qaext') {
    // QA App Item: 1452439af4af473ea3c133b7edf0a147
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
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // PROD App Item: 2ef3c71bc5414f8b951c370cea132bf0
    ENV.rootURL = '/';
    ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'x3u9xkfpYyYbJu08';
    ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = 'https://www.arcgis.com';
  }

  if (environment === 'portalqa') {
    // PORTALQA App Item: 8c70a15951af474a85fdc90dc0eabe68
    ENV.rootURL = '/';
    ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'sdjz46sRw9Tcjx4n';
    ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = 'https://portal.hubqa.arcgis.com/portal';
  }

  if (environment === 'portaldev') {
    // App Item:
    ENV.rootURL = '/';
    ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'di8zkURhC6XuxY9F';
    ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = 'https://portal.hubdev.arcgis.com/portal';
  }

  return ENV;
};
