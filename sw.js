const CACHE = 'notes-sathi-landing-v1';
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(['./','./index.html','./manifest.json','./assets/icon-192.png','./assets/icon-512.png']))));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))));
