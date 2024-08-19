"use strict";

test("This is the first test", () => {
  console.log("First test");
});

test("it should be 1+1=2", () => {
  expect(1 + 1).toBe(2);
});

test("test 3 ", () => {
  console.log("Test 3");
});

beforeAll(() => {
  console.log("beforeAll:", "init before all tests");
});

afterAll(() => {
  console.log("afterAll:", "cleaning after all tests");
});

describe("This is group A", () => {
  beforeEach(() => {
    console.log("beforeEach: ", "run before each test in group A");
  });

  afterEach(() => {
    console.log("afterEach: ", "run after each test in group A");
  });
  test("first test in group A", () => {
    console.log("first test in group A");
  });
  test("second test in group A", () => {
    console.log("second test in group A");
  });
});

describe("This is group B", () => {
  describe("This is group B1 in B", () => {
    test("test 1 in B", () => {
      console.log("test 1 in B1");
    });
    test("test 2 in B", () => {
      console.log("test 2 in B1");
    });
  });
  describe("This is group B2 in B", () => {
    test("test 1 in B2", () => {
      console.log("test 1 in B2");
    });
    test("test 2 in B2", () => {
      console.log("test 2 in B2");
    });
  });
});

describe("test concatenation function", () => {
  const concat = (partA, partB) => "" + partA + partB;
  test('testing concat("first", "last") returns "firstlast"', () => {
    expect(concat("first", "last")).toBe("firstlast");
  });
  test('testing concat(1,2) returns "12"', () => {
    expect(concat(1, 2)).toBe('12');
  });
});

describe('this test is for exception',()=>{
    function testFunciton() {
        throw new Error('Test exception');
    }
    test('function throws an exception', ()=>{
        expect(()=>testFunciton())
    })
})