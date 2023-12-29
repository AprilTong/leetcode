/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let index = 0
    // 非零的往前挪
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index++] = nums[i]
        }
    }
    while (index < nums.length) {
        nums[index++] = 0
    }
}
// @lc code=end
/**
 *
 * 双指针
 * [0,1,0,3,12]
 *
 */
var moveZeroes = function (nums) {
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            index++
        } else if (index !== 0) {
            nums[i - index] = nums[i]
            nums[i] = 0
        }
    }
}
