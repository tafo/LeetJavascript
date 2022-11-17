/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    var start = 0;
    var end = Math.floor(x);
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (mid * mid > x) {
            end = mid - 1;
        } else if (mid * mid < x) {
            start = start + 1;
        } else {
            return mid;
        }
    }
    return end;
};

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(20));
