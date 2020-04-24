import path from 'path';
import { config } from 'dotenv';
config({ path: path.resolve(__dirname, '.env') });

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import api from './routes/api';
import swaggerConfig from './swagger.json';

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use('/api', api);
app.use('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(8080);
