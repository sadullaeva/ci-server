const util = require('util');
exports.exec = util.promisify(require('child_process').exec);
