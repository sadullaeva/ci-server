import BuildLog from '../typings/buildLog';

export type CacheLog = {
  log: BuildLog;
  timerId: NodeJS.Timeout;
  dateTime: Date;
};

export type CacheMap = Map<string, CacheLog>;

class CachedLog {
  cacheMap: CacheMap;
  MAX_CACHE_SIZE: number;
  STORAGE_TIME: number;

  constructor(maxCacheSize = 10, storageTime = 600000) {
    this.cacheMap = new Map();
    this.MAX_CACHE_SIZE = maxCacheSize;
    this.STORAGE_TIME = storageTime;
  }

  get(id: string) {
    const log = this.cacheMap.get(id);
    if (log) {
      this.delete(id);
      this.set(id, log.log);
      return log.log;
    }
    return undefined;
  }

  set(id: string, log: string) {
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

  delete(id: string) {
    const log = this.cacheMap.get(id);
    this.cacheMap.delete(id);
    if (log) clearTimeout(log.timerId);
  }

  clear() {
    while (this.cacheMap.size > 0) {
      const cacheMapIterator = this.cacheMap.keys();
      const id = cacheMapIterator.next().value;
      this.delete(id);
    }
  }
}

export default CachedLog;
