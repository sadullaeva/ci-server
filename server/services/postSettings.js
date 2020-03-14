const axios = require('../axios');

module.exports = body => axios.post('/conf', body);
