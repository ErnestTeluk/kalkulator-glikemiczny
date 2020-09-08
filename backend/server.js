require('dotenv').config();
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const router = require('./router');

mongoose
  .connect(process.env.MONGODB_ATLASS_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('mongodb is connected');
  })
  .catch((err) => {
    console.log('mongodb not connected');
    console.log(err);
  });

const corsOptions = {
  origin: 'http:/localhost:8000',
  optionsSuccessStatus: 200,
};

app.use(morgan('combined'));
app.use(cors(corsOptions));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
