'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5a15ffce06ef9b96d40899ea7963b790",
"index.html": "2fa8d779fbb4b7615502b243570603bd",
"/": "2fa8d779fbb4b7615502b243570603bd",
"CNAME": "5e687477e6e720fd4666ea827bb07412",
"main.dart.js": "636f80a1f2a2fd91f9b4b45be3af18c0",
"404.html": "484850d111e1460d2acfea4d3def50b1",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "40793429abaa561c864d6baa415159d6",
".git/ORIG_HEAD": "491555d5e0b9f1ccca875cd9d060de23",
".git/config": "7054a8cf4404d42096fad311c8df113f",
".git/objects/0d/493ef801629740bd8190bae9bd1b22680b9c76": "0f8b42e7167d45cf6eabb68de82c7c0c",
".git/objects/92/fed8c264ffcbff81836ef979fa4dc66ab6eaf2": "25f5a5fd998c2a3492121ec0033181c9",
".git/objects/92/b88d4442d547a8468c7886235c00009953eceb": "566a1effa6d88ab963ed3c7dd82bb6e2",
".git/objects/0c/dd154236bebe136e208f2d96bd6f4a3c764480": "c7b601a7d75431e68c633e2de2f75f14",
".git/objects/3e/6e9c49ef4ad98790ea7559c26406dd84d3776d": "c6edac3977c5beb048f519b5e8b18d52",
".git/objects/57/f25662def2e3e4e19790def418ddbdd8e52134": "96fd2c1abeec770842125c97d9acef92",
".git/objects/9e/6ae6b487097c774012a0df58d5ac5532a25ebc": "4f45fbbbbf20cfaf8a4ad9d0bf8d1661",
".git/objects/9e/8fef0283db781ab50093cff3de4a0433cd0a7c": "9c2ec1006996d8f8fac17deaad2cd59a",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/69/f6e67503875a16b51a4b9e88a92aafc982b755": "e13eca5cbd4b85d3f338aafcf7f3f5c0",
".git/objects/56/6e9b41fa319ecf95e531c1ee626706a92ca16e": "a52875a8e90239fc756a72563ef7562b",
".git/objects/3d/affb8ac5b444b26481342ff4339dca59edf850": "eea6b0ad9525aea9f63993b555df26f0",
".git/objects/0b/b8814651cea0fede1d614cf38a8dc157522718": "efecc36913cdef30c5001529a6f880e5",
".git/objects/0b/79aea75d16169821cd2f02b62f7900cc8c4d0e": "5fb88b4023489ca7777eba6ee711ed21",
".git/objects/94/de5107cd272a905097bb830352ea13fa913a3f": "01fbf6ceddaff6adb31ad78d1b54227e",
".git/objects/5f/64d18e4b54b065716fa74ab8dc016a778d730e": "651fdea50b36767a47bf140e7be68dff",
".git/objects/05/7590e7293359d26e395fede4c8d0bdce5d20ed": "bb1c822eb7f7a286f9615f54ce367397",
".git/objects/05/46046a7fb51777c9b9fc0dbac1e2e3f600b8aa": "cf81cf403e232103888e02eeb04deed6",
".git/objects/9c/595a6fb7692405a5c4a10e1caf93d7a5bd9c37": "193384edb232d7bf5ce166a15effe0fb",
".git/objects/02/9e85e82509222ee8ba3864c23638b8dc31ad5b": "5e90684e249e5b011e3b9a0d1e3c0de3",
".git/objects/a4/dae61172f8b6b14fb3b1299b929c81b78115dc": "4bc7e84e08cd1c25442d062f5668e6cf",
".git/objects/a4/65fd93f6bed00243657070ab2fdc33f889783d": "c98a64efc7eebf490861b30de3000903",
".git/objects/ac/1124847527ff5a8daf81af2fe4a49e139e4b5e": "633285842de262470fe8c23349d2d062",
".git/objects/bb/128b4fd279159511fc56a70cb3dedbd2c5f4df": "f5eea9e8acbe370a7784b5425ab92cf0",
".git/objects/d7/02f3bdfa6b3a74ecc6dce6e6fa6eb61ee01073": "fa252dacfceb5d9283ea0644e6e4dab6",
".git/objects/df/80de19627a5ff2f8b89b3a67ddb15a09197430": "6016dbc6713a786c562141c56539b1dc",
".git/objects/a2/368f78f1ea98e465d789b77d5581d52dadad5b": "bd5c670d58e7a91309d73a630f3fdbdf",
".git/objects/a5/59b1c37943deb894e71f089941786bb9326b7d": "febe604478659ae8e33ff2a8b6f6506d",
".git/objects/bd/4d6d36511e209866b79cbc0be132063a69cc2f": "239252d93bb08a2984b905e87315c03c",
".git/objects/bd/4ade03736ced71a652794a44e80bb06ba3cb03": "087aca97309e87cda95e1cec44e46a35",
".git/objects/d1/5cf88dc4d4233f684ccb99a387daf5dfb1fa22": "395add3bf512553e05ee1e68961c3aaa",
".git/objects/d1/0dcaa9de1193002110fa0938966b1ff7062710": "628d96621a99d0ce8460f9cb0880d2a8",
".git/objects/d6/66b57c1eea651f224422439fcdd6427e86b7d6": "5311783f024edecc409158ca4d12a0af",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/5e42cf623d2c53597c2ebdab468e025659ef00": "879c6ee6519b8c5b437849f3efc98af5",
".git/objects/d8/eb112d2ea8fbf7f842c637c1ba279573c9a53f": "5c3f8589c82ac064640682455ab05df3",
".git/objects/ab/426468e4ca536e0c9a1cf7cb533e6d41adbc26": "5d5591e6f95f18e6bf3b175c9ab71269",
".git/objects/e5/71c584b57c36dc04e20b3597c5359791e040d8": "dd0dc79573ab0c4e6a83c61bd12a6d9d",
".git/objects/e2/d0f1e8b6d6fd313e25e4e03cc114e75950b80d": "7dfc517b3f2a47c3179b46748d157389",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/f732a01cc78cde72a248a50580f2e12fdcbd1f": "5344ba684c436d97fb7857e0c46e798d",
".git/objects/c0/2e30f875d6ea10f30d4c17f58cea5734e8b62e": "2ab0537a0771076a2e3766f948e6e27b",
".git/objects/ee/988f14673a08e45a66a2d473f7229d4d7dd716": "304c714813631fb96a6a287e70fd3962",
".git/objects/c9/97da6d7313458df17ecca7248b0f00fff41c7c": "8720c699e429e55365529c455e963a1f",
".git/objects/fc/9381d3af8aacfb0751413e310a1bb451f7bdd4": "1eddb92a7f88ef747717a8d30cb7a849",
".git/objects/f2/a7908e051e53ef746deca06b5680998a0e1990": "03695606be6e05bc0dc658c522555899",
".git/objects/f5/b5c5e3022a8ce27b17e4f9ed852391f3f3bdd8": "3378a140a066ea6ddec3c9bc6e55fa0c",
".git/objects/e3/40aaad18c3e43e5f1e2ad116151231f7f73712": "57360afaec87a8a1c2b3a68a3f8e76e6",
".git/objects/ca/0b763724f58f303ee19bcc3e9f1904c6194c64": "b9ff374d8e9f22b2a9478a0c5970c112",
".git/objects/e4/f25d56aa2735463e5a1b5b5442c04ad62f70a3": "4d9f5d440adbf5dff6141892aa13161e",
".git/objects/fb/8c5c0de7b1b6c57c1250f8ba42cd7683a883c7": "d689223081a6d200baec37b5dd2e2774",
".git/objects/c1/162b23da960810b44ac9dfc20a829202f7a85d": "7c13f7a4f93fd364e739e2a50f9ccb5f",
".git/objects/c6/65e3adef44700f9a791bd377d7b7b5ae19f48d": "8820d6d92e03760f898ffbf72fe69e15",
".git/objects/c6/babee1ec49d936cf7df8f20b309d5d8627ce20": "f0a7c3cfcaae04552d3c4887d51a6e40",
".git/objects/4e/5add85c10eeeb9811fe3733e2102d4e12c324b": "c440a449f96c7a6105a1948fd0e21e5c",
".git/objects/20/decde02d148201b6b97f4fbc267e8301210e47": "df2fb1c8173ad21b20dc07ed1cca23a2",
".git/objects/18/b9f367592503bbe5b03f0988f0154af25bdc9a": "5cda82125a9856d24b5645e37b867717",
".git/objects/27/ec980fb2199b1bbe97cbc07e3954efbce1d042": "77b31b92b270897b1fd43beb12709329",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/11/e7d245eda780d9006a7dcce0a3fb665c1eb457": "c5a19fe0789c43f6c8d083f303bd6807",
".git/objects/7d/b89230ddbed61229af2a2176712f0d47cc5dd4": "a64fd5185f106298434e8f98ff0e2979",
".git/objects/7d/8c70c6a0811961a0cfc19be624c09909439d46": "a25c16cd3969ab40122ad2b1f0dbc511",
".git/objects/16/dac10fff18443731a167fe0992d94278236d80": "9a706f41eb73a57f96e78d3cd5877869",
".git/objects/16/ed9f3ecfd309ceb0303b8e817921dae07b442d": "2384e8d773f88578e473b1a6527bb88a",
".git/objects/16/ae0e9e4ec03247ef78f14a9f31d29c18263d46": "486fdccacd801f2fd4e3cd491a9e90b3",
".git/objects/89/4712949cceb943ff0bc8a8e60505554d37dc44": "d4d8910983eabbe24bdb9cd98664392f",
".git/objects/45/fc16522233abe26a7a2ca798468cc2e26ebea9": "89897fd5bb39687ed9aeb119f41b4571",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/73/0f4c307ed8d12c3229463c530f3ed21726d09e": "ed51c30659db86dafa3a06c5000c7fe3",
".git/objects/87/b8915d66ac0e38e593073ca721c38e58cf6b38": "e9e6ffea917c2bbc710ae70725b1b2f3",
".git/objects/28/102fddbd7a675ce6ff839b2eaa8ddfb32b9215": "39f6491f36b625c6e785f5c54fe91327",
".git/objects/17/943a0c0c32d884fc13db362215a1c5a4d3b616": "36f1ef9ab7488d035bac8e88f331c105",
".git/objects/8a/c7dd1fdd1c71f02e5ae8d81bd928ab3365e26e": "96b196d041443054b266fb583c7291aa",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/9274f95eb9c4e595d56982c29afc8e49646f87": "4258f2e2aa724e1ba49af473ae04c238",
".git/objects/10/9d2380878f696b2824358780e3f7c1dc3a1765": "6b2faf1eefbc65334e3dcda469fb10ad",
".git/objects/19/90580ff1f9c8d0187c50f01fa3acda20dc6b5f": "bd7c4bc616c1955345d3a2aeb7d44422",
".git/objects/26/c4b493feb209b9b1339bd8e183651442039714": "f77d4c16dfb16be673d49709477675ca",
".git/objects/4d/5cd110163d913357cdc093595e43a2f388c2fe": "8c7564e57f3d10dff2b8fee0a6865c0a",
".git/objects/75/717ce44b5f4c9d58a916af6433ccc321b41d5a": "4ca35dda94287bf71eb1bbae6d29f067",
".git/objects/75/bc1c7156aa91469e8205ffe1433cd29082e939": "50d4bb60d25094b8fc2682b2c1c4dd25",
".git/objects/72/fff21d87b95b70c41931f5a5950c0fa3948ddd": "fb9d6a103374d4f21e0914322b09d91b",
".git/objects/44/5a69c00e48288ac420a2ead9ae5a1cb4cd36d4": "30acce2c548117d84a8d75fe9309707e",
".git/objects/2a/dd270986ac1a84f55a7dd3397c37ffdd139cd7": "f7460d2b9ec66d63ede0f6eab2f4747a",
".git/objects/2a/23d4bab40fa80eb918de5b5823af45406e674e": "da9f991f091b13b79dbfd59c060c6a3e",
".git/objects/2f/6a35c444f39be3c7b6c9718dff045a60c997f2": "b5bd36ca89ba438fd683e1759abfbe8a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/07a65e9ff10bf6eee6ecb0c7bd69557d6ab3cd": "2758d7eb2c5de69e6f467222ded82e10",
".git/objects/00/5dc9b44191b0c5b3d90b1fd3430d7cafbdc496": "a54f5bed83c625b5cd464860444466a2",
".git/objects/5c/2722661c6c0bc4e90bc199d1e9a0f42038208f": "fb3c7e14b8e7062fe2e31eea5337cb0f",
".git/objects/5c/0e4223dd21f8a207586e2317b28f9e034c5843": "f2b953d110ba6869cc6ff03edfab785d",
".git/objects/65/6e3c5ce409b2d8c4156531b205fd225744cd8f": "4827b9b37900c06cdf97a464e0d20abe",
".git/objects/62/13143eb345447030f16a773540255b8f506170": "42cfad51479bb44f95bdee8600b2fe35",
".git/objects/96/1791187270ad06a6d72bc0c563787f3ec2402b": "1a56d85222988640b4e1a136ff57e923",
".git/objects/96/9de27f99d7e55de326adcf69069c06672122b6": "3e6fb55e3e65f4c91bcce0ac4979fa5d",
".git/objects/96/7bcc85f36be056de521727eca33bc8ef379093": "46b5a99be8c5b956e01f50e0b4c49738",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/54/ab662826f1f9b91a3f13d1c6a7f867282c1ef8": "7a4784a06a5fea9dddffe197499ba4e4",
".git/objects/53/48a1612058b3d19c3896e0fdcc8f55a95f3a85": "fad1e85e491b47ebe0ae5ee2ebc88783",
".git/objects/53/7cd75ea9cc59c7023b866bc1e1e0ef10526803": "5ccef591fe4180867889d48dfe6c2930",
".git/objects/30/5e161942a0d17be6a296808dea88e7a2191a64": "25f4ead5eeff526e22b2a21d2aa3deaa",
".git/objects/5b/1945caff69f8e900b96a2a1c3a44b636609b73": "66a5eb32da227707da10694ab4189abd",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/6d/94897d07536e624583949196d8d76cbbf120b1": "6dd05e3d8e375e69897d730a3131e433",
".git/objects/6c/89d101b1462862d6796aa2efcd2dd2624e4e0e": "53f04732e97ec8eb8a5badf04a0cb535",
".git/objects/99/ef86483e02e8c45d4896ce418eea4185d35ba7": "12a74d1ed1d745afa1c41e161cfc1571",
".git/objects/99/4d5517b1e17a27c59477d05459f412cf0251df": "e15cca613694672255daf5e3e84ba88e",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/53176feeebdd4cff647cffc5fd2357b6083eaf": "023edd403f4fe2c11e102cad99ed3b4d",
".git/objects/90/676dbff07ce838c30dc7d6ec7a9fe5de1e92e9": "c5d5da2391de2a9a49dda73f1ddb2439",
".git/objects/d3/1e9c9e9767ea7cc2da90c519fa18c528388500": "2e3b729307ed25dad8b29f1e9f61b961",
".git/objects/d3/cad2a26ae400a300bad99c5a0c62cd7a7c7d02": "86c4d59664f508779c78b47005379afb",
".git/objects/d4/d25b60f39ab9edeed2af392e7609520c80cf74": "3dcf558720e4c57fbc04bf7e015b01ec",
".git/objects/d4/ffef9e4886b38806c8a23a0074d04b1cc96bf5": "90561485912ecff7036a5cea07117dc7",
".git/objects/dd/4722ef2042116293da8e00658b1be4902c658c": "3000a16b8cac6d244536e24b60053ec2",
".git/objects/dc/f4bf9c005f3ac037ec46460b4ec1ac9d954d03": "0dbaadfbe9a7df736365261b2d9050d2",
".git/objects/dc/64b9044e3f5143e77be2cd9971c5326727affb": "4c16526d5bdfc032a6a11fdca6ae4fcf",
".git/objects/b6/4831eeb5483f55d41aaf9fb874c96986947f68": "86e49ef32432d49020a26fb3dbe0c80a",
".git/objects/d2/af79fe33ed9af2006d96daac1bb41c53f1cf6e": "0929c18de55aee499f89e68e37a879bc",
".git/objects/aa/007f1fe213f32821ab0aba7fbba055666f87b1": "a1cc6d9c7e58c78a50dbea6f2a76b8ee",
".git/objects/aa/e87ce1516f1c97416ac4e94cd1f9b209d4c917": "f36dfff9994088d59387ec48ed9b4348",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cc5d472d9bbac9933dea6b31b112a7638de9ae": "dd7b1f657cb17813786b5adc402dd6cd",
".git/objects/b7/7b8faf12a59af1aa7a61325ec24665defe0629": "f425b475186ba6992a7dbf6a573bf55b",
".git/objects/db/3a2995595afea63ab280da3468c203a74653dd": "c36d0738dada27fa2bcd15ba6812af25",
".git/objects/db/7652f0663725248668e3c9c81b581283968513": "050c18cda00e74bee3ce346f0fc0713c",
".git/objects/a8/77b7f4c813e457427165a5ead6dcd2827a7a91": "70cb967b36a8a7197571c6f849915818",
".git/objects/a8/bc8f26c01caed1e74bbb4459241eeb072e8389": "8d87ba2bb52ca46181340f003238b7e5",
".git/objects/de/32970670cd3d3937ca4ae69c83f1927bc24543": "3d332e44f1e9d8f94af644fae27e087e",
".git/objects/de/bc471e4177a4cc5b68d5c0073f22c5c2962f90": "6a1fdaedb12952409480d8520b029e19",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/95f648cd9b4fbfac86e3b3ce19016ad7d3fff1": "64e33e9a0ada31ed34b0d75baa61ae72",
".git/objects/c4/f4604d1ccfa9c1e8ca6ee727e45455461eeb6b": "4efbcc210bbfc3ff4c09c7c7432d0664",
".git/objects/ea/eb29c8d676a4c7da8d63ff9c0f6b2a25c6518e": "f2575f2906fac7aaacdc87369e059565",
".git/objects/e6/0e36f1c58753a831d886fe6b5a9e940f2dea10": "bbf2238800bb58a0ac5190f5a5e386f1",
".git/objects/f7/0af32404adb6f5c53878ef6b1f8ba2defce635": "5cbde01a62f36d2765ba0296ad75d836",
".git/objects/e8/feec14edf5ff429df014628b62fcb006f0103e": "a602c0a1f48ae91bdc1573e4dedf0e48",
".git/objects/ff/41f981b40eb6cef46d474505d40c6c4729db24": "0bc4c1c01bdace315e155f5d4b755383",
".git/objects/ff/36cb43957c9f93768a1e033ee653949338b51f": "4548a849e27e6a6a5ca8342593daeb59",
".git/objects/c2/8983eb7df60aa65299dda741b8c83cb7a91f19": "351bd0447f31c671ef3479bed104b97e",
".git/objects/f6/536cb8dc0cb7603bd8e39b9536ce7f4ab5c5a3": "031cd29211a4c7a688e608e963b14f58",
".git/objects/f6/a264c235e699e959c55729f6dbc7f07f7b13f1": "5d6cdb9ebd880858d37e8c212906ca04",
".git/objects/e7/841c94ca8d6769828aaaa1fe35aa5b2424b757": "a75aaac428a11e7b248aa6253133f1c2",
".git/objects/cb/4505d63c55501416ada39701291f4555457144": "d7b50e17bc11bb8efcea4a30e4fee14f",
".git/objects/cb/4d641f12269825ce0350d4ef57f25c58c6769e": "f8c9d5c6aa235fab60678c7573287cd0",
".git/objects/e0/ec0ad6f9c664767afda1a762d7482d82b0f24a": "95cac7262db6bfd46eafec447828616d",
".git/objects/46/55dc08cc2287a2033be2ce62f8386f57149b76": "36c29091a81ec65179040efbac22eac6",
".git/objects/79/08e97a71e9efe7cc8792150f597b2a3100f7d1": "0afd49f2bab4b2d1629f063f6fe7a9dd",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/88b165ac27934bbe1fad9db1d6d1bfbedd7a1c": "2c34084b5489d928e84b95974955924a",
".git/objects/83/d36b0359f30bdd03ceeb2a8e075eb90648500f": "4b6552d736ca8d0efa9a1c5a66e068b4",
".git/objects/77/e3c2b1f85be1a8a437fce448eb203f7082dd4d": "78baf5935be19005488c6b33e209e373",
".git/objects/70/51584e26af673f517bc67bcf92d3d73a9b311d": "2beb42c7785a7d8c6eeff9e811a0b414",
".git/objects/70/dffeb1d43a7f491339f8fb73080ea6a2b46df1": "3788122c00f46323f28da9aeac371151",
".git/objects/1e/c832fd30b63a01e7e18a59c34af5196d7dc0d5": "711960e212ef2dd995774f26c1b33071",
".git/objects/15/36e1a804b1715790cd06379377a2664fb5a5cb": "29487ea1e65f2e86079b3727b5a6ee73",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/dea27cf315045c570ee9a00de8daf4fb26805c": "cfb698ccbdb56470756ce417cb4c7d12",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/71/8c712fb2f1910a00d425cfbe29d671bf25ca08": "ce98364ffbf2e8c0290e15ba6946d736",
".git/objects/71/0da8390c07c7035146ee06a8a2e2f3dc79e123": "1f07b4c071c869d4fb712ddb23fee152",
".git/objects/40/68503f256ff64695fbf6e682d83e80f81cd84a": "b72f42410e0a7bc5248008a244e300d9",
".git/objects/40/fcf12d5549c8c34972b42de7eda22b850c40e3": "793349225f53fb5b8decbf6f210dc46e",
".git/objects/47/1c1964a1e2e5d9b03bde3895af81eaa1b643f9": "58d7bbd545a44f319998cd4a33d22ec7",
".git/objects/8b/f478f410ed42e6cf4a1839d795477458698130": "d829ede7a5ebfe1a113c7855087425c6",
".git/objects/7a/72acf184c71b30bd76ceb5507a9f55865f3bdf": "ccd24b865e605085e8dc7b078a6fc478",
".git/objects/25/32ddadb2638adee830514ce6f4a2e4e431660a": "469cd677c9c8cfaacb65ec7a87710d0c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f77278fab433664149ea5be9cda33214",
".git/logs/refs/heads/main": "6a55f43e1b755057ab065a2e7857a08e",
".git/logs/refs/remotes/release/main": "125a83c26179e3f182cda2017c4ff5e3",
".git/logs/refs/remotes/origin/main": "2c9d364cf53684417ad5c87378646407",
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
".git/refs/heads/main": "6aec247ee9c5d811070998c7663829e3",
".git/refs/remotes/release/main": "23be8dddf91a8bec4902ec5803f009b5",
".git/refs/remotes/origin/main": "6aec247ee9c5d811070998c7663829e3",
".git/refs/stash": "fee288e89c60b6acd02a58a312c32667",
".git/index": "00601be2fea69577c68c110c515b7007",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "591e149375a04930a321e846b1329067",
".git/FETCH_HEAD": "b380b56998c6d494a6a516325af5cea3",
"assets/AssetManifest.json": "ffea3933c1922ad1a0f083a2a1eb6408",
"assets/NOTICES": "b3bfc2249f45ce2f489e9741698fa0e6",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/Content.svg": "4e82dc34d6ce44748f49ed3809093246",
"assets/assets/User.svg": "21c569c8a4ace7ce4c3fea0992669e17",
"assets/assets/Address.svg": "83d6f82fdb592bed8298535b0ae9d675",
"assets/assets/finger_drag.svg": "da20104d0a72fa54948f602a979167fa",
"assets/assets/Image.svg": "933812f19c057eac6d105681e58607e4",
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
