const assert = require ("assert");
const {map} = require ("./src.js");

//util functions - 

const increment = function (number) {
  return number + 1;
}

//testing map function.

const testMap = function (funcRef,source,expectedOutput) {
  let actualOutput = map(funcRef,source);
  assert.deepEqual(actualOutput,expectedOutput);
}

testMap(increment,[1],[2]);

console.log("all tests are passed");
