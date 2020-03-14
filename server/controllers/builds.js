const url = require('url');
const buildEmitter = require('../utils/buildEmitter');

const getCommitAuthorName = require('../utils/getCommitAuthorName');
const getCommitMessage = require('../utils/getCommitMessage');

const {
  getBuilds,
  getBuild,
  postBuild,
  getBuildLog,
  getSettings,
} = require('../services/storageMethods');

exports.getBuilds = (req, res, next) => {
  const { search } = url.parse(req.url, true);
  getBuilds(search)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      next(err);
    });
};

exports.postBuild = async (req, res, next) => {
  const { commitHash } = req.params;
  try {
    const responses = await Promise.all([
      getSettings(),
      getCommitAuthorName(commitHash),
      getCommitMessage(commitHash),
    ]);
    const branchName = responses[0].data.data.mainBranch;
    const authorName = responses[1];
    const commitMessage = responses[2];

    const response = await postBuild({ commitMessage, commitHash, branchName, authorName });

    // TODO:
    // buildEmitter.emit('request', buildId);
    res.send(response.data);
  } catch (err) {
    next(err);
  }
};

exports.getBuild = (req, res, next) => {
  const { buildId } = req.params;
  getBuild(`?buildId=${buildId}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      next(err);
    });
};

exports.getBuildLogs = (req, res, next) => {
  const { buildId } = req.params;
  getBuildLog(`?buildId=${buildId}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      next(err);
    });
};
