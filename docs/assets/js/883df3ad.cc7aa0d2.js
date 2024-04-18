"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5080],{5680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>c});var t=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function u(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=t.createContext({}),o=function(e){var a=t.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=o(e.components);return t.createElement(m.Provider,{value:a},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),g=o(n),d=r,c=g["".concat(m,".").concat(d)]||g[d]||s[d]||i;return n?t.createElement(c,l(l({ref:a},p),{},{components:n})):t.createElement(c,l({ref:a},p))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var u={};for(var m in a)hasOwnProperty.call(a,m)&&(u[m]=a[m]);u.originalType=e,u[g]="string"==typeof e?e:r,l[1]=u;for(var o=2;o<i;o++)l[o]=n[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6316:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var t=n(8168),r=(n(6540),n(5680));const i={image:"https://static.slims.web.id/docs/1-pengantar.png",description:"Halaman ini berisi dokumentasi untuk membangun SLiMS anda menjadi seperti apa yang anda inginkan, seperti membuat datagrid, reportgrid, grid yang dapat di cetak dan formulr melalui sistem plugin secara native atau berbasis composer"},l="Preambul",u={unversionedId:"about",id:"about",title:"Preambul",description:"Halaman ini berisi dokumentasi untuk membangun SLiMS anda menjadi seperti apa yang anda inginkan, seperti membuat datagrid, reportgrid, grid yang dapat di cetak dan formulr melalui sistem plugin secara native atau berbasis composer",source:"@site/development-guide/01-about.md",sourceDirName:".",slug:"/about",permalink:"/docs/development-guide/about",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{image:"https://static.slims.web.id/docs/1-pengantar.png",description:"Halaman ini berisi dokumentasi untuk membangun SLiMS anda menjadi seperti apa yang anda inginkan, seperti membuat datagrid, reportgrid, grid yang dapat di cetak dan formulr melalui sistem plugin secara native atau berbasis composer"},sidebar:"tutorialSidebar",next:{title:"Struktur Direktori",permalink:"/docs/development-guide/directorystructure"}},m={},o=[{value:"Pengantar",id:"pengantar",level:3},{value:"Memulai",id:"memulai",level:3},{value:"Mengubah <em>Environment</em> / lingkungan",id:"mengubah-environment--lingkungan",level:3}],p={toc:o},g="wrapper";function s(e){let{components:a,...i}=e;return(0,r.yg)(g,(0,t.A)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"preambul"},"Preambul"),(0,r.yg)("h3",{id:"pengantar"},"Pengantar"),(0,r.yg)("p",null,"Halaman ini berisi dokumentasi untuk membangun SLiMS anda menjadi seperti apa yang anda inginkan, seperti membuat datagrid, reportgrid, grid yang dapat di cetak dan formulr melalui sistem plugin secara native atau berbasis composer"),(0,r.yg)("h3",{id:"memulai"},"Memulai"),(0,r.yg)("p",null,"Prasyarat:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"XAMPP/LAMPP/MAMPP/etc."),(0,r.yg)("li",{parentName:"ul"},"PHP 8.1 atau lebih tinggi"),(0,r.yg)("li",{parentName:"ul"},"MySQL 5.7 atau lebih tinggi | MariaDB 10.3 atau lebih tinggi"),(0,r.yg)("li",{parentName:"ul"},"Code Editor : VSCode | VSCodium | Sublime | dll"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/slims/slims9_bulian/releases"},"SLiMS")," terbaru atau menggunakan versi ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/slims/slims9_bulian/tree/develop"},"SLiMS Develop")," (jika anda ingin fitur terbaru sembari mengetes fitur tersebut anda disarankan menggunakan versi develop).")),(0,r.yg)("h3",{id:"mengubah-environment--lingkungan"},"Mengubah ",(0,r.yg)("em",{parentName:"h3"},"Environment")," / lingkungan"),(0,r.yg)("p",null,"Tahap ini penting karena tanpa merubah ",(0,r.yg)("em",{parentName:"p"},"environment")," dari ",(0,r.yg)("em",{parentName:"p"},"prodcution")," ke ",(0,r.yg)("em",{parentName:"p"},"development")," maka kita tidak tahu pesan ",(0,r.yg)("em",{parentName:"p"},"error")," yang terjadi ketika melakukan ",(0,r.yg)("em",{parentName:"p"},"development")," pada SLiMS kita. Berikut langkahnya:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Buka modul ",(0,r.yg)("inlineCode",{parentName:"li"},"system")," lalu pilih menu ",(0,r.yg)("inlineCode",{parentName:"li"},"System Environment Setting")," / Setelan Lingkungan Sistem"),(0,r.yg)("li",{parentName:"ol"},"Maka akan muncul sebagai berikut: ",(0,r.yg)("img",{alt:"contoh",src:n(6217).A,width:"1920",height:"918"})),(0,r.yg)("li",{parentName:"ol"},"Ubah nilai ",(0,r.yg)("inlineCode",{parentName:"li"},"production")," ke ",(0,r.yg)("inlineCode",{parentName:"li"},"development")," lalu klik ",(0,r.yg)("strong",{parentName:"li"},"Save Settings")," /  Simpan Pengaturan."),(0,r.yg)("li",{parentName:"ol"},"Jika langkah ke 3 berhasil maka muncul seperti berikut:\n",(0,r.yg)("img",{alt:"dev_criteria",src:n(5167).A,width:"1920",height:"958"}),"\nsetiap modul di SLiMS jika menggunakan ",(0,r.yg)("em",{parentName:"li"},"datagrid/form maker")," maka akan muncul kotak yang ditandai merah seperti diatas. Kegunaan dari box tersebut yaitu untuk melihat proses/error apa yang terjadi karena secara bawaan proses penyimpanan dilemparkan ke elemen ",(0,r.yg)("inlineCode",{parentName:"li"},"<iframe></iframe>"))))}s.isMDXComponent=!0},6217:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/plugin-01-env-change-32551a464b722697ff3ef9443db22ac5.png"},5167:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/plugin-01-intro-env-save-criteria-8201eaed62c4ac9ab63720cd2f5ed406.png"}}]);