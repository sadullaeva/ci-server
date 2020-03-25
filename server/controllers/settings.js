const { getSettings, postSettings } = require('../services/storageMethods');
const cloneRepo = require('../services/cloneRepo');

exports.getSettings = (req, res, next) => {
  getSettings()
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

  postSettings(req.body)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      next(err);
    });
};
