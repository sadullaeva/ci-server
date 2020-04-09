const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const api = require('./routes/api');

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));

const swaggerConfig = require('./swagger.json');
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/api', api);
app.use('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(8080);
