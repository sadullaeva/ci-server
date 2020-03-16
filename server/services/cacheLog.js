const cacheMap = new Map();
// const MAX_CACHE_SIZE = 2; // for testing
const MAX_CACHE_SIZE = 10;
const STORAGE_TIME = 600000; // 10 min

const setClearTimer = buildId => {
  const timerId = setTimeout(() => {
    cacheMap.delete(buildId);
    clearTimeout(timerId);
  }, STORAGE_TIME);
  return timerId;
};

const cacheLog = (buildId, log) => {
  const cachedLog = cacheMap.get(buildId);

  if (cachedLog) {
    clearTimeout(cachedLog.timerId);
    cachedLog.timerId = setClearTimer(buildId);
    cachedLog.dateTime = new Date();
  } else {
    while (cacheMap.size >= MAX_CACHE_SIZE) {
      const cacheMapIterator = cacheMap.keys();
      const keyToDelete = cacheMapIterator.next().value;
      cacheMap.delete(keyToDelete);
    }
    cacheMap.set(buildId, {
      log,
      dateTime: new Date(),
      timerId: setClearTimer(buildId),
    });
  }
};

const getFromCache = buildId => {
  const cachedLog = cacheMap.get(buildId);

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
