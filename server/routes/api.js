const express = require('express');
const router = express.Router();

const { getSettings, postSettings } = require('../controllers/settings');
const { getBuilds, postBuild } = require('../controllers/builds');

router.get('/settings', getSettings);
router.post('/settings', postSettings);
router.get('/builds', getBuilds);
router.post('/builds/:commitHash', postBuild);
router.get('/builds/:buildId', (req, res) => res.json({ message: 'GET build' }));
router.get('/builds/:buildId/logs', (req, res) => res.json({ message: 'GET build logs' }));

module.exports = router;
