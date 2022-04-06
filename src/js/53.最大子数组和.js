/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划:把原问题分解为相对简单的子问题
var maxSubArray1 = function (nums) {
    if (nums.length === 1) return nums[0]
    // 若前一个元素大于0，则将其加到当前元素上
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1]
        }
    }
    return Math.max(...nums)
}
// 贪心算法: 做出当前看来时最好的选择
var maxSubArray = function (nums) {
    // 若当前元素之前的和小于0，则丢弃当前元素之前的数列重新计算
    let pre = nums[0]
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (pre < 0) {
            pre = 0
        }
        pre += nums[i]
        max = Math.max(max, pre)
    }
    return max
}
// @lc code=end
