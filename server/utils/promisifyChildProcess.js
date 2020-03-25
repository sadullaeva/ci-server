module.exports = child =>
  new Promise((resolve, reject) => {
    child.addListener('error', reject);
    child.addListener('exit', resolve);
  });
