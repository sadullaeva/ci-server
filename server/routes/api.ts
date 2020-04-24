import express from 'express';

import { deleteSettings, getSettings, postSettings } from '../controllers/settings';
import { getBuild, getBuildLogs, getBuilds, postBuild } from '../controllers/builds';

const router = express.Router();

router.get('/settings', getSettings);
router.post('/settings', postSettings);
router.delete('/settings', deleteSettings);
router.get('/builds', getBuilds);
router.post('/builds/:commitHash', postBuild);
router.get('/builds/:buildId', getBuild);
router.get('/builds/:buildId/logs', getBuildLogs);

export default router;
