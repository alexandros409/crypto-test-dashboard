self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
  // Απαραίτητο fetch event για να εγκρίνει ο Chrome την εγκατάσταση
});
