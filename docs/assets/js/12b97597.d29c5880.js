"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},l=void 0,a={unversionedId:"Modules/Circulation/loanrules",id:"Modules/Circulation/loanrules",title:"loanrules",description:"It is a facility to define specific loan rules based on Member Type, Collection Type, GMD. The rules defined in this facility are the same as when we created a rule in the Member Type sub-menu by filling in the fields:",source:"@site/user-guide/Modules/5_Circulation/02_loanrules.md",sourceDirName:"Modules/5_Circulation",slug:"/Modules/Circulation/loanrules",permalink:"/docs/user-guide/Modules/Circulation/loanrules",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"quickreturn",permalink:"/docs/user-guide/Modules/Circulation/quickreturn"},next:{title:"loanhistory",permalink:"/docs/user-guide/Modules/Circulation/loanhistory"}},u={},s=[],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is a facility to define specific loan rules based on Member Type, Collection Type, GMD. The rules defined in this facility are the same as when we created a rule in the Member Type sub-menu by filling in the fields:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Loan Limit"),(0,o.kt)("li",{parentName:"ol"},"Loan Period"),(0,o.kt)("li",{parentName:"ol"},"Reborrow Limit"),(0,o.kt)("li",{parentName:"ol"},"Fines Each Day"),(0,o.kt)("li",{parentName:"ol"},"Overdue Grace Period")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/tsAFiz3GVU_odlD9JrdBgb3iBp3d1PgNMb2wO3EYROAdTUFPmgC0DSbjq1oY9qbJMsEqrQig1sOmzuZvjP0NE5UZh3nECD2NBQM_PYofrztztxtYIXgKgIQEtsokthUA5K-HG91F",alt:"img"})),(0,o.kt)("p",null,"An example of defining Loan Rules:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Your library has 3 collection types: Book, Audio Visual, Thesis"),(0,o.kt)("li",{parentName:"ol"},"One of the membership type in your library is: Students. With a total borrowing allowance of 2 collections, namely: 1 for the Thesis collection type and 1 for the Audio Visual collection type"),(0,o.kt)("li",{parentName:"ol"},'For that, of course you must have a membership type "Student" with a total borrowing of 2 collections'),(0,o.kt)("li",{parentName:"ol"},"Then in Loan Rules, which must be defined:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},'Membership type "Student", loan limit for collection type "Audio Visual" is 1'),(0,o.kt)("li",{parentName:"ol"},'Membership type "Student", loan limit for collection type "Thesis" is 1')))),(0,o.kt)("p",null,'When you are finished defining Loan Rules, click on the "Save" button to save the defined rules.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"PLEASE REMEMBER that this is the additional rules of loan with a spesific purposes. If the loan rules defined in the Membership Type is enough for your institution, you should not add another set of loan rules within this sub-menu.")))}p.isMDXComponent=!0}}]);