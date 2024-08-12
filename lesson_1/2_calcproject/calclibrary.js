"use strict";
function sum(a, b) {
  if (arguments.length < 2) {
    throw new Error("parameter missing");
  }
  return a + b;
}

module.exports = { sum };
