"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3881],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),g=r,m=s["".concat(d,".").concat(g)]||s[g]||c[g]||i;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6277:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=t(8168),r=(t(6540),t(5680));const i={title:"Download File",description:"Dengan menggunakan pustaka SLiMSHttpClient anda dapat dengan mudah mengunduh sebuah file dari layanan tertentu.....",image:"https://static.slims.web.id/docs/7.1.3-download.png"},o="Download File",l={unversionedId:"Http/Client/download-file",id:"Http/Client/download-file",title:"Download File",description:"Dengan menggunakan pustaka SLiMS\\Http\\Client anda dapat dengan mudah mengunduh sebuah file dari layanan tertentu.....",source:"@site/development-guide/07-Http/Client/03-download-file.md",sourceDirName:"07-Http/Client",slug:"/Http/Client/download-file",permalink:"/docs/development-guide/Http/Client/download-file",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Download File",description:"Dengan menggunakan pustaka SLiMS\\Http\\Client anda dapat dengan mudah mengunduh sebuah file dari layanan tertentu.....",image:"https://static.slims.web.id/docs/7.1.3-download.png"},sidebar:"tutorialSidebar",previous:{title:"Cara Penggunaan",permalink:"/docs/development-guide/Http/Client/cara-penggunaan"},next:{title:"Stream File",permalink:"/docs/development-guide/Http/Client/stream-file"}},d={},u=[{value:"Penggunaan",id:"penggunaan",level:3}],p={toc:u},s="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"download-file"},"Download File"),(0,r.yg)("p",null,"Dengan menggunakan pustaka ",(0,r.yg)("inlineCode",{parentName:"p"},"SLiMS\\Http\\Client")," anda dapat dengan mudah mengunduh sebuah file dari layanan tertentu."),(0,r.yg)("h3",{id:"penggunaan"},"Penggunaan"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"$url = 'https://slims.web.id/web/site/templates/assets/images/logo.png';\n\nClient::download($url)->to(SB . 'images/dummy.png');\n\n// dengan opsi\nClient::download($url)->to(SB . 'images/dummy.png', [\n    'headers' => [\n        'X-Token' => 'aksdjflkajdfiuokljlkqweq'\n    ]\n]);\n")))}c.isMDXComponent=!0}}]);