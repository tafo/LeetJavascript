/**
 * https://leetcode.com/problems/palindrome-number/
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var number = x.toString();
    var length = number.length;
    var loop = length / 2;
    for (var i = 0; i < loop; i++) {
        if (number[i] === number[length - 1 - i]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};
