"use strict";

// nome-aleatorio | matheus alves
// https://github.com/theuves/nome-aleatorio

var nomes = require("./lib/names.js");
var random = require("random-int");
var desacentue = require("remover-acentos");

module.exports = function (opcoes) {
  opcoes = opcoes || {};

  var nome;

  if (opcoes.letter && typeof opcoes.letter === "string") {
    opcoes.letter = opcoes.letter.charAt(0);

    nome = nomes[opcoes.letter][random(nomes[opcoes.letter].length - 1)];
  } else {
    var lista = Object.keys(nomes).map(function (letra) {
      return nomes[letra];
    }).reduce(function (anterior, atual) {
      return anterior.concat(atual);
    });

    nome = lista[random(lista.length - 1)];
  }

  if (opcoes.lowercase) nome = nome.toLowerCase();
  if (!!(opcoes.accents < 1)) nome = desacentue(nome);

  return nome;
};
