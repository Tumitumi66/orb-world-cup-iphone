'use strict';
const CACHE='orb-iphone-v10-20261104a';
const BASE=new URL('./',self.location.href);
const FILES=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png','./ASSET-LICENSES.txt'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES.map(p=>new Request(new URL(p,BASE),{cache:'reload'})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('orb-iphone-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==BASE.origin)return;if(event.request.mode==='navigate'){event.respondWith(fetch(event.request).then(response=>{if(response.ok){const clone=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(new URL('./index.html',BASE),clone)));}return response;}).catch(()=>caches.match(new URL('./index.html',BASE))));}else{event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request)));}});
