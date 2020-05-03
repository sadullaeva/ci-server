import axios from 'axios';
import https from 'https';

const instance = axios.create({
  baseURL: process.env.API_URL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

instance.defaults.headers.common['Authorization'] = `Bearer ${process.env.AUTH_TOKEN}`;

export default instance;
