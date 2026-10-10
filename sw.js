// notey. no longer runs in a browser (Yusuf, 10 Oct 2026). Browsers that opened the old site installed a service worker
// from this very address (/sw.js) that kept the old app cached, so they would keep showing it. A browser checks this
// file for changes on every visit; the new worker below takes over at once, deletes notey's caches, unregisters itself
// and sends the open pages to the download page. It handles no requests, so every request goes to the network.
// It touches no IndexedDB or localStorage: whatever was saved in the browser stays where it is.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil((async () => {
  try {for (const key of await caches.keys()) if (key.startsWith('nota-')) await caches.delete(key);} catch {/* nothing cached */}
  const page = new URL('./?eski=1', self.registration.scope).href;
  try {
    for (const client of await self.clients.matchAll({type: 'window', includeUncontrolled: true})) {
      try {await client.navigate(page);} catch {/* the page is gone or not ours to move */}
    }
  } catch {/* no pages open */}
  await self.registration.unregister();
})()));
