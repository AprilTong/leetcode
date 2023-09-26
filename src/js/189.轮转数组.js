/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const len = nums.length
    const result = []
    for (let i = 0; i < len; i++) {
        result[(i + k) % len] = nums[i]
    }
    for (let i = 0; i < result.length; i++) {
        nums[i] = result[i]
    }
    return nums
}

// 数组翻转
const reverse = (nums, start, end) => {
    while (start < end) {
        const temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start += 1
        end -= 1
    }
}

var rotate = function (nums, k) {
    k %= nums.length
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
}
// @lc code=end
// k取余，是k可能超过数组长度
var rotate = function (nums, k) {
    k %= nums.length
    const result = [...nums.slice(-k), ...nums.slice(0, nums.length - k)]
    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i]
    }
    return nums
}
