/**
 * https://leetcode.com/problems/search-insert-position/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let i = 0;
    for (; i < nums.length; i++) {
        if (nums[i] < target) continue;
        if (nums[i] >= target) return i;
    }
    return i;
};

// binary search
var searchInsert2 = function (nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};

var binarySearch = function (nums, target, low, high) {
    if (low > high) return low;
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    if (array[mid] > target) return binarySearch(nums, target, low, mid - 1);
    if (array[mid] < target) return binarySearch(nums, target, mid + 1, high);
};
