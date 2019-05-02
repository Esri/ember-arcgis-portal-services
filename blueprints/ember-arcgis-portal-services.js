/* eslint-env node */
module.exports = {
  description: 'Install torii-provider-arcgis dependencies',

  normalizeEntityName() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall(/* options */) {
    // ensure peerDependencies are installed
    this.addPackageToProject('@esri/arcgis-rest-request', '^2.0.0');
    this.addPackageToProject('@esri/arcgis-rest-auth', '^2.0.0');
    this.addPackageToProject('@esri/arcgis-rest-portal', '^2.0.0');

    // will we still need to include torii's dependencies in the EASS package.json when were no longer npm linking?
  }
};