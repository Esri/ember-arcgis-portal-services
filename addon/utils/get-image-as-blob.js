import { Promise as EmberPromise } from 'rsvp';
/**
 * Fetch an image from a url, and return it as a blob that can
 * then be uploaded to an item as a resource
 */
export default function getImageAsBlob (sourceUrl) {
  console.error(`DEPREACTION: getImageAsBlob utility is deprecated! Please use fetchImageAsBlob instead as it will work with web-tier authentication.`);
  // promisify this...
  return new EmberPromise((resolve, reject) => {
    var img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    // when the image loads...
    img.onload = function (a) {
      var canvas = document.createElement('canvas');
      canvas.width = this.width;
      canvas.height = this.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(this, 0, 0);

      var dataURI = canvas.toDataURL('image/jpg');

      // convert base64/URLEncoded data component to raw binary data held in a string
      var byteString;
      if (dataURI.split(',')[0].indexOf('base64') >= 0) {
        byteString = atob(dataURI.split(',')[1]);
      } else {
        byteString = unescape(dataURI.split(',')[1]);
      }

      // separate out the mime component
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

      // write the bytes of the string to a typed array
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      let blobImage = new Blob([ia], { type: mimeString });
      resolve(blobImage);
    };
    // kick off the load...
    img.src = sourceUrl;
  });
}
