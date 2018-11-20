const map = function (functionCallback,source) {
  let result = [];
  for (element of source) {
    result.push(functionCallback(element));
  }
  return result;
}



module.exports = {map};
