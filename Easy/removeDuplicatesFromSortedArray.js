/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let previousNumber = nums[0];
    let currentIndex = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == previousNumber) continue;
        nums[currentIndex] = nums[i];
        previousNumber = nums[i];
        currentIndex++;
    }
    return currentIndex;
};
