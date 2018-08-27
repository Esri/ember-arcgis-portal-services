// inspect errors from @ersri/arcgis-rest-request and
// throw a new error in the format used by serviceMixin.request()
export function handleError (err) {
  // get the orignal error info returned in the response
  const response = err.response;
  const errorJson = response && response.error;
  if (errorJson && (err.code !== errorJson.code || err.message !== errorJson.message)) {
    // error code or message is different than the format we've sent up to v1.5.0
    // throw a new error with the expected format
    const error = new Error(errorJson.message);
    error.code = errorJson.code || 404;
    error.response = response;
    throw error;
  }
  // just re-throw
  throw err;
}
