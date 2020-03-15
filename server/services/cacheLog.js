const cache = {};
const MAX_CACHE_SIZE = 10;
const STORAGE_TIME = 600000; // 10 min

const setClearTimer = (buildId) => {
  const timerId = setTimeout(() => {
    delete cache[buildId];
    clearTimeout(timerId);
  }, STORAGE_TIME);
  return timerId;
};

const cacheLog = (buildId, log) => {
  const cachedLog = cache[buildId];

  if (cachedLog) {
    clearTimeout(cachedLog.timerId);
    cachedLog.timerId = setClearTimer(buildId);
    cachedLog.dateTime = new Date();
  } else {
    cache[buildId] = {
      log,
      dateTime: new Date(),
      timerId: setClearTimer(buildId)
    }
  }
};

const getFromCache = (buildId) => {
  const cachedLog = cache[buildId];

  if (cachedLog) {
    clearTimeout(cachedLog.timerId);
    cachedLog.timerId = setClearTimer(buildId);
    cachedLog.dateTime = new Date();
    return cachedLog.log;
  }
  return undefined;
};

module.exports = {
  cacheLog,
  getFromCache,
};
