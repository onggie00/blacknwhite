/* eslint-disable max-len */
"use strict";

var server = require("./server");
var ds = server.dataSources.db;
//AutoMigrate Schema
//import semua model menjadi tabel
//bila hanya ingin model tertentu cukup hapus seluruh model lbTables dan ganti dengan nama model yang diinginkan
//kalau tidak, maka data dari seluruh model (dan tabel) akan dihapus #hati-hati
var lbTables = [
  "User",
  "AccessToken",
  "ACL",
  "RoleMapping",
  "Role",
  "barbershop",
  "member",
  "admin",
  "highlight",
  "antrian",
  "category_model",
  "feedback",
  "rating_model",
  "model_rambut",
  "stylist"
];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log(
    "Loopback tables [" - lbTables - "] created in ",
    ds.adapter.name
  );
  ds.disconnect();
});
