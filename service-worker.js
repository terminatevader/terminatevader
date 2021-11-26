const cacheName = 'TermiNateVader';
const appShellFiles = [
  'https://www.terminateavader.com/404.html',
  'https://www.terminateavader.com/index.html',
  'https://www.terminateavader.com/memes.html',
  'https://www.terminateavader.com/projects.html',
  'https://www.terminateavader.com/js/script.js',
  'https://www.terminateavader.com/css/style.css',
  'https://www.terminateavader.com/images/TNV.ico',
  'https://www.terminateavader.com/images/TNV.png',
  'https://www.terminateavader.com/images/meme1.jpg',
    'https://www.terminateavader.com/images/meme11.jpg',
    'https://www.terminateavader.com/images/meme1.jpg',
  'https://www.terminateavader.com/images/meme0.jpg',
  'https://www.terminateavader.com/images/meme12.jpg',
  'https://www.terminateavader.com/images/meme13.jpg',
  'https://www.terminateavader.com/images/meme14.jpg',
  'https://www.terminateavader.com/images/meme15.jpg',
    'https://www.terminateavader.com/images/meme16.jpg',
    'https://www.terminateavader.com/images/meme17.jpg',
    'https://www.terminateavader.com/images/meme18.jpg',
    'https://www.terminateavader.com/images/meme19.jpg',
      'https://www.terminateavader.com/images/meme14.png',
    'https://www.terminateavader.com/images/meme2.jpg',
    'https://www.terminateavader.com/images/meme20.jpg',
      'https://www.terminateavader.com/images/meme21.jpg',
      'https://www.terminateavader.com/images/meme22.jpg',
      'https://www.terminateavader.com/images/meme23.jpg',
      'https://www.terminateavader.com/images/meme24.jpg',
      'https://www.terminateavader.com/images/meme25.jpg',
      'https://www.terminateavader.com/images/meme3.jpg',
      'https://www.terminateavader.com/images/meme4.jpg',
      'https://www.terminateavader.com/images/meme5.jpg',
      'https://www.terminateavader.com/images/meme6.jpg',
      'https://www.terminateavader.com/images/meme7.jpg',
      'https://www.terminateavader.com/images/meme8.jpg',
      'https://www.terminateavader.com/images/meme9.jpg',
];

console.log('Started', self);
self.addEventListener('install', function(event) {
  self.skipWaiting();
  console.log('Installed', event);
 



e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(contentToCache);
  })());



});
self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});
self.addEventListener('push', function(event) {
  console.log('Push message received', event);
});
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) { return r; }
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});
