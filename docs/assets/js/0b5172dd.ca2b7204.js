"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2700],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,g=p["".concat(s,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(8168),o=(n(6540),n(5680));const i={},r=void 0,l={unversionedId:"Installation/How-to",id:"Installation/How-to",title:"How-to",description:"In this documentation, several installation methods will be discussed. The installation uses the SLiMS installer and the SLiMS Portable installation (PSLiMS).",source:"@site/user-guide/Installation/0. How-to.md",sourceDirName:"Installation",slug:"/Installation/How-to",permalink:"/docs/user-guide/Installation/How-to",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Disclaimer",permalink:"/docs/user-guide/Introduction/Disclaimer"}},s={},c=[{value:"Source Code",id:"source-code",level:2},{value:"Source Code with GnU/Linux",id:"source-code-with-gnulinux",level:3},{value:"Extracting Source Code",id:"extracting-source-code",level:4},{value:"Start Installation",id:"start-installation",level:4},{value:"Source Code with Microsoft Windows",id:"source-code-with-microsoft-windows",level:3},{value:"The Installer",id:"the-installer",level:2},{value:"Portable SLiMS",id:"portable-slims",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"In this documentation, several installation methods will be discussed. The installation uses the SLiMS installer and the SLiMS Portable installation (PSLiMS)."),(0,o.yg)("p",null,"SLiMS is a multi-platform application. In other words, SLiMS can be installed on hardware with MS-Windows, GnU / Linux, and / or MacOS operating systems installed."),(0,o.yg)("p",null,"This installation how-to is intended for SLiMS 9 Bulian release code 9.4.1. To install this version of SLiMS, you need to meet these minimum requirements:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"PHP version 7.4"),(0,o.yg)("li",{parentName:"ol"},"MySQL version 5.7 and or MariaDB version 10.3"),(0,o.yg)("li",{parentName:"ol"},"PHP GD provided/enabled"),(0,o.yg)("li",{parentName:"ol"},"PHP gettext provided/enabled"),(0,o.yg)("li",{parentName:"ol"},"PHP mbstring provided/enabled")),(0,o.yg)("h2",{id:"source-code"},"Source Code"),(0,o.yg)("p",null,"In order for SLiMS to be installed, ensure that the web server (web server, for example Apache web server), MySQL (database application), and PHP (programming language) is installed on the server hardware and running properly. It would be more helpful if the phpMyAdmin or Adminer application was also installed to assist in database setup via the web interface. If SLiMS is used on the internet (public), it is recommended to increase security by adding a firewall on the TCP / IP side (layer 3 and 4 of the OSI layer), on the application side (for example modsecurity) and on the database side (for example greensql)."),(0,o.yg)("p",null,"After the system to be used is ready, place the SLiMS source code in the web root directory that you are using."),(0,o.yg)("h3",{id:"source-code-with-gnulinux"},"Source Code with GnU/Linux"),(0,o.yg)("p",null,"For users of the Gnu / Linux operating system, for example GnU / Linux Ubuntu (or Debian), the web root directory can be found in the /var/www/html directory. For users of GnU / Linux Ubuntu version 12.04 and below, the web root directory is in the /var/www/ directory."),(0,o.yg)("p",null,"First download the SLiMS source code which can be obtained via the ",(0,o.yg)("a",{parentName:"p",href:"https://slims.web.id"},"SLiMS page")," or through the repository on the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/slims/slims9_bulian"},"GitHub page"),". Then place it in the web root directory."),(0,o.yg)("h4",{id:"extracting-source-code"},"Extracting Source Code"),(0,o.yg)("p",null,"The next step is to extract the compressed source code. Enter the command:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"$ sudo unzip slims9_bulian-master.zip")),(0,o.yg)("p",null,"After the extraction process is complete, a single SLiMS installation directory will be created in the web root directory (usually the directory name will be the same as the compressed file name)."),(0,o.yg)("h4",{id:"start-installation"},"Start Installation"),(0,o.yg)("p",null,"After the extraction process is complete, we can start the SLiMS installation process using the SLiMS Installer."),(0,o.yg)("h3",{id:"source-code-with-microsoft-windows"},"Source Code with Microsoft Windows"),(0,o.yg)("p",null,"For users of this operating system, the use of Apache, PHP, MySQL is available in packages. Many packages that can be used. One of the best known is XAMPP by Apache Friends. This application can be downloaded at ",(0,o.yg)("a",{parentName:"p",href:"http://apachefriends.org"},"http://apachefriends.org"),"."),(0,o.yg)("p",null,"After installing XAMPP, you can start the web server and database services by selecting the XAMPP control panel from the application menu."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/c0dJZi50wQk4_c7PdjA5NMKsTXWOaAcd0wG2wefQEHtDzQhMkjwFm3NaE6kWR6OcucB9fSmJi7A-19OjItmsAf6OVpSoMJ9DCtBiRBES3kSP1mb6jiD5z2wAEvWkF4AWWk0I6jzL",alt:"img"})),(0,o.yg)("p",null,"If you are using XAMPP, then the web root directory is located in xampp/htdocs. To start installing SLiMS using source code, copy the SLiMS source code files, as written in the previous chapter, into that directory."),(0,o.yg)("p",null,"After you finish copying the files, the next step is to decompress the source files. To decompress, you can use a 7zip application (or something similar like WinZip and WinRAR)."),(0,o.yg)("p",null,"After the extraction process is complete, we can start the SLiMS installation process using the SLiMS Installer."),(0,o.yg)("h2",{id:"the-installer"},"The Installer"),(0,o.yg)("p",null,"Like previous versions of SLiMS Installer, in this version, you don't need to define databases manually. You only need to enter the name of the database that will be used, the name of the user who has access rights (usually root or define it yourself), and don't forget the password used to access the database."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/hF64SYFYN1fjI54TL9RCB4ABSgzt0N-HkU2np1zjKaGpzzuYgY6lyHsL90c5V7EHRaeUn4Ejn5N8d8nsATyrNxI9JxMR-RrZQ3MwKOnOW42E2_eG3NMDgtpQtdc8PWvcCTnF64nw",alt:"img"})),(0,o.yg)("p",null,"Before going to the next step, let's discuss the appearance of the new installer on SLiMS 9 Bulian. This new installer, functionally, is not much different from the previous installer, but is presented with a more \"fresh\" appearance. Some of the installer's functionality is also made easier for novice users to understand."),(0,o.yg)("p",null,'To start the SLiMS installation process, you can press the "Get Started" button. Then you will be taken to the System Requirements page.'),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/RX1mZED2uOjKqg5MOWzcfqvTNRlyJCnpK7BKLYVbn93Ucb0bCm8wHVyZRjQqdC3cU922mwglpLwpAxo7z5gSPNbtRzYOUmGwh5YzfaOvIDFlxpFAxl98foPbWUYEyEwNpyFrHycZ",alt:"img"})),(0,o.yg)("p",null,"This page will scan the system whether the computer you are using already has the required components. Components marked with the word optional are alternative components. In other words, if these components are not available / installed, the SLiMS installation can still be run. Another case with components that are not marked with optional words. The components that are not marked are components that MUST be installed. Without these components, the SLiMS installation cannot continue. If you use the XAMPP application as an AMP application (Apache, MySQL, PHP) installed on the system you are using, then these components are installed by default."),(0,o.yg)("p",null,'In the "Pre-Installation Step" section, make sure the directories displayed in that section have changed their status to read-write. This case only occurs on Unix or GnU / Linux based operating systems. If you are using an MS-Windows operating system, you do not need to change directory permissions on these directories.'),(0,o.yg)("p",null,'Click on the "Next" button to continue the installation process.'),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/6_b7C4czylNOtij-ac1Wq4ybwIe18kYk5KGJOIMlfH3s9iiz29BATJRxr3TTTK_uplupeN9mONOK1L--UqcxzvWN7SvsmEAtNvbYK7_i956G9FtdfHrMt1swMNzJvFXp_oWa_c_P",alt:"img"})),(0,o.yg)("p",null,'Next, do you want to install a new one or upgrade the version of SLiMS you are using? Please click on the button you want. The "Install SLiMS" button means that you will install SLiMS 9 Bulian on the device you are using. The button "Upgrade my SLiMS" means you are an SLiMS user who will upgrade your SLiMS version to SLiMS 9 Bulian.'),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/BB1fOPqYzVhse_vI9zv5_4ENcO4b2Y7ogWmTdtTlPN76i2WGm9sPpFxHLcuTT0V3u3QST6eldeSREbUcQeJZSVQ90eoGnXUBTT7kt7bTwT7tdpYrXJIfkRSfo3gpoWvoDBAa-T2E",alt:"img"})),(0,o.yg)("p",null,'When you click on the "Install SLiMS" button, you will be taken to the first step (of two) of the installation process. Information:'),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Database Host. By default, the entries in this field do not need to be changed. As the information listed beside the segment."),(0,o.yg)("li",{parentName:"ol"},"Database Port. Port that is assign to respond to database access. For MySQL, default port number is 3306."),(0,o.yg)("li",{parentName:"ol"},"Database Name. Enter the name of the database to be created, which SLiMS will then use."),(0,o.yg)("li",{parentName:"ol"},"Database Username. Is an account that is used to access the database. By default, the account provided by MySQL / MariaDB is root. The root account status is the highest account that has full access and rights to all databases. Be careful when using this root account.")),(0,o.yg)("blockquote",null,(0,o.yg)("h4",{parentName:"blockquote",id:"tip"},"Tip")),(0,o.yg)("p",null,"In a production machine, create a separate account for each database created, instead of using only the root account, which is granted rights or access only to certain databases. This is done for security."),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},"Database Password. Enter the password used for the account used in the Database Username field.")),(0,o.yg)("p",null,'After you have completed all the credentials, click on the "Test Connection" button to confirm that the credentials are correct. If so, then you will see a button like the following image:'),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/zVqFhHYKZJZNp8c2wLaht2Q0cojj9etQdaU8oGu6SqoD6-dY8nhxYDyiFDPKJBVZtoYo9MwiF8qVa1XhR-VAIIq8OVsfY1FuM3YULZOg-_oEVRlI2LwM4WBIvbBBd5lJlxgnvSYd",alt:"img"})),(0,o.yg)("p",null,"Continue to click on the button to continue the installation process to the second step."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/BqgK148p8_ljOsVti4wYhUOioLUrnoPbgRnL3VAmQA8PTb9uBIUQlPLM0cj_n-3NI5QtMHfZiOYsDhsMuYVaVDaxt91i-Jy7ekd9IF31kW7r4MJ4de_Y8fr4-lMHw2gtSUpBV258",alt:"img"})),(0,o.yg)("p",null,"explanation:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},'Generate Sample Data. Reluctant to add sample data to your SLiMS? Please select the "No, don\'t do that!"'),(0,o.yg)("li",{parentName:"ol"},'Username. Pay attention to the line "Super User Profiles". The username information that you will create, is the user who has access to the entire system. Can be changed as you wish.'),(0,o.yg)("li",{parentName:"ol"},'Password. In previous installers, this field was not required. The installer will provide the default password "admin" if the field is left blank. In new installers, the password MUST be entered. Cannot be left empty.'),(0,o.yg)("li",{parentName:"ol"},"Retype Password. Retype keywords entered in the previous field, here.")),(0,o.yg)("p",null,'After filling in the fields, click on the "Run the Installation" button to continue the installation. If there are no problems, the following page will appear:'),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/3XeAPuPQlNyiVwkurs2XSrcqL2uMPrYbr1uk4h3pAEmfKol6osgEGBENa0k9awuwKUUonofhEhMmiV3Rb9BmM3SVyrBGH8tj_6t6KpxJNe0Un6iVmkorX5XhilsKqWeeBo5ZdeOi",alt:"img"})),(0,o.yg)("p",null,'With the appearance of a page like the one above, the installation process is complete and you can use the installed SLiMS by clicking on the "Go to My SLiMS" button.'),(0,o.yg)("blockquote",null,(0,o.yg)("h4",{parentName:"blockquote",id:"note"},"Note")),(0,o.yg)("p",null,'Look for the line that says "Folder install in your SLiMS is already exist. For security reason please rename or remove it from your machine". The information on this line serves as a reminder that after the installation is complete, don\'t forget to delete / change (name) the install directory that is in the SLiMS source code directory. As shown in the following image.'),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/lIerl_DNX2g3AMPnM5Eui45tGpAcISDmn8_aWU4zp38opmarGJU03ZpRrX5lNowzMx8TEfhFPt6a0bmnAxqKP8MqetRCpuK3oQ8A8sFvkKudfN7ocIubnc9wWgqHOohuOHgJF19v",alt:"img"})),(0,o.yg)("p",null,'After clicking on the "Go to My SLiMS" button, you will be taken to the SLiMS 9 Bulian OPAC page.'),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/5iJuAsWBhBDGHIkrgmnq2ctiPzdRc5Doh6nrTwuynnGEbat-8qLorE0mo6c2Eg3Nxg_cdGw-GzItMxNSeCo5eHt4oIVgyGWW8vOqIfYjc79L4HYShaa8XqlC2A6L6AdKoNBi8eBh",alt:"img"})),(0,o.yg)("h2",{id:"portable-slims"},"Portable SLiMS"),(0,o.yg)("p",null,"Portable SLiMS (for Windows) or PSLiMS is a software package consisting of SLiMS applications, Apache Web Server, PHP Scripting engine, MySQL or MariaDB Database Server and Adminer Database Management. PSLiMS is formulated to facilitate the use of SLiMS. Copy, extract and run!"),(0,o.yg)("blockquote",null,(0,o.yg)("h4",{parentName:"blockquote",id:"note-1"},"Note")),(0,o.yg)("p",null,"In version one of the PSLiMS along with the release of SLiMS 9 Bulian, the YAZ and MARC libraries, which are required to use the Z3950 catalog copy and export features of MARC data, are not installed. Installation of these libraries will be carried out for the next PSLiMS version."),(0,o.yg)("blockquote",null,(0,o.yg)("h5",{parentName:"blockquote",id:"update"},"Update")),(0,o.yg)("p",null,"In the last PSLiMS release, how to activate the YAZ and MARC features can be read in the SLiMS Tips and Tricks documentation via the ",(0,o.yg)("a",{parentName:"p",href:"https://tinyurl.com/w7jv8bz"},"https://tinyurl.com/w7jv8bz")," link."),(0,o.yg)("p",null,"After downloading the PSLiMS file, copy it into a root directory such as directory C:, directory D:, and so on. Then, extract the file."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/UUg9R9kAlGf2MGmdKwOidEx0QY1aMisc1b3vuM1LqiZjIM4FE2Zwc2COgG4p__yckupVS2niPwo1FrZ308rgyDB4dfXelA3zFI2aDvyxNTImIZW0otL0w8-FX0iAzoIMClDtZOjV",alt:"img"})),(0,o.yg)("p",null,'The results of extracting the PSLiMS file are as exemplified in the image above, with the directory name "x86" for PSLiMS which is used in the 32bit MS-Windows operating system. Meanwhile, the directory name "amd64" is to be used in the MS-Windows 64bit architecture operating system.'),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/xx2UtATg1RhYziMnhFd4SX3gz7SqtNR1-KDPR5Fzg5njwLb_NsRAWyx-KfJaQbVNzaiRIZGqK8sOS2XmCnLZ4mfVYr8eDdAF13_o4sAIfkAQfbAKCnyFi4ACkva8Uqp2zX0wx9lP",alt:"img"})),(0,o.yg)("p",null,'In that directory, to start using SLiMS, click on the file names "httpd.bat" and "mariadb.bat". The "httpd.bat" file is used to start the Apache web server.'),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/uTfn5CpxWgX-PTqkhLVNxmeRXnBi2fWjcnr3g5IZluSdT1bLTx9rBCyCfr6VXcKeRf8VISM3HS6WeNXUC-NzP7SDk2NwgSydynl2J-mPNB8jnEu5dX9OHSHNQWTBRu5zmCjSBhdW",alt:"img"})),(0,o.yg)("p",null,'If you see a pop-up like the following image, click on the "Allow Access" button so that the application is saved in the operating system firewall configuration'),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/TgMqrycaU0vHmlpzs9r-24487Asvy8x2ZQWxhy3K_BFrjMAFvbiPuxUZohiM6u_Nsla-42U83dM4fWU_5MMj41xIRYhwwaOKYHeSBNzwE-awVk7FuglFdH5DaFYbesYik7_9xbst",alt:"img"})),(0,o.yg)("p",null,'Next, click on the "mariadb.bat" file to start the MariaDB database server.'),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/CbEa4uwGEqg9K-f-4MGEK8wknYLD9Hp8pSe-qqkmHCjbgL4osIQUz6GLGHHNu0ylWYqTywMujfm8KJtnJyt1DafEbfI_4FmF9wom_BUMsD9WGKmQ3PNa0Wq4LfdpYEykZ3tvZGSd",alt:"img"})),(0,o.yg)("p",null,'If you see a pop-up like the following image, click on the "Allow Access" button so that the application is saved in the operating system firewall configuration.'),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/POs0j91mDQBMMcyOi9Cu5SZXgsyZcvPKg33guPcv13SR8K61QL6N7tjS2I4kujWgZisxL6c9o0pkxEgcHUbwEafzymOjRBv8AYA_dz9PqLR52mwrapV3UboJBT0j7yRcMZGH92sh",alt:"img"})),(0,o.yg)("p",null,"If the two files run without displaying an error message, you can use SLiMS by opening a browser and entering the address ",(0,o.yg)("strong",{parentName:"p"},"localhost:8089")," into the browser's address bar."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/hYG8w0W4VEwKWGFQQebqWWhLEGaNKALY2dWiPAGbGFm3jg_OpK3aNXE1WYldgrLtl0tGbJIYNH-zbTzrlSOaOyAd-UdgQxHNoeTWo0WWnMG_lPOzFy_kBwjr4NdfbQ8waelx-c8e",alt:"img"})),(0,o.yg)("p",null,'The OPAC display of the SLiMS application will appear. Now SLiMS can be used. If you want to kill Apache and MariaDB processes, enter the CTRL + C key combination on the keyboard in each Apache and MariaDB window and then type "Y" for "Yes".'),(0,o.yg)("p",null,"PSLiMS from recent update, uses Adminer and phpMyAdmin as database management application. Enter the address ",(0,o.yg)("strong",{parentName:"p"},"localhost: 8089/adminer.php")," and or ",(0,o.yg)("strong",{parentName:"p"},"localhost:8089/phpmyadmin"),", to access the application. For login you can use the based-on-app access ",(0,o.yg)("u",null,"username: slimsuser")," and ",(0,o.yg)("u",null,"password: passwordslimsuser")," to enter the dashboard. You can start managing the required databases."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/bjDoEmeiRQPkz9tyCxmxhkOzILly3sHyrIYBSJxr8Iark5LVyLB8GzlPfZszZvE_x8gsxGm45LriMHEGD8f_sIGUQ-OXlL7gQGtjFt1Ctq56PvWPYDGjgRLgNrKOLDzBsPX1BhYK",alt:"img"})),(0,o.yg)("p",null,"Adminer login view."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/8wZSFLXnX4LBk0pdVTjPB30LhR5wERcD-uyY1UfTDR7CexQ4azGNKbLxTBt27iA5Apn0kXtVFLQ6ufjwEMNhK09-_l7Aog_TN61t3d8_zQot1mRlLGux3x0eU7yH95u5sMoLLdWL",alt:"img"})),(0,o.yg)("p",null,"phpMyAdmin login view."))}h.isMDXComponent=!0}}]);