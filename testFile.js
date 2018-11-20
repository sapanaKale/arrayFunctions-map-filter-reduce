const assert = require ("assert");
const {map} = require ("./src.js");

//util functions - 

const increment = function (number) {
  return number + 1;
}

const square = function (number) {
  return number * number;
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

console.log("all tests are passed");
