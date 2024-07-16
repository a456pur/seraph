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
    '/storage/ruffle/ruffle.js.map',

    '/storage/emulatorjs/ads.txt',
    '/storage/emulatorjs/data/GameManager.js',
    '/storage/emulatorjs/data/compression/extract7z.js',
    '/storage/emulatorjs/data/compression/extractzip.js',
    '/storage/emulatorjs/data/compression/libunrar.js',
    '/storage/emulatorjs/data/compression/libunrar.wasm',
    '/storage/emulatorjs/data/cores/a5200-wasm.data',
    '/storage/emulatorjs/data/cores/beetle_vb-wasm.data',
    '/storage/emulatorjs/data/cores/desmume2015-wasm.data',
    '/storage/emulatorjs/data/cores/fbalpha2012_cps1-wasm.data',
    '/storage/emulatorjs/data/cores/fbalpha2012_cps2-wasm.data',
    '/storage/emulatorjs/data/cores/fbneo-wasm.data',
    '/storage/emulatorjs/data/cores/fceumm-wasm.data',
    '/storage/emulatorjs/data/cores/gambatte-wasm.data',
    '/storage/emulatorjs/data/cores/gearcoleco-wasm.data',
    '/storage/emulatorjs/data/cores/genesis_plus_gx-wasm.data',
    '/storage/emulatorjs/data/cores/handy-wasm.data',
    '/storage/emulatorjs/data/cores/mame2003-wasm.data',
    '/storage/emulatorjs/data/cores/mame2003_plus-wasm.data',
    '/storage/emulatorjs/data/cores/mednafen_ngp-wasm.data',
    '/storage/emulatorjs/data/cores/mednafen_pce-wasm.data',
    '/storage/emulatorjs/data/cores/mednafen_pcfx-wasm.data',
    '/storage/emulatorjs/data/cores/mednafen_psx_hw-thread-wasm.data',
    '/storage/emulatorjs/data/cores/mednafen_psx_hw-wasm.data',
    '/storage/emulatorjs/data/cores/mednafen_wswan-wasm.data',
    '/storage/emulatorjs/data/cores/melonds-thread-wasm.data',
    '/storage/emulatorjs/data/cores/melonds-wasm.data',
    '/storage/emulatorjs/data/cores/mgba-thread-wasm.data',
    '/storage/emulatorjs/data/cores/mgba-wasm.data',
    '/storage/emulatorjs/data/cores/mupen64plus_next-thread-wasm.data',
    '/storage/emulatorjs/data/cores/mupen64plus_next-wasm.data',
    '/storage/emulatorjs/data/cores/nestopia-wasm.data',
    '/storage/emulatorjs/data/cores/opera-thread-wasm.data',
    '/storage/emulatorjs/data/cores/opera-wasm.data',
    '/storage/emulatorjs/data/cores/parallel_n64-thread-wasm.data',
    '/storage/emulatorjs/data/cores/parallel_n64-wasm.data',
    '/storage/emulatorjs/data/cores/pcsx_rearmed-thread-wasm.data',
    '/storage/emulatorjs/data/cores/pcsx_rearmed-wasm.data',
    '/storage/emulatorjs/data/cores/picodrive-wasm.data',
    '/storage/emulatorjs/data/cores/prosystem-wasm.data',
    '/storage/emulatorjs/data/cores/snes9x-wasm.data',
    '/storage/emulatorjs/data/cores/stella2014-wasm.data',
    '/storage/emulatorjs/data/cores/virtualjaguar-wasm.data',
    '/storage/emulatorjs/data/cores/yabause-thread-wasm.data',
    '/storage/emulatorjs/data/cores/yabause-wasm.data',
    '/storage/emulatorjs/data/emulator.css',
    '/storage/emulatorjs/data/emulator.js',
    '/storage/emulatorjs/data/emulator.min.css',
    '/storage/emulatorjs/data/emulator.min.js',
    '/storage/emulatorjs/data/gamepad.js',
    '/storage/emulatorjs/data/loader.js',
    '/storage/emulatorjs/data/localization/Translate.html',
    '/storage/emulatorjs/data/localization/af-FR.json',
    '/storage/emulatorjs/data/localization/ar-AR.json',
    '/storage/emulatorjs/data/localization/ben-BEN.json',
    '/storage/emulatorjs/data/localization/de-GER.json',
    '/storage/emulatorjs/data/localization/el-GR.json',
    '/storage/emulatorjs/data/localization/en.json',
    '/storage/emulatorjs/data/localization/es-ES.json',
    '/storage/emulatorjs/data/localization/hi-HI.json',
    '/storage/emulatorjs/data/localization/ja-JA.json',
    '/storage/emulatorjs/data/localization/jv-JV.json',
    '/storage/emulatorjs/data/localization/ko-KO.json',
    '/storage/emulatorjs/data/localization/pt-BR.json',
    '/storage/emulatorjs/data/localization/readme.md',
    '/storage/emulatorjs/data/localization/retroarch.json',
    '/storage/emulatorjs/data/localization/ru-RU.json',
    '/storage/emulatorjs/data/localization/zh-CN.json',
    '/storage/emulatorjs/data/minify/README.md',
    '/storage/emulatorjs/data/minify/index.js',
    '/storage/emulatorjs/data/minify/package.json',
    '/storage/emulatorjs/data/nipplejs.js',
    '/storage/emulatorjs/data/shaders.js',
    '/storage/emulatorjs/data/socket.io.min.js',
    '/storage/emulatorjs/data/storage.js',
    '/storage/emulatorjs/data/version.json',
    '/storage/emulatorjs/index.html',
    '/storage/emulatorjs/package.json'
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


