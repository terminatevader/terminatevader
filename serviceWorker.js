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
