# Module 4 — Project Setup

## What Was Built
Express + Node.js server with health check endpoint.

## Folder Structure
CDN Image Optimizer/
├── src/
│   ├── routes/upload.js
│   ├── controllers/uploadController.js
│   ├── middlewares/multer.js
│   └── utils/sharp.js
├── uploads/
├── app.js
├── server.js
├── .env
├── .gitignore
└── package.json

## Dependencies
- express: HTTP server framework
- multer: multipart/form-data file handling
- sharp: image resizing and compression
- dotenv: environment variable loader
- nodemon (dev): auto-restart on file change

## Key Decisions
- app.js and server.js separated for testability
- .env is gitignored to protect AWS credentials
- /health endpoint follows industry standard for deployment checks

## Test Result
GET http://localhost:3000/health → 200 OK
Response: { "status": "Server is running" }

## GitHub
https://github.com/pvarsha-2903/cdn-image-optimizer