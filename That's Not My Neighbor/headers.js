self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (e) => {
  const newHeaders = new Headers(e.request.headers);
  newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");
  newHeaders.set("Cross-Origin-Embedder-Policy", "require-corp");

  e.respondWith(
    fetch(e.request, { headers: newHeaders, mode: "same-origin" })
      .then(res => {
        const resHeaders = new Headers(res.headers);
        resHeaders.set("Cross-Origin-Opener-Policy", "same-origin");
        resHeaders.set("Cross-Origin-Embedder-Policy", "require-corp");
        return new Response(res.body, { status: res.status, headers: resHeaders });
      })
      .catch(() => fetch(e.request))
  );
});
