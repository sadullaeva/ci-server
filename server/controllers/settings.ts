import { NextFunction, Response, Request } from 'express';
import * as storage from '../api/storageMethods';
import cloneRepo from '../services/cloneRepo';

export const getSettings = (req: Request, res: Response, next: NextFunction) => {
  storage.getSettings()
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      next(err);
    });
};

export const postSettings = (req: Request, res: Response, next: NextFunction) => {
  const { repoName, mainBranch } = req.body;
  Promise.all([cloneRepo(repoName, mainBranch), storage.postSettings(req.body)])
    .then(([_, response]) => {
      res.send(response.data);
    })
    .catch(err => {
      next(err);
    });
};

export const deleteSettings = (req: Request, res: Response, next: NextFunction) => {
  storage.deleteSettings()
    .then(() => {
      res.send();
    })
    .catch(err => {
      next(err);
    });
};
