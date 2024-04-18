"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2057],{5680:(e,a,n)=>{n.d(a,{xA:()=>s,yg:()=>y});var t=n(6540);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),g=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},s=function(e){var a=g(e.components);return t.createElement(o.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=g(n),m=i,y=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return n?t.createElement(y,p(p({ref:a},s),{},{components:n})):t.createElement(y,p({ref:a},s))}));function y(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=m;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[d]="string"==typeof e?e:i,p[1]=l;for(var g=2;g<r;g++)p[g]=n[g];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3017:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>g});var t=n(8168),i=(n(6540),n(5680));const r={title:"Cara Penggunaan",description:"Untuk menggunakan pustaka HttpClient anda menggunakan sintak sebagai berikut...",image:"https://static.slims.web.id/docs/7.1.2-penggunaan.png"},p="Cara Penggunaan",l={unversionedId:"Http/Client/cara-penggunaan",id:"Http/Client/cara-penggunaan",title:"Cara Penggunaan",description:"Untuk menggunakan pustaka HttpClient anda menggunakan sintak sebagai berikut...",source:"@site/development-guide/07-Http/Client/02-cara-penggunaan.md",sourceDirName:"07-Http/Client",slug:"/Http/Client/cara-penggunaan",permalink:"/docs/development-guide/Http/Client/cara-penggunaan",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Cara Penggunaan",description:"Untuk menggunakan pustaka HttpClient anda menggunakan sintak sebagai berikut...",image:"https://static.slims.web.id/docs/7.1.2-penggunaan.png"},sidebar:"tutorialSidebar",previous:{title:"Permulaan",permalink:"/docs/development-guide/Http/Client/Permulaan"},next:{title:"Download File",permalink:"/docs/development-guide/Http/Client/download-file"}},o={},g=[{value:"Permintaan dengan metoda <code>GET</code>",id:"permintaan-dengan-metoda-get",level:4},{value:"Permintaan dengan metoda <code>POST</code>",id:"permintaan-dengan-metoda-post",level:4},{value:"Menambahkan opsi",id:"menambahkan-opsi",level:4},{value:"Menambahkan banyak opsi",id:"menambahkan-banyak-opsi",level:4},{value:"Menambahkan <em>headers</em>",id:"menambahkan-headers",level:4},{value:"Menambahkan <em>body</em>",id:"menambahkan-body",level:4},{value:"Menggabungkan <em>options</em>, <em>headers</em> dan <em>body</em>",id:"menggabungkan-options-headers-dan-body",level:4}],s={toc:g},d="wrapper";function u(e){let{components:a,...n}=e;return(0,i.yg)(d,(0,t.A)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"cara-penggunaan"},"Cara Penggunaan"),(0,i.yg)("p",null,"Untuk menggunakan pustaka ",(0,i.yg)("inlineCode",{parentName:"p"},"HttpClient")," anda menggunakan sintak sebagai berikut:"),(0,i.yg)("h4",{id:"permintaan-dengan-metoda-get"},"Permintaan dengan metoda ",(0,i.yg)("inlineCode",{parentName:"h4"},"GET")),(0,i.yg)("p",null,"Jika anda hendak mengambil sumber data dari layanan luar maka anda perlu menggunakan metoda ",(0,i.yg)("inlineCode",{parentName:"p"},"GET"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"<?php\nuse SLiMS\\Http\\Client;\n\n$request = Client::get('https://slims.web.id/kutipan/');\n")),(0,i.yg)("h4",{id:"permintaan-dengan-metoda-post"},"Permintaan dengan metoda ",(0,i.yg)("inlineCode",{parentName:"h4"},"POST")),(0,i.yg)("p",null,"Jika anda hendak mengirim data ke sumber lain maka anda perlu menggunakan metoda ",(0,i.yg)("inlineCode",{parentName:"p"},"POST"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"$request = Client::post('https://slims.web.id/kutipan/');\n")),(0,i.yg)("p",null,"Berikut metoda yang dapat digunakan pada pustaka ",(0,i.yg)("inlineCode",{parentName:"p"},"SLiMS\\Http\\Client"),":"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"get,"),(0,i.yg)("li",{parentName:"ol"},"head,"),(0,i.yg)("li",{parentName:"ol"},"post,"),(0,i.yg)("li",{parentName:"ol"},"put,"),(0,i.yg)("li",{parentName:"ol"},"delete,"),(0,i.yg)("li",{parentName:"ol"},"options,"),(0,i.yg)("li",{parentName:"ol"},"patch")),(0,i.yg)("h4",{id:"menambahkan-opsi"},"Menambahkan opsi"),(0,i.yg)("p",null,"opsi disini merupakan opsi yang digunakan oleh pustaka ",(0,i.yg)("inlineCode",{parentName:"p"},"guzzlehttp/guzzle"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"$request = Client::withOption('allow_redirects', true)->get('https://slims.web.id/kutipan/');\n")),(0,i.yg)("h4",{id:"menambahkan-banyak-opsi"},"Menambahkan banyak opsi"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"$request = Client::withOption([\n    'max' => 5,\n    'strict' => false,\n    'referer' => false,\n    'protocols' => ['http', 'https'],\n    'track_redirects' => false\n])->get('https://slims.web.id/kutipan/');\n")),(0,i.yg)("h4",{id:"menambahkan-headers"},"Menambahkan ",(0,i.yg)("em",{parentName:"h4"},"headers")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"headers")," merupakan opsi yang dikenali oleh pustaka ",(0,i.yg)("inlineCode",{parentName:"p"},"guzzlehttp/guzzle")," sebagai data http header yang akan diikut sertakan dalam proses permintaan http atau ",(0,i.yg)("em",{parentName:"p"},"Http Request")," kepada layanan yang dituju. Namun anda dapat menulis headers tanpa perlu menulis dalam format ",(0,i.yg)("inlineCode",{parentName:"p"},"withOption"),", cukup dengan sintak sebagai berikut:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"$request = Client::withHeaders([\n    'Content-Type' => 'application/json',\n    'X-Authentication' => 'jka;sdljfaksjdflkoiopi'\n])->get('https://slims.web.id/kutipan/');\n")),(0,i.yg)("h4",{id:"menambahkan-body"},"Menambahkan ",(0,i.yg)("em",{parentName:"h4"},"body")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"body")," merupakan opsi yang dikenali oleh pustaka ",(0,i.yg)("inlineCode",{parentName:"p"},"guzzlehttp/guzzle")," sebagai data http body yang akan dibaca sebagai ",(0,i.yg)("inlineCode",{parentName:"p"},"$_POST")," pada layanan yang dituju. Cara penulisnya tak berbeda jauh dengan ",(0,i.yg)("inlineCode",{parentName:"p"},"withHeaders"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"// Mengirim body sebagai teks\n$request = Client::withBody(json_encode([\n    'age' => 20\n]))->post('https://slims.web.id/kutipan/');\n\n// atau dalam bentuk form\n$request = Client::post('https://slims.web.id/kutipan/', [\n    'Age' => 20\n]);\n")),(0,i.yg)("h4",{id:"menggabungkan-options-headers-dan-body"},"Menggabungkan ",(0,i.yg)("em",{parentName:"h4"},"options"),", ",(0,i.yg)("em",{parentName:"h4"},"headers")," dan ",(0,i.yg)("em",{parentName:"h4"},"body")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"// Mengirim body sebagai teks\n$request = Client::withOption('max', 20)\n                    ->withHeaders([\n                        'Content-Type' => 'application/json',\n                        'X-Authentication' => 'jka;sdljfaksjdflkoiopi'\n                    ])->withBody(json_encode([\n                        'age' => 20\n                    ]))->post('https://slims.web.id/kutipan/');\n")))}u.isMDXComponent=!0}}]);