/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let len = nums.length;
    if (len === 1) {
        return nums[0];
    }
    if (nums[0] < nums[len - 1]) {
        return nums[0];
    }
    let mid = len % 2 === 0 ? len / 2 - 1 : Math.floor(len / 2);
    if (nums[mid] > nums[mid + 1]) {
        return nums[mid + 1] + '';
    }
    if (nums[mid - 1] > nums[mid]) {
        return nums[mid];
    }
    if (nums[mid] > nums[0]) {
        return findMin(nums.slice(mid + 1));
    }
    if (nums[mid] < nums[0]) {
        return findMin(nums.slice(0, mid + 1));
    }
};
