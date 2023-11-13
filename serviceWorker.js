const TNV = "TermiNateVader"
const assets = [
  "/",
  "/index.hhtml"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

