/**
 * Fetch an image from a url, and return it as a blob that can
 * then be uploaded to an item as a resource
 */
export default function fetchImageAsBlob (url) {
  return fetch(url)
  .then((response) => {
    return response.blob();
  });
}
