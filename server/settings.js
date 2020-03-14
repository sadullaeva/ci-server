const axios = require('./axios');
const cloneRepo = require('./services/cloneRepo');

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
  const { repoName, mainBranch } = req.body;
  cloneRepo(repoName, mainBranch);

  axios
    .post(`/conf`, req.body)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      next(err);
    });
};
