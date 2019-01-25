/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  "/static/workbox/workbox-v3.6.3/workbox-sw.js",
  "/static/workbox/next-precache-manifest-c9963e3fbacfe5a1d1e3a23098ffde32.js"
);

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/_next/static/icon_192x192.png",
    "revision": "082e8787e05b34cc0ab6a019ea5d0e95"
  },
  {
    "url": "/_next/static/icon_512x512.png",
    "revision": "19ef79468926516cc7bd97cfe5fd40de"
  },
  {
    "url": "/_next/static/manifest.json",
    "revision": "ff680535e3dd697497a29e9ca491bd0c"
  },
  {
    "url": "/_next/static/commons/main-020b2bc4e7fec12c8c70.js",
    "revision": "011815b4868495d6664df5e7799ce044"
  },
  {
    "url": "/_next/static/commons/main-2b47eb1ebe2c1cf6ec8d.js",
    "revision": "7856b939055a447ecc8d66ff37869941"
  },
  {
    "url": "/_next/static/commons/main.js",
    "revision": "b690d9f1b3fee89176334c938086930b"
  },
  {
    "url": "/_next/static/commons/main.js.map",
    "revision": "2719384e8d8eeaeb2c2cbb2b45addbb5"
  },
  {
    "url": "/_next/static/commons/manifest.js",
    "revision": "2844b554478563cc1f6303237cb9348c"
  },
  {
    "url": "/_next/static/commons/manifest.js.map",
    "revision": "d539ed274ea54a5cdde40530b0b02d28"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute("/", workbox.strategies.networkFirst({ "cacheName":"html-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/\/post/, workbox.strategies.networkFirst({ "cacheName":"html-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/api.tvmaze.com\/shows/, workbox.strategies.staleWhileRevalidate({ "cacheName":"api-cache", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[200]})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/api.tvmaze.com\/search\/shows?q=batman/, workbox.strategies.staleWhileRevalidate({ "cacheName":"api-cache", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[200]})] }), 'GET');
workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif)/, workbox.strategies.networkFirst({ "cacheName":"image-cache", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
