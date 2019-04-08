
/**
 * @esri/hub-common cloneObject function
 * Copied into this addon instead of loading the package
 * to avoid bloat. Someday, when Ember has treeshaking...
 */
export function cloneObject (obj) {
  let clone = {};
  // first check array
  if (Array.isArray(obj)) {
    clone = obj.map(cloneObject);
  } else if (typeof obj === 'object') {
    for (const i in obj) {
      if (obj[i] != null && typeof obj[i] === 'object') {
        clone[i] = cloneObject(obj[i]);
      } else {
        clone[i] = obj[i];
      }
    }
  } else {
    clone = obj;
  }
  return clone;
}
