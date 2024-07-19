const button = document.getElementById('pst');
const input = document.getElementById('inputText');
const img = document.getElementById('outputQR');

const localurl = 'http://localhost:42069';
const url = 'http://text-to-qr.api.syflare.com';

button.addEventListener('click', async _ => {
  try {
    let sText = input.value;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: sText
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

    const qrDataUrl = await response.text();
    console.log('Completed!', qrDataUrl);
    img.src = qrDataUrl;

  } catch (err) {
    console.error(`Error: ${err}`);
  }
});
