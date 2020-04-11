class CachedLog {
  constructor(maxCacheSize = 10, storageTime = 600000) {
    this.cacheMap = new Map();
    this.MAX_CACHE_SIZE = maxCacheSize;
    this.STORAGE_TIME = storageTime;
  }

  get(id) {
    const log = this.cacheMap.get(id);
    if (log) {
      this.delete(id);
      this.set(id, log.log);
      return log.log;
    }
    return undefined;
  }

  set(id, log) {
    if (!log) return;

    while (this.cacheMap.size >= this.MAX_CACHE_SIZE) {
      const cacheMapIterator = this.cacheMap.keys();
      const id = cacheMapIterator.next().value;
      this.delete(id);
    }

    const timerId = setTimeout(() => {
      this.delete(id);
    }, this.STORAGE_TIME);

    this.cacheMap.set(id, {
      log,
      timerId,
      dateTime: new Date(),
    });
  }

  delete(id) {
    const log = this.cacheMap.get(id);
    this.cacheMap.delete(id);
    clearTimeout(log.id);
  }
}

module.exports = CachedLog;
