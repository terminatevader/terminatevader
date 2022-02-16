const cacheName = 'TermiNateVader';
const appShellFiles = [
  'https://www.terminatevader.com/images/gatlinburgwater.jpg',
  'https://www.terminatevader.com/images/gatlinburg.png',
  'https://www.terminatevader.com/blogs/myfirsttimeingatlinburgandpigeonforge.html'
  'https://www.terminatevader.com/blogs.html',
  'https://www.terminatevader.com/projects/dancingchristmaslights.html',
  'https://www.terminatevader.com/images/DCL.jpg',
  'https://www.terminatevader.com/404.html',
  'https://www.terminatevader.com/index.html',
  'https://www.terminatevader.com/memes.html',
  'https://www.terminatevader.com/projects.html',
  'https://www.terminatevader.com/js/script.js',
  'https://www.terminatevader.com/css/style.css',
  'https://www.terminatevader.com/images/TNV.ico',
  'https://www.terminatevader.com/images/TNV.png',
  'https://www.terminatevader.com/images/meme1.jpg',
    'https://www.terminatevader.com/images/meme11.jpg',
    'https://www.terminatevader.com/images/meme1.jpg',
  'https://www.terminatevader.com/images/meme0.jpg',
  'https://www.terminatevader.com/images/meme12.jpg',
  'https://www.terminatevader.com/images/meme13.jpg',
  'https://www.terminatevader.com/images/meme14.jpg',
  'https://www.terminatevader.com/images/meme15.jpg',
    'https://www.terminatevader.com/images/meme16.jpg',
    'https://www.terminatevader.com/images/meme17.jpg',
    'https://www.terminatevader.com/images/meme18.jpg',
    'https://www.terminatevader.com/images/meme19.jpg',
      'https://www.terminatevader.com/images/meme14.png',
    'https://www.terminatevader.com/images/meme2.jpg',
    'https://www.terminatevader.com/images/meme20.jpg',
      'https://www.terminatevader.com/images/meme21.jpg',
      'https://www.terminatevader.com/images/meme22.jpg',
      'https://www.terminatevader.com/images/meme23.jpg',
      'https://www.terminatevader.com/images/meme24.jpg',
      'https://www.terminatevader.com/images/meme25.jpg',
      'https://www.terminatevader.com/images/meme3.jpg',
      'https://www.terminatevader.com/images/meme4.jpg',
      'https://www.terminatevader.com/images/meme5.jpg',
      'https://www.terminatevader.com/images/meme6.jpg',
      'https://www.terminatevader.com/images/meme7.jpg',
      'https://www.terminatevader.com/images/meme8.jpg',
      'https://www.terminatevader.com/images/meme9.jpg',
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
