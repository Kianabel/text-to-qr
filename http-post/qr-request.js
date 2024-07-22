const axios = require('axios');

const url = 'http://text-to-qr.api.syflare.com';
const data = 'WIFI:S:OPPO-A74;T:WPA;P:8647914947;H:false;;';

axios.post(url, data)
  .then(response => {
    console.log('QR Code Data URL:', response.data);
  })
  .catch(error => {
    console.error('Error making the request:', error);
  });
