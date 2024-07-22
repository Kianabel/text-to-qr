# Text-to-QR

Text-to-QR is a web application that generates QR codes from text input. The project consists of a website with a backend that can be run locally or deployed to a server + a frontend only solution with Browserify to run the QRCode node library natively in the browser.

## Features

- Converts text input into QR codes.
- Backend can be run locally or deployed to a server.
- Alternatively, use the running API at `http://text-to-qr.api.syflare.com`.
- Or use the frontend only variant built with Browserify.

## Installation

### Clone the repository

```bash
git clone https://github.com/Kianabel/text-to-qr.git
cd text-to-qr
```

### Setup
CD in the wanted application:
Install dependencies:

```bash
npm install
```
Run the backend locally:
cd ./http-post

```bash
node qr-web.js
```
The backend server will start and listen for requests.

### Usage

## local Backend
You can run the backend locally and point the frontend to use it. By default, the backend runs on http://localhost:42069.

## Deployed Backend
Alternatively, you can use the deployed API at http://text-to-qr.api.syflare.com. Ensure the frontend is configured to point to this URL.

##Image:
![image](https://github.com/user-attachments/assets/49bef0fb-63d3-447a-915b-9806fb0de478)


License
This project is licensed under the MIT License - see the LICENSE file for details.
