let nameOfCache = 'react-map-v1.0';

self.addEventListener('install', function (event) {
  console.log('Worker install event in progress.')
  event.waitUntil(
    caches.open(nameOfCache).then(function (cache) {
      return cache.addAll([
        'index.html',
        '../src/components/Filter.js',
        '../src/components/LocationsList.js',
        '../src/components/Map.js',
        '../src/App.css',
        '../src/App.js',
        '../src/index.js',
        'powered-by-foursquare-blue.png'
      ]);
    })
      .then(function () {
        console.log('Installation complete')
      }).catch(function () {
        console.log('Cache install failed!')
      })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheName) {
          return cacheName.startsWith('restaurants-reviews') &&
            cacheName != nameOfCache;
        }).map(function (cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  let requestUrl = new URL(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
})
