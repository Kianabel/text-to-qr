const http = require('http');
const QRCode = require('qrcode');

const PORT = 42069;

const server = http.createServer((req, res) => {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Handle preflight requests
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST') {
    let body = '';

    req.on('data', qrtext => {
      body += qrtext.toString();
    });

    req.on('end', () => {
      QRCode.toDataURL(body, (err, output) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error generating QR code');
          console.error(err);
          return;
        }

        // QR response
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(output);
        console.log(output);
      });
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Only POST method is supported');
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
