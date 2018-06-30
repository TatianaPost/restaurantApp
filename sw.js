var version = 'v1.0';

// installing the service worker
self.addEventListener("install", function(event) {
  console.log('SWORKER: install event in progress.');
  event.waitUntil(
    caches.open(version + 'fundamentals').then(function(cache) {
        return cache.addAll([
          '/',
          '/css/styles.css',
          '/data/restaurants.json',
          '/img/1.jpg',
          '/img/2.jpg',
          '/img/3.jpg',
          '/img/4.jpg',
          '/img/5.jpg',
          '/img/6.jpg',
          '/img/7.jpg',
          '/img/8.jpg',
          '/img/9.jpg',
          '/img/10.jpg',
          '/js/dbhelper.js',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/index.html',
          'restaurant.html'
        ]);
      })
      .then(function() {
        console.log('SWORKER: install completed');
      })
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
