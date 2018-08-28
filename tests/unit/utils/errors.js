import { handleError } from 'dummy/utils/errors';
import { module, test } from 'qunit';

module('Unit | Utility | format rest js error');

test('it throws a new error when diff code/message', function (assert) {
  // TODO: create an actual error instead of just using an object
  /* eslint-disable quotes */
  const restJsError = {
    "name": "ArcGISRequestError",
    "message": "CONT_0001: Item does not exist or is inaccessible.",
    "originalMessage": "Item does not exist or is inaccessible.",
    "code": "CONT_0001",
    "response": {
      "error": {
        "code": 400,
        "messageCode": "CONT_0001",
        "message": "Item does not exist or is inaccessible.",
        "details": []
      }
    },
    "url": "https://dc.mapsdevext.arcgis.com/sharing/rest/content/items/bbc0882d4713479c87bedcd6b3c41d1ah?f=json&token=w6ddxdYAY4WvtmrqZXyj3uMxQx7Pe8gzzRdZBH1DuniCIxEMt5wonLZMb-lGn7d6TpohGt7QU_lw4ume0RYMapC1qPGvWuV4tvRrh3pTSckJJCboqIkUzk70PGrVfNlWUemfj99mpVR6Xhq1XBqNzR4CBGPVjliKlqQMSi3hIW5XjCvAEn9u-GptFu26NX9O9XYYUh4S-OmT9BTaE_JA3Q..",
    "options": {
      "httpMethod": "GET",
      "portal": "https://dc.mapsdevext.arcgis.com/sharing/rest",
      "params": {
        "token": "notarealtoken"
      }
    }
  };
  /* eslint-enable quotes */

  assert.throws(handleError(restJsError), err => {
    return err.message === 'Item does not exist or is inaccessible.' && err.code === 400;
  }, 'throws a new error with the original message');
});

// TODO: confirm that 404 code is used if no original code was returned

// TODO: test that original error is thrown if code/message are the same
