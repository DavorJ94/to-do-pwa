const STATIC_CACHE_NAME = "static-v1";
const DYNAMIC_CACHE_NAME = "dynamic-v1";

const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/static/media/todo%20logo.c417a221.png",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
  "https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap",
  "/static/js/vendors~main.chunk.js",
  "https://fonts.gstatic.com/s/newtegomin/v5/SLXMc1fV7Gd9USdBAfPlqfNxK2pvgUFtMW35ve9SGy2R4kkIFyDSKQ.119.woff2",
  "https://fonts.gstatic.com/s/newtegomin/v5/SLXMc1fV7Gd9USdBAfPlqfNxK2pvgUFtMW35ve9SGy2R4kkIFyDSKQ.118.woff2",
  "https://fonts.gstatic.com/s/newtegomin/v5/SLXMc1fV7Gd9USdBAfPlqfNxK2pvgUFtMW35ve9SGy2R4kkIFyDSKQ.117.woff2",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.ttf",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2",
  "/favicon.png",
];
self.addEventListener("install", (e) => {
  console.log("installed");
  e.waitUntil(
    caches.open(STATIC_CACHE_NAME).then((cache) => {
      cache.addAll(STATIC_ASSETS);
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log("activate");

  e.waitUntil(
    caches.keys().then((cache) => {
      return Promise.all(
        cache
          .filter(
            (key) => key !== STATIC_CACHE_NAME && key !== DYNAMIC_CACHE_NAME
          )
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cacheRes) => {
      return (
        cacheRes ||
        fetch(e.request).then((response) => {
          return caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
            cache.put(e.request.url, response.clone());
            limitCache(DYNAMIC_CACHE_NAME, 20);
            return response;
          });
        })
      );
    })
  );
});

function limitCache(name, size) {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        caches.delete(keys[0]).then(limitCache(name, size));
      }
    });
  });
  caches.keys(name).then((keys) => {
    if (keys.length > size) {
    }
  });
}
