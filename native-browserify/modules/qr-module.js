// qr.js
var QRCode = require('qrcode');

function generateQRCode(input) {
  return new Promise((resolve, reject) => {
    QRCode.toDataURL(input, function (err, output) {
      if (err) {
        reject(err);
      } else {
        resolve(output);
      }
    });
  });
}

module.exports = generateQRCode;
