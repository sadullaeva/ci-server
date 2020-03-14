const axios = require('../axios');

exports.getSettings = () => axios.get('/conf');

exports.postSettings = body => axios.post('/conf', body);

exports.getBuild = search => axios.get(`/build/details${search}`);

exports.getBuildLog = search => axios.get(`/build/log${search}`);

exports.getBuilds = (search) => axios.get(`/build/list${search}`);

exports.postBuild = body => axios.post('/build/request', body);
