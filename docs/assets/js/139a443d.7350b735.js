"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2356],{3905:(a,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var t=n(7294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function c(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function i(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function s(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},c=Object.keys(a);for(t=0;t<c.length;t++)n=c[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);for(t=0;t<c.length;t++)n=c[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var u=t.createContext({}),p=function(a){var e=t.useContext(u),n=e;return a&&(n="function"==typeof a?a(e):i(i({},e),a)),n},d=function(a){var e=p(a.components);return t.createElement(u.Provider,{value:e},a.children)},l="mdxType",h={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},o=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,c=a.originalType,u=a.parentName,d=s(a,["components","mdxType","originalType","parentName"]),l=p(n),o=r,g=l["".concat(u,".").concat(o)]||l[o]||h[o]||c;return n?t.createElement(g,i(i({ref:e},d),{},{components:n})):t.createElement(g,i({ref:e},d))}));function g(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var c=n.length,i=new Array(c);i[0]=o;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=a,s[l]="string"==typeof a?a:r,i[1]=s;for(var p=2;p<c;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}o.displayName="MDXCreateElement"},6680:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var t=n(7462),r=(n(7294),n(3905));const c={},i=void 0,s={unversionedId:"Cache/Penggunaan",id:"Cache/Penggunaan",title:"Penggunaan",description:'Pustaka ini berkaitan dengan konfigurasi file pada config/cache.php, secara bawaan akan menggunakan salah satu "Provider" yang tercantum pada opsi "default". Provider yang tersedia yaitu Files dan Database. Berikut ringkasan penggunaannya :',source:"@site/development-guide/08-Cache/01-Penggunaan.md",sourceDirName:"08-Cache",slug:"/Cache/Penggunaan",permalink:"/docs/development-guide/Cache/Penggunaan",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stream File",permalink:"/docs/development-guide/Http/Client/stream-file"},next:{title:"Membuat provider anda sendiri",permalink:"/docs/development-guide/Cache/membuat-provider"}},u={},p=[{value:"Metoda yang tersedia (Pada Provider Files dan Database)",id:"metoda-yang-tersedia-pada-provider-files-dan-database",level:2},{value:"Membuat cache baru",id:"membuat-cache-baru",level:3},{value:"Mengambil cache yang sudah ada",id:"mengambil-cache-yang-sudah-ada",level:3},{value:"Memperbaharui cache yang sudah ada",id:"memperbaharui-cache-yang-sudah-ada",level:3},{value:"Menghapus cache yang sudah ada",id:"menghapus-cache-yang-sudah-ada",level:3},{value:"Mengkosongkan|Menghapus semua cache",id:"mengkosongkanmenghapus-semua-cache",level:3},{value:"Menampilkan semua cache yang tersimpan",id:"menampilkan-semua-cache-yang-tersimpan",level:3},{value:"Mengecek eksistensi cache",id:"mengecek-eksistensi-cache",level:3},{value:"Metoda yang hanya tersedia di Provider Database",id:"metoda-yang-hanya-tersedia-di-provider-database",level:2},{value:"Mengecek apakah cache sudah kedaluwarsa",id:"mengecek-apakah-cache-sudah-kedaluwarsa",level:3},{value:"Mengupdate cache jika sudah kedaluwarsa",id:"mengupdate-cache-jika-sudah-kedaluwarsa",level:3}],d={toc:p};function l(a){let{components:e,...n}=a;return(0,r.kt)("wrapper",(0,t.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Pustaka ini berkaitan dengan konfigurasi file pada config/cache.php, secara bawaan akan menggunakan salah satu "Provider" yang tercantum pada opsi "default". Provider yang tersedia yaitu ',(0,r.kt)("strong",{parentName:"p"},"Files")," dan ",(0,r.kt)("strong",{parentName:"p"},"Database"),". Berikut ringkasan penggunaannya :"),(0,r.kt)("h2",{id:"metoda-yang-tersedia-pada-provider-files-dan-database"},"Metoda yang tersedia (Pada Provider Files dan Database)"),(0,r.kt)("h3",{id:"membuat-cache-baru"},"Membuat cache baru"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse SLiMS\\Cache;\n\n/**\n * cacheName @string\n * contents @string|integer|array|objek \n * yang nanti akan disimpan dalam format JSON\n */\nCache::set(cacheName: 'namacache', 'content');\n")),(0,r.kt)("h3",{id:"mengambil-cache-yang-sudah-ada"},"Mengambil cache yang sudah ada"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse SLiMS\\Cache;\n\n/**\n * cacheName @string\n * callBack @closure optional \n */\nCache::get(cacheName: 'namacache', callBack: 'fungsi_kustom_anda');\n")),(0,r.kt)("h3",{id:"memperbaharui-cache-yang-sudah-ada"},"Memperbaharui cache yang sudah ada"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse SLiMS\\Cache;\n\n/**\n * cacheName @string\n * contents @string|integer|array|objek \n * yang nanti akan disimpan dalam format JSON\n */\nCache::put(cacheName: 'namacache', contents: 'content');\n")),(0,r.kt)("h3",{id:"menghapus-cache-yang-sudah-ada"},"Menghapus cache yang sudah ada"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse SLiMS\\Cache;\n\n/**\n * cacheName @string\n */\nCache::destroy(cacheName: 'namacache');\n")),(0,r.kt)("h3",{id:"mengkosongkanmenghapus-semua-cache"},"Mengkosongkan|Menghapus semua cache"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse SLiMS\\Cache;\n\nCache::purge();\n")),(0,r.kt)("h3",{id:"menampilkan-semua-cache-yang-tersimpan"},"Menampilkan semua cache yang tersimpan"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse SLiMS\\Cache;\n\nCache::getList();\n")),(0,r.kt)("h3",{id:"mengecek-eksistensi-cache"},"Mengecek eksistensi cache"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse SLiMS\\Cache;\n\n/**\n * cacheName @string\n */\nCache::isExists(cacheName: 'namacache');\n")),(0,r.kt)("h2",{id:"metoda-yang-hanya-tersedia-di-provider-database"},"Metoda yang hanya tersedia di Provider Database"),(0,r.kt)("h3",{id:"mengecek-apakah-cache-sudah-kedaluwarsa"},"Mengecek apakah cache sudah kedaluwarsa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse SLiMS\\Cache;\n\n/**\n * cacheName @string\n * terkait pengaturan/opsi kedaluwarsa nya anda\n * dapat melihat nya di config/cache.php pada \n * providers database\n */\nCache::isExpire(cacheName: 'namacache');\n")),(0,r.kt)("h3",{id:"mengupdate-cache-jika-sudah-kedaluwarsa"},"Mengupdate cache jika sudah kedaluwarsa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse SLiMS\\Cache;\n\n/**\n * cacheName @string\n * contents @string|integer|array|objek \n * \n * sama dengan metoda Cache::put hanya saja ini\n * dikombinasikan dengan pengecak kedaluwarsa.\n */\nCache::putIfExpire(cacheName: 'namacache', contents: 'content');\n")))}l.isMDXComponent=!0}}]);