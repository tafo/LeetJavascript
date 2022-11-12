/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var hash = {};
  for (var i = 0; i < nums.length; i++) {
    var number = nums[i];
    if (hash[target - number] !== undefined) {
      return [hash[target - number], i];
    } else {
      hash[nums[i]] = i;
    }
  }
};
