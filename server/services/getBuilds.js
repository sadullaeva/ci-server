const axios = require('../axios');

module.exports = (search) => axios.get(`/build/list${search}`);
