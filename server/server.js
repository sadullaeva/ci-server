const path = require('path');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const api = require('./api');

const app = express();

app.use(express.json());

const swaggerConfig = require('./swagger.json');

app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use('/api', api);
app.use('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(3000);
