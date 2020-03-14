const express = require('express');
const router = express.Router();

const { getSettings, postSettings } = require('../controllers/settings');
const { getBuilds, postBuild, getBuild, getBuildLogs } = require('../controllers/builds');

router.get('/settings', getSettings);
router.post('/settings', postSettings);
router.get('/builds', getBuilds);
router.post('/builds/:commitHash', postBuild);
router.get('/builds/:buildId', getBuild);
router.get('/builds/:buildId/logs', getBuildLogs);

module.exports = router;