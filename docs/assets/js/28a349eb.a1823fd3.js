"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9119],{3905:(a,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var i=n(7294);function t(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,i)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){t(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function p(a,e){if(null==a)return{};var n,i,t=function(a,e){if(null==a)return{};var n,i,t={},r=Object.keys(a);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(t[n]=a[n]);return t}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(t[n]=a[n])}return t}var u=i.createContext({}),o=function(a){var e=i.useContext(u),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},m=function(a){var e=o(a.components);return i.createElement(u.Provider,{value:e},a.children)},s="mdxType",d={inlineCode:"code",wrapper:function(a){var e=a.children;return i.createElement(i.Fragment,{},e)}},k=i.forwardRef((function(a,e){var n=a.components,t=a.mdxType,r=a.originalType,u=a.parentName,m=p(a,["components","mdxType","originalType","parentName"]),s=o(n),k=t,g=s["".concat(u,".").concat(k)]||s[k]||d[k]||r;return n?i.createElement(g,l(l({ref:e},m),{},{components:n})):i.createElement(g,l({ref:e},m))}));function g(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var r=n.length,l=new Array(r);l[0]=k;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=a,p[s]="string"==typeof a?a:t,l[1]=p;for(var o=2;o<r;o++)l[o]=n[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7751:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var i=n(7462),t=(n(7294),n(3905));const r={title:"Pengantar",description:"Sistem plugin merupakan inovasi yang dihadirkan sejak versi SLiMS Bulian 9.3.0 oleh Mas....",image:"https://slims.web.id/web/site/templates/assets/images/logo.png",keywords:["plugins slims","slims plugin","dokumentasi plugin SLiMS"]},l="Pengantar",p={unversionedId:"Plugin/Intro",id:"Plugin/Intro",title:"Pengantar",description:"Sistem plugin merupakan inovasi yang dihadirkan sejak versi SLiMS Bulian 9.3.0 oleh Mas....",source:"@site/development-guide/04-Plugin/01-Intro.md",sourceDirName:"04-Plugin",slug:"/Plugin/Intro",permalink:"/docs/development-guide/Plugin/Intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Pengantar",description:"Sistem plugin merupakan inovasi yang dihadirkan sejak versi SLiMS Bulian 9.3.0 oleh Mas....",image:"https://slims.web.id/web/site/templates/assets/images/logo.png",keywords:["plugins slims","slims plugin","dokumentasi plugin SLiMS"]},sidebar:"tutorialSidebar",previous:{title:"Plugin",permalink:"/docs/development-guide/Alur/Plugin"},next:{title:'Membuat plugin "Hello World"',permalink:"/docs/development-guide/Plugin/Membuat-plugin-sederhana"}},u={},o=[{value:"Permulaan",id:"permulaan",level:3},{value:"Persiapan",id:"persiapan",level:3},{value:"Sistematika plugin",id:"sistematika-plugin",level:3},{value:"Format isi plugin",id:"format-isi-plugin",level:3},{value:"Tipe operasi plugin",id:"tipe-operasi-plugin",level:3},{value:"<strong>Hook</strong>",id:"hook",level:4},{value:"<strong>Path</strong>",id:"path",level:4},{value:"<strong>Menu</strong>",id:"menu",level:4}],m={toc:o};function s(a){let{components:e,...n}=a;return(0,t.kt)("wrapper",(0,i.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"pengantar"},"Pengantar"),(0,t.kt)("h3",{id:"permulaan"},"Permulaan"),(0,t.kt)("p",null,"Sistem plugin merupakan inovasi yang dihadirkan sejak versi SLiMS Bulian 9.3.0 oleh Mas ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/idoalit/"},"Ido Alit"),". Tujuan dari inovasi ini yaitu untuk mempermudah kerja dari pengembang SLiMS (dari sisi pengguna atau pihak yang membantu pengguna) dalam melakukan proses upgrade SLiMS dari versi sekarang ke versi yang lebih mutakhir."),(0,t.kt)("h3",{id:"persiapan"},"Persiapan"),(0,t.kt)("p",null,"Hal yang perlu disiapkan (minimal) untuk membuat sebuah plugi n seperti:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Pengetahuan mengenai bahasa pemrograman ",(0,t.kt)("strong",{parentName:"li"},"HTML (termasuk CSS), PHP, JS, dan SQL")),(0,t.kt)("li",{parentName:"ul"},"Pemahaman mengenai penggunaan library dan tool seperti ",(0,t.kt)("strong",{parentName:"li"},"composer (opsional)"))),(0,t.kt)("h3",{id:"sistematika-plugin"},"Sistematika plugin"),(0,t.kt)("p",null,"Semua plugin SLiMS secara ",(0,t.kt)("em",{parentName:"p"},"default")," diletakan di folder ",(0,t.kt)("inlineCode",{parentName:"p"},"plugins/"),", yang ditandai dengan ekstensi file ",(0,t.kt)("inlineCode",{parentName:"p"},".plugin.php"),". Seluruh plugin akan dipindai oleh SLiMS dengan kedalaman tingkat folder hingga 3 tinggkat."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"# Contoh tingkat kedalaman folder yang dipindai\nplugins/ # tingkat 0\n--- biblio_adv_log.plugin.php # plugin tingkat 1\n--- label_barcode/ # folder tingkat 1\n------ label.plugin.php # plugin tingkat 2\n--- contoh_plugin/ # folder tingkat 1\n------ folder_didalam_contoh_plugin/ # folder tingkat 2\n--------- plugin_didalam_contoh_plugin.plugin.php # plugin tingkat 3\n")),(0,t.kt)("p",null,"dengan ini anda dapat membuat plugin dengan sistem hirarki."),(0,t.kt)("h3",{id:"format-isi-plugin"},"Format isi plugin"),(0,t.kt)("p",null,"format isi digunakan untuk menginformasikan SLiMS mengenai informasi terkait pembuat plugin, versi plugin, deskrpsi plugin, dll."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Plugin Name: <nama plugin>\n * Plugin URI: <url untuk mengunduh plugin ini>\n * Description: <deskripsi plugin>\n * Version: <versi plugin dalam format Pemversian Semantic>\n * Author: <Nama Pembuat Plugin>\n * Author URI: <Alamat Media Sosial Pembuat Plugin>\n */\n")),(0,t.kt)("p",null,"Isi informasi yang ada dengan menganti contoh isi yang ada, contoh: <nama_plugin> ",(0,t.kt)("inlineCode",{parentName:"p"},"menjadi nama anda"),". Setelah itu, kita perlu mencantumpkan kelas pustaka SLiMS yaitu ",(0,t.kt)("inlineCode",{parentName:"p"},"SLiMS\\Plugins")," seperti berikut setalah informasi plugin sebelumnya:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"use SLiMS\\Plugins;\n")),(0,t.kt)("p",null,"lalu membuat variable plugin:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"$plugins = Plugins::getInstance();\n")),(0,t.kt)("p",null,"Maka format isi plugin selengkapnya seperti ini:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Plugin Name: <nama plugin>\n * Plugin URI: <url untuk mengunduh plugin ini>\n * Description: <deskripsi plugin>\n * Version: <versi plugin dalam format Pemversian Semantic>\n * Author: <Nama Pembuat Plugin>\n * Author URI: <Alamat Media Sosial Pembuat Plugin>\n */\nuse SLiMS\\Plugins;\n$plugins = Plugins::getInstance();\n")),(0,t.kt)("h3",{id:"tipe-operasi-plugin"},"Tipe operasi plugin"),(0,t.kt)("p",null,"Setelah anda paham mengenai format isi plugin, maka anda harus mencantumkan operasi apa yang akan dilakukan oleh plugin tersebut. Sistem plugin SLiMS berjalan dalam beberapa tipe, seperti ",(0,t.kt)("a",{parentName:"p",href:"#hook"},"hook"),", ",(0,t.kt)("a",{parentName:"p",href:"#path"},"path"),", dan ",(0,t.kt)("a",{parentName:"p",href:"#menu"},"menu"),". "),(0,t.kt)("h4",{id:"hook"},(0,t.kt)("strong",{parentName:"h4"},"Hook")),(0,t.kt)("p",null,"merupakan metoda yang digunakan oleh SLiMS untuk mengoperasikan beberapa perintah untuk melakukan modifikasi atau menambah atau menginterupsi operasi yang sudah/akan berjalan sesuai nama hook yang tersedia. Berikut daftar operasi hook yang tersedia di SLiMS:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"const ADMIN_SESSION_AFTER_START = 'admin_session_after_start';\nconst CONTENT_BEFORE_LOAD = 'before_content_load';\nconst CONTENT_AFTER_LOAD = 'after_content_load';\nconst BIBLIOGRAPHY_INIT = 'bibliography_init';\nconst BIBLIOGRAPHY_BEFORE_UPDATE = 'bibliography_before_update';\nconst BIBLIOGRAPHY_AFTER_UPDATE = 'bibliography_after_update';\nconst BIBLIOGRAPHY_BEFORE_SAVE = 'bibliography_before_save';\nconst BIBLIOGRAPHY_AFTER_SAVE = 'bibliography_after_save';\nconst BIBLIOGRAPHY_BEFORE_DELETE = 'bibliography_before_delete';\nconst BIBLIOGRAPHY_AFTER_DELETE = 'bibliography_after_delete';\nconst BIBLIOGRAPHY_CUSTOM_FIELD_DATA = 'advance_custom_field_data';\nconst BIBLIOGRAPHY_CUSTOM_FIELD_FORM = 'advance_custom_field_form';\nconst BIBLIOGRAPHY_BEFORE_DATAGRID_OUTPUT = 'bibliography_before_datagrid_output';\nconst CIRCULATION_AFTER_SUCCESSFUL_TRANSACTION = 'circulation_after_successful_transaction';\nconst MEMBERSHIP_INIT = 'membership_init';\nconst MEMBERSHIP_BEFORE_UPDATE = 'membership_before_update';\nconst MEMBERSHIP_AFTER_UPDATE = 'membership_after_update';\nconst MEMBERSHIP_BEFORE_SAVE = 'membership_before_save';\nconst MEMBERSHIP_AFTER_SAVE = 'membership_after_save';\nconst OVERDUE_NOTICE_INIT = 'overduenotice_init';\nconst DUEDATE_NOTICE_INIT = 'duedate_init';\nconst MODULE_MAIN_MENU_INIT = 'module_main_menu_init';\nconst OAI2_INIT = 'oai2_init';\n")),(0,t.kt)("p",null,"Daftar diatas merupakan operasi hook yang terdaftar secara default di sistem plugin SLiMS. Namun ada beberapa yang tidak terdaftar namun tetap dapat bekerja dengan baik, berikut penjelasannya:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"ADMIN_SESSION_AFTER_START")," : hook akan bekerja ketika sesi login admin dimulaui."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"CONTENT_BEFORE_LOAD")," : hook ini berjalan di OPAC, dimana prosesnya akan bekerja sebelum konten OPAC dimuat."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"CONTENT_AFTER_LOAD")," : ini kebalikan dari hook kedua, yaitu setelah konten pada OPAC dimuat."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"BIBLIOGRAPHY_INIT")," : hook ini berada pada halaman utama pada modul ",(0,t.kt)("strong",{parentName:"li"},"bibliografi"),"."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"BIBLIOGRAPHY_BEFORE_UPDATE")," : hook ini beroperasi sebelum proses pembaharuan data bibliografi dimulai."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"BIBLIOGRAPHY_BEFORE_SAVE")," : hook ini beroperasi sebelum proses penyimpanan data bibliografi dimulai."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"BIBLIOGRAPHY_AFTER_UPDATE")," : hook ini beroperasi setelah proses pembaharuan data bibliografi dimulai."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"BIBLIOGRAPHY_AFTER_SAVE")," : hook ini beroperasi setelah proses penyimpanan data bibliografi dimulai."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"BIBLIOGRAPHY_CUSTOM_FIELD_DATA")," : hook ini merupakan operasi yang digunakan untuk mendaftarkan data ruas tambahan secara mahir."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"BIBLIOGRAPHY_CUSTOM_FIELD_FORM")," : hook ini merupakan operasi yang digunakan untuk mendaftarkan ruas tambahan secara mahir."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"MEMBERSHIP_INIT")," : tidak berbeda jauh dengan ",(0,t.kt)("inlineCode",{parentName:"li"},"BIBLIOGRAPHY_INIT")," hanya saja ini berjalan di modul ",(0,t.kt)("strong",{parentName:"li"},"membership")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"MEMBERSHIP_BEFORE_UPDATE")," : hook ini mirip seperti ",(0,t.kt)("inlineCode",{parentName:"li"},"BIBLIOGRAPHY_BEFORE_UPDATE"),". Namun hanya pada modul ",(0,t.kt)("strong",{parentName:"li"},"membership"),"."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"MEMBERSHIP_BEFORE_SAVE")," : hook ini mirip seperti ",(0,t.kt)("inlineCode",{parentName:"li"},"BIBLIOGRAPHY_BEFORE_SAVE"),". Namun hanya pada modul ",(0,t.kt)("strong",{parentName:"li"},"membership"),"."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"MEMBERSHIP_AFTER_UPDATE")," : hook ini mirip seperti ",(0,t.kt)("inlineCode",{parentName:"li"},"BIBLIOGRAPHY_AFTER_UPDATE"),". Namun hanya pada modul ",(0,t.kt)("strong",{parentName:"li"},"membership"),"."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"MEMBERSHIP_AFTER_SAVE")," : hook ini mirip seperti ",(0,t.kt)("inlineCode",{parentName:"li"},"BIBLIOGRAPHY_AFTER_SAVE"),". Namun hanya pada modul ",(0,t.kt)("strong",{parentName:"li"},"membership"),"."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"OAI2_INIT")," : hook ini berjalan pada file oai2.php pada halaman utama, dapat digunakan untuk memodifikasi process pertukaran data melalui protokol oai-pmh")),(0,t.kt)("p",null,"Berikut ini cara penggunaan hook yang tersedia pada daftar diatas:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"<?php \n# Contoh\n$plugins->register('<nama_hook>', function(){\n    // lakukan suatu hal didalam block fungsi ini\n});\n\n// atau jika dipraktikan akan seperti ini\n$plugins->register(Plugins::MEMBERSHIP_INIT, function(){\n    // lakukan suatu hal didalam block fungsi ini\n});\n\n// atau jika anda tidak nyaman dengan penulisan Class::konstanta bisa\n// juga seperti ini.\n// sesuaikan saja dengan daftar hook yang tersedia\n$plugins->register('membership_init', function(){\n    // lakukan suatu hal didalam block fungsi ini\n});\n\n// atau bisa juga dengan gaya seperti ini\nPlugins::hook(Plugins::MEMBERSHIP_INIT, function(){\n    // lakukan suatu hal didalam block fungsi ini\n});\n")),(0,t.kt)("h4",{id:"path"},(0,t.kt)("strong",{parentName:"h4"},"Path")),(0,t.kt)("p",null,"Operasi ini merupakan cara yang digunakan untuk memodifikas tampilan halaman OPAC yang sudah ada tanpa merubah source code asli SLiMS. Misal path halaman member jika dicontohkan dalam bentuk URL secara penuh ",(0,t.kt)("inlineCode",{parentName:"p"},"http://localhost/slims/index.php?p=member"),". Tampilan dalam halaman itu dapat anda ganti dengan menggunakan metoda ini. Berikut cara nya:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"// atau jika dipraktikan akan seperti ini\n$plugins->registerMenu('opac', 'member', __DIR__ . '/member.inc.php');\n// atau\nPlugins::menu('opac', 'member', __DIR__ . '/member.inc.php');\n// atau\nPlugins::opac('member', __DIR__ . '/member.inc.php');\n")),(0,t.kt)("p",null,"Penjelasan paramter pada fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"registerMenu()"),":"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"opac")," : ini menandakan bahwa anda mendaftarkan menu/path baru pada OPAC."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"member")," : nama path yang dipanggil melalui ",(0,t.kt)("inlineCode",{parentName:"li"},"?p=")," seperti yang ada dicontoh URL di atas."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"__DIR__ . '/member.inc.php'")," : merupakan lokasi file yang akan mengganti tampilan sebenarnya pada halaman ",(0,t.kt)("inlineCode",{parentName:"li"},"?p=member"),".")),(0,t.kt)("p",null,"Anda juga dapat mendaftarkan path lain nya yang tidak ada di SLiMS. Contoh sebagai berikut:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"// halaman custom, bebas pustaka\n$plugins->registerMenu('opac', 'bebas pustaka', __DIR__ . '/sayabebas.inc.php');\n")),(0,t.kt)("p",null,"Pada paramter ke ",(0,t.kt)("strong",{parentName:"p"},"2")," setiap spasi akan dikonversi menjadi ",(0,t.kt)("inlineCode",{parentName:"p"},"_")," atau ",(0,t.kt)("strong",{parentName:"p"},"underscore"),". Contoh 'bebas pustaka' menjadi 'bebas_pustaka', maka ketika anda memanggil path itu dibrowser menjadi \u2705 ",(0,t.kt)("inlineCode",{parentName:"p"},"http://localhost/slims/index.php?p=bebas_pustaka")," bukan \ud83d\udeab ",(0,t.kt)("inlineCode",{parentName:"p"},"http://localhost/slims/index.php?p=bebas pustaka"),"."),(0,t.kt)("h4",{id:"menu"},(0,t.kt)("strong",{parentName:"h4"},"Menu")),(0,t.kt)("p",null,"Tak berbeda dengan sebelumnya, bagian ini merupakan penjelasan bagaimana menambah/merubah menu yang ada di setiap module saat login sebagai pustakawan. Ini mempermudah anda sebagai pengembang SLiMS dalam mendaftarkan menu pada modul tertentu tanpa harus merubah file ",(0,t.kt)("inlineCode",{parentName:"p"},"submenu.php")," pada setiap module. Berikut cara nya:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"// atau jika dipraktikan akan seperti ini\n$plugins->registerMenu('membership', 'Bebas Pustaka', __DIR__ . '/sayabebas.inc.php');\n// atau\nPlugins::menu('membership', 'Bebas Pustaka', __DIR__ . '/sayabebas.inc.php');\n// atau\nPlugins::membership('Bebas Pustaka', __DIR__ . '/sayabebas.inc.php');\n")),(0,t.kt)("p",null,"Penjelasan paramter pada fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"registerMenu()"),":"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"membership")," : ini menandakan bahwa anda mendaftarkan/merubah menu baru pada modul membership. Anda dapat mendaftarkan pada modul yang lain selama modul itu tersedia dan aktif."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"Bebas Pustaka")," : nama menu yang akan muncul di daftar menu pada modul yang dituliskan pada parameter ke 1."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"__DIR__ . '/sayabebas.inc.php'")," : merupakan lokasi file yang akan muncul ketika menu diklik.")),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("p",{parentName:"admonition"},"Perbedaan fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"registerMenu()")," pada operasi path dan operasi menu adalah penempatannya. Jika OPAC berada di halaman opac SLiMS, maka selain itu akan ditampilkan pada halaman admin jika memang modul nya tersedia.")))}s.isMDXComponent=!0}}]);