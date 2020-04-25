import url from 'url';
import { NextFunction, Response, Request } from 'express';

import getCommitAuthorName from '../utils/getCommitAuthorName';
import getCommitMessage from '../utils/getCommitMessage';

import CachedLog from '../services/cacheLog';

import * as storage from '../api/storageMethods';

import {
  GetBuildsResponse,
  GetBuildsQueryParams,
  PostBuildRequest,
  PostBuildResponse,
  PostBuildRequestParams,
  GetBuildRequestParams,
  GetBuildResponse,
  GetBuildLogRequestParams,
  GetBuildLogResponse,
} from './typings/builds';

const cachedLog = new CachedLog();

export const getBuilds = (
  req: Request<{}, GetBuildsResponse, null, GetBuildsQueryParams>,
  res: Response<GetBuildsResponse>,
  next: NextFunction
) => {
  const { search } = url.parse(req.url, true);
  storage
    .getBuilds(search || '')
    .then(response => {
      res.send(response.data);
    })
    .catch((err: any) => {
      next(err);
    });
};

export const postBuild = async (
  req: Request<PostBuildRequestParams, PostBuildResponse, PostBuildRequest>,
  res: Response<PostBuildResponse>,
  next: NextFunction
) => {
  const { commitHash } = req.params;
  try {
    const responses = await Promise.all([
      storage.getSettings(),
      getCommitAuthorName(commitHash),
      getCommitMessage(commitHash),
    ]);
    const branchName = responses[0].data.data!.mainBranch;
    const authorName = responses[1];
    const commitMessage = responses[2];

    const response = await storage.postBuild({ commitMessage, commitHash, branchName, authorName });

    res.send(response.data);
  } catch (err) {
    next(err);
  }
};

export const getBuild = (
  req: Request<GetBuildRequestParams, GetBuildResponse, null>,
  res: Response<GetBuildResponse>,
  next: NextFunction
) => {
  const { buildId } = req.params;
  storage
    .getBuild(`?buildId=${buildId}`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err: any) => {
      next(err);
    });
};

export const getBuildLogs = (
  req: Request<GetBuildLogRequestParams, GetBuildLogResponse, null>,
  res: Response<GetBuildLogResponse>,
  next: NextFunction
) => {
  const { buildId } = req.params;
  const log = cachedLog.get(buildId);
  if (log) {
    res.send(log);
  } else {
    storage
      .getBuildLog(`?buildId=${buildId}`)
      .then(response => {
        cachedLog.set(buildId, response.data);
        res.send(response.data);
      })
      .catch((err: any) => {
        next(err);
      });
  }
};
