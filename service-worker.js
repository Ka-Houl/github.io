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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4eda28910925a0c3ed9679887a5195f3"
  },
  {
    "url": "assets/css/0.styles.0bb2b5d3.css",
    "revision": "bde68fcb4e65cbf125a4d3086e55dbd2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.d1dca7f6.js",
    "revision": "80b74cf11ae19d489451d75db6bf603e"
  },
  {
    "url": "assets/js/10.0f4090f0.js",
    "revision": "b7f35da477469b3c4278746558f39126"
  },
  {
    "url": "assets/js/11.9ec2edb3.js",
    "revision": "6afb96dfec7fd0037a5e357c96c5ea54"
  },
  {
    "url": "assets/js/12.41d1c38e.js",
    "revision": "8c73e39a22421e4744f238dc7ceb5ba7"
  },
  {
    "url": "assets/js/13.2aadfb68.js",
    "revision": "b243dd7cef1a2b7f8d20afe22dded546"
  },
  {
    "url": "assets/js/14.c4a6631d.js",
    "revision": "3fedb3ebefaeee1a2498d943b0e68b72"
  },
  {
    "url": "assets/js/15.3d1ae141.js",
    "revision": "b4324372df580f0f039c73651c121078"
  },
  {
    "url": "assets/js/16.28a1d754.js",
    "revision": "81922adcbb7d1e235ba9267a2bfa1aa1"
  },
  {
    "url": "assets/js/17.2fc6e4dd.js",
    "revision": "4ffbcc898e6baf0fe97ed513e48a5d14"
  },
  {
    "url": "assets/js/18.bfebd037.js",
    "revision": "0877bfcd6f931607211918d5afd0ae67"
  },
  {
    "url": "assets/js/19.b425e233.js",
    "revision": "2745688bb36b695ae9d146a6cbd786ce"
  },
  {
    "url": "assets/js/2.0a52b522.js",
    "revision": "0868c3fac14819d0b780b1eaa57fcc00"
  },
  {
    "url": "assets/js/20.5d3ca18c.js",
    "revision": "37a07fda52a492bebe2c4a679626ba46"
  },
  {
    "url": "assets/js/21.446b96d8.js",
    "revision": "887da5aa9efd59deb2e778485f7b087c"
  },
  {
    "url": "assets/js/22.dea504aa.js",
    "revision": "ec8e667e640fb4034197dbf1a9829ade"
  },
  {
    "url": "assets/js/23.bf6a5243.js",
    "revision": "173c7b5e6737d9769d5ee35eeaf2f5d8"
  },
  {
    "url": "assets/js/24.53be8142.js",
    "revision": "b55fb55374963df57a052469cf37a171"
  },
  {
    "url": "assets/js/25.a59498ca.js",
    "revision": "327498c7f9da497b43879bf43b5be040"
  },
  {
    "url": "assets/js/26.35d52534.js",
    "revision": "ab749a4a7d14221eb7593a3ad26dec6e"
  },
  {
    "url": "assets/js/27.5c9e94ea.js",
    "revision": "0253e63100e9a41a9c0c0d288a69d94d"
  },
  {
    "url": "assets/js/28.4650e7cc.js",
    "revision": "7ff7b39419446d2bc3f72e6125939a6e"
  },
  {
    "url": "assets/js/29.8acc75fc.js",
    "revision": "68e923d7b175cfab84f5c31c3900021f"
  },
  {
    "url": "assets/js/3.a898ecd2.js",
    "revision": "5a74ccbeb8b3f227feff80d3791cc393"
  },
  {
    "url": "assets/js/30.9f8f0bb9.js",
    "revision": "08ca63a426d4fb36daab7910199f2203"
  },
  {
    "url": "assets/js/31.b94febdd.js",
    "revision": "5827dd2779f01114a84a06445930b94e"
  },
  {
    "url": "assets/js/32.ce50ef21.js",
    "revision": "a8d1de3af1ab4061f68647188a08aeee"
  },
  {
    "url": "assets/js/33.ce2b74ce.js",
    "revision": "b285cf6038f0a1dedda7cb95fe0b24f9"
  },
  {
    "url": "assets/js/34.0dbc4bea.js",
    "revision": "1c63ee2853d8eeb3397efa5f783e38ba"
  },
  {
    "url": "assets/js/35.924d7260.js",
    "revision": "89101ddbfee6d39c8bef973007a73e29"
  },
  {
    "url": "assets/js/36.e5fb2983.js",
    "revision": "88b4275a0743c947c0bf8cd3537aa421"
  },
  {
    "url": "assets/js/37.989c6447.js",
    "revision": "57308ada6e5d2c2339424578f2039555"
  },
  {
    "url": "assets/js/38.90438ca8.js",
    "revision": "e9f827adfe538ed69983e977d7a8e645"
  },
  {
    "url": "assets/js/39.cb535a98.js",
    "revision": "0ada7be6328a8c1985e9caedd5df8c59"
  },
  {
    "url": "assets/js/4.bd36354d.js",
    "revision": "e2a8116f73d87e4eef2ab5ed477ef726"
  },
  {
    "url": "assets/js/40.b6d84f4a.js",
    "revision": "1a588066c69012bd42c95a530ee9ca09"
  },
  {
    "url": "assets/js/41.0b218d26.js",
    "revision": "442caa138c263978dd953cc49447f7a1"
  },
  {
    "url": "assets/js/42.aaeded4b.js",
    "revision": "960587c6812b3d3d6661e5586f45f212"
  },
  {
    "url": "assets/js/43.40275b09.js",
    "revision": "ab982c3b435fd9e3cf99926c2f49fc6f"
  },
  {
    "url": "assets/js/44.3e88abff.js",
    "revision": "8097ff1a50fbf7a8582e5fc605b548e6"
  },
  {
    "url": "assets/js/45.029371ec.js",
    "revision": "39540f54200dced1946428c2049b54cd"
  },
  {
    "url": "assets/js/46.9629c775.js",
    "revision": "e60de5ae29b3382c033b110df56ab0ba"
  },
  {
    "url": "assets/js/47.30eb1244.js",
    "revision": "e9c6c350d82bf0c9b0a5fdd25a6c15d6"
  },
  {
    "url": "assets/js/48.355d37ca.js",
    "revision": "f6e11adb01bf3bfdaef690a934016468"
  },
  {
    "url": "assets/js/49.dca9893b.js",
    "revision": "0813f15053faf9cb0ada1e2189cc1906"
  },
  {
    "url": "assets/js/5.d9e25f21.js",
    "revision": "c6e4da98f1899fb61d3520b63a2955ff"
  },
  {
    "url": "assets/js/50.ee3fb355.js",
    "revision": "594ba3a1508a6288bc0f097d2db0372d"
  },
  {
    "url": "assets/js/51.54f13592.js",
    "revision": "9671005fd80cb5d1fb3bdfda244c66a4"
  },
  {
    "url": "assets/js/52.1e531006.js",
    "revision": "446797a16ef893efeb458d6d18992ed9"
  },
  {
    "url": "assets/js/53.9cd70c65.js",
    "revision": "a4a658179fa1b95540ff5eda66f94fd3"
  },
  {
    "url": "assets/js/54.f76cb6e8.js",
    "revision": "1767bb43f3fb7cad53e20b946f504c29"
  },
  {
    "url": "assets/js/55.58104ed1.js",
    "revision": "1d85cc8759e2bd1a85a8502ebec886da"
  },
  {
    "url": "assets/js/56.19e56f9b.js",
    "revision": "7a372d5cfe11b499ab25f164383791fa"
  },
  {
    "url": "assets/js/57.bbd63782.js",
    "revision": "a665078135d5f58140cbfcf2f2caa04f"
  },
  {
    "url": "assets/js/58.fa67a661.js",
    "revision": "2ef51036dc9e71e7084eb5f1d2103376"
  },
  {
    "url": "assets/js/59.c5c5ed19.js",
    "revision": "73cc46ae47b5023703e17db5e3be4277"
  },
  {
    "url": "assets/js/6.80955a3d.js",
    "revision": "604bd910af29e9ff1c92be43684a8790"
  },
  {
    "url": "assets/js/60.c743e22d.js",
    "revision": "60f9b7e53bfb9cecf4b7b8d0f19ad37a"
  },
  {
    "url": "assets/js/61.ab11ec01.js",
    "revision": "701e84eb81392715ca6e3f77f3d98da0"
  },
  {
    "url": "assets/js/62.81386a8f.js",
    "revision": "a381993ed493a317db828a53dea3a823"
  },
  {
    "url": "assets/js/63.a0b5acda.js",
    "revision": "5efcef28d3f8c9c06b809308618dbacd"
  },
  {
    "url": "assets/js/64.43a373a6.js",
    "revision": "2ffb3f0c73271d004898f0d8303e49af"
  },
  {
    "url": "assets/js/65.84a8c869.js",
    "revision": "016cbb01029d4cfec55a77e65325519b"
  },
  {
    "url": "assets/js/66.811fecc2.js",
    "revision": "de52abff25f9de95f54bbd62c4266c64"
  },
  {
    "url": "assets/js/67.65b973b0.js",
    "revision": "f0929274a8c27c15eba14f62d1354e27"
  },
  {
    "url": "assets/js/68.e388cb2d.js",
    "revision": "f4ac8059b02d71d25c4367053d80a075"
  },
  {
    "url": "assets/js/69.7a0bf407.js",
    "revision": "1ab81f83e3e6b4c073626e41d27a32dd"
  },
  {
    "url": "assets/js/7.bbdb394c.js",
    "revision": "082d3a6d13eeecb0a35385a42f516c8a"
  },
  {
    "url": "assets/js/70.6fc40fba.js",
    "revision": "6f87f91ce469b8978b88fea84d1f15bc"
  },
  {
    "url": "assets/js/71.9094bc72.js",
    "revision": "d29be37f1c0761a433cc55ea04e17b3d"
  },
  {
    "url": "assets/js/72.e49c5624.js",
    "revision": "afff5b5d485374da32205adcdc4365be"
  },
  {
    "url": "assets/js/73.0b101649.js",
    "revision": "1c0fdcc0a5a0f3be868429c139d9a30f"
  },
  {
    "url": "assets/js/74.6220b790.js",
    "revision": "5a10465efd7f5c1aee8ca873b5079b86"
  },
  {
    "url": "assets/js/75.46970f2d.js",
    "revision": "9ea9f5959362b67755728e39ff49001a"
  },
  {
    "url": "assets/js/app.e18b7689.js",
    "revision": "9df62ce7344c7bb1cdbfb70e72a9c19d"
  },
  {
    "url": "assets/js/vendors~docsearch.a22722c0.js",
    "revision": "e9fa6766bf0e93e437228d77d71c75d3"
  },
  {
    "url": "base/browser/browser-cache.html",
    "revision": "6804d924150fc5ced84fcb15a3d4a730"
  },
  {
    "url": "base/browser/browser-render.html",
    "revision": "437afe2260752bd9cce9eadb943f2e30"
  },
  {
    "url": "base/browser/browser-start.html",
    "revision": "76d4c744eaefcc4e9c54b0a45c82c01d"
  },
  {
    "url": "base/browser/cross-domain.html",
    "revision": "35bad9727dfb765157e2b8cae37dede2"
  },
  {
    "url": "base/browser/DNS.html",
    "revision": "1b08c262f7871bd899bed7345f2c3a99"
  },
  {
    "url": "base/browser/dom-event.html",
    "revision": "dddab140b1881112d13dfef3a2b944b3"
  },
  {
    "url": "base/browser/http-history.html",
    "revision": "64d1323e535f74eb040279bd26e377d4"
  },
  {
    "url": "base/browser/http-message.html",
    "revision": "45aeac0b040b4faf1bddbceff1dd86fb"
  },
  {
    "url": "base/browser/http-methods.html",
    "revision": "8b0c169f9766733d176473261a8ba56c"
  },
  {
    "url": "base/browser/http-status.html",
    "revision": "755487637ada4559816f5b13395a5e8b"
  },
  {
    "url": "base/browser/js-gc.html",
    "revision": "9bb8e68cb04084e8e0ec201061ceee3f"
  },
  {
    "url": "base/browser/network-OSI.html",
    "revision": "fb4e14e95000ad41e91cda84aa9b5d66"
  },
  {
    "url": "base/browser/network-tcp.html",
    "revision": "cce8f57a324fc1494db550690f435168"
  },
  {
    "url": "base/browser/network-websocket.html",
    "revision": "0f713216af73ab83edbe24123b5d5f05"
  },
  {
    "url": "base/browser/reference.html",
    "revision": "ae04f42315cebe07ac8df23b65895564"
  },
  {
    "url": "base/browser/web-attack.html",
    "revision": "8612384f0efa130ca488dd790ea9e1e1"
  },
  {
    "url": "base/browser/web-security.html",
    "revision": "8bcbb8ead64b1d2c84fc20483565bdfa"
  },
  {
    "url": "base/browser/web-storage.html",
    "revision": "c284d54c7eea7a83bb2e15c2b30b825a"
  },
  {
    "url": "base/css/css-bfc.html",
    "revision": "883f83a85ffc5d7c463aba87b05dff5b"
  },
  {
    "url": "base/css/css-box.html",
    "revision": "b0b77892a310e029b8008f0977f27f67"
  },
  {
    "url": "base/css/css-cc.html",
    "revision": "335eb910b65a43a5c1b88badba6522d7"
  },
  {
    "url": "base/css/css-ifc.html",
    "revision": "72ac3fe1bbf640586b28358664a8a1ab"
  },
  {
    "url": "base/css/css-issues.html",
    "revision": "aad598d127cfca833f5d855db9ce5df4"
  },
  {
    "url": "base/css/css-knowledge.html",
    "revision": "caaeb43f8aed71567f52d51a2f6013bc"
  },
  {
    "url": "base/css/css-layout.html",
    "revision": "c1f7f8eccde550de3bd59f5ce6d16070"
  },
  {
    "url": "base/css/css-rule.html",
    "revision": "c32c126629b4d7f7d076cbd3e0bbcb22"
  },
  {
    "url": "base/css/css-text.html",
    "revision": "7726a6c0ada7e4a0942a41f8578da30d"
  },
  {
    "url": "base/index.html",
    "revision": "37822fc17aa4167fab233c4964b8a2dd"
  },
  {
    "url": "base/javascript/arguments.html",
    "revision": "742c79051843b0f096c11da93f00c553"
  },
  {
    "url": "base/javascript/arrow-function.html",
    "revision": "98caebd0b16576f7aaef738fb110a947"
  },
  {
    "url": "base/javascript/async-achieve.html",
    "revision": "33421b6d43d318518df8cad6ab823ffd"
  },
  {
    "url": "base/javascript/async-plan.html",
    "revision": "1a6537d7b356a187cf0098914e395e29"
  },
  {
    "url": "base/javascript/closure.html",
    "revision": "70879f11051da0611e0bec8cbb7eda08"
  },
  {
    "url": "base/javascript/decorator.html",
    "revision": "b5a9cb837e5ce022724f0692215f42b0"
  },
  {
    "url": "base/javascript/ECS.html",
    "revision": "33115a81216c037c78db22aa7c0ab4a8"
  },
  {
    "url": "base/javascript/event-loop.html",
    "revision": "e8cb9a5273a5581bfde3e13cbacd2d53"
  },
  {
    "url": "base/javascript/module.html",
    "revision": "e35df7de2871d8da2463d7f5ce87e6c0"
  },
  {
    "url": "base/javascript/prototype.html",
    "revision": "6bbcfd8787cf22f6dd89c9c39248fe14"
  },
  {
    "url": "base/javascript/proxy-reflect.html",
    "revision": "c85d459591013c4b23b240eb671d0d6d"
  },
  {
    "url": "base/javascript/reference.html",
    "revision": "1fee32da0b9e9d7b49e6733a4aff9dcd"
  },
  {
    "url": "base/javascript/scope-chain.html",
    "revision": "09e506aef393a7b67abab57d0c3d9196"
  },
  {
    "url": "base/javascript/scope.html",
    "revision": "9d87450844a4cefdb77917ddc65f5cba"
  },
  {
    "url": "base/javascript/set-map.html",
    "revision": "f2c9adfc1b99e52da3199b52e893706d"
  },
  {
    "url": "base/javascript/this.html",
    "revision": "95c661c38296de9af0a48bc8c802cbb6"
  },
  {
    "url": "base/javascript/ts.html",
    "revision": "0e1de63df9a495ff3c0fadec1a56fe9b"
  },
  {
    "url": "base/javascript/var.html",
    "revision": "c154865682a9972cb830b5f9c1df6fc5"
  },
  {
    "url": "base/javascript/VO.html",
    "revision": "8c930ed5ad34bc57fa37efd5337fca31"
  },
  {
    "url": "code/index.html",
    "revision": "db1112ced35f7731aa88100045b57c89"
  },
  {
    "url": "index.html",
    "revision": "8e15beca444265544f4bc680c7621554"
  },
  {
    "url": "logo.png",
    "revision": "f85f82780b0ebed5e2eae82a64fe3022"
  },
  {
    "url": "profile.jpg",
    "revision": "a074af8a62f3a19e43d9c70b7e924706"
  },
  {
    "url": "writeScenario/index.html",
    "revision": "550655bedddb8aa0997f1e716ae87eb8"
  },
  {
    "url": "writeScenario/prototype/function.html",
    "revision": "2291c253e1437b703849a5e889011106"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
