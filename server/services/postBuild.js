const axios = require('../axios');

module.exports = body => axios.post('/build/request', body);
