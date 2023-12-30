"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1097],{3905:(a,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var t=n(7294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function u(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var s=t.createContext({}),p=function(a){var e=t.useContext(s),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},d=function(a){var e=p(a.components);return t.createElement(s.Provider,{value:e},a.children)},o="mdxType",m={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},k=t.forwardRef((function(a,e){var n=a.components,i=a.mdxType,r=a.originalType,s=a.parentName,d=u(a,["components","mdxType","originalType","parentName"]),o=p(n),k=i,g=o["".concat(s,".").concat(k)]||o[k]||m[k]||r;return n?t.createElement(g,l(l({ref:e},d),{},{components:n})):t.createElement(g,l({ref:e},d))}));function g(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=n.length,l=new Array(r);l[0]=k;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=a,u[o]="string"==typeof a?a:i,l[1]=u;for(var p=2;p<r;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3980:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var t=n(7462),i=(n(7294),n(3905));const r={},l=void 0,u={unversionedId:"Database/Penggunaan",id:"Database/Penggunaan",title:"Penggunaan",description:"Sejak versi 9 (Bulian), SLiMS hadir dengan dua cara untuk berkomunikasi dengan database yaitu MySQLi dan PDO. Adapun kedua nya sama-sama berfungsi untuk mengambil data dari MySQL/MariaDB via PHP dengan penulisan sintak yang berbeda. Berikut contohnya:",source:"@site/development-guide/05-Database/02-Penggunaan.md",sourceDirName:"05-Database",slug:"/Database/Penggunaan",permalink:"/docs/development-guide/Database/Penggunaan",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Permulaan",permalink:"/docs/development-guide/Database/Intro"},next:{title:"Ekstensi",permalink:"/docs/development-guide/Database/Ekstensi"}},s={},p=[{value:"MySQLi",id:"mysqli",level:4},{value:"PDO",id:"pdo",level:4},{value:"Perbedaan penggunaan MySQLi dan PDO",id:"perbedaan-penggunaan-mysqli-dan-pdo",level:3},{value:"Global scope",id:"global-scope",level:4},{value:"Simpulan",id:"simpulan",level:4},{value:"Menggunakan MySQLi via <code>DB::class</code>",id:"menggunakan-mysqli-via-dbclass",level:3},{value:"Menganti koneksi",id:"menganti-koneksi",level:3},{value:"Sementara",id:"sementara",level:4}],d={toc:p};function o(a){let{components:e,...n}=a;return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sejak versi 9 (Bulian), SLiMS hadir dengan dua cara untuk berkomunikasi dengan database yaitu MySQLi dan PDO. Adapun kedua nya sama-sama berfungsi untuk mengambil data dari MySQL/MariaDB via PHP dengan penulisan sintak yang berbeda. Berikut contohnya:"),(0,i.kt)("h4",{id:"mysqli"},"MySQLi"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n// Mengambil data tunggal\n$query = $dbs->query('select * from `biblio` where `biblio_id` = 1');\n$data = $query->fetch_assoc(); // alternative lain $query->fetch_array(), $query->fetch_row(), $query->fetch_object()\n\n// Mengambil data jamak\n// selalu gunakan metoda escape_string \n// ketika hendak memasukan input user kedalam query anda\n// untuk menghindari SQL Injection\n$title = $dbs->escape_string($_GET['title']); \n$query = $dbs->query(\"select * from `biblio` where `title` like '%$title%'\");\n$result = [];\nwhile($data = $query->fetch_assoc()) {\n    $result[] = $data;\n}\n\n// lakukan sesuatu dibawah ini berdasarkan data yang anda ambil\n")),(0,i.kt)("h4",{id:"pdo"},"PDO"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse SLiMS\\DB;\n\n// Mengambil data tunggal\n$query = DB::getInstance()->query('select * from `biblio` where `biblio_id` = 1');\n$data = $query->fetch(PDO::FETCH_ASSOC); // alternative lain $query->fetch(PDO::FETCH_NUM), $query->fetch(PDO::FETCH_OBJ), $query->fetchObject() dll\n\n// Mengambil data jamak\n// selalu gunakan prepare statement \n// ketika hendak memasukan input user kedalam query anda\n// untuk menghindari SQL Injection\n$query = DB::getInstance()->prepare(\"select * from `biblio` where `title` like ?\");\n$query->execute(['%'.$_GET['title'].'%']);\n\n// atau\n$query = DB::getInstance()->prepare(\"select * from `biblio` where `title` like :title\");\n$query->execute(['title' => '%'.$_GET['title'].'%']);\n\n$result = [];\nwhile($data = $query->fetch(PDO::FETCH_ASSOC)) {\n    $result[] = $data;\n}\n\n// lakukan sesuatu dibawah ini berdasarkan data yang anda ambil\n")),(0,i.kt)("p",null,"Selengkapnya anda dapat membaca dokumentasi resmi dari ",(0,i.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/book.pdo.php"},"PHP mengenai penggunaan PDO"),"."),(0,i.kt)("h3",{id:"perbedaan-penggunaan-mysqli-dan-pdo"},"Perbedaan penggunaan MySQLi dan PDO"),(0,i.kt)("h4",{id:"global-scope"},"Global scope"),(0,i.kt)("p",null,"Ketika anda menggunakan MySQLi atau $dbs didalam sebuah ",(0,i.kt)("inlineCode",{parentName:"p"},"function()")," maka anda tidak bisa menulis seperti ini"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"function ambilData() {\n    $query = $dbs->query('select * from biblio');\n    // skrip selanjutnya\n}\n")),(0,i.kt)("p",null,"ketika anda menulis seperti skrip diatas maka PHP akan menampilkan ",(0,i.kt)("strong",{parentName:"p"},"error")," mengenai variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"$dbs")," tidak tersedia. Solusinya yaitu:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"function ambilData($dbs) {\n    $query = $dbs->query('select * from biblio');\n    // skrip selanjutnya\n}\n\n// atau \n\nfunction ambilData() {\n    global $dbs;\n    $query = $dbs->query('select * from biblio');\n    // skrip selanjutnya\n}\n")),(0,i.kt)("p",null,"Namun apabila anda menggunakan PDO atau ",(0,i.kt)("inlineCode",{parentName:"p"},"DB::class")," maka anda tidak perlu menggunakan ",(0,i.kt)("strong",{parentName:"p"},"global scope")," apabia ingin memanggil nya dalam ",(0,i.kt)("inlineCode",{parentName:"p"},"function"),". Contoh nya sebagai berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"function ambilData() {\n    $query = \\SLiMS\\DB::getInstance()->query('select * from biblio');\n    // skrip selanjutnya\n}\n")),(0,i.kt)("p",null,"atau bisa seperti ini:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse \\SLiMS\\DB; // unuk skrip harus dibawah <?php\n\nfunction ambilData() {\n    $query = DB::getInstance()->query('select * from biblio');\n    // skrip selanjutnya\n}\n")),(0,i.kt)("h4",{id:"simpulan"},"Simpulan"),(0,i.kt)("p",null,"Jadi kesimpulannya adalah ada dicara pemanggilannya. Jika anda menggunakan MySQLi anda harus memanfaatkan variabel $dbs, tetapi di PDO anda tidak perlu untuk menggunakan variabel untuk menggunakannya."),(0,i.kt)("h3",{id:"menggunakan-mysqli-via-dbclass"},"Menggunakan MySQLi via ",(0,i.kt)("inlineCode",{parentName:"h3"},"DB::class")),(0,i.kt)("p",null,"Jika anda ingin menggunakan MySQLi namun tidak bergantung pada variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"$dbs")," maka anda dapat memanggil seperti berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$query = \\SLiMS\\DB::getInstance('mysqli')->query('select * from biblio');\n")),(0,i.kt)("p",null,"atau"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use \\SLiMS\\DB;\n$query = DB::getInstance('mysqli')->query('select * from biblio');\n")),(0,i.kt)("p",null,"walaupun menggunakan ",(0,i.kt)("inlineCode",{parentName:"p"},"DB::class")," anda tetap bisa menggunakan ",(0,i.kt)("inlineCode",{parentName:"p"},"API")," dari MySQLi seperti ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch_assoc")," dll seperti berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$result = [];\nwhile($data = $query->fetch_assoc())\n{\n    $result[] = $data;\n}\n")),(0,i.kt)("h3",{id:"menganti-koneksi"},"Menganti koneksi"),(0,i.kt)("p",null,"Jika anda menggunakan ",(0,i.kt)("inlineCode",{parentName:"p"},"\\SLiMS\\DB")," untuk mengambil data dari ",(0,i.kt)("em",{parentName:"p"},"database")," maka anda dapat menggunakan lebih dari satu koneksi database. Secara bawaan pustaka tersebut menggunakan profil ",(0,i.kt)("a",{parentName:"p",href:"Intro#konfigurasi"},"nodes SLiMS")," untuk mengganti sebagai berikut:"),(0,i.kt)("h4",{id:"sementara"},"Sementara"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$db1 = DB::getInstance(); // akan menggunakan profil koneksi SLiMS\n$db2 = DB::connection('non-default'); // akan menggunakan profil koneksi non-default (nama bisa anda sesuaikan)\n")),(0,i.kt)("p",null,"untuk menambahkan koneksi yang lain dapat membaca pada ",(0,i.kt)("a",{parentName:"p",href:"Intro#menambahkan-koneksi-lain"},"referensi sebelumnya")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Sebelum anda menggunakan MySQLi via ",(0,i.kt)("inlineCode",{parentName:"p"},"$dbs")," atau ",(0,i.kt)("inlineCode",{parentName:"p"},"DB::class")," dan PDO pastikan pada file yang sedang anda gunakan sudah menempatkan ",(0,i.kt)("inlineCode",{parentName:"p"},"require '<slims-root-path>/sysconfig.inc.php'")," pada posisi paling atas setelah skrip ",(0,i.kt)("inlineCode",{parentName:"p"},"use SLiMS\\DB;")," dll;")))}o.isMDXComponent=!0}}]);