"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4290],{7907:a=>{a.exports=JSON.parse('{"pluginId":"development-guide","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Preambul","href":"/docs/development-guide/about","docId":"about"},{"type":"link","label":"Struktur Direktori","href":"/docs/development-guide/directorystructure","docId":"directorystructure"},{"type":"category","label":"Alur","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"OPAC","href":"/docs/development-guide/Alur/OPAC","docId":"Alur/OPAC"},{"type":"link","label":"Plugin","href":"/docs/development-guide/Alur/Plugin","docId":"Alur/Plugin"}]},{"type":"category","label":"Plugin","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Pengantar","href":"/docs/development-guide/Plugin/Intro","docId":"Plugin/Intro"},{"type":"link","label":"Membuat Plugin Sederhana","href":"/docs/development-guide/Plugin/Membuat-plugin-sederhana","docId":"Plugin/Membuat-plugin-sederhana"},{"type":"link","label":"Membuat plugin modifikasi halaman tertentu di OPAC","href":"/docs/development-guide/Plugin/Membuat-plugin-modifikasi-halaman-pada-OPAC","docId":"Plugin/Membuat-plugin-modifikasi-halaman-pada-OPAC"},{"type":"link","label":"Cara membuat plugin diarea admin","href":"/docs/development-guide/Plugin/Membuat-plugin-modifikasi-pada-area-admin","docId":"Plugin/Membuat-plugin-modifikasi-pada-area-admin"},{"type":"link","label":"Migration","href":"/docs/development-guide/Plugin/Migration","docId":"Plugin/Migration"}]},{"type":"category","label":"Database","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Pengantar","href":"/docs/development-guide/Database/Intro","docId":"Database/Intro"},{"type":"link","label":"Penggunaan Database","href":"/docs/development-guide/Database/Penggunaan","docId":"Database/Penggunaan"},{"type":"link","label":"Ekstensi Database","href":"/docs/development-guide/Database/Ekstensi","docId":"Database/Ekstensi"},{"type":"link","label":"Membuat Ekstensi Database Anda Sendiri","href":"/docs/development-guide/Database/Membuat Ekstensi","docId":"Database/Membuat Ekstensi"},{"type":"link","label":"Schema","href":"/docs/development-guide/Database/Schema","docId":"Database/Schema"}]},{"type":"category","label":"Console","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Penjelasan","href":"/docs/development-guide/Console/Intro","docId":"Console/Intro"},{"type":"link","label":"Cara penggunaan","href":"/docs/development-guide/Console/cara-penggunaan","docId":"Console/cara-penggunaan"},{"type":"link","label":"Tarsius","href":"/docs/development-guide/Console/Tarsius","docId":"Console/Tarsius"},{"type":"link","label":"Membuat Command Anda Sendiri","href":"/docs/development-guide/Console/Membuat Command Sendiri","docId":"Console/Membuat Command Sendiri"}]},{"type":"category","label":"Http","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Client","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Permulaan","href":"/docs/development-guide/Http/Client/Permulaan","docId":"Http/Client/Permulaan"},{"type":"link","label":"Cara Penggunaan","href":"/docs/development-guide/Http/Client/cara-penggunaan","docId":"Http/Client/cara-penggunaan"},{"type":"link","label":"Download File","href":"/docs/development-guide/Http/Client/download-file","docId":"Http/Client/download-file"},{"type":"link","label":"Stream File","href":"/docs/development-guide/Http/Client/stream-file","docId":"Http/Client/stream-file"}]}]},{"type":"category","label":"Cache","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Penggunaan","href":"/docs/development-guide/Cache/Penggunaan","docId":"Cache/Penggunaan"},{"type":"link","label":"Penggunaan","href":"/docs/development-guide/Cache/membuat-provider","docId":"Cache/membuat-provider"}]},{"type":"link","label":"Helpers","href":"/docs/development-guide/Helpers","docId":"Helpers"}]},"docs":{"about":{"id":"about","title":"Preambul","description":"Halaman ini berisi dokumentasi untuk membangun SLiMS anda menjadi seperti apa yang anda inginkan, seperti membuat datagrid, reportgrid, grid yang dapat di cetak dan formulr melalui sistem plugin secara native atau berbasis composer","sidebar":"tutorialSidebar"},"Alur/OPAC":{"id":"Alur/OPAC","title":"OPAC","description":"Proses kerja dari OPAC SLiMS","sidebar":"tutorialSidebar"},"Alur/Plugin":{"id":"Alur/Plugin","title":"Plugin","description":"Proses kerja dari Plugin SLiMS","sidebar":"tutorialSidebar"},"Cache/membuat-provider":{"id":"Cache/membuat-provider","title":"Penggunaan","description":"Contoh kita akan membuat provider terkait Cache yang disimpan pada...","sidebar":"tutorialSidebar"},"Cache/Penggunaan":{"id":"Cache/Penggunaan","title":"Penggunaan","description":"Pustaka ini berkaitan dengan konfigurasi file pada config/cache.php, secara bawaan akan menggunakan salah satu \\"Provider\\" yang tercantum pada opsi \\"default\\". Provider yang tersedia yaitu...","sidebar":"tutorialSidebar"},"Console/cara-penggunaan":{"id":"Console/cara-penggunaan","title":"Cara penggunaan","description":"Penjelasan teknis terkait cara menggunakan fitur SLIMS console.","sidebar":"tutorialSidebar"},"Console/Intro":{"id":"Console/Intro","title":"Penjelasan","description":"Console merupakan fitur SLiMS yang digunakan untuk kebutuhan belakang layar seperti backup terjadwal, pengiriman surel keterlambatan peminjaman secara masal dll.","sidebar":"tutorialSidebar"},"Console/Membuat Command Sendiri":{"id":"Console/Membuat Command Sendiri","title":"Membuat Command Anda Sendiri","description":"Command meruapakan bagian dari fitur ```console``` yang berbentuk program yang berisi perintah-perintah yang digunakan untuk menyelesaikan pekerjaan tertentu yang berjalan di lingkungan antarmuka baris perintah / Command Line Interface...","sidebar":"tutorialSidebar"},"Console/Tarsius":{"id":"Console/Tarsius","title":"Tarsius","description":"Tarsius atau Krabuku merupakan nama hewan primata khas asia tenggara yang menjadi maskot dari SLiMS. Tak hanya menjadi maskot nama tarsius juga digunakan sebagai prog...","sidebar":"tutorialSidebar"},"Database/Ekstensi":{"id":"Database/Ekstensi","title":"Ekstensi Database","description":"Fitur ini merupakan bagian dari pustaka SLiMS\\\\DB yang membantu anda dalam mengelola data yang hendak diambil dari database, anda dapat menggunakan ekstensi bawaan dari SLiMS yaitu SLiMS\\\\Query untuk mengambil data berdasarkan kueri yang anda tulis....","sidebar":"tutorialSidebar"},"Database/Intro":{"id":"Database/Intro","title":"Pengantar","description":"SLiMS menggunakan MySQL/MariaDB sebagai default RDMS (*Relational Database Management System*) untuk menyimpan data.oleh Mas....","sidebar":"tutorialSidebar"},"Database/Membuat Ekstensi":{"id":"Database/Membuat Ekstensi","title":"Membuat Ekstensi Database Anda Sendiri","description":"maka ekstensi yang akan anda buat juga tidak akan lepas dari sistem tersebut agar perubahan yang dibuat tersenteralisasi di satu tempat yaitu direk....","sidebar":"tutorialSidebar"},"Database/Penggunaan":{"id":"Database/Penggunaan","title":"Penggunaan Database","description":"Sejak versi 9 (Bulian), SLiMS hadir dengan dua cara untuk berkomunikasi dengan database yaitu MySQLi dan PDO. Adapun kedua nya sama-sama berfungsi untuk mengambil data dari MySQL/MariaDB via PHP dengan penulisan sintak yang berbeda....","sidebar":"tutorialSidebar"},"Database/Schema":{"id":"Database/Schema","title":"Schema","description":"Fitur yang digunakan untuk mengelola struktur basis data SLiMS seperti menambah, menghapus, merubah dll. Fitur ini biasa digunakan pada proses migra....","sidebar":"tutorialSidebar"},"directorystructure":{"id":"directorystructure","title":"Struktur Direktori","description":"Halaman ini berisi informais mengenai folder-folder yang ada di SLiMS.","sidebar":"tutorialSidebar"},"Helpers":{"id":"Helpers","title":"Helpers","description":"Contoh kita akan membuat provider terkait Cache yang disimpan pada...","sidebar":"tutorialSidebar"},"Http/Client/cara-penggunaan":{"id":"Http/Client/cara-penggunaan","title":"Cara Penggunaan","description":"Untuk menggunakan pustaka HttpClient anda menggunakan sintak sebagai berikut...","sidebar":"tutorialSidebar"},"Http/Client/download-file":{"id":"Http/Client/download-file","title":"Download File","description":"Dengan menggunakan pustaka SLiMS\\\\Http\\\\Client anda dapat dengan mudah mengunduh sebuah file dari layanan tertentu.....","sidebar":"tutorialSidebar"},"Http/Client/Permulaan":{"id":"Http/Client/Permulaan","title":"Permulaan","description":"HttpClient pada SLiMS merupakan pustaka yang digunakan untuk berkomunikasi dengan layanan lain melalui prokol http seperti Rest APi...","sidebar":"tutorialSidebar"},"Http/Client/stream-file":{"id":"Http/Client/stream-file","title":"Stream File","description":"Mengambil sumber data dari layanan lain tanpa mengunduh nya.....","sidebar":"tutorialSidebar"},"Plugin/Intro":{"id":"Plugin/Intro","title":"Pengantar","description":"Sistem plugin merupakan inovasi yang dihadirkan sejak versi SLiMS Bulian 9.3.0 oleh Mas....","sidebar":"tutorialSidebar"},"Plugin/Membuat-plugin-modifikasi-halaman-pada-OPAC":{"id":"Plugin/Membuat-plugin-modifikasi-halaman-pada-OPAC","title":"Membuat plugin modifikasi halaman tertentu di OPAC","description":"Kadang kala kita membutuhkan fitur yang tidak tersedia secara bawaan di SLiMS seperti bebas pustaka dll. Beruntung nya SLiMS terkini sudah....","sidebar":"tutorialSidebar"},"Plugin/Membuat-plugin-modifikasi-pada-area-admin":{"id":"Plugin/Membuat-plugin-modifikasi-pada-area-admin","title":"Cara membuat plugin diarea admin","description":"Langkah-langkah membuat plugin untuk memodifikasi menu yang ada diarea admin","sidebar":"tutorialSidebar"},"Plugin/Membuat-plugin-sederhana":{"id":"Plugin/Membuat-plugin-sederhana","title":"Membuat Plugin Sederhana","description":"Kita mulai dengan hal yang mudah terlebih dahulu. Berikut langkahnya....","sidebar":"tutorialSidebar"},"Plugin/Migration":{"id":"Plugin/Migration","title":"Migration","description":"Ini merupakan bagian dari fitur ```Plugin``` yang digunakan untuk melakukan proses migrasi basis data atau akrab dikenal sebagai Database Migr...","sidebar":"tutorialSidebar"}}}')}}]);