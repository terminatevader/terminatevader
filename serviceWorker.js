const TNV = "TermiNateVader"
const assets = [
  "/",
  "/index.hhtml",
  "/cooldogs.html",
  "/myexperienceatlegolandflorida.html",
  "/myfirsttimeingatlinburgandpigeonforge.html",
  "/myplanforaftercollege.html",
  "/style.css",
  "/script.js",
  "/images/hank.jpg",
  "/images/Florida.jpg,
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
  "/images/19g.jpg
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
