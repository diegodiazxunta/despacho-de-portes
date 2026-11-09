/* Service worker de Despacho de portes.
   No guarda copias del programa: siempre carga la versión publicada, así las
   actualizaciones llegan sin hacer nada. Solo muestra un aviso si no hay conexión. */
const SIN_CONEXION = '<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>Sin conexión</title><body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#F0F2F5;font:16px system-ui,sans-serif;color:#141B25">'
  + '<div style="max-width:340px;padding:24px;text-align:center"><div style="width:56px;height:56px;margin:0 auto 14px;border-radius:12px;background:#F2B200;display:grid;place-items:center;font:700 24px system-ui">DP</div>'
  + '<h1 style="font-size:20px;margin:0 0 8px">Sin conexión</h1><p style="margin:0 0 16px;color:#5A6473">Despacho de portes guarda tu trabajo en la nube y necesita internet. Conéctate y vuelve a intentarlo.</p>'
  + '<button onclick="location.reload()" style="font:600 15px system-ui;padding:9px 16px;border:0;border-radius:8px;background:#0B4F8C;color:#fff">Reintentar</button></div></body></html>';
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request).catch(() => new Response(SIN_CONEXION, { headers: { "Content-Type": "text/html; charset=utf-8" } })));
});
