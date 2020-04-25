import { NextFunction, Response, Request } from 'express';
import * as storage from '../api/storageMethods';
import cloneRepo from '../services/cloneRepo';
import { GetSettingsResponse, PostSettingsRequest, PostSettingsResponse } from './typings/settings';

export const getSettings = (
  req: Request<{}, GetSettingsResponse, null>,
  res: Response<GetSettingsResponse>,
  next: NextFunction
) => {
  storage
    .getSettings()
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      next(err);
    });
};

export const postSettings = (
  req: Request<{}, PostSettingsResponse, PostSettingsRequest>,
  res: Response<PostSettingsResponse>,
  next: NextFunction
) => {
  const { repoName, mainBranch } = req.body;
  Promise.all([cloneRepo(repoName, mainBranch), storage.postSettings(req.body)])
    .then(([_, response]) => {
      res.send(response.data);
    })
    .catch(err => {
      next(err);
    });
};

export const deleteSettings = (
  req: Request<{}, null, null>,
  res: Response<null>,
  next: NextFunction
) => {
  storage
    .deleteSettings()
    .then(() => {
      res.send();
    })
    .catch(err => {
      next(err);
    });
};
