const path = require('path');
const express = require('express');
const api = require('./api');

const app = express();

app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/api', api);
app.use('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(3000);
