"use strict";
function sum(a, b) {
  if (arguments.length < 2) {
    throw new Error("parameter missing");
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("only numbers allowed");
  }
  return a + b;
}

module.exports = { sum };
