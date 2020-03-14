const url = require('url');

const getCommitAuthorName = require('../utils/getCommitAuthorName');
const getCommitMessage = require('../utils/getCommitMessage');

const getBuilds = require('../services/getBuilds');
const getBuild = require('../services/getBuild');
const postBuild = require('../services/postBuild');
const getBuildLog = require('../services/getBuildLog');
const getSettings = require('../services/getSettings');

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
  let authorName;
  let commitMessage;
  let branchName;

  await Promise.all([getSettings(), getCommitAuthorName(commitHash), getCommitMessage(commitHash)])
    .then(response => {
      branchName = response[0].data.data.mainBranch;
      authorName = response[1];
      commitMessage = response[2];
    })
    .catch(err => {
      next(err);
    });

  postBuild({ commitMessage, commitHash, branchName, authorName })
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      next(err);
    });
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
