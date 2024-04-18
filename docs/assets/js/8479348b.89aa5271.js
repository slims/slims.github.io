"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6656],{5680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>y});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(r),u=i,y=p["".concat(s,".").concat(u)]||p[u]||c[u]||o;return r?n.createElement(y,a(a({ref:t},d),{},{components:r})):n.createElement(y,a({ref:t},d))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var m=2;m<o;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},414:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(8168),i=(r(6540),r(5680));const o={},a=void 0,l={unversionedId:"Modules/Membership/add new member",id:"Modules/Membership/add new member",title:"add new member",description:"img",source:"@site/user-guide/Modules/4_Membership/01_add new member.md",sourceDirName:"Modules/4_Membership",slug:"/Modules/Membership/add new member",permalink:"/docs/user-guide/Modules/Membership/add new member",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"view member list",permalink:"/docs/user-guide/Modules/Membership/view member list"},next:{title:"member type",permalink:"/docs/user-guide/Modules/Membership/member type"}},s={},m=[],d={toc:m},p="wrapper";function c(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/_mioK1VZizGH8G4fwjs6ZtKAO9ye_5ePkDKQTyWGm8CE_0qljsW3CNlyTy6n3Z5mpU9pAbxovMFwBFG1iVMzDNMVPyEIFTI047ynUU_BxRRArKQXWavzWYxXJEK_Su3HNYPHpMfo",alt:"img"})),(0,i.yg)("p",null,"Facility to add new member data to the SLiMS system. The member data entered are:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Member ID. Use the ID that already use before. Whether you are using citizen identification number or other form of numbering for your member."),(0,i.yg)("li",{parentName:"ol"},"Member Name. Member's Full Name"),(0,i.yg)("li",{parentName:"ol"},"Birth Date. Date of birth, to be filled in according to the data on the identity card"),(0,i.yg)("li",{parentName:"ol"},"Member Since. Registered date. The time in this field will change automagically if the respective membership is extended"),(0,i.yg)("li",{parentName:"ol"},"Register Date. First registered date"),(0,i.yg)("li",{parentName:"ol"},"Expiry Date. Expiration date. By default, the Auto Set option is checked. This means that the membership period will be calculated according to the selected membership type. However, if the check mark is removed, the expiration date is determined manually"),(0,i.yg)("li",{parentName:"ol"},"Institution. Name of institution, name of office or name of organization"),(0,i.yg)("li",{parentName:"ol"},"Membership Type. Membership type which will be defined later in the Member Type sub-menu"),(0,i.yg)("li",{parentName:"ol"},"Sex. Adjust the content based on information given by your user"),(0,i.yg)("li",{parentName:"ol"},"Address. Home or office address"),(0,i.yg)("li",{parentName:"ol"},"Postal Code"),(0,i.yg)("li",{parentName:"ol"},"Mail Address. Content of this field can be similar as the Address field. This section is intended if the mailing address is different from the home address"),(0,i.yg)("li",{parentName:"ol"},"Phone Number"),(0,i.yg)("li",{parentName:"ol"},"Fax Number"),(0,i.yg)("li",{parentName:"ol"},"Personal ID Number: Identity number listed on KTP, SIM, KITAS, Passport, etc."),(0,i.yg)("li",{parentName:"ol"},"Notes. Field notes that can be filled in to provide a brief description of the user. The contents of this section should only be seen by the librarian"),(0,i.yg)("li",{parentName:"ol"},"Pending Membership. If this section is checked, then the member concerned will not be able to circulate, even though it is still active. This can be applied as a sanction against members who violate library regulations"),(0,i.yg)("li",{parentName:"ol"},"Photo. Upload member photo files or you can take picture with the in-app photo style provided using your webcam"),(0,i.yg)("li",{parentName:"ol"},"Email"),(0,i.yg)("li",{parentName:"ol"},"New Password and Confirm New Password. Enter the password to access the Member Area page on the OPAC")))}c.isMDXComponent=!0}}]);