/**
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
  binarySearch(nums, target);
};

var binarySearch = function (nums, target, low, high) {
  if (low > high) return low;
  const mid = Math.floor((low + high) / 2);
  if (nums[mid] === target) return mid;
  if (array[mid] > target) return binarySearch(nums, target, low, mid - 1);
  if (array[mid] < target) return binarySearch(nums, target, mid + 1, high);
};

console.log(searchInsert2([1, 3, 5, 6], 5));
console.log(searchInsert2([1, 3, 5, 6], 2));
console.log(searchInsert2([1, 3, 5, 6], 7));
