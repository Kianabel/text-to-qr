var QRCode = require('qrcode')

let input = 'WIFI:S:OPPO-A74;T:WPA;P:8647914947;H:false;;'
let QRBase64

QRCode.toDataURL(input, function (err, output) {
  console.log(output)
  QRBase64 = output
})