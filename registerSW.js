if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js', { scope: '/juan' })
    })
    window.addEventListener("fetch", e=> {
      if (e.request.mode === "navigate") {
        e.respondWith(
          (async () => {
            try {
              const preloadResponse = await e.preloadResponse;
              if (preloadResponse) {
                return preloadResponse;
              }

              // Siempre usa la red primero.
              const networkResponse = await fetch(e.request);
              return networkResponse;
            } catch (error) {
              console.log("Estas sin conexion");
            }
          })
        )
      }
    })
  }