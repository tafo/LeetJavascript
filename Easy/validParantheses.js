/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [];
  for (const ch of s) {
    switch (ch) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (stack.length === 0 || stack.pop() != ch) return false;
        break;
    }
  }

  return stack.length === 0;
};

console.log(isValid("(]"));
