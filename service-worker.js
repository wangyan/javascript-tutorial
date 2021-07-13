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
    "url": "1-js/05-data-types/01-primitives-methods/article.html",
    "revision": "de2de03d359c05f67cf622b165774954"
  },
  {
    "url": "1-js/05-data-types/02-number/article.html",
    "revision": "7950f373e7c68d6eba11e772e1e924b6"
  },
  {
    "url": "1-js/05-data-types/03-string/article.html",
    "revision": "b59a6d45c42c2b3dfa771b9cb412b4fd"
  },
  {
    "url": "1-js/05-data-types/04-array/article.html",
    "revision": "20e4638ae8417412a641cd836f6069c0"
  },
  {
    "url": "1-js/05-data-types/05-array-methods/article.html",
    "revision": "80a646152262b263293556b7c19ea426"
  },
  {
    "url": "1-js/05-data-types/06-iterable/article.html",
    "revision": "22e42c2f8a9ea92033725858e90b68a0"
  },
  {
    "url": "1-js/05-data-types/07-map-set/article.html",
    "revision": "4e36647aeb57e4cd32f4dd0353635441"
  },
  {
    "url": "1-js/05-data-types/08-weakmap-weakset/article.html",
    "revision": "d56454aaf35ebaf6606b9c891f6bdbc5"
  },
  {
    "url": "1-js/05-data-types/09-keys-values-entries/article.html",
    "revision": "abd22fd90155121d41d7bc715cbe813e"
  },
  {
    "url": "1-js/05-data-types/10-destructuring-assignment/article.html",
    "revision": "c4afe91f9afc27331c42a72035c7d863"
  },
  {
    "url": "1-js/05-data-types/11-date/article.html",
    "revision": "242261ae599c448b5b651adc4370aa8c"
  },
  {
    "url": "1-js/05-data-types/12-json/article.html",
    "revision": "f1e9eaecc0e34f0432733bf66774dc60"
  },
  {
    "url": "404.html",
    "revision": "560aee9e4e3c08cd316c6e6af3c6fc97"
  },
  {
    "url": "alert-prompt-confirm/index.html",
    "revision": "c0fb87227732d48c1c88931e62769888"
  },
  {
    "url": "arrow-functions-basics/index.html",
    "revision": "6b793f022fc26a2a0aee5f0d05eb533f"
  },
  {
    "url": "assets/css/0.styles.d9ea6019.css",
    "revision": "4f195564495ff1073c5e946eb407302f"
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
    "url": "assets/js/10.38793fa8.js",
    "revision": "4042b5f898174a615e3ce5f247069b1d"
  },
  {
    "url": "assets/js/11.546cfe30.js",
    "revision": "40ba0be34d5b03c7d5d416b8ec20bacd"
  },
  {
    "url": "assets/js/12.77d3846a.js",
    "revision": "dc63d755d710ea79e76b5fdb9fc4bd45"
  },
  {
    "url": "assets/js/13.26b79327.js",
    "revision": "ff31f53b6dbce08fe2ce7762072b357b"
  },
  {
    "url": "assets/js/14.227cd066.js",
    "revision": "85da36e1ea4d294cf571b623c834b87a"
  },
  {
    "url": "assets/js/15.c5c48507.js",
    "revision": "db284ca48acf642e1500f24c56777cad"
  },
  {
    "url": "assets/js/16.a1567c69.js",
    "revision": "7e19f5510fd0e39c473abf28b79efe01"
  },
  {
    "url": "assets/js/17.f2f61721.js",
    "revision": "b688b91011e32cc75f4b1020c5b6aadf"
  },
  {
    "url": "assets/js/18.faaa7175.js",
    "revision": "5b3a9a3e07d55a96750b473e4613afaa"
  },
  {
    "url": "assets/js/19.7b5a34af.js",
    "revision": "b34c7a55637227e19eece26f91d5d75a"
  },
  {
    "url": "assets/js/2.f4147249.js",
    "revision": "79cac204420ec5b91dcb42bbf708debf"
  },
  {
    "url": "assets/js/20.9f0ad434.js",
    "revision": "5e20e062bcfe15c20d9223cd6a8968c5"
  },
  {
    "url": "assets/js/21.1e2467eb.js",
    "revision": "80608b00a5be68072267470e22e5b3a9"
  },
  {
    "url": "assets/js/22.38f39b49.js",
    "revision": "6750aa5d94b4dcad4286442da02152f8"
  },
  {
    "url": "assets/js/23.f91fed20.js",
    "revision": "910beedca525977d0ef999b61f09280d"
  },
  {
    "url": "assets/js/24.6f450d43.js",
    "revision": "9cdd22184db71392c9e702997a4c5297"
  },
  {
    "url": "assets/js/25.1a1eb4f9.js",
    "revision": "f4ee72a4b6adca2d7f89118b329e0363"
  },
  {
    "url": "assets/js/26.8d5f4883.js",
    "revision": "3fc0643a98444a889b80997ee56bec65"
  },
  {
    "url": "assets/js/27.1c4c0d56.js",
    "revision": "74ce433c5b288e8232aa12f02c01f336"
  },
  {
    "url": "assets/js/28.9e2c7ee6.js",
    "revision": "347d48e333a3e384edf4e84e28018662"
  },
  {
    "url": "assets/js/29.67de594b.js",
    "revision": "5e27083a844efbcabe1747ef4f5be57b"
  },
  {
    "url": "assets/js/3.21a4bf1b.js",
    "revision": "f625fcd5e44289cdfa07767bee43bcff"
  },
  {
    "url": "assets/js/30.c2061b63.js",
    "revision": "a137063f233a254ba3c1629bd352158e"
  },
  {
    "url": "assets/js/31.798be8d7.js",
    "revision": "0eb4ca6b52328bf0a83f3dd1b9d8362c"
  },
  {
    "url": "assets/js/32.36356be5.js",
    "revision": "c500be69edc12f03e2e23c9ecdd486e9"
  },
  {
    "url": "assets/js/33.5c999005.js",
    "revision": "dcbba7580e6da18e690d79311ef3af45"
  },
  {
    "url": "assets/js/34.86d4eb0d.js",
    "revision": "984f5c7b3e4be6985fc560c86f6fdc1d"
  },
  {
    "url": "assets/js/35.5f58a3e0.js",
    "revision": "fa72c3785ddc383a9ce5b2282fcf1b42"
  },
  {
    "url": "assets/js/36.52d02ffa.js",
    "revision": "7ae0e109c6f263e20d00915405ec1c34"
  },
  {
    "url": "assets/js/37.84f3fb5e.js",
    "revision": "271f2f11b1f6fada11bb2b21050e6c6d"
  },
  {
    "url": "assets/js/38.5c499790.js",
    "revision": "9af7d5c9b129b9a8462fe8d92ec03450"
  },
  {
    "url": "assets/js/39.6ca8b3a2.js",
    "revision": "fbbf1391b348ea44bc27dffb51db6f80"
  },
  {
    "url": "assets/js/4.96c4512b.js",
    "revision": "c794a2604a8b2c7ef5ee4301c1bcac79"
  },
  {
    "url": "assets/js/40.ca440dda.js",
    "revision": "72bc1057164ae969be15e1c683c60eda"
  },
  {
    "url": "assets/js/41.0d5cd953.js",
    "revision": "9c7c79f568405509a9c476c0dc157d04"
  },
  {
    "url": "assets/js/42.354d04fe.js",
    "revision": "bb8aa7e54418f94a8ba39f0de5e98810"
  },
  {
    "url": "assets/js/43.de9f01f3.js",
    "revision": "7e3a2c2015c05c7e55de97a2fd8f3959"
  },
  {
    "url": "assets/js/44.95e2e7ce.js",
    "revision": "f5a9fc3aea7849317c2cbfa1a94644b4"
  },
  {
    "url": "assets/js/45.e61b963b.js",
    "revision": "e6b864002a98134ea30b2e915d258571"
  },
  {
    "url": "assets/js/46.d9ceb971.js",
    "revision": "825f922c1e9f4d7e1e8e8f9f75acfa0d"
  },
  {
    "url": "assets/js/47.435f70e4.js",
    "revision": "492314ead8894b3dff3df6751212c441"
  },
  {
    "url": "assets/js/48.2fd1f27b.js",
    "revision": "5a3c55cc10c8b3497f12b7012ce3893d"
  },
  {
    "url": "assets/js/49.f677c5b8.js",
    "revision": "ac34c298a0be2f016ee8c7bc098701cc"
  },
  {
    "url": "assets/js/5.6aaa80e9.js",
    "revision": "d564f7f51b66646e58e57ea7ada2f54f"
  },
  {
    "url": "assets/js/50.6005ecd7.js",
    "revision": "e24aaaba783279a13056c1436b042f1b"
  },
  {
    "url": "assets/js/51.721bad59.js",
    "revision": "242910632974bafff0ed53dbb9c74a2f"
  },
  {
    "url": "assets/js/52.75e191d1.js",
    "revision": "ae3d85b074b09458a24d92b6f4f7e485"
  },
  {
    "url": "assets/js/53.820dbdda.js",
    "revision": "df94b0dd4e9a5f16a0242a2f573eceda"
  },
  {
    "url": "assets/js/54.0957c574.js",
    "revision": "136d038fce1b780403551fe78d6d8f08"
  },
  {
    "url": "assets/js/55.966f3ea2.js",
    "revision": "22055cbac5744d7e4a1e1b398d31b74f"
  },
  {
    "url": "assets/js/56.55c8eebb.js",
    "revision": "51510fc044358efbcb33ac9a5c47be57"
  },
  {
    "url": "assets/js/57.741cab7a.js",
    "revision": "d3f5ed0d039719fb99307dbff41e4194"
  },
  {
    "url": "assets/js/58.551cde80.js",
    "revision": "af4f2614c724030e233278c72cc88d19"
  },
  {
    "url": "assets/js/59.98857567.js",
    "revision": "cabcd2b0d2b2c6d7dcedf2c5f40c4a26"
  },
  {
    "url": "assets/js/6.f1120ad6.js",
    "revision": "28db1a9b03c3b47233846303ce3c0a6f"
  },
  {
    "url": "assets/js/60.0d021956.js",
    "revision": "ea15d65012f690df1dd6cbd8209e8c08"
  },
  {
    "url": "assets/js/61.8c3f6ad1.js",
    "revision": "9428d930445572f34035904c46551256"
  },
  {
    "url": "assets/js/62.e0c3430c.js",
    "revision": "5c1cee4770403cca9fbaa534df6777b1"
  },
  {
    "url": "assets/js/63.2c33d27c.js",
    "revision": "ae2c906d97cbf4ee5f2733ec9f164a26"
  },
  {
    "url": "assets/js/64.1089e42b.js",
    "revision": "646aa2c2182bee361f458d76400bb39a"
  },
  {
    "url": "assets/js/65.ac0962af.js",
    "revision": "b7361139260bbbb428bbad32c3cbeb52"
  },
  {
    "url": "assets/js/66.32a3a38a.js",
    "revision": "b80568c85415eaa5d6cfdd693a8ae73b"
  },
  {
    "url": "assets/js/67.be93836b.js",
    "revision": "2069cfd65c4a3bb7ea5934cabb619a0e"
  },
  {
    "url": "assets/js/7.e36c8510.js",
    "revision": "08a9bba89845cd4a52ab8c474e40ee56"
  },
  {
    "url": "assets/js/8.aa1f0453.js",
    "revision": "c062997f9a63630884c4f8c1ba2a669a"
  },
  {
    "url": "assets/js/9.43f6ece3.js",
    "revision": "2031c563cf7f1c336d668511156d5bb7"
  },
  {
    "url": "assets/js/app.040ad15d.js",
    "revision": "85301f268332be98f68f95eaafa45f3c"
  },
  {
    "url": "code-editors/index.html",
    "revision": "d75cb929e5f08dc3297b16d5e6e5b970"
  },
  {
    "url": "code-quality/index.html",
    "revision": "fd5212a2cf2f3c53b81cb398a59f5007"
  },
  {
    "url": "coding-style/index.html",
    "revision": "bafa9f9ba75152c6bff0d195b445f491"
  },
  {
    "url": "comments/index.html",
    "revision": "48bbebbc40dbbd599d3b78ce3869c4fb"
  },
  {
    "url": "comparison/index.html",
    "revision": "a37978bbc39d262d68c436122155e0ad"
  },
  {
    "url": "constructor-new/index.html",
    "revision": "01093995b76b42263a76913fa35a6dde"
  },
  {
    "url": "contents/index.html",
    "revision": "4e2ca4d3db9c65b330912c354d6da2a3"
  },
  {
    "url": "data-types/index.html",
    "revision": "fbdc06ed5c4eed6a5cfb8fca12a3140a"
  },
  {
    "url": "debugging-chrome/index.html",
    "revision": "ce3fcd592bd0e20e82033017583ccb6d"
  },
  {
    "url": "devtools/index.html",
    "revision": "09d51ce08571a5c26dd7f316b617e04e"
  },
  {
    "url": "first-steps/index.html",
    "revision": "aa742542c1fc348468677bd41455e933"
  },
  {
    "url": "function-basics/index.html",
    "revision": "e7f0c02d6607a21af1f633f26540a0d4"
  },
  {
    "url": "function-expressions/index.html",
    "revision": "49442db6de608f90624bfbc4202583c4"
  },
  {
    "url": "garbage-collection/index.html",
    "revision": "99cdabec3158f6870e7d56cc506f3642"
  },
  {
    "url": "getting-started/index.html",
    "revision": "f4b1a406d217a7918b6b27146cb22f7b"
  },
  {
    "url": "hello-world/index.html",
    "revision": "43b9ed40ff9885c6e66223c48c9f767c"
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
    "revision": "425c0f1ef5dfcdd2c8fe9f2735235994"
  },
  {
    "url": "index.html",
    "revision": "a94c4617937851803adc1f2708b03261"
  },
  {
    "url": "intro/index.html",
    "revision": "1c9b5fa91ae327564dfd613aef6fbb72"
  },
  {
    "url": "javascript-specials/index.html",
    "revision": "65b99bfcfeb9ca3b0a906143962d9a19"
  },
  {
    "url": "js/index.html",
    "revision": "6fcb5c652054d4a5d4cbecae6501fac8"
  },
  {
    "url": "logical-operators/index.html",
    "revision": "5324e0a55bae0c91b0ace9839e56f1d8"
  },
  {
    "url": "logo.png",
    "revision": "fe1b2e766c7da16a12a6766abe8e2b2e"
  },
  {
    "url": "manuals-specifications/index.html",
    "revision": "9818843e80427db83e407aa2282b50dc"
  },
  {
    "url": "ninja-code/index.html",
    "revision": "94aca4b717bf45c4f043dfe798dc311d"
  },
  {
    "url": "nullish-coalescing-operator/index.html",
    "revision": "13f28dd5999da1e64431a8a36fbd2807"
  },
  {
    "url": "object-basics/index.html",
    "revision": "52c7a7fefe432aa1a6da7b75c195f27e"
  },
  {
    "url": "object-copy/index.html",
    "revision": "830dc70e00171718b8e29aaffd2a13eb"
  },
  {
    "url": "object-methods/index.html",
    "revision": "871dcd70e8ca76133292cfc46f5883b0"
  },
  {
    "url": "object-toprimitive/index.html",
    "revision": "cdad943968840e8cb92d3f9a6da9e83e"
  },
  {
    "url": "object/index.html",
    "revision": "543d8e8c4b8ede85da575e7d44897aaa"
  },
  {
    "url": "operators/index.html",
    "revision": "10226aefb02106eea5bae8c7b8ab5f7a"
  },
  {
    "url": "optional-chaining/index.html",
    "revision": "7af3a55a0f36befd5da2d81f6e666647"
  },
  {
    "url": "polyfills/index.html",
    "revision": "bcd25ce476bc18ddc3be9de7b87be87b"
  },
  {
    "url": "strict-mode/index.html",
    "revision": "9c3e67ac64eedb84d5077602847ab109"
  },
  {
    "url": "structure/index.html",
    "revision": "9d3df21c1dec1759f635b828bf941567"
  },
  {
    "url": "switch/index.html",
    "revision": "c7cd633192b365b74f461acd466d9410"
  },
  {
    "url": "symbol/index.html",
    "revision": "a68bce1cc074366cabd7b495afc57528"
  },
  {
    "url": "testing-mocha/index.html",
    "revision": "8b937ebf21fed1c5be4062bf2d41b783"
  },
  {
    "url": "type-conversions/index.html",
    "revision": "1fc0f28230d493c45466946e29648c35"
  },
  {
    "url": "types/index.html",
    "revision": "89df9bcfa3cd36246a36be4517dfb648"
  },
  {
    "url": "variables/index.html",
    "revision": "ec06923597ee343a4c0c6d97d2f986c3"
  },
  {
    "url": "while-for/index.html",
    "revision": "d689c0ad278fcfeeedfb705653f23582"
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
