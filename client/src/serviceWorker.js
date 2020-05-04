// CACHE AND UPDATE

const CACHE = 'cache-static';

function fromCache(request) {
  return caches
    .open(CACHE)
    .then(cache => cache.match(request).then(matching => matching || Promise.reject('no-match')));
}

function fromNetwork(request) {
  return fetch(request);
}

function precache() {
  return caches.open(CACHE).then(cache => cache.addAll(['/static']));
}

function update(request) {
  if (!/^http/.test(request.url)) return Promise.reject('not-http');

  return caches
    .open(CACHE)
    .then(cache => fetch(request).then(response => cache.put(request, response)));
}

self.addEventListener('install', event => {
  console.log('INSTALLED');

  event.waitUntil(precache());
});

self.addEventListener('activate', event => {
  console.log('ACTIVATED');
});

self.addEventListener('fetch', event => {
  try {
    event.respondWith(fromCache(event.request).catch(() => fromNetwork(event.request)));
    event.waitUntil(update(event.request));
  } catch (e) {
    console.log(e);
  }
});
