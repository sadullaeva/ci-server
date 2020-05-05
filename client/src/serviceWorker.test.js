const makeServiceWorkerEnv = require('service-worker-mock');

describe('Service worker', () => {
  beforeEach(() => {
    const serviceWorkerEnv = makeServiceWorkerEnv();
    Object.defineProperty(serviceWorkerEnv, 'addEventListener', {
      value: serviceWorkerEnv.addEventListener,
      enumerable: true,
    });
    Object.assign(global, serviceWorkerEnv);
    jest.resetModules();
  });

  it('should add listeners', () => {
    require('../public/serviceWorker');

    expect(self.listeners.get('install')).toBeDefined();
    expect(self.listeners.get('activate')).toBeDefined();
    expect(self.listeners.get('fetch')).toBeDefined();
  });

  it('should delete old caches on activate', async () => {
    require('../public/serviceWorker');

    // Create old cache
    await self.caches.open('OLD_CACHE');
    expect(self.snapshot().caches['OLD_CACHE']).toBeDefined();

    // Activate and verify old cache is removed
    await self.trigger('activate');
    expect(self.snapshot().caches['OLD_CACHE']).toBeUndefined();
  });
});
