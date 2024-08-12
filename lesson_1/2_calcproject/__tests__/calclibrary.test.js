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
    [1000, -500, 500],
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
    [500.5, -500.5, 0],
    [1.5, 499.5, 501],
    [1000.5, -500.5, 500],
    [499.9, 500.0, 999.9],
    [-499.9, -500.0, -999.9],
    [-499.9, 500.0, 0.1],
  ];
  test.each(testValues)("sum(%s,%s) = %s", (a, b, result) => {
    expect(sum(a, b)).toBeCloseTo(result);
  });
});


describe('Testing missing parameter', ()=>{
    test('sum() throws an exception ', () => {
      expect(()=>sum()).toThrow('parameter missing')
    })
    test('sum() throws an exception ', () => {
        expect(()=>sum(1)).toThrow('parameter missing')
      })
    
})