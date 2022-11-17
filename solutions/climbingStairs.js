/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let x = 1; // The number of ways to reach the current step
    let y = 1; // The number of ways to reach the next step
    while (n-- > 0) {
        y = x + y;
        x = y - x;
    }
    return x;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
