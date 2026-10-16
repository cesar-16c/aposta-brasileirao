// Service worker mínimo: só habilita a instalação. Não guarda dados em cache, então o bolão sempre mostra o que está no Firebase.
self.addEventListener('install',function(){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',function(){});
