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
    "url": "1-js/05-data-types/04-array/article.html",
    "revision": "77e442df76a7a3a3b887e99768c316f8"
  },
  {
    "url": "1-js/05-data-types/05-array-methods/article.html",
    "revision": "787649586f196bc0b24473e0efb8cc21"
  },
  {
    "url": "1-js/05-data-types/06-iterable/article.html",
    "revision": "a37bac7ba2b427e6519e33347cee2313"
  },
  {
    "url": "1-js/05-data-types/07-map-set/article.html",
    "revision": "072637f992f70b778e2630fb4e782c96"
  },
  {
    "url": "1-js/05-data-types/08-weakmap-weakset/article.html",
    "revision": "3ef821c50b058e39f3b0d505641b36b5"
  },
  {
    "url": "1-js/05-data-types/09-keys-values-entries/article.html",
    "revision": "548500c30a8ed9c56621cf4354afebe6"
  },
  {
    "url": "1-js/05-data-types/10-destructuring-assignment/article.html",
    "revision": "a80b6511751741f5f2afc970a7521116"
  },
  {
    "url": "1-js/05-data-types/11-date/article.html",
    "revision": "24480613b8714f1e5abb2bd69d845fae"
  },
  {
    "url": "1-js/05-data-types/12-json/article.html",
    "revision": "84513694d53f1d64b4c8c7d87feb5abb"
  },
  {
    "url": "404.html",
    "revision": "9d79808160d0a68d250a0ec0b50e845c"
  },
  {
    "url": "alert-prompt-confirm/index.html",
    "revision": "9474cb499b56fdc2e8cfcb4e31aee7da"
  },
  {
    "url": "arrow-functions-basics/index.html",
    "revision": "36c45abbf22e05a5dbc3760876ff8ca2"
  },
  {
    "url": "assets/css/0.styles.d0e1634f.css",
    "revision": "b5fc1cf7ddbd8f8b08808f68feb3299a"
  },
  {
    "url": "assets/img/chrome-open-sources.dead1818.svg",
    "revision": "dead1818f56854398e24ca3bbbf28d0f"
  },
  {
    "url": "assets/img/chrome-sources-breakpoint.d93e344d.svg",
    "revision": "d93e344d355eb60c2f70f089fff21862"
  },
  {
    "url": "assets/img/chrome-sources-console.19548bd9.svg",
    "revision": "19548bd900bd8c2801dd692f662dec35"
  },
  {
    "url": "assets/img/chrome-sources-debugger-pause.e35b506a.svg",
    "revision": "e35b506a49b51363f458c8c8bea80f59"
  },
  {
    "url": "assets/img/chrome-sources-debugger-trace-1.cfa5c571.svg",
    "revision": "cfa5c5713649bc845015d8f00a1a7bc2"
  },
  {
    "url": "assets/img/chrome-tabs.6ca86952.svg",
    "revision": "6ca8695246c15249cbacad0dd4ec205a"
  },
  {
    "url": "assets/img/chrome.51a671e7.png",
    "revision": "51a671e7571b7e02b68a027fc04a1fe5"
  },
  {
    "url": "assets/img/code-style.4e1bf55c.svg",
    "revision": "4e1bf55c1445c7807f63326fb6b02174"
  },
  {
    "url": "assets/img/family-delete-refs.8ed0c2ac.svg",
    "revision": "8ed0c2ac6186cf97f254fdddad4cb1e3"
  },
  {
    "url": "assets/img/family-no-family.b6c80bce.svg",
    "revision": "b6c80bce643056c6dfc6cd3b44f72373"
  },
  {
    "url": "assets/img/family-no-father-2.268edbb0.svg",
    "revision": "268edbb0056062b6d696aa0ba8e1bf7a"
  },
  {
    "url": "assets/img/family-no-father.3661cfb1.svg",
    "revision": "3661cfb14378028b2868f4467987596e"
  },
  {
    "url": "assets/img/family.229bc950.svg",
    "revision": "229bc9506ab65f7e47897db2992af5e1"
  },
  {
    "url": "assets/img/garbage-collection-1.8090a21e.svg",
    "revision": "8090a21e61fb0de39f991832967fe142"
  },
  {
    "url": "assets/img/garbage-collection-2.4a507a46.svg",
    "revision": "4a507a46dc75f268d80a54240f1e121c"
  },
  {
    "url": "assets/img/garbage-collection-3.afa52a2e.svg",
    "revision": "afa52a2e45c5bdb546558d1e0f9afb65"
  },
  {
    "url": "assets/img/garbage-collection-4.ca549105.svg",
    "revision": "ca549105de14731faacee1abec28add0"
  },
  {
    "url": "assets/img/garbage-collection-5.ca9ffca4.svg",
    "revision": "ca9ffca4a797ff73400470dd8c0d1ee8"
  },
  {
    "url": "assets/img/ifelse_task.0934daa5.svg",
    "revision": "0934daa51c3e7cf818bc51ab8df19e12"
  },
  {
    "url": "assets/img/ifelse_task2.c13234e6.svg",
    "revision": "c13234e62046a2b38a7e525cc91cb140"
  },
  {
    "url": "assets/img/limitations.423cd157.svg",
    "revision": "423cd1579e16472ada66788d5cab630f"
  },
  {
    "url": "assets/img/memory-user-john-admin.aeeb024c.svg",
    "revision": "aeeb024ce4f4684e819e45c0a1af245a"
  },
  {
    "url": "assets/img/memory-user-john-lost.e857e2c1.svg",
    "revision": "e857e2c1f3801770fa4002fe188143a1"
  },
  {
    "url": "assets/img/memory-user-john.a12077bc.svg",
    "revision": "a12077bc8d53b0ac2db5f689a816f343"
  },
  {
    "url": "assets/img/object-user-delete.7fdc3137.svg",
    "revision": "7fdc3137e590eb42f6c1a7a7dc32ddf7"
  },
  {
    "url": "assets/img/object-user-empty.6786b5b8.svg",
    "revision": "6786b5b8270875688071e53897e8f0bb"
  },
  {
    "url": "assets/img/object-user-isadmin.72b2a20b.svg",
    "revision": "72b2a20b33d73ca5d1c7ae3f0dd286ae"
  },
  {
    "url": "assets/img/object-user-props.60c007ba.svg",
    "revision": "60c007baa481fe5ccc27295f1051db05"
  },
  {
    "url": "assets/img/object-user.85d4be73.svg",
    "revision": "85d4be7319b1f4245d484facf6f6edbe"
  },
  {
    "url": "assets/img/object.e427b37e.svg",
    "revision": "e427b37eae98873421d2d0bb24e0fc94"
  },
  {
    "url": "assets/img/pow-1.392fac93.jpg",
    "revision": "392fac93a7da317d08ffa2c8656c518e"
  },
  {
    "url": "assets/img/pow-2.5889876f.jpg",
    "revision": "5889876f08d4644236a195d1c65e076b"
  },
  {
    "url": "assets/img/pow-3.bdd47517.jpg",
    "revision": "bdd47517cfc8ed5d162cc1ac687cee62"
  },
  {
    "url": "assets/img/pow-4.2417482f.jpg",
    "revision": "2417482f4d40637b500a71b0ac77d150"
  },
  {
    "url": "assets/img/pow-full.2a68f641.jpg",
    "revision": "2a68f64184b9d18c58f3323b2e888222"
  },
  {
    "url": "assets/img/pow-min.1567c695.jpg",
    "revision": "1567c6956cffc20cbf321de14a6d03fb"
  },
  {
    "url": "assets/img/pow-nan.4bf2dd66.jpg",
    "revision": "4bf2dd66b7484276c63731e62a3ca0dc"
  },
  {
    "url": "assets/img/safari.85c13cff.png",
    "revision": "85c13cff04f28b54b546cbadad20ec62"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/variable-change.0c77cefc.svg",
    "revision": "0c77cefc7f408a20e2d79fbb44258846"
  },
  {
    "url": "assets/img/variable-contains-reference.035f3ac9.svg",
    "revision": "035f3ac90ffae08fec0c9a8669f1fb2f"
  },
  {
    "url": "assets/img/variable-copy-reference.be43f776.svg",
    "revision": "be43f776e8811373d4d313523288d4f4"
  },
  {
    "url": "assets/img/variable-copy-value.2bd43c1c.svg",
    "revision": "2bd43c1c615186dd5cc55d32d77be09c"
  },
  {
    "url": "assets/img/variable.d53d931f.svg",
    "revision": "d53d931f7d264d5678701948437bc245"
  },
  {
    "url": "assets/js/10.9650b6ca.js",
    "revision": "082157a3473abf09a3426ba3c47d7a62"
  },
  {
    "url": "assets/js/11.1c6d6528.js",
    "revision": "5123badf21e25f4c04d01df113fda098"
  },
  {
    "url": "assets/js/12.43731225.js",
    "revision": "2aa31b9f6b63447102ff79fcbb8fca5e"
  },
  {
    "url": "assets/js/13.59881730.js",
    "revision": "a390e589d878561b1c21900569e73810"
  },
  {
    "url": "assets/js/14.341aa408.js",
    "revision": "2212172e58ee5f8ae85bf2bf64118cde"
  },
  {
    "url": "assets/js/15.37f20174.js",
    "revision": "a333c5c170ec0dac11307d61ae1c2ed4"
  },
  {
    "url": "assets/js/16.e65623b0.js",
    "revision": "52f4eff4bafa42db62d90600bee3e360"
  },
  {
    "url": "assets/js/17.525277bd.js",
    "revision": "4587330d9117f491024cf52a491446d5"
  },
  {
    "url": "assets/js/18.7e5fe6b0.js",
    "revision": "8a4e44669db0c633aa7c084b171a4d92"
  },
  {
    "url": "assets/js/19.8a423a32.js",
    "revision": "4ba420fb0cdc5d129eb4d740045f03fa"
  },
  {
    "url": "assets/js/2.741d139e.js",
    "revision": "a72d94e2cd249b8dbcf2dc5b35e30200"
  },
  {
    "url": "assets/js/20.2b87c008.js",
    "revision": "0cd5ccddd842af805ee18f1d32a771ec"
  },
  {
    "url": "assets/js/21.35925ffe.js",
    "revision": "f361587a329266a65da6bd934d33fc98"
  },
  {
    "url": "assets/js/22.7220c015.js",
    "revision": "5c526bc166c38d53213e9d35ecdd1d09"
  },
  {
    "url": "assets/js/23.f91fed20.js",
    "revision": "910beedca525977d0ef999b61f09280d"
  },
  {
    "url": "assets/js/24.f55fca3f.js",
    "revision": "823cd595bd3e6822be7f014e075a09b2"
  },
  {
    "url": "assets/js/25.ab318aa9.js",
    "revision": "d13a9547f3f4502a2266f7f569b42a00"
  },
  {
    "url": "assets/js/26.2515724b.js",
    "revision": "bc45f81e5b6aad028316cf9f11f1f3de"
  },
  {
    "url": "assets/js/27.2d48422d.js",
    "revision": "b08b249db1f61ea6073be7ebedd47e46"
  },
  {
    "url": "assets/js/28.bf73e5a5.js",
    "revision": "8d660eaee985c49fc68011919a7252d8"
  },
  {
    "url": "assets/js/29.7add7094.js",
    "revision": "1db91335931ee245704395677af3955a"
  },
  {
    "url": "assets/js/3.63868dc5.js",
    "revision": "ca140a52b479927387a4ccc0089a3675"
  },
  {
    "url": "assets/js/30.f16b582f.js",
    "revision": "8e70e5988c64acabb559c9543803d4e9"
  },
  {
    "url": "assets/js/31.1cbe3b01.js",
    "revision": "88bc60c23360cd04848d89d106dd04a8"
  },
  {
    "url": "assets/js/32.49ad9f58.js",
    "revision": "36983249a52d0b31f43338358318bd29"
  },
  {
    "url": "assets/js/33.831966e9.js",
    "revision": "fca072917e5367db46a5cdc7a1ce9c3b"
  },
  {
    "url": "assets/js/34.c3cecff7.js",
    "revision": "7a382dfdd3bf885880ba3eb72ffaaf6a"
  },
  {
    "url": "assets/js/35.d60a17a1.js",
    "revision": "7c37189c9f75188c894dfcde5bc71450"
  },
  {
    "url": "assets/js/36.6a6802c9.js",
    "revision": "bbcbc77ee36310df479624810447c619"
  },
  {
    "url": "assets/js/37.aaf3f6a6.js",
    "revision": "9aa4eae30f169a42f3f960776193f00b"
  },
  {
    "url": "assets/js/38.11598708.js",
    "revision": "454078aab921062d77d5a38c5c4ad369"
  },
  {
    "url": "assets/js/39.8a3cbf96.js",
    "revision": "e2940927a8959f7a536f55f963f8bec7"
  },
  {
    "url": "assets/js/4.471c379b.js",
    "revision": "85677f3d344c34e3fe5b9ee5e9e32666"
  },
  {
    "url": "assets/js/40.146fd1a9.js",
    "revision": "100b04433e2222aa716d87fb626332a1"
  },
  {
    "url": "assets/js/41.2caf8da3.js",
    "revision": "d9773785fe810cc92a6f9c3ad47f1831"
  },
  {
    "url": "assets/js/42.583d4934.js",
    "revision": "11e882a2d9fe0f9fedb1cd07a76fc0f5"
  },
  {
    "url": "assets/js/43.39c6c351.js",
    "revision": "ab94e5a84e7b9443672aefd5961e641f"
  },
  {
    "url": "assets/js/44.fdd6dece.js",
    "revision": "2b842a41e0d82c4ae00b8885fe5cbc89"
  },
  {
    "url": "assets/js/45.3e97a42c.js",
    "revision": "d60f3a9cb53e53cf9e49c1e290c4512f"
  },
  {
    "url": "assets/js/46.8da318e6.js",
    "revision": "a562906397b609a7a4a367afc30e930b"
  },
  {
    "url": "assets/js/47.e8cce718.js",
    "revision": "cfaa65319c1dedb386ac2e3d5b2c48eb"
  },
  {
    "url": "assets/js/48.e29e5227.js",
    "revision": "0793a9436f232f36b1f1744d3d6cee65"
  },
  {
    "url": "assets/js/49.a53d3ef6.js",
    "revision": "d155aaf9c96997e0da6593fc70b39aa8"
  },
  {
    "url": "assets/js/5.e81fb6e4.js",
    "revision": "cee5d1b369e852f58e7b0dc56f0e1880"
  },
  {
    "url": "assets/js/50.ff4d9108.js",
    "revision": "efafc35159a1b76bbb73d2cfae78afb9"
  },
  {
    "url": "assets/js/51.87e52449.js",
    "revision": "dca4ed47a2cc6822a0c2681319855014"
  },
  {
    "url": "assets/js/52.6b5fe7f7.js",
    "revision": "425a59837ed6cfe1bfc1890045899bdd"
  },
  {
    "url": "assets/js/53.f3afeef2.js",
    "revision": "6b7c2b1f80732059fd294fc62b80885b"
  },
  {
    "url": "assets/js/54.5569b62a.js",
    "revision": "ed8155b8856d13955dfec89c671aaa73"
  },
  {
    "url": "assets/js/55.2e2222fd.js",
    "revision": "2f800a89d2b296c7f0a26508cc8dd213"
  },
  {
    "url": "assets/js/56.2680f090.js",
    "revision": "f3d53eedd12cd7bbb15556a4ac8c24e0"
  },
  {
    "url": "assets/js/57.5df03027.js",
    "revision": "f7eb75b06fa61e1ea4ca097b12d4f942"
  },
  {
    "url": "assets/js/58.fd022198.js",
    "revision": "be4df5d3f46535c6b34371b6633c51a3"
  },
  {
    "url": "assets/js/59.cdac29d4.js",
    "revision": "db5d900cbc0d265685ae8336a6856e20"
  },
  {
    "url": "assets/js/6.49d91683.js",
    "revision": "e7f30fdbe80f850c9660ad62f54565ff"
  },
  {
    "url": "assets/js/60.8d56ce67.js",
    "revision": "930eb729ffc35e17b81bd73c34030112"
  },
  {
    "url": "assets/js/61.025320dd.js",
    "revision": "50be94480f3b6b68faa2e80e5a771c52"
  },
  {
    "url": "assets/js/62.6d59a313.js",
    "revision": "d75bf3457fd24f813a10c306a97e6698"
  },
  {
    "url": "assets/js/63.3f382f49.js",
    "revision": "9d1a2a5e522cfbcb6a5f1a7cbb600a9c"
  },
  {
    "url": "assets/js/64.031ae36b.js",
    "revision": "d6395e102f0db1a16ee3dd760b9b4789"
  },
  {
    "url": "assets/js/65.65cab595.js",
    "revision": "613e44ea44d3a48163872095af54b3a5"
  },
  {
    "url": "assets/js/66.c110100c.js",
    "revision": "40f5cb1069dd77271962787883573be1"
  },
  {
    "url": "assets/js/67.cdcedc8b.js",
    "revision": "46cf9b426cd7dd53674175fb678a1b9f"
  },
  {
    "url": "assets/js/7.84920acb.js",
    "revision": "d42812efbac7f8c00ee793746289740c"
  },
  {
    "url": "assets/js/8.898da7ef.js",
    "revision": "adf3f7a14816d37da7e0e4765e1de69d"
  },
  {
    "url": "assets/js/9.06ec3991.js",
    "revision": "947640ac65b1652fc80d40ce8a87a169"
  },
  {
    "url": "assets/js/app.83f5da50.js",
    "revision": "953e13bb2f3448f31373fb2c8ee2704c"
  },
  {
    "url": "code-editors/index.html",
    "revision": "bbb6f6b5947695f8429a1000022470eb"
  },
  {
    "url": "code-quality/index.html",
    "revision": "4e56cfde1e6d7b0aae419885146c0ef0"
  },
  {
    "url": "coding-style/index.html",
    "revision": "c14afb553ce9a4e1004ee6725368050a"
  },
  {
    "url": "comments/index.html",
    "revision": "0cab4aaeaa0e54f4d276930a0ea408f0"
  },
  {
    "url": "comparison/index.html",
    "revision": "fdd3253955014766726bae9cc41be4ba"
  },
  {
    "url": "constructor-new/index.html",
    "revision": "c9b63a90f527dbb3f6414c57a5ddf933"
  },
  {
    "url": "contents/index.html",
    "revision": "7ec40ce55f66b3b9b26ab5c1a2763ca3"
  },
  {
    "url": "data-types/index.html",
    "revision": "1d66210c87dbf1beac211260897eb44d"
  },
  {
    "url": "debugging-chrome/index.html",
    "revision": "c56e92fe7e9dbdea72fa5df5453f27df"
  },
  {
    "url": "devtools/index.html",
    "revision": "9f538df8bb71c3660865bf8497e0a726"
  },
  {
    "url": "first-steps/index.html",
    "revision": "7226a37822f4c75ed99a00d150880bf1"
  },
  {
    "url": "function-basics/index.html",
    "revision": "c8c1b1c09d81e5f08064c53ceb3a51f9"
  },
  {
    "url": "function-expressions/index.html",
    "revision": "f2e272a779f5e368b9be2f56af8b56ca"
  },
  {
    "url": "garbage-collection/index.html",
    "revision": "16732e13522f866eda6377b6bad917a6"
  },
  {
    "url": "getting-started/index.html",
    "revision": "bf53a56d71cada27f6ac7de744a605db"
  },
  {
    "url": "hello-world/index.html",
    "revision": "5c0391c3d47ff42fbfb3ee4d8100cb20"
  },
  {
    "url": "html/debugging/head.html",
    "revision": "40f1128b6105a89deadfb1232b43453b"
  },
  {
    "url": "html/debugging/hello.js",
    "revision": "570912a4484b2c02b6098092ab18652a"
  },
  {
    "url": "html/debugging/index.html",
    "revision": "7ec02bf2226162920544c5eb503d98f1"
  },
  {
    "url": "html/devtools/bug.html",
    "revision": "3527739c64381921f30ce957e48d5b8e"
  },
  {
    "url": "html/testing-mocha/beforeafter.view/index.html",
    "revision": "0deb3be2af2cdbd6e2884e7794f190a4"
  },
  {
    "url": "html/testing-mocha/beforeafter.view/test.js",
    "revision": "7ee60a8209657bf33fe4e52e556ef8f7"
  },
  {
    "url": "html/testing-mocha/index.html",
    "revision": "d7eea9ed91e198c7a0819845bfb8ee15"
  },
  {
    "url": "html/testing-mocha/pow-1.view/index.html",
    "revision": "4efbde97d3f8b31e9d35115b3403f4eb"
  },
  {
    "url": "html/testing-mocha/pow-1.view/test.js",
    "revision": "03f508afb1863802d9eb946b75dd2811"
  },
  {
    "url": "html/testing-mocha/pow-2.view/index.html",
    "revision": "a112dae3cdb1078e7a31af7f442ab735"
  },
  {
    "url": "html/testing-mocha/pow-2.view/test.js",
    "revision": "1fe259c41c3a906e073bea900e5a429e"
  },
  {
    "url": "html/testing-mocha/pow-3.view/index.html",
    "revision": "cdaad3e605e6a265f210a1a73900ad02"
  },
  {
    "url": "html/testing-mocha/pow-3.view/test.js",
    "revision": "f0c988781439b4f2369b93f2997b5878"
  },
  {
    "url": "html/testing-mocha/pow-4.view/index.html",
    "revision": "cdaad3e605e6a265f210a1a73900ad02"
  },
  {
    "url": "html/testing-mocha/pow-4.view/test.js",
    "revision": "3fbe1ed41da2db228422b18dddbe398f"
  },
  {
    "url": "html/testing-mocha/pow-full.view/index.html",
    "revision": "22fbeaa090c33d4aacd625f30887a3e9"
  },
  {
    "url": "html/testing-mocha/pow-full.view/test.js",
    "revision": "8a32051b946164ca70abf14bcd768d86"
  },
  {
    "url": "html/testing-mocha/pow-min.view/index.html",
    "revision": "6dd72910d7eb4c9faaae4362ec217276"
  },
  {
    "url": "html/testing-mocha/pow-min.view/test.js",
    "revision": "03f508afb1863802d9eb946b75dd2811"
  },
  {
    "url": "html/testing-mocha/pow-nan.view/index.html",
    "revision": "506520416b402fb3fd2538218fee697e"
  },
  {
    "url": "html/testing-mocha/pow-nan.view/test.js",
    "revision": "8a32051b946164ca70abf14bcd768d86"
  },
  {
    "url": "icons/icon-144dpi-1024x1024.png",
    "revision": "fe1b2e766c7da16a12a6766abe8e2b2e"
  },
  {
    "url": "icons/icon-216dpi-1536x1536.png",
    "revision": "d2ecc93ac9a9d10c1824b1e5bbc25fab"
  },
  {
    "url": "icons/icon-72dpi-512x512.png",
    "revision": "fac4c909eeaf47f44152e0fc9078ce65"
  },
  {
    "url": "icons/icon-hdpi-72x72.png",
    "revision": "81dfd74abc6573de3783757f63035e18"
  },
  {
    "url": "icons/icon-ldpi-36x36.png",
    "revision": "9269fa8ec5f7b0bde882761550270c46"
  },
  {
    "url": "icons/icon-mdpi-48x48.png",
    "revision": "3473d5334d6eef8ea9a09a0868c9b15e"
  },
  {
    "url": "icons/icon-xhdpi-96x96.png",
    "revision": "d1f287a685d72428512029a5ea0a69df"
  },
  {
    "url": "icons/icon-xxhdpi-144x144.png",
    "revision": "29afc1f19ccea9621200733fc35d9f7e"
  },
  {
    "url": "icons/icon-xxxhdpi-192x192.png",
    "revision": "e7020d9b2234fd146380aea4b3deb57a"
  },
  {
    "url": "ifelse/index.html",
    "revision": "99136498b31b87fbf656ecc094f80a86"
  },
  {
    "url": "index.html",
    "revision": "225e6324c9125789e5f75588c0254e95"
  },
  {
    "url": "intro/index.html",
    "revision": "8c6a14a4904263c38ab667e9ca41b43f"
  },
  {
    "url": "javascript-specials/index.html",
    "revision": "0348c063a0a7bd2a8651d9479c817206"
  },
  {
    "url": "js/index.html",
    "revision": "46b2e571dfa2745b93cd5bfc8c2effd2"
  },
  {
    "url": "logical-operators/index.html",
    "revision": "c1cdba9e21b9bb2ffa50880cfe730218"
  },
  {
    "url": "logo.png",
    "revision": "fe1b2e766c7da16a12a6766abe8e2b2e"
  },
  {
    "url": "manuals-specifications/index.html",
    "revision": "fa9de8e7adb85300e362e35864046545"
  },
  {
    "url": "ninja-code/index.html",
    "revision": "d618450589163de5bce00463c8a626fe"
  },
  {
    "url": "nullish-coalescing-operator/index.html",
    "revision": "d471b5788ce42fbee6f4fda8eb26c5e2"
  },
  {
    "url": "number/index.html",
    "revision": "447d7a0ad44a2da780a95bf1a31f11f1"
  },
  {
    "url": "object-basics/index.html",
    "revision": "14b9bdf2dcdd862c1be56db60eeb8535"
  },
  {
    "url": "object-copy/index.html",
    "revision": "8bf58d94c3cf5212180949a059d6e201"
  },
  {
    "url": "object-methods/index.html",
    "revision": "9328af1036cda01a555dad842ae4af34"
  },
  {
    "url": "object-toprimitive/index.html",
    "revision": "a825dbd69b28859bc07b0517ceeebbae"
  },
  {
    "url": "object/index.html",
    "revision": "215d1c256084bb0af3c04f9a125c42e4"
  },
  {
    "url": "operators/index.html",
    "revision": "63ed477b24900b019d9d1b71339052a7"
  },
  {
    "url": "optional-chaining/index.html",
    "revision": "e6501c847c5704acf1a5d3bbbfaa379a"
  },
  {
    "url": "polyfills/index.html",
    "revision": "ecb25a7c4bc140ddafe3ce643f65fb81"
  },
  {
    "url": "primitives-methods/index.html",
    "revision": "f0085518f9536d1cd7a5c8b05597ce36"
  },
  {
    "url": "strict-mode/index.html",
    "revision": "9334c7a9d37a43d4158447d2c1204631"
  },
  {
    "url": "string/index.html",
    "revision": "951b3004243a2d5cee26f025dddab7bd"
  },
  {
    "url": "structure/index.html",
    "revision": "48096c3d7bd800058cc4a5469f9ff696"
  },
  {
    "url": "switch/index.html",
    "revision": "38b372a793d9d3a725b9e0d6fed11a28"
  },
  {
    "url": "symbol/index.html",
    "revision": "b34607d39b79279f2e0c574c8093eb44"
  },
  {
    "url": "testing-mocha/index.html",
    "revision": "5f3dad32a66abbed558dcfa8dae94b71"
  },
  {
    "url": "type-conversions/index.html",
    "revision": "e66aa70fef8cc3e214854d10480738cf"
  },
  {
    "url": "types/index.html",
    "revision": "4437b0eb92b9f341bc9c4b6726e71184"
  },
  {
    "url": "variables/index.html",
    "revision": "23e4fc4fed23a6c21dbd2368a49430f1"
  },
  {
    "url": "while-for/index.html",
    "revision": "709ae1fe725c0bf974aa2c3841420a38"
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
