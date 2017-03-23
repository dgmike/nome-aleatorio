"use strict";

// nome-aleatorio | matheus alves
// https://github.com/theuves/nome-aleatorio

var names = require("./names.json");
var randomInt = require("random-int");

module.exports = function () {
  var ri = randomInt(names.length);

  return names[ri];
};
