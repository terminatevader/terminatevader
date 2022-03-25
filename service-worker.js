const cacheName = 'TermiNateVader';
const appShellFiles = [
  'https://www.terminatevader.com/images/Legoland3.jpg',
  'https://www.terminatevader.com/images/legoland2.jpg',
  'https://www.terminatevader.com/images/SMFA.png',
  'https://www.terminatevader.com/images/hanksilly.jpg',
  'https://www.terminatevader.com/images/barneysilly.jpg',
  'https://www.terminatevader.com/images/barney.jpg',
  'https://www.terminatevader.com/images/hank.jpg',
  'https://www.terminatevader.com/blogs/cooldogs',
  'https://www.terminatevader.com/images/gatlinburgwater.jpg',
  'https://www.terminatevader.com/images/gatlinburg.png',
  'https://www.terminatevader.com/blogs/myfirsttimeingatlinburgandpigeonforge.html'
  'https://www.terminatevader.com/blogs.html',
  'https://www.terminatevader.com/projects/dancingchristmaslights.html',
  'https://www.terminatevader.com/images/DCL.jpg',
  'https://www.terminatevader.com/404.html',
  'https://www.terminatevader.com/index.html',
  'https://www.terminatevader.com/projects.html',
  'https://www.terminatevader.com/js/script.js',
  'https://www.terminatevader.com/css/style.css',
  'https://www.terminatevader.com/images/TNV.ico',
  'https://www.terminatevader.com/images/TNV.png',
  'https://www.terminatevader.com/images/TTAJIE.png',
  'https://www.terminatevader.com/blogs/myplanforaftercollege',
  'https://www.terminatevader.com/images/Florida.jpg',
  'https://www.terminatevader.com/images/19g.jpg',
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
