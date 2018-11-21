const assert = require ("assert");
const {map,filter,reduce} = require ("../src/functionLib.js");

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

const isGreater = function (threshold) {
  return function (number) {
    return number > threshold;
  }
}

const isPrime = function (number) {
  for (let divisor=2; divisor<=Math.sqrt(number); divisor++) {
    if (number % divisor == 0) {
      return false;
    }
  }
  return true;
}

const add = function (number1, number2) {
  return number1 + number2;
}

const extractGreater = function (number1, number2) {
  return Math.max(number1, number2);
}

//testing map function.

describe ("map",function () {
  it ("should increment every element of source by 1",function () {
    assert.deepEqual(map(increment,[1]),[2]);
    assert.deepEqual(map(increment,[1,2,3]),[2,3,4]);
  })
  it ("should provide array of square of every element",function () {
    assert.deepEqual(map(square,[1]),[1]);
    assert.deepEqual(map(square,[1,2,3]),[1,4,9]);
  })
})

// testing filter function.

describe ("filter",function () {
  it ("should filter the even numbers",function () {
    assert.deepEqual(filter(isEven,[1]),[]);
    assert.deepEqual(filter(isEven,[1,2,3]),[2]);
  })
  it ("should filter numbers greater than 1",function () {
    let numbersGreaterThan = isGreater(1);
    assert.deepEqual(filter(numbersGreaterThan,[1,2,3]),[2,3]);
  })
  it ("should filter the prime numbers", function () {
    assert.deepEqual(filter(isPrime,[2]),[2]);
    assert.deepEqual(filter(isPrime,[2,3,4,5,6,7]),[2,3,5,7]);
  })
})

// test reduce function.

describe ("reduce", function () {
  it ("should provide sum of all numbers", function () {
    assert.deepEqual(reduce(add,[1,2]),3);
    assert.deepEqual(reduce(add,[1,2,3,4],5),15);
  })
  it ("should provide greatest of given numbers", function () {
    assert.deepEqual(reduce(extractGreater,[1,2],3),3);
    assert.deepEqual(reduce(extractGreater,[1,2,3]),3);
    assert.deepEqual(reduce(extractGreater,[1,6,-5,-7,5]),6);
  })
})


