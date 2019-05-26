const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

// DB Setup
mongoose
  .connect('mongodb://localhost:auth/auth', {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(m => console.log('Connected to MongoDB'));

// App Setup
const app = express()
  .use(morgan('combined'))
  .use(bodyParser.json({ type: '*/*' }));

const router = require('./router');
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
