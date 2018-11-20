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


module.exports = {map,filter};
