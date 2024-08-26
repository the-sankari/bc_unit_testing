"use strict";
module.exports = class Dice {
  #upperBound;
  #minimumValue;
  #dotCount;
  constructor(uBound=6) {
    this.#upperBound = uBound;
    this.#minimumValue = 1;
    this.#dotCount = 0;
  }
  // getters
  get maximumValue() {
    return this.#upperBound;
  }
  get minimumValue() {
    return this.#minimumValue;
  }
  get dots() {
    return this.#dotCount;
  }
//   // methods
//   roll() {
//     let result =
//       Math.floor(Math.random() * this.#upperBound) + this.#minimumValue;
//     this.#dotCount = 0;
//     return result;
//   }
//   addDot() {
//     this.#dotCount++;
//   }
//   toString() {
//     let result = "";
//     for (let i = 0; i < this.#dotCount; i++) {
//       result += ".";
//     }
//     return result;
//   }
};
