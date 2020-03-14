const axios = require('../axios');

exports.getSettings = () => axios.get('/conf');

exports.postSettings = body => axios.post('/conf', body);

exports.getBuild = search => axios.get(`/build/details${search}`);

exports.getBuildLog = search => axios.get(`/build/log${search}`);

exports.getBuilds = search => axios.get(`/build/list${search}`);

exports.postBuild = body => axios.post('/build/request', body);

exports.startBuild = body => axios.post('/build/start', body);

exports.finishBuild = body => axios.post('/build/finish', body);

exports.cancelBuild = body => axios.post('/build/cancel', body);
