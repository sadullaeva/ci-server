const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { startBuild, finishBuild, cancelBuild } = require('../services/storageMethods');

const { getSettings } = require('../services/storageMethods');

// TODO: split and use
// NOTE: This function is not used at the moment
module.exports = async buildId => {
  try {
    const cwd = path.resolve(__dirname, '../ci-repo');
    const startTime = new Date();
    const startParams = {
      buildId,
      dateTime: startTime.toISOString(),
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
    if (stdout) {
      finishParams.buildLog = stdout;
      finishParams.duration = new Date() - startTime;
      finishParams.success = true;
    } else {
      console.log('STDERR:', stderr);
    }

    if (finishParams.success) {
      console.log('FINISH BUILD', finishParams);
      await finishBuild(finishParams);
    } else {
      console.log('CANCEL BUILD');
      await cancelBuild({ buildId });
    }
  } catch (e) {
    console.log(e);
  }
};
