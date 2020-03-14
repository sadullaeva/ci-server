const express = require('express');
const router = express.Router();

const { getSettings, postSettings } = require('./settings');

router.get('/settings', getSettings);
router.post('/settings', postSettings);
router.get('/builds', (req, res) => res.json({ message: 'GET builds' }));
router.post('/builds/:commitHash', (req, res) => res.json({ message: 'POST build' }));
router.get('/builds/:buildId', (req, res) => res.json({ message: 'GET build' }));
router.get('/builds/:buildId/logs', (req, res) => res.json({ message: 'GET build logs' }));

module.exports = router;
