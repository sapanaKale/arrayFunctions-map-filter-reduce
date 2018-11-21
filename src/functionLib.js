const map = function (functionCallback,source) {
  let result = [];
  for (element of source) {
    result.push(functionCallback(element));
  }
  return result;
}

const filter = function (functionCallback,source) {
  let result = [];
  for (element of source) {
    if (functionCallback(element) == true) {
      result.push(element);
    }
  }
  return result;
}

const reduce = function (reducer, source, initialValue) {
  if (initialValue == undefined) {
    initialValue = source[0];
    source = source.slice(1);
  }
  let result = initialValue;
  for (element of source) {
    result = reducer (result,element);
  }
  return result;
}

module.exports = {map,filter,reduce};
