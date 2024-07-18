const generateQRCode = require('./modules/qr-module');

const button = document.getElementById('pst');
const input = document.getElementById('inputText');
const img = document.getElementById('outputQR');

button.addEventListener('click', async () => {
  try {
    let sText = input.value;
    const qrDataUrl = await generateQRCode(sText);
    img.src = qrDataUrl;
  } catch (err) {
    console.error(`Error: ${err}`);
  }
});
