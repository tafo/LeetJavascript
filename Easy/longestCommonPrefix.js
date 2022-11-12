/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var i = 0;
  var result = "";
  for (; i < strs[0].length; i++) {
    var ch = strs[0][i];
    for (j = 1; j < strs.length; j++) {
      if (ch === strs[j][i]) {
        continue;
      } else {
        return result;
      }
    }
    result += ch;
  }
  return result;
};

var longestCommonPrefix2 = function () {
  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};
