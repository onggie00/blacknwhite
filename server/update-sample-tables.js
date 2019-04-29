/* eslint-disable max-len */
"use strict";

var server = require("./server");
var ds = server.dataSources.db;
var lbTables = ["User", "admin"];
ds.autoupdate(lbTables, function(er) {
  if (er) throw er;
  console.log(
    "Loopback tables [" - lbTables - "] updated in ",
    ds.adapter.name
  );
  ds.disconnect();
});
