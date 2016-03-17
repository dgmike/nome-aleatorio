'use strict';

var names = require('./names.json');
var randomInt = require('random-int');

module.exports = function () {
    var ri = randomInt(names.length);

    return names[ri];
};
