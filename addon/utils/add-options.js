import fetch from 'fetch';

/**
 * Wrap the options passed to rest-js with auth info and use ember-fetch.
*/
export default function addOptions(args, portalOpts, context) {
  // pass through ember-fetch
  args.fetch = fetch;

  // if portal options are present, they're preferred
  if (portalOpts && portalOpts.portal) {
    args.portal = portal;
    if (!args.params) {
      args.params = {};
    }
    args.params.token = portalOpts.token;
  } else {
    // pass through auth info from the session
    args.authentication = context.get('session.authMgr');
  }
  return args;
}

