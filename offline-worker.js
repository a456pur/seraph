const CACHE_NAME = 'seraph-cache';
const OFFLINE_URLS = [
    '/offline.html',
    '/images/backgrounds/seraph/offlinebg.jpg',
    '/images/ico.ico',
    '/storage/fonts/ubuntu/Ubuntu.woff2',
    '/storage/js/directorylist.json',

    '/storage/ruffle/a29c1b01570ffecf6fae.wasm',
    '/storage/ruffle/core.ruffle.1caf8a7231ccf85abb1d.js',
    '/storage/ruffle/core.ruffle.1caf8a7231ccf85abb1d.js.map',
    '/storage/ruffle/core.ruffle.78cc902cbabd4bc44008.js',
    '/storage/ruffle/core.ruffle.78cc902cbabd4bc44008.js.map',
    '/storage/ruffle/d6c752be1c7e690bf226.wasm',
    '/storage/ruffle/package.json',
    '/storage/ruffle/ruffle.js',
    '/storage/ruffle/ruffle.js.map'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(OFFLINE_URLS).then(function() {
                self.skipWaiting();
                self.clients.matchAll().then(clients => {
                    clients.forEach(client => client.postMessage('cached'));
                });
            });
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request).then(function(response) {
                if (response) {
                    return response;
                }
                if (event.request.mode === 'navigate') {
                    return caches.match('./offline.html');
                }
            });
        })
    );
});

self.addEventListener('activate', function(event) {
    var cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});


