const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { startBuild, finishBuild, cancelBuild } = require('../services/storageMethods');

const { getSettings } = require('../services/storageMethods');

// TODO: split and use
// NOTE: This function is not used at the moment
module.exports = async buildId => {
  try {
    const cwd = path.resolve(__dirname, '..');
    const startParams = {
      buildId,
      dateTime: new Date().toISOString(),
    };
    await startBuild(startParams);
    console.log('START BUILD');
    const finishParams = {
      buildId,
      duration: 0,
      success: false,
      buildLog: '',
    };
    const settings = await getSettings();
    const { buildCommand } = settings.data.data;
    const { stdout, stderr } = await exec(buildCommand, { cwd });
    stdout.on('data', data => {
      finishParams.buildLog = data;
      finishParams.duration = new Date() - startParams.dateTime;
      finishParams.success = true;
      console.log('ON DATA');
    });
    stderr.on('data', data => {
      console.log(data);
      console.log('ON ERROR');
    });
    if (finishParams.success) {
      console.log('FINISH BUILD', finishParams);
      finishBuild(finishParams);
    } else {
      console.log('CANCEL BUILD');
      cancelBuild({ buildId });
    }
  } catch (e) {
    console.log(e);
  }
};
