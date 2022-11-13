/**
 * https://leetcode.com/problems/plus-one
 *
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let last = digits.length - 1;
    digits[last]++;
    let x = 0;
    let i = last;
    while (i > 0) {
        if (digits[i] == 10) {
            digits[i] = 0;
            digits[i - 1]++;
        } else {
            break;
        }
        i--;
    }
    if (digits[0] === 10) {
        digits[0] = 0;
        digits.unshift(1);
    }
    return digits;
};

console.log(plusOne([9, 9]));
