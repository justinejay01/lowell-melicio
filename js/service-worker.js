var CACHE_NAME = 'dmlm-cache';
var urlsToCache = [
  '/',
  '/leaf-logo.png',
  '/plants-bg.png',
  '/css/main.css',
  '/css/plyr.css',
  '/css/styles.css',
  '/js/plyr.polyfilled.js',
  '/js/scripts.js',
  '/img/Picture1.png',
  '/img/Picture2.png',
  '/img/Picture3.png',
  '/img/Picture4.png',
  '/img/Picture5.png',
  '/img/Picture6.png',
  '/img/Picture7.png',
  '/img/Picture8.png',
  '/img/Picture9.png',
  '/img/Picture10.png',
  '/img/Picture11.png',
  '/img/Picture12.png',
  '/img/Picture13.png',
  '/img/Picture14.png',
  '/img/Picture15.png',
  '/img/Picture16.png',
  '/img/Picture17.png',
  '/img/Picture18.png',
  '/img/Picture19.png',
  '/img/Picture20.png',
  '/img/Picture21.png',
  '/img/Picture22.png',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
