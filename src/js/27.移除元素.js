/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {}
// @lc code=end
// 使用数组的删除方法
var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
}

// 双指针
var removeElement = function (nums, val) {
    const n = nums.length
    let left = 0
    for (let right = 0; right < n; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right]
            left++
        }
    }
    return left
}
