const axios = require('axios');

module.exports = async () => {
  await axios.delete(`${process.env.API_URL}/settings`);
};
