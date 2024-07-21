const CACHE_NAME = 'seraph-cache';
const OFFLINE_URLS = [
    '/offline.html',
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


