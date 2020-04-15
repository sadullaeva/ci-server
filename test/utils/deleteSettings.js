const axios = require('axios');

module.exports = async () => {
  await axios.delete('http://localhost:8080/api/settings');
};
