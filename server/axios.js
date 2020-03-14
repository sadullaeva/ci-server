const axios = require('axios');
const https = require('https');

const instance = axios.create({
  baseURL: process.env.API_URL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

instance.defaults.headers.common['Authorization'] = `Bearer ${process.env.AUTH_TOKEN}`;

module.exports = instance;
