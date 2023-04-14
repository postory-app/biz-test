'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5a15ffce06ef9b96d40899ea7963b790",
"index.html": "f7f7e8535c4ef7a4dc6eca847bcaa2a9",
"/": "f7f7e8535c4ef7a4dc6eca847bcaa2a9",
"CNAME": "5e687477e6e720fd4666ea827bb07412",
"main.dart.js": "4dbf158de7a224462d65782ffea31572",
"404.html": "df4328263563c623b1c76877f3cbd78a",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "40793429abaa561c864d6baa415159d6",
".git/ORIG_HEAD": "5df1ff3f513bafde05edc90e863d8b69",
".git/config": "01e9dc019138477ead046477356c4542",
".git/objects/61/49f19e4c0c3b6027494ba86a9f3e9e6281fcbf": "8bbfa0e417811d79f30a9bd3f062301b",
".git/objects/0d/493ef801629740bd8190bae9bd1b22680b9c76": "0f8b42e7167d45cf6eabb68de82c7c0c",
".git/objects/95/b47f85315a9bb3c5d2fdc2f8166b203f5eae55": "1c4d0cebc8a4214c01c56421cd66508c",
".git/objects/95/3efc5a9f652f995c0b4622234fa69895c3b64e": "605b23890bc2f5cb3033110ad92a0cc3",
".git/objects/92/fed8c264ffcbff81836ef979fa4dc66ab6eaf2": "25f5a5fd998c2a3492121ec0033181c9",
".git/objects/92/b88d4442d547a8468c7886235c00009953eceb": "566a1effa6d88ab963ed3c7dd82bb6e2",
".git/objects/0c/304a27947701e6bca7da06373ea74b7323e55c": "7a235f668f73a250cbfca2bfb8423003",
".git/objects/0c/dd154236bebe136e208f2d96bd6f4a3c764480": "c7b601a7d75431e68c633e2de2f75f14",
".git/objects/66/19252a16982bafeb6459990386f3b3d758bd0f": "803cdb0d9fde255827dc3ca3247d2d30",
".git/objects/66/b64ebede1b6a1fca3ee1bc88b6ad6b20cc1765": "14d0cc8bf02e1b488211b75d96f33a89",
".git/objects/3e/737574fd81af6ac1efcec9265af0928de15c08": "fcea9952aa2d2f4c05f78ddabac9b862",
".git/objects/3e/6e9c49ef4ad98790ea7559c26406dd84d3776d": "c6edac3977c5beb048f519b5e8b18d52",
".git/objects/68/01b095454376e38fab436436a5b58b740868f2": "ec575dc2ab5ede30dae46a4d8aeab3a3",
".git/objects/57/f25662def2e3e4e19790def418ddbdd8e52134": "96fd2c1abeec770842125c97d9acef92",
".git/objects/57/d4c1e29c9e4c2dbebe3c2df88508bc09256857": "64b701b226a4e9808db0790a5bc99fc4",
".git/objects/6f/ad9227b78090a2c23a3b4c8ca9cf41cb30c516": "700ef42a49e925dc50ea89db291c855d",
".git/objects/03/389bd4ffc030309f3a0adc1c2cbeade8142f69": "a87e1d490f9ae95c7470508621bcdf17",
".git/objects/9e/6ae6b487097c774012a0df58d5ac5532a25ebc": "4f45fbbbbf20cfaf8a4ad9d0bf8d1661",
".git/objects/9e/7376a8ee68b8866a6bced7e1e3b2a38e94ba46": "7f40c6474c423f3cfa2888164edd156d",
".git/objects/9e/8fef0283db781ab50093cff3de4a0433cd0a7c": "9c2ec1006996d8f8fac17deaad2cd59a",
".git/objects/04/a5e05d703ab85185aa9bb5778de9c8b085b916": "569f748d608fef1a1cd718fdd225df64",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/35/68dc545fb5a5f0691d81f98d68035bcb9c4074": "4a0b60c6be28582b134541577510c0fb",
".git/objects/69/f6e67503875a16b51a4b9e88a92aafc982b755": "e13eca5cbd4b85d3f338aafcf7f3f5c0",
".git/objects/3c/b4d39fa14f6be24dfb7d63223b3973d29ddbb5": "2e1a1634af708d381d42174639e6ea69",
".git/objects/56/6e9b41fa319ecf95e531c1ee626706a92ca16e": "a52875a8e90239fc756a72563ef7562b",
".git/objects/3d/7ed78dd25fd26989372de9949144f4b539c7e7": "8a4a9d88931934cee931cba4c732c98e",
".git/objects/3d/affb8ac5b444b26481342ff4339dca59edf850": "eea6b0ad9525aea9f63993b555df26f0",
".git/objects/67/1accf61729c152eacae0ed17759964589674c8": "cbd9e5e8324d83ef8c4738d294cd41f5",
".git/objects/0b/b8814651cea0fede1d614cf38a8dc157522718": "efecc36913cdef30c5001529a6f880e5",
".git/objects/0b/79aea75d16169821cd2f02b62f7900cc8c4d0e": "5fb88b4023489ca7777eba6ee711ed21",
".git/objects/0b/3257e810ce3824df9e994fbab69b7eeb9eaf27": "b571c5b2af5e3d920210fc57a591d03c",
".git/objects/93/5a0a3de47a39d79c30ae56d0a8f42289f80b0f": "5532db4289957e8fe8ae34e0cbfce24e",
".git/objects/94/de5107cd272a905097bb830352ea13fa913a3f": "01fbf6ceddaff6adb31ad78d1b54227e",
".git/objects/0e/9889413dcda6308e838f14a2bc47f4cab003e5": "a254b4cde18b544769f4914590c9fe60",
".git/objects/34/6c77c41db1c7d604dfa74e37c4d296d5902986": "d09f40e55fa8bd5fed392f14a33f9f50",
".git/objects/5a/9f9c40a00f500a957c5ce4ee0d1d5db78d6b10": "ccacd02253c38ee3a85dc6f0e97a7bc5",
".git/objects/5f/fa2ec4ac9c0a5231653d9a9e1dd4ec18fe2644": "c63da44ae10ad7c7c03b53985a00c783",
".git/objects/5f/64d18e4b54b065716fa74ab8dc016a778d730e": "651fdea50b36767a47bf140e7be68dff",
".git/objects/05/7b8d4305b7f748cf7bfbe2f14efca15bbdbff5": "92fb5a4e845ee901f52d6a491db5b9e3",
".git/objects/05/7590e7293359d26e395fede4c8d0bdce5d20ed": "bb1c822eb7f7a286f9615f54ce367397",
".git/objects/05/f6d696f835a361a2d6d546f2bc06f51bc34ece": "bee0e333b5603a1ac9860a7790ae190f",
".git/objects/05/46046a7fb51777c9b9fc0dbac1e2e3f600b8aa": "cf81cf403e232103888e02eeb04deed6",
".git/objects/9d/7762770da81b26cfe0efed886240798196437c": "0bd9ad35838a8486acbf51395f383936",
".git/objects/9c/47cbdd8a2f2dd4449d227bddacf76e322f5034": "f7d51568e449b51794c362d0c6055359",
".git/objects/9c/34869e2defe6110fe28f0cdb5da0611219be8c": "773309be2ff8938b66f805df5e506883",
".git/objects/9c/595a6fb7692405a5c4a10e1caf93d7a5bd9c37": "193384edb232d7bf5ce166a15effe0fb",
".git/objects/02/9e85e82509222ee8ba3864c23638b8dc31ad5b": "5e90684e249e5b011e3b9a0d1e3c0de3",
".git/objects/02/38c527a568b73a63b90ff546dd96bd2e55aeb5": "299f87d5a666ade5795c1c5e312a0232",
".git/objects/a4/dae61172f8b6b14fb3b1299b929c81b78115dc": "4bc7e84e08cd1c25442d062f5668e6cf",
".git/objects/a4/65fd93f6bed00243657070ab2fdc33f889783d": "c98a64efc7eebf490861b30de3000903",
".git/objects/a3/07c9837562b9b9aa47ff7da67443b11d73b92d": "4a1a381128a05f7271934ef0dc6c80e4",
".git/objects/b5/78baa60acd099a857fddb4430c918d3e7bdf79": "dbd7b750eb3c98428eb334686fb06f15",
".git/objects/b2/24c9a6932dbfaf633aa8850e3a147d86e7645a": "90a1691ea911743e70d558b3032f4d1f",
".git/objects/b2/8140c06f2d95be3df6b1f82b5ca2d17f8be3a1": "7b433506151605d30e94936ece31b12b",
".git/objects/b2/8542743fb833cdefac25b8194d54748d1d8754": "5905784067107e993457a01f94106347",
".git/objects/ac/1124847527ff5a8daf81af2fe4a49e139e4b5e": "633285842de262470fe8c23349d2d062",
".git/objects/bb/128b4fd279159511fc56a70cb3dedbd2c5f4df": "f5eea9e8acbe370a7784b5425ab92cf0",
".git/objects/d7/02f3bdfa6b3a74ecc6dce6e6fa6eb61ee01073": "fa252dacfceb5d9283ea0644e6e4dab6",
".git/objects/df/80de19627a5ff2f8b89b3a67ddb15a09197430": "6016dbc6713a786c562141c56539b1dc",
".git/objects/b4/f3ae00722d8723c3cd9c0124ea26129cdb4efa": "0e773e85109a01e8ecf21352ef135ae9",
".git/objects/a2/368f78f1ea98e465d789b77d5581d52dadad5b": "bd5c670d58e7a91309d73a630f3fdbdf",
".git/objects/a5/59b1c37943deb894e71f089941786bb9326b7d": "febe604478659ae8e33ff2a8b6f6506d",
".git/objects/bd/4d6d36511e209866b79cbc0be132063a69cc2f": "239252d93bb08a2984b905e87315c03c",
".git/objects/bd/3ca2dea1fdb3a08dc629f0ea24eb7bcd767e0a": "e7cdbc4345b2eb1d59cf8d35ea9fc67c",
".git/objects/bd/98f093d4af7cc55aa586ce674df9787c50b9b8": "c1720d9b438794eb83dd370d996f7336",
".git/objects/bd/4ade03736ced71a652794a44e80bb06ba3cb03": "087aca97309e87cda95e1cec44e46a35",
".git/objects/d1/5cf88dc4d4233f684ccb99a387daf5dfb1fa22": "395add3bf512553e05ee1e68961c3aaa",
".git/objects/d1/0dcaa9de1193002110fa0938966b1ff7062710": "628d96621a99d0ce8460f9cb0880d2a8",
".git/objects/d6/66b57c1eea651f224422439fcdd6427e86b7d6": "5311783f024edecc409158ca4d12a0af",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/385a2ea4ccf50c6cebc9596231a8ad00a5c331": "bed6cdd4d2621a6b1831186cacbe346c",
".git/objects/d8/73e78222b4d4fb40ad1befa72808c06dde4a3c": "9cad662d18c872db7d0c340a1948cd86",
".git/objects/d8/298298e73a5c2120752ebebd6f09bb9502d13a": "c2f4732ad526bef53a7ddfcacdf3099f",
".git/objects/d8/5e42cf623d2c53597c2ebdab468e025659ef00": "879c6ee6519b8c5b437849f3efc98af5",
".git/objects/d8/eb112d2ea8fbf7f842c637c1ba279573c9a53f": "5c3f8589c82ac064640682455ab05df3",
".git/objects/ab/426468e4ca536e0c9a1cf7cb533e6d41adbc26": "5d5591e6f95f18e6bf3b175c9ab71269",
".git/objects/e5/71c584b57c36dc04e20b3597c5359791e040d8": "dd0dc79573ab0c4e6a83c61bd12a6d9d",
".git/objects/e2/d0f1e8b6d6fd313e25e4e03cc114e75950b80d": "7dfc517b3f2a47c3179b46748d157389",
".git/objects/f4/dc0701eaec9d19bb15c46a43aac4701b116bf4": "28cc76f7e58949b420c74c31fcd064ed",
".git/objects/f4/edb2ad55fbc5bae8eb74c05f035e6cd53a30db": "d536c10f26e290ce1548ac4575f20402",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/f732a01cc78cde72a248a50580f2e12fdcbd1f": "5344ba684c436d97fb7857e0c46e798d",
".git/objects/c0/2e30f875d6ea10f30d4c17f58cea5734e8b62e": "2ab0537a0771076a2e3766f948e6e27b",
".git/objects/ee/27f6e7701593ac9027f727088a5c77ed52dec9": "3b6f4c3701a969e0442a6e1d60fe49ae",
".git/objects/ee/988f14673a08e45a66a2d473f7229d4d7dd716": "304c714813631fb96a6a287e70fd3962",
".git/objects/c9/cc670ae162a8e309ce049199da8594f2e4cf6c": "df1d16f80d8d6c60a5b5b09457ec18a9",
".git/objects/c9/97da6d7313458df17ecca7248b0f00fff41c7c": "8720c699e429e55365529c455e963a1f",
".git/objects/fc/9381d3af8aacfb0751413e310a1bb451f7bdd4": "1eddb92a7f88ef747717a8d30cb7a849",
".git/objects/f2/ad857abf0217a9b65349bfd7d2b95c6f1e5b5b": "e6adeaa2255f606c94697ffe2b01bda3",
".git/objects/f2/a7908e051e53ef746deca06b5680998a0e1990": "03695606be6e05bc0dc658c522555899",
".git/objects/f2/cd1017df0c5881a6a60bd089f46b692080fa7a": "3a51530e023f21cf731e75bc40c25137",
".git/objects/f5/b5c5e3022a8ce27b17e4f9ed852391f3f3bdd8": "3378a140a066ea6ddec3c9bc6e55fa0c",
".git/objects/f5/1120eaee624284f702b7287a0c6f08c8c4b0f3": "4da78186ba90639bbf06b0f80025e566",
".git/objects/e3/d8e3a2fcd5cda7985c4903e290d1147851d3d5": "8fe2fd7c46a06d05c4760dc4efc5dc44",
".git/objects/e3/40aaad18c3e43e5f1e2ad116151231f7f73712": "57360afaec87a8a1c2b3a68a3f8e76e6",
".git/objects/ca/0b763724f58f303ee19bcc3e9f1904c6194c64": "b9ff374d8e9f22b2a9478a0c5970c112",
".git/objects/e4/c808d7ec42a3ac69de6fb1041fc2ca682040c5": "e7ede70cfe01b757aa298131dffd4fa1",
".git/objects/e4/f25d56aa2735463e5a1b5b5442c04ad62f70a3": "4d9f5d440adbf5dff6141892aa13161e",
".git/objects/fe/035d0b8718369895320ff43047753d106ee97a": "639d171db5bb2ec80b17e6d4a03de1ec",
".git/objects/fe/aa2a428e073def81bc3eedb9f5a56e96227071": "96a8617620726df079a879945db2e752",
".git/objects/fb/8c5c0de7b1b6c57c1250f8ba42cd7683a883c7": "d689223081a6d200baec37b5dd2e2774",
".git/objects/ed/71c26a1a78c56bddd623c65badde30036ef4ad": "cfac1bab736e0cfd2298e2c95a3c70cd",
".git/objects/ed/61199e6962a7f6c145aad8972dbef01126543a": "26646c9f37771dcae880b1db9989755f",
".git/objects/ed/2996ddf9684e7b1918930c7ac2b5130da037c2": "c13e2ef723e11932642675c5ec23c7db",
".git/objects/ed/587426ea90101af6ab514bb3e0a4cbec2c8f60": "2e45094104fa111e8d719747dfea68dd",
".git/objects/c1/162b23da960810b44ac9dfc20a829202f7a85d": "7c13f7a4f93fd364e739e2a50f9ccb5f",
".git/objects/c1/0a8bafe40b255882313ba665a2a77da09e01f4": "849ae1880a30864bb8abcaa2df316a13",
".git/objects/c6/65e3adef44700f9a791bd377d7b7b5ae19f48d": "8820d6d92e03760f898ffbf72fe69e15",
".git/objects/c6/babee1ec49d936cf7df8f20b309d5d8627ce20": "f0a7c3cfcaae04552d3c4887d51a6e40",
".git/objects/4e/5add85c10eeeb9811fe3733e2102d4e12c324b": "c440a449f96c7a6105a1948fd0e21e5c",
".git/objects/4e/6ef7d5cceda1b332344cfa6e51b13e5e546c42": "e0ea6ea3312eaba2ee651f2de7b4613d",
".git/objects/20/decde02d148201b6b97f4fbc267e8301210e47": "df2fb1c8173ad21b20dc07ed1cca23a2",
".git/objects/20/88e45b5aa2d67f2135718a9af46c05f094a1cf": "22d13c725153c6fbd14fd7336ebc76b7",
".git/objects/18/b9f367592503bbe5b03f0988f0154af25bdc9a": "5cda82125a9856d24b5645e37b867717",
".git/objects/27/3fad9908010c6d0a36cc31fa6e6773b5968360": "d196bab7cc65ee89c42fe594cde09ca4",
".git/objects/27/ec980fb2199b1bbe97cbc07e3954efbce1d042": "77b31b92b270897b1fd43beb12709329",
".git/objects/27/271c888fbfd58abf00b08f216ecff7be4c377e": "569cd82e25a1d2e1c2163256606eb8e3",
".git/objects/4b/5ffe91e768cf31774500e0ec8ea4676932738c": "2cac79dad9b62367f179b37b37b6555e",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/11/e7d245eda780d9006a7dcce0a3fb665c1eb457": "c5a19fe0789c43f6c8d083f303bd6807",
".git/objects/7d/b89230ddbed61229af2a2176712f0d47cc5dd4": "a64fd5185f106298434e8f98ff0e2979",
".git/objects/7d/8c70c6a0811961a0cfc19be624c09909439d46": "a25c16cd3969ab40122ad2b1f0dbc511",
".git/objects/7d/f2b757dc0c0b29914f363f213fd7b145ecb429": "6175a252051fb49a58a23782f364c5fa",
".git/objects/29/724773df3bcce9250210d98afb9750256513cb": "e5a34e24d898b00429ccd1811a567a43",
".git/objects/29/1b120646ff7f5de78b9a2203bc8e864e52dbe8": "907d03fc0aab85a07da283a5c9722cbf",
".git/objects/7c/3128c4caf6322abb66cbf3ccd53e1fb4acd399": "99711ce96124a8c9765d8b145ab7139f",
".git/objects/16/dac10fff18443731a167fe0992d94278236d80": "9a706f41eb73a57f96e78d3cd5877869",
".git/objects/16/ed9f3ecfd309ceb0303b8e817921dae07b442d": "2384e8d773f88578e473b1a6527bb88a",
".git/objects/16/ae0e9e4ec03247ef78f14a9f31d29c18263d46": "486fdccacd801f2fd4e3cd491a9e90b3",
".git/objects/16/61365b967889403e506442b34a6be5bf158cce": "e639aab7964ffc0e7dae7c2265ea0375",
".git/objects/89/4712949cceb943ff0bc8a8e60505554d37dc44": "d4d8910983eabbe24bdb9cd98664392f",
".git/objects/45/5fadb3c02ee2cb54c02ccef8b4c62448e8c5e4": "5df7b255c63ce6d778ee081fb120cc61",
".git/objects/45/fc16522233abe26a7a2ca798468cc2e26ebea9": "89897fd5bb39687ed9aeb119f41b4571",
".git/objects/45/e9dd1c30f6e859df3c8becefd49974b94537a2": "f622a54b19bee92c5233edc64882fbbc",
".git/objects/45/32012a15f2f0faa778805fadc4f0350f6cbeba": "8d926f95411d37e302dc8843d216c397",
".git/objects/45/14bf225aa4b3dd92205ad2dc4c67a1c352539b": "ac378e81532d18c86a263de22d9fe4ee",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/73/0f4c307ed8d12c3229463c530f3ed21726d09e": "ed51c30659db86dafa3a06c5000c7fe3",
".git/objects/87/b5fe025b8297aa35e6f6c0b0a06e6a45d5705f": "da5e95cab6611df675c206ae2e8a0a47",
".git/objects/87/b8915d66ac0e38e593073ca721c38e58cf6b38": "e9e6ffea917c2bbc710ae70725b1b2f3",
".git/objects/74/8c8915828aff2f4deb4efdcf31d9a6fcaa4199": "00d497bd4131defb83ede209065cd8a1",
".git/objects/28/102fddbd7a675ce6ff839b2eaa8ddfb32b9215": "39f6491f36b625c6e785f5c54fe91327",
".git/objects/17/f9046850d306186d2df6eaf7ab6bcc9383c6a7": "47d9e93694dcff17a603da986dc72a0d",
".git/objects/17/943a0c0c32d884fc13db362215a1c5a4d3b616": "36f1ef9ab7488d035bac8e88f331c105",
".git/objects/17/89b0d2e1451a81b0c8d2ce74a06043e27437ff": "9f7d4243d12f8948f124c9ea7264712f",
".git/objects/7b/2c3b75621eeb6dbe08fb82d74db2ecc36b7cc0": "a48f5a4b480727afce988dbb87068b7c",
".git/objects/8f/d20cfd65fa2d2f9289855fbafce03689c7a6af": "d6cc4d630c259c954d225dffd97a013a",
".git/objects/8a/c7dd1fdd1c71f02e5ae8d81bd928ab3365e26e": "96b196d041443054b266fb583c7291aa",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/70c473c88101ce6da63eb1764e8322c3bd5483": "0d16b7e759b3dfa5356eabe46354bb13",
".git/objects/10/9274f95eb9c4e595d56982c29afc8e49646f87": "4258f2e2aa724e1ba49af473ae04c238",
".git/objects/10/5b3beae6365e42031f8fa9534b0680765f401f": "7143bc1dadf2564b46981b3b5a3d6d98",
".git/objects/10/9d2380878f696b2824358780e3f7c1dc3a1765": "6b2faf1eefbc65334e3dcda469fb10ad",
".git/objects/19/90580ff1f9c8d0187c50f01fa3acda20dc6b5f": "bd7c4bc616c1955345d3a2aeb7d44422",
".git/objects/26/728b2f041a6d690bae08c111ac976031c2932b": "0cfe6281b6981f106e831f6b936ea2d2",
".git/objects/26/c4b493feb209b9b1339bd8e183651442039714": "f77d4c16dfb16be673d49709477675ca",
".git/objects/21/19226a2a0221fba1b06185f827d8d7b776be00": "0fac9c24c0d2b5c179ef0980617e45aa",
".git/objects/21/3fdc4c87214ada64425a18d9a16be13c65cb7e": "e9437b8ad2b3c3ce763c2bc23baa4690",
".git/objects/4d/5cd110163d913357cdc093595e43a2f388c2fe": "8c7564e57f3d10dff2b8fee0a6865c0a",
".git/objects/75/717ce44b5f4c9d58a916af6433ccc321b41d5a": "4ca35dda94287bf71eb1bbae6d29f067",
".git/objects/75/bc1c7156aa91469e8205ffe1433cd29082e939": "50d4bb60d25094b8fc2682b2c1c4dd25",
".git/objects/81/767b47af7773b547a648663ecfdc27cb87a646": "76a04f59b09a442bbeb6617b8502710d",
".git/objects/86/ffca0dce5df148c7f7314e5d863ccc41b8fdf3": "1f3694348f5ee10998fec4f9d251479f",
".git/objects/86/ad18261fb7fe52776ebb05ee456f236ee6c101": "274791a9db780351d0c47462de6e8fa2",
".git/objects/72/3207b936f81a010cd4f95da0b135152ecb9a88": "5be55f19617b0a319ea201b3ce5e9d30",
".git/objects/72/fff21d87b95b70c41931f5a5950c0fa3948ddd": "fb9d6a103374d4f21e0914322b09d91b",
".git/objects/44/f7ebc5a357d0f5eef3622094f81677cdc4d384": "5ded5030e2c74b388290d382af8bff4a",
".git/objects/44/5a69c00e48288ac420a2ead9ae5a1cb4cd36d4": "30acce2c548117d84a8d75fe9309707e",
".git/objects/44/bab11d02f79504ee45c6ff22272529a2ab6d49": "f9f896edce83a0beafa3e265e1c1d403",
".git/objects/2a/00fa4a0fe4f241d260b71011ebcbc792f6a5dd": "0402971e3b42703e4562a06ec94f412b",
".git/objects/2a/dd270986ac1a84f55a7dd3397c37ffdd139cd7": "f7460d2b9ec66d63ede0f6eab2f4747a",
".git/objects/2a/23d4bab40fa80eb918de5b5823af45406e674e": "da9f991f091b13b79dbfd59c060c6a3e",
".git/objects/2f/c31d2c255dd54ca7f68cd42b92361fffa373fa": "ff9e05f19ca85c077b1c5d408dd34431",
".git/objects/2f/6a35c444f39be3c7b6c9718dff045a60c997f2": "b5bd36ca89ba438fd683e1759abfbe8a",
".git/objects/2f/8eb81b9fe2ebbce53fc17b237de6986725330d": "a7859d37067618232eb4f26802ac9e31",
".git/objects/43/0d0485570e0f2cca8e4a7a282681a93fa6912a": "4e1b164934a5b8374a2acf5a0a9a0619",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/b1a7808f03156b8b88111324fd9b5504993050": "fa0d6e714ec1cf1dc6660b4ee57b52d6",
".git/objects/9f/3790684d0315fd5ca36f3ecc20a7be20df5346": "b83c0018eb930d811d72509b2bb1a26d",
".git/objects/07/07a65e9ff10bf6eee6ecb0c7bd69557d6ab3cd": "2758d7eb2c5de69e6f467222ded82e10",
".git/objects/38/d3cb8bca2faab433756c40cc69f8b8fd04c7b6": "74a250f86be7f86cc731b593d99c8649",
".git/objects/00/f9066199aec8ada2c4d0a3ca830edc710f504a": "cbe2327a787ad4b8051d7a4b53366e16",
".git/objects/00/5dc9b44191b0c5b3d90b1fd3430d7cafbdc496": "a54f5bed83c625b5cd464860444466a2",
".git/objects/36/1b675a62047745704fd3d35149f515f61172ae": "5f0db36c1c4678b5e7bbdfb0fcde09c9",
".git/objects/5c/1083563ed6b7060347386db2d2583b97af85d1": "d878a7c4f3678b07527664719908fcb0",
".git/objects/5c/2722661c6c0bc4e90bc199d1e9a0f42038208f": "fb3c7e14b8e7062fe2e31eea5337cb0f",
".git/objects/5c/0e4223dd21f8a207586e2317b28f9e034c5843": "f2b953d110ba6869cc6ff03edfab785d",
".git/objects/65/6e3c5ce409b2d8c4156531b205fd225744cd8f": "4827b9b37900c06cdf97a464e0d20abe",
".git/objects/62/13143eb345447030f16a773540255b8f506170": "42cfad51479bb44f95bdee8600b2fe35",
".git/objects/96/1791187270ad06a6d72bc0c563787f3ec2402b": "1a56d85222988640b4e1a136ff57e923",
".git/objects/96/9de27f99d7e55de326adcf69069c06672122b6": "3e6fb55e3e65f4c91bcce0ac4979fa5d",
".git/objects/96/7bcc85f36be056de521727eca33bc8ef379093": "46b5a99be8c5b956e01f50e0b4c49738",
".git/objects/3a/21f5940d973f587cc3e2041a9e2a01eeda1f46": "b23761263e6185e336b621d0166cf57b",
".git/objects/3a/a3c3fa5547e524f027d436012d3512fe71c9ec": "c9af6bac6b486f4d9d2d3ad9b3c86d1f",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/54/ab662826f1f9b91a3f13d1c6a7f867282c1ef8": "7a4784a06a5fea9dddffe197499ba4e4",
".git/objects/98/2651d3eb4819a60604cbb5577fda9dc951793d": "a89aa1efd9a9a933c0cf27b6dff028ba",
".git/objects/53/48a1612058b3d19c3896e0fdcc8f55a95f3a85": "fad1e85e491b47ebe0ae5ee2ebc88783",
".git/objects/53/7cd75ea9cc59c7023b866bc1e1e0ef10526803": "5ccef591fe4180867889d48dfe6c2930",
".git/objects/3f/bdbfd1ef8f255470706dafae28e2057e6fa99e": "dbe8cf6eb624736d97909a200727cae0",
".git/objects/30/5e161942a0d17be6a296808dea88e7a2191a64": "25f4ead5eeff526e22b2a21d2aa3deaa",
".git/objects/5e/69041332858a9c2baa062ceadfbc79c4a041a4": "84b80cffc47af47da37d54c714184f33",
".git/objects/5b/b170f8bc26226530848911f6fc48ea0abc6d36": "9de16b84136ab1dee2b5a7ad42aa37a7",
".git/objects/5b/1945caff69f8e900b96a2a1c3a44b636609b73": "66a5eb32da227707da10694ab4189abd",
".git/objects/37/d37cef41355ddf6584145ad6700243da051c8b": "c7381949e6e57614aa43b26f09c05673",
".git/objects/37/899a9239ab0ea085f11f968746538f1cd862fc": "c4cced118c1b319404662f7efa0e2c72",
".git/objects/37/cebf9ab63316e9f9fd0fef6a5a0429fab10139": "589fb8dbc2cbfd7d902d8dcfe67bff0b",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/c0992f55c39f755b6e35dbb5e5d51c7c60203f": "0e6f5496b589d3764635c3e376c93b75",
".git/objects/6d/c1a3263fe8f364a435f6d8a4c36410697bea38": "491f4cac6857d081444254eb00d104c1",
".git/objects/6d/94897d07536e624583949196d8d76cbbf120b1": "6dd05e3d8e375e69897d730a3131e433",
".git/objects/6d/84bcd1668ddbd58c52a014328f5e448b9c6dd6": "9c42978e428699cc0053102b716e0254",
".git/objects/06/c6c3c5e2f3301765efb7e2d5233ff34ad2ea81": "9984ac04b4ad9f183442207a511fe378",
".git/objects/06/ce24bba617acdf1b609abde6b1f7aa15d027d7": "8accddabd9e3e6dd3db201a5e70df4b8",
".git/objects/6c/89d101b1462862d6796aa2efcd2dd2624e4e0e": "53f04732e97ec8eb8a5badf04a0cb535",
".git/objects/39/6c9f54e2673a02c99331bf9623b54237e685e9": "1da40e23e3b70504228878d0d56d3788",
".git/objects/39/ed2e9592bca6658adc0803259ff3ea91472f4f": "a8d0f43b039afbf7c69ffdb3bea7e41a",
".git/objects/99/ef86483e02e8c45d4896ce418eea4185d35ba7": "12a74d1ed1d745afa1c41e161cfc1571",
".git/objects/99/4d5517b1e17a27c59477d05459f412cf0251df": "e15cca613694672255daf5e3e84ba88e",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/19f3c6ee2e7913db0aff28fb358e4ec071c72f": "80566e54ea520a735996143f143f9c63",
".git/objects/55/53176feeebdd4cff647cffc5fd2357b6083eaf": "023edd403f4fe2c11e102cad99ed3b4d",
".git/objects/97/5a1400512ada24565a97865b8b9779755f6fff": "136831188127823a50522f26a1fe4a30",
".git/objects/63/1a764a90196ac3f2c8cf7716362dda5b7b2a13": "b67e21240422a23cf78b8fef4dd2c328",
".git/objects/0a/386629d61cd4a1457d44dd250d7606c42bce13": "1a55fd621c1aab37b4b6758cc6067807",
".git/objects/90/676dbff07ce838c30dc7d6ec7a9fe5de1e92e9": "c5d5da2391de2a9a49dda73f1ddb2439",
".git/objects/bf/3ae3c199f735f825e46220ed92d0aa0f76f81d": "84ceea4ca2eb9c1ba187efe28ff775ef",
".git/objects/bf/59c639ab12ad7ea1df15afdd7dd2eeb6c44419": "84f0522e855b15b85d12817d8f28dd98",
".git/objects/d3/1e9c9e9767ea7cc2da90c519fa18c528388500": "2e3b729307ed25dad8b29f1e9f61b961",
".git/objects/d3/cad2a26ae400a300bad99c5a0c62cd7a7c7d02": "86c4d59664f508779c78b47005379afb",
".git/objects/d4/d25b60f39ab9edeed2af392e7609520c80cf74": "3dcf558720e4c57fbc04bf7e015b01ec",
".git/objects/d4/ffef9e4886b38806c8a23a0074d04b1cc96bf5": "90561485912ecff7036a5cea07117dc7",
".git/objects/ba/94f1cedbceb41573f52bd602966b551a690ff9": "175fb738cab0735d5864c0643fccd668",
".git/objects/ba/1e4c065b27d60f6d0f0bd9b18da04eace2690f": "c9cb61c240b94d6c1cca91ac5b91a1ea",
".git/objects/a0/8d4b8a77c4dab7915ae794565e436c8edc51a5": "b24eb68d9f1911d818030762b640f7b2",
".git/objects/a7/a9d746450e3873a637e3dafda80b7f19ba01cc": "fb8cfe3e33335b241fccdd55802931a3",
".git/objects/a7/84e8af0b07b957d1c0f701cf7d2189bb859453": "c0c28177c69f5d8ecff43eedce1b5690",
".git/objects/b8/c9a16d9c172aa8a9b59207333119bdfa6b5ad0": "c19c10f4ae06b1322a3895be58589f56",
".git/objects/dd/4722ef2042116293da8e00658b1be4902c658c": "3000a16b8cac6d244536e24b60053ec2",
".git/objects/dd/1786985cf3a378909fe691db52e018e512962b": "67d154b00b7d9063ffbcdf3fd6a31f50",
".git/objects/dc/22b745644e80e05ff6e61af74550553e04ef76": "fa2178546a14997572e20f5b7c386d7e",
".git/objects/dc/f4bf9c005f3ac037ec46460b4ec1ac9d954d03": "0dbaadfbe9a7df736365261b2d9050d2",
".git/objects/dc/64b9044e3f5143e77be2cd9971c5326727affb": "4c16526d5bdfc032a6a11fdca6ae4fcf",
".git/objects/b6/4831eeb5483f55d41aaf9fb874c96986947f68": "86e49ef32432d49020a26fb3dbe0c80a",
".git/objects/d5/f5ceadd639d29684cc6f0a4ea45d82470b3f40": "097e1379fd57d972e35d04d76b4dc073",
".git/objects/d2/af79fe33ed9af2006d96daac1bb41c53f1cf6e": "0929c18de55aee499f89e68e37a879bc",
".git/objects/aa/007f1fe213f32821ab0aba7fbba055666f87b1": "a1cc6d9c7e58c78a50dbea6f2a76b8ee",
".git/objects/aa/e87ce1516f1c97416ac4e94cd1f9b209d4c917": "f36dfff9994088d59387ec48ed9b4348",
".git/objects/aa/f82cf49dd2b8c2190db22ad5af8126ea16b228": "e62f7f58281d8b65cede01c96ad01390",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/af/6241199f95f9495ec237b16c1fad09c7f4ae33": "b87f069f59c0df49bafacd16827bcb95",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cc5d472d9bbac9933dea6b31b112a7638de9ae": "dd7b1f657cb17813786b5adc402dd6cd",
".git/objects/b7/7b8faf12a59af1aa7a61325ec24665defe0629": "f425b475186ba6992a7dbf6a573bf55b",
".git/objects/db/3a2995595afea63ab280da3468c203a74653dd": "c36d0738dada27fa2bcd15ba6812af25",
".git/objects/db/05f31269f0ec06e02c578ea5f4af391cde5148": "991b06101a435aa0e6e83c10d57a3c83",
".git/objects/db/7652f0663725248668e3c9c81b581283968513": "050c18cda00e74bee3ce346f0fc0713c",
".git/objects/db/40ee800d9921c0268c330f8967a47919b3d321": "d1a11bf251ceb0e5624c88096eba9960",
".git/objects/a8/77b7f4c813e457427165a5ead6dcd2827a7a91": "70cb967b36a8a7197571c6f849915818",
".git/objects/a8/bc8f26c01caed1e74bbb4459241eeb072e8389": "8d87ba2bb52ca46181340f003238b7e5",
".git/objects/de/32970670cd3d3937ca4ae69c83f1927bc24543": "3d332e44f1e9d8f94af644fae27e087e",
".git/objects/de/a017c086fa462b293182376751a9b99323b6cf": "2cb3b3d7be5a0e2a5e493ed382786a8d",
".git/objects/de/bc471e4177a4cc5b68d5c0073f22c5c2962f90": "6a1fdaedb12952409480d8520b029e19",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0d50cd001fc34bc0508d18e36a3adacf4df7c7": "b171221571baa94047c892e1a550a7c3",
".git/objects/b9/c24c8b5fa53b1c2688d65425875905af20e03f": "2ebcce9020bce2198faebdf1ac277a34",
".git/objects/ef/24ea9a6f4979c43f92bfd23aa6f5e130d7017d": "112ac5c11104f27b73aec9444449a2d2",
".git/objects/c3/b4810da450c30e499e2526437d47950b7dcdf5": "8fc3414779a5e96aee7b68cbe9350042",
".git/objects/c4/95f648cd9b4fbfac86e3b3ce19016ad7d3fff1": "64e33e9a0ada31ed34b0d75baa61ae72",
".git/objects/c4/f4604d1ccfa9c1e8ca6ee727e45455461eeb6b": "4efbcc210bbfc3ff4c09c7c7432d0664",
".git/objects/ea/eb29c8d676a4c7da8d63ff9c0f6b2a25c6518e": "f2575f2906fac7aaacdc87369e059565",
".git/objects/cd/fb85f0e932441b280d1302e5c4e0e0667b87a1": "696c23f1ae5200df1c7580ce0e680a54",
".git/objects/e6/0e36f1c58753a831d886fe6b5a9e940f2dea10": "bbf2238800bb58a0ac5190f5a5e386f1",
".git/objects/f9/243ddc92e5d4dbbde66ef6cece8c6bc940cdd9": "65a8604b4f2bd32dbe5aa4032130ef7e",
".git/objects/f9/46e8563edbe644928a1f0cc2c8d6f027981fc7": "4cbbacbc89fd89fb330fd32bfda6bf34",
".git/objects/f7/0af32404adb6f5c53878ef6b1f8ba2defce635": "5cbde01a62f36d2765ba0296ad75d836",
".git/objects/e8/feec14edf5ff429df014628b62fcb006f0103e": "a602c0a1f48ae91bdc1573e4dedf0e48",
".git/objects/e8/364f125319110403d0c6d21bf330c510322a84": "bc8f48916d52636555cf84829ce0babc",
".git/objects/e8/bfdc9f5509cac3161611713eb29234f8f68e38": "eea2a662eba069288f3e08cb902579f3",
".git/objects/e8/9c3107ffc70bc7211e8039dd1e0eeca5e38c38": "29745de2a37a668c8954a80007e581c3",
".git/objects/fa/5723752e778d386ee2b7ea4ad6fb805cb6f8a9": "4d38e041b35485795ecd2d18cbfa4877",
".git/objects/ff/41f981b40eb6cef46d474505d40c6c4729db24": "0bc4c1c01bdace315e155f5d4b755383",
".git/objects/ff/36cb43957c9f93768a1e033ee653949338b51f": "4548a849e27e6a6a5ca8342593daeb59",
".git/objects/c5/02d89ba2f6131a4fa1ae09ebb597d908f58ce9": "2560c851a75bc7ca84c63a27ed975c34",
".git/objects/c2/8983eb7df60aa65299dda741b8c83cb7a91f19": "351bd0447f31c671ef3479bed104b97e",
".git/objects/c2/9f3984aebe2ae9d2d725f649473eac1ef8d8f5": "ea7af63f506cbc5231c0729429d8a90d",
".git/objects/c2/acec12b0e1b1f94e682b43e991063a05cdf5b1": "fdda6f073adbc39c53c8eb3db456c282",
".git/objects/f6/536cb8dc0cb7603bd8e39b9536ce7f4ab5c5a3": "031cd29211a4c7a688e608e963b14f58",
".git/objects/f6/a264c235e699e959c55729f6dbc7f07f7b13f1": "5d6cdb9ebd880858d37e8c212906ca04",
".git/objects/f6/f3accfc445208819fca630cecedb27d845a502": "ca8c4fc07362960741f84fc4f922e4b4",
".git/objects/f1/9f8dd14463a282c5a1085dcb188cb12cb1c44b": "39555f46f31edde5fd718c9b7e98aec6",
".git/objects/e7/85c87351b4f546fbb8e0eba11b0c84e3b0ac35": "3c56cefcb884e27347b9cca1cf6ca2c2",
".git/objects/e7/18acc9d022518f6ed5b4d0f3ea1dcd5c629c18": "91b8198511abe37efb6725e83f3822cb",
".git/objects/e7/841c94ca8d6769828aaaa1fe35aa5b2424b757": "a75aaac428a11e7b248aa6253133f1c2",
".git/objects/cb/4505d63c55501416ada39701291f4555457144": "d7b50e17bc11bb8efcea4a30e4fee14f",
".git/objects/cb/4d641f12269825ce0350d4ef57f25c58c6769e": "f8c9d5c6aa235fab60678c7573287cd0",
".git/objects/e0/ecc2a90ab863aabbde97998acf9f55e4c5a142": "a5a69af205e6275feaaae54085730580",
".git/objects/e0/ec0ad6f9c664767afda1a762d7482d82b0f24a": "95cac7262db6bfd46eafec447828616d",
".git/objects/46/55dc08cc2287a2033be2ce62f8386f57149b76": "36c29091a81ec65179040efbac22eac6",
".git/objects/46/699fe2188e12429006965b9d41100dfbab7245": "7876fd356f135e9fffc46de3dd3e3753",
".git/objects/2c/f5fcf0988b0d5dcc8acc4c1877e8bb4d6700ad": "31c7117fc692ce9522e46aa85126801c",
".git/objects/79/08e97a71e9efe7cc8792150f597b2a3100f7d1": "0afd49f2bab4b2d1629f063f6fe7a9dd",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/fdea6f50611ef96775c9e46a8b9aea34e491b9": "2a261304e20c2102f809d806fd431bd9",
".git/objects/41/88b165ac27934bbe1fad9db1d6d1bfbedd7a1c": "2c34084b5489d928e84b95974955924a",
".git/objects/83/b76ff5ccc2c4bae5e3844911fa497d19e16cd5": "eb4701893f7919287751527fe041374a",
".git/objects/83/d36b0359f30bdd03ceeb2a8e075eb90648500f": "4b6552d736ca8d0efa9a1c5a66e068b4",
".git/objects/77/e3c2b1f85be1a8a437fce448eb203f7082dd4d": "78baf5935be19005488c6b33e209e373",
".git/objects/70/24f084d6698035fc7fb99ad9ca778ae764b0fd": "4e998ec7ec617a9372267eae607da65d",
".git/objects/70/51584e26af673f517bc67bcf92d3d73a9b311d": "2beb42c7785a7d8c6eeff9e811a0b414",
".git/objects/70/dffeb1d43a7f491339f8fb73080ea6a2b46df1": "3788122c00f46323f28da9aeac371151",
".git/objects/1e/c832fd30b63a01e7e18a59c34af5196d7dc0d5": "711960e212ef2dd995774f26c1b33071",
".git/objects/1e/84c795cda3f73ed224059c102aa7d1cc678527": "bc8ce9d9c29c3421490e49042c6fddcb",
".git/objects/84/7dca01f964743bf41b8ab912ca531a73deefbb": "448ebefada1735614a6d39b8d6d31d50",
".git/objects/4a/a5711c519077797208196ce4b80cc34ab4a669": "13289b6d509823c2e2c834ea41671915",
".git/objects/15/4c15a8c70a3a63895024c1829f16ced592d7e6": "0a27f83b571492b65fb5113cb96e30eb",
".git/objects/15/046336843a977d9dd42185ad7e07fbb6f5eeab": "be94ed878f3b0a16919d8f0413812924",
".git/objects/15/36e1a804b1715790cd06379377a2664fb5a5cb": "29487ea1e65f2e86079b3727b5a6ee73",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/dea27cf315045c570ee9a00de8daf4fb26805c": "cfb698ccbdb56470756ce417cb4c7d12",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/8fa04f44c3126b1baba0eec2c0eaf04b7f678c": "6d1a9365fe485b5b984ee951861dde75",
".git/objects/71/8c712fb2f1910a00d425cfbe29d671bf25ca08": "ce98364ffbf2e8c0290e15ba6946d736",
".git/objects/71/0da8390c07c7035146ee06a8a2e2f3dc79e123": "1f07b4c071c869d4fb712ddb23fee152",
".git/objects/71/9acb68508a63554a4e17c5d2462bc1ab84daf7": "e8062bd196a797ba21ce39cb11941429",
".git/objects/71/a72a25a7b8acf73c8ce08ed56dd38a60a47dd9": "54e886ce5108e97d6dc02a66b5a4e099",
".git/objects/71/75d8fc50ff23dabc7ea0eccb927b11a1274904": "dd7738d22fe627ad6887719354e48fba",
".git/objects/71/7ac391cbfe9648f8068038fefa2e724ae64cef": "7fc8e2d49b99f529a0aab6123bc6b80d",
".git/objects/76/c47dd824b36d3f5235bd28cfa801d92af4b999": "b41a4ae256e55a848b6faa88fd50c042",
".git/objects/76/c11c414b0295ed76e07131fb80b371bfc37536": "7c9e6b6751517c694d18af7a88c5c90e",
".git/objects/1c/201bb4ff5e18a326d86fac26de867eef329cae": "674097da1cf2921ffb6a6024bf208335",
".git/objects/82/886cd4200bedf088fec3ea0f92c7a013db0e8f": "07f9629e7fc7c5762e071c73d85e1102",
".git/objects/49/978644523ce1ec2206127de53ee1651d23f164": "9269c798f4d0684524f7a8b2dcfda2ab",
".git/objects/40/68503f256ff64695fbf6e682d83e80f81cd84a": "b72f42410e0a7bc5248008a244e300d9",
".git/objects/40/5728ee016b7e445375ced3a0d0828bb6e987d0": "c89884ebb549fbc4051256eb795fed10",
".git/objects/40/fcf12d5549c8c34972b42de7eda22b850c40e3": "793349225f53fb5b8decbf6f210dc46e",
".git/objects/2e/ad1038877502f228c7e45ec8f1ed18142463e1": "817a51c0dee86b2a98f54bc3081e95b8",
".git/objects/2b/8c2c5aebaab1d84e6229e62ee5b05df3625334": "f98cb830fc85a7de02ce01915fdf4f3d",
".git/objects/47/1c1964a1e2e5d9b03bde3895af81eaa1b643f9": "58d7bbd545a44f319998cd4a33d22ec7",
".git/objects/47/2ca0e073a642ea931d644aab92ea2c1b9fad4d": "1fec45dee590837792a9fb54daddb699",
".git/objects/78/c40a7488273d9dba19299157db9d665a278bb5": "af9ebdc84240b4384a7ab7b342ef7e4e",
".git/objects/78/6babd14760c6370670c58829b3ed8bdc2958a1": "9f0c36b1253313fb6b8f8506c6c88456",
".git/objects/8b/f478f410ed42e6cf4a1839d795477458698130": "d829ede7a5ebfe1a113c7855087425c6",
".git/objects/8b/0b8fe017ef26686b2f13ab4f1aaa68931be458": "455eb9a5a0373cee2d13d6fe76890d36",
".git/objects/13/44aa7250f6be02d773139f7db7e70820e1baa4": "89fa4d0445de441d8c53f0bf2f71bf4f",
".git/objects/7f/3474d8eb590bd3dd7821f7f74205bfde6c0054": "6683b8a1e44d138ba9f399675b464feb",
".git/objects/7f/19dd53039802ba03495c9fbef863c46bbebbe3": "26af5b80497ab2e081a50aa22118f76b",
".git/objects/7a/177ee4d97e6a46d955136fa3f58bd4ca269763": "4dacf3f83c380800eaf22b9b4123a31e",
".git/objects/7a/72acf184c71b30bd76ceb5507a9f55865f3bdf": "ccd24b865e605085e8dc7b078a6fc478",
".git/objects/8e/bcc8fde25c87fd042c8230cffd62b887b5ffb5": "5b1a8ce169eec0e32ab83f785a02810a",
".git/objects/8e/cef4fcafc6a8aeb0e840b07ada6d6c23b47376": "4d3053a6588c91b0db6e18b99e61583a",
".git/objects/25/aa5613e6babe4a9a7cf3fb7ea1070b1d716dd0": "eb57f47268ba1c65ede73206d5df8930",
".git/objects/25/32ddadb2638adee830514ce6f4a2e4e431660a": "469cd677c9c8cfaacb65ec7a87710d0c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b8708a910a1f2593db64a5aab81ccdbb",
".git/logs/refs/heads/main": "80a26f581548cc0b6554e35f8d888867",
".git/logs/refs/remotes/demo/main": "90aad531b9d463994663f8921a534cfb",
".git/logs/refs/remotes/release/main": "fc8d71c01b93ab2b7112cbd716e91074",
".git/logs/refs/remotes/origin/main": "e91a3d7103e03b28c39b2d186b29c3af",
".git/logs/refs/stash": "9f8fbdd667e3d7a1f020301d71123a2e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "849baf1806cf9c908e1d48cde653bc05",
".git/refs/remotes/demo/main": "3438d9b16974bc2febf9ab104ec2ff5a",
".git/refs/remotes/release/main": "2be80afb059d1324c92f29fe536e85d9",
".git/refs/remotes/origin/main": "849baf1806cf9c908e1d48cde653bc05",
".git/refs/stash": "fee288e89c60b6acd02a58a312c32667",
".git/index": "6678a573a4a22a6d7e40748fbf78e0a7",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "97c7057f230a51944fc5bae1261fbe14",
".git/FETCH_HEAD": "6ee10744d30aa3ac9603d743891db3c1",
"assets/AssetManifest.json": "075d9f76593f7a60768ee12c305304ff",
"assets/NOTICES": "beea311cf86707e23ccb9a07ae3f96cc",
"assets/FontManifest.json": "9dfa152ece81e1ebe9efce968e6208af",
"assets/fonts/NotoSansTC-Regular.otf": "d6b43f6600389d7442f317adfbbd9942",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/NotoColorEmoji-Regular.ttf": "ed84f46d3d5564a08541cd64bddd495c",
"assets/assets/Restart.svg": "484325e1b2df9ef172761d55d5e7b4bb",
"assets/assets/Content.svg": "4e82dc34d6ce44748f49ed3809093246",
"assets/assets/User.svg": "21c569c8a4ace7ce4c3fea0992669e17",
"assets/assets/Address.svg": "83d6f82fdb592bed8298535b0ae9d675",
"assets/assets/finger_drag.svg": "da20104d0a72fa54948f602a979167fa",
"assets/assets/Image.svg": "933812f19c057eac6d105681e58607e4",
"assets/assets/edit.svg": "6a51c2c5160efd525ed8fa456622c60d",
"assets/assets/back.png": "80b84719b02bc395db3e2316ddfebcfe",
"assets/assets/front.png": "b7ce6816d12a9acd7d90194a578f9461",
"assets/assets/Layout.svg": "75e1d113638b8b4d5e1813a88ba5196e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
