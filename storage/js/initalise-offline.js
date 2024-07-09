if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('storage/js/offline-worker.js').then(function(registration) {
            console.log('service worker initalised! scope:', registration.scope);
 
            navigator.serviceWorker.addEventListener('message', function(event) {
                if (event.data === 'cached') {
                    document.getElementById('cache-status').style.display = 'block';
                }
            });
        }, function(error) {
            console.log('ack, error with serviceworker! ', error);
        });
    });
}
