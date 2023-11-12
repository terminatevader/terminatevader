const staticDevCoffee = "TermiNateVader"
const assets = [
  "/",
  "/index.html",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
