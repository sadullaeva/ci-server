const axios = require('./axios');

exports.getSettings = (req, res, next) => {
  axios
    .get(`/conf`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      next(err);
    });
};

exports.postSettings = (req, res, next) => {
  axios
    .post(`/conf`, req.body)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      next(err);
    });
};
