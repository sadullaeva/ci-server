import { expect } from 'chai';

import CachedLog, { CacheLog } from '../../services/cacheLog';
import BuildLog from '../../typings/buildLog';

let cachedLog: CachedLog;

beforeEach(() => {
  cachedLog = new CachedLog();
});

afterEach(() => {
  cachedLog.clear();
});

describe('CachedLog', () => {
  describe('get', () => {
    it('returns undefined if no such log in cache', () => {
      const id = '1';

      const result = cachedLog.get(id);

      expect(result).to.be.undefined;
    });

    it('returns log if it is in cache', () => {
      const id = '1';
      const log: BuildLog = 'build log';
      cachedLog.cacheMap.set(id, { log } as CacheLog);

      const result = cachedLog.get(id);

      expect(result).to.equal(log);
    });
  });

  describe('set', () => {
    it('does nothing if log is empty', () => {
      const id = '1';
      const log: BuildLog = '';

      cachedLog.set(id, log);
      const result = cachedLog.get(id);

      expect(result).to.be.undefined;
    });

    it('adds log to cache if log is not empty', () => {
      const id = '1';
      const log: BuildLog = 'build log';

      cachedLog.set(id, log);
      const result = cachedLog.cacheMap.get(id);

      expect(result!.log).to.equal(log);
    });
  });

  describe('delete', () => {
    it('deletes log from cache', () => {
      const id = '1';
      const log: BuildLog = 'build log';
      cachedLog.cacheMap.set(id, { log } as CacheLog);

      cachedLog.delete(id);
      const result = cachedLog.cacheMap.get(id);

      expect(result).to.be.undefined;
    });
  });
});
