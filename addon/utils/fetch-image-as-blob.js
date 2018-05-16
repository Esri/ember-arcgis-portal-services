/**
 * Fetch an image from a url, and return it as a blob that can
 * then be uploaded to an item as a resource
 */
export default function fetchImageAsBlob (url, options = {}) {
  if (!options.credentials) {
    options.credentials = 'same-origin';
  }
  return fetch(url, options)
  .then((response) => {
    return response.blob();
  });
}
