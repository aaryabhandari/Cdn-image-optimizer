const express = require('express');
const app = express();

app.use(express.json());

const uploadRouter = require('./src/routes/upload');  
app.use('/api', uploadRouter);                         

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

module.exports = app;