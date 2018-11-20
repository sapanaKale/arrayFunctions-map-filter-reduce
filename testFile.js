const assert = require ("assert");
const {map,filter} = require ("./src.js");

//util functions - 

const increment = function (number) {
  return number + 1;
}

const square = function (number) {
  return number * number;
}

const isEven = function (number) {
  return number % 2 == 0;
}

//testing map function.

const testMap = function (funcRef,source,expectedOutput) {
  let actualOutput = map(funcRef,source);
  assert.deepEqual(actualOutput,expectedOutput);
}

testMap(increment,[1],[2]);
testMap(increment,[1,2,3],[2,3,4]);
testMap(square,[1],[1]);
testMap(square,[1,2,3],[1,4,9])

// testing filter function.

const testFilter = function (functionRef,source,expectedOutput) {
  let actualOutput = filter(functionRef,source);
  assert.deepEqual(actualOutput,expectedOutput);
}

testFilter(isEven,[1],[]);
testFilter(isEven,[1,2],[2]);

console.log("all tests are passed");
