const { expect } = require('chai');

const CachedLog = require('../../services/cacheLog');

let cachedLog;

beforeEach(() => {
  cachedLog = new CachedLog();
});

afterEach(() => {
  cachedLog.clear();
  cachedLog = null;
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
      const log = 'build log';
      cachedLog.cacheMap.set(id, { log });

      const result = cachedLog.get(id);

      expect(result).to.equal(log);
    });
  });

  describe('set', () => {
    it('does nothing if log is empty', () => {
      const id = '1';
      const log = '';

      cachedLog.set(id, log);
      const result = cachedLog.get(id);

      expect(result).to.be.undefined;
    });

    it('adds log to cache if log is not empty', () => {
      const id = '1';
      const log = 'build log';

      cachedLog.set(id, log);
      const result = cachedLog.cacheMap.get(id);

      expect(result.log).to.equal(log);
    });
  });

  describe('delete', () => {
    it('deletes log from cache', () => {
      const id = '1';
      const log = 'build log';
      cachedLog.cacheMap.set(id, { log });

      cachedLog.delete(id);
      const result = cachedLog.cacheMap.get(id);

      expect(result).to.be.undefined;
    });
  });
});
