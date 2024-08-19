"use strict";

const { sum } = require("../calclibrary");
describe("Testing sum with integers", () => {
  test("sum(1,1) returns 2", () => {
    expect(sum(1, 1)).toBe(2);
  });
  test("sum(2,3) returns 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
  const testValues = [
    [2, 4, 6],
    [2, -4, -2],
    [0, 0, 0],
    [0, 3, 3],
    [0, -3, -3],
    [500, -500, 0],
    [1, 499, 500],
  ];
  test.each(testValues)("sum(%s,%s) = %s", (a, b, result) => {
    expect(sum(a, b)).toBe(result);
  });
});

describe("Testing with floats", () => {
  test("sum(1.5,1.5) returns 3", () => {
    expect(sum(1.5, 1.5)).toBe(3);
  });
  const testValues = [
    [2.5, 4.5, 7],
    [2.5, -4.5, -2],
    [0.5, 0.5, 1],
    [0.5, 3.5, 4],
    [0.5, -3.5, -3],
    [1.5, 499.5, 501],
    [499.9, 500.0, 999.9],
    [-499.9, -500.0, -999.9],
    [-499.9, 500.0, 0.1],
  ];
  test.each(testValues)("sum(%s,%s) = %s", (a, b, result) => {
    expect(sum(a, b)).toBeCloseTo(result);
  });
});

describe("Testing missing parameter", () => {
  test("sum() throws an exception ", () => {
    expect(() => sum()).toThrow("parameter missing");
  });
  test("sum() throws an exception ", () => {
    expect(() => sum(1)).toThrow("parameter missing");
  });
});

describe("parameters are not numbers", () => {
  const testValues = [
    ["sum('1', '2')", "1", "2"],
    ["sum(1, '2')", 1, "2"],
    ["sum('1', 2)", "1", 2],
    ["sum('a', 'b')", "a", "b"],
    ["sum('', '')", "", ""],
    ["sum(true, false)", true, false],
    ["sum(true, true)", true, true],
    ["sum(false, false)", false, false],
    ["sum(false, true)", false, true],
  ];
  test.each(testValues)('%s throws "only numbers allowed"', (label, a, b) => {
    expect(() => sum(a, b)).toThrow("only numbers allowed");
  });
});

const { subtract } = require("../calclibrary");

describe("Testing subtract", () => {
  describe("Testing subtract with integers", () => {
    const testValues = [
      [1, 1, 0],
      [2, 3, -1],
      [2, -3, 5],
      [0, 0, 0],
      [0, 1, -1],
      [1, 0, 1],
      [2, 1, 1],
    ];
    test.each(testValues)("subtract(%s,%s) = %s", (a, b, result) => {
      expect(subtract(a, b)).toBe(result);
    });
  });
  describe("Testing subtract with floats", () => {
    const testValues = [
      [1.5, 1.5, 0],
      [2.5, 3.5, -1],
      [2.5, -3.5, 6],
      [0.5, 0.5, 0],
      [0.5, 1.5, -1],
      [1.5, 0.5, 1],
      [2.5, 1.5, 1],
    ];
    test.each(testValues)("subtract(%s,%s) = %s", (a, b, result) => {
      expect(subtract(a, b)).toBeCloseTo(result);
    });
  });
  describe("Testing missing parameter", () => {
    test("subtract() throws an exception ", () => {
      expect(() => subtract()).toThrow("parameter missing");
    });
    test("subtract() throws an exception ", () => {
      expect(() => subtract(1)).toThrow("parameter missing");
    });
  });
  
  describe("parameters are not numbers", () => {
    const testValues = [
      ["subtract('1', '2')", "1", "2"],
      ["subtract(1, '2')", 1, "2"],
      ["subtract('1', 2)", "1", 2],
      ["subtract('a', 'b')", "a", "b"],
      ["subtract('', '')", "", ""],
      ["subtract(true, false)", true, false],
      ["subtract(true, true)", true, true],
      ["subtract(false, false)", false, false],
      ["subtract(false, true)", false, true],
    ];
    test.each(testValues)('%s throws "only numbers allowed"', (label, a, b) => {
      expect(() => subtract(a, b)).toThrow("only numbers allowed");
    });
  });
});
