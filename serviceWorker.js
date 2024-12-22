

// Establish a cache name
const cacheName = 'MyFancyCacheName_v1';

// Assets to precache
const precachedAssets = [
  "/index.hhtml",
  "/cooldogs.html",
  "/myexperienceatlegolandflorida.html",
  "/myfirsttimeingatlinburgandpigeonforge.html",
  "/myplanforaftercollege.html",
  "/style.css",
  "/script.js",
  "/images/hank.jpg",
"/images/hank.webp",
  "/images/Florida.jpg",
"/images/Florida.webp",
  "https://pagead2.googlesyndication.com/pagead/js/rum.js?fcd=true",
  "https://tpc.googlesyndication.com/pagead/js/r20231108/r20110914/abg_lite_fy2021.js",
  "https://tpc.googlesyndication.com/pagead/js/r20231108/r20110914/abg_lite_fy2021.js",
  "https://tpc.googlesyndication.com/pagead/js/r20231108/r20110914/elements/html/interstitial_ad_frame_fy2021.js",
  "https://tpc.googlesyndication.com/pagead/js/r20231108/r20110914/client/qs_click_protection_fy2021.js",
  "https://tpc.googlesyndication.com/pagead/js/r20231108/r20110914/client/qs_click_protection_fy2021.js",
  "https://tpc.googlesyndication.com/pagead/js/r20231108/r20110914/elements/html/fullscreen_api_adapter_fy2021.js",
  "https://tpc.googlesyndication.com/pagead/js/r20231108/r20110914/client/window_focus_fy2021.js",
  "https://tpc.googlesyndication.com/pagead/js/r20231108/r20110914/client/window_focus_fy2021.js",
  "https://tpc.googlesyndication.com/pagead/js/r20231108/r20110914/client/load_preloaded_resource_fy2021.js",
  "https://tpc.googlesyndication.com/pagead/js/r20231108/r20110914/client/load_preloaded_resource_fy2021.js",
"https://www.gstatic.com/mysidia/a6de5423b7c632060e8f86136bd5d27a.js?tag=mysidia_one_click_handler_one_afma_2019",
  "https://www.gstatic.com/mysidia/a6de5423b7c632060e8f86136bd5d27a.js?tag=mysidia_one_click_handler_one_afma_2019",
  "https://www.gstatic.com/mysidia/5516ad7443639b907676db94c2749b10.js?tag=scream/cartman_vignette",
  "https://www.gstatic.com/mysidia/38bcf84a6c98f8ab5c7e5b9a6f0eaec8.js?tag=client_fast_engine_2019",
"https://github.githubassets.com/images/mona-loading-dark.gif",
  "https://www.w3schools.com/w3css/4/w3.css",
  "https://www.w3schools.com/lib/w3data.js",
  "/images/19g.jpg",
  "/images/barney.jpg",
  "/images/hanksilly.jpg",
  "/images/barneysilly.jpg",
"/images/gatlinburgwater.jpg",
  "/images/gatlinburgwater.webp",
  "/images/legoland2.jpg",
"/images/legoland2.webp",
"/images/Legoland3.jpg",
  "/images/gatlinburg.png"
];

self.addEventListener('install', (event) => {
  // Precache assets on install
  event.waitUntil(caches.open(cacheName).then((cache) => {
    return cache.addAll(precachedAssets);
  }));
});

self.addEventListener('fetch', (event) => {
  // Is this one of our precached assets?
  const url = new URL(event.request.url);
  const isPrecachedRequest = precachedAssets.includes(url.pathname);

  if (isPrecachedRequest) {
    // Grab the precached asset from the cache
    event.respondWith(caches.open(cacheName).then((cache) => {
      return cache.match(event.request.url);
    }));
  } else {
    // Go to the network
    return;
  }
});
