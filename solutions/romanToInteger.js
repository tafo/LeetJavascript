/**
 * https://leetcode.com/problems/roman-to-integer/
 *
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    var length = s.length;
    var previousValue = romanValues[s[length - 1]];
    var result = previousValue;
    for (var i = length - 2; i >= 0; i--) {
        var romanLetter = s[i];
        var currentValue = romanValues[romanLetter];
        if (currentValue >= previousValue) {
            result += currentValue;
        } else {
            result -= currentValue;
        }
        previousValue = currentValue;
    }
    return result;
};
