# Fekreno Code Explaination

## Pendahuluan

Okay here kita nak lebih memahami , tentang web aplikasi fekreno ni. Terdapat beberapa perkara yang perlu diketahui tentang web applikasi ini, Pertama adalah teknologi yang digunakan dari segi , programing language , framework , dan package tambahan untuk membina applikasi fekreno ini. 

### Teknologi Yang Digunapakai.

Untuk merungkai dengan lebih lanjut tentang apakah teknologi yang digunakan oleh aplikasi ini, kita boleh melihat pada package.json . File package.json ini mengandungi informasi tentang project ini. Di sini kita boleh melihat segala ringkasan tentang project tersebut. 

File package.json ini terletak pada lokasi ini.

```
.
└── FEKRENO
    └── package.json
```

#### Programing languange yang digunakan.

Setelah kita tiliti file package.json , kita dapati applikasi ini dibangunkan mengunakan node.js. Node.js ini adalah sebuah runtime environment dimana ia membenarkan computer menjalankan instruction daripada javascript. Bahasa mudahnya ia membenarkan javascript beroperasi didalam computer. Secara umumnya , kita mengetahui javascript hanya boleh dijalankan didalam browser sahaja. tetapi dengan adanya node.js kita boleh menjalankan javascript didalam computer kita. 

Secara umumnya kita boleh mengesahkan languange yang terlibat adalah html , css dan juga javascript. Lumrah kepada web development untuk mengunakan tiga languange utama ini, tetapi setelah meneliti package,json. Kita dapati , languange sebenar yang digunapakai adalah
```
scss,html,javascript
```
Project ini mengunakan scss , apa itu scss ? Lebih kurang macam css tapi dia lebih structure dan juga lebih teratur.

#### Framework. 

Project ini telah di mulakan dengan mengunakan framework. Framework yang digunakan pula adalah Quasar Framework. Quasar framework ini adalah sebuah UI framework library . Quasar memudahkan developer untuk mengunakan component atau design ui yang telah sedia ada bagi membantu melancarkan process pembangunan web aplikasi.

Framework ini dibina diatas Framework VueJS. So untuk mengetahui tentang framework ini, seseorang kena lebih mengetahui tentang framework VueJS terlebih dahulu.

#### Extesion Package

Tedapat beberapa package extension yang telah di import untuk project ini , antaranya ialah

```
Vuex,Vue-Router,Axios,Vuelidate
```
##### Vuex

Vuex merupakan sebuah statemanagement plugin untuk VueJS. Dia membantu dalam mengawal state kepada aplikasi ini. 

##### Vue-router

Package ini membantu Aplikasi yang dibina dengan VueJS mengawal navigasi antara halaman. Ia membenarkan aplikasi untuk navigate ke page yang berlainan 
sepanjang aplikasi berlangsung.

##### Axios

Axios adalah sebuah package yang memudahkan sesuatu project untuk membuat http request kepada api atau Re


