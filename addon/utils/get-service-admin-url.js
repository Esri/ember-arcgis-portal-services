/**
 * Fetch an image from a url, and return it as a blob that can
 * then be uploaded to an item as a resource
 */
export default function getServiceAdminUrl (url, operation, layerId) {
  const adminUrl = url.replace(/\/arcgis\/rest\/services\//i, '/arcgis/rest/admin/services/');
  url = `${adminUrl}/${operation}?f=json`;
  if (layerId || layerId === 0) {
    url = `${adminUrl}/${layerId}/${operation}?f=json`;
  }
  return url;
}
