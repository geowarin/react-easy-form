'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getNextId;
var currentId = 1;

function getNextId() {
  var prefix = arguments.length <= 0 || arguments[0] === undefined ? 'id_' : arguments[0];

  return prefix + currentId++;
}

module.exports = exports['default'];