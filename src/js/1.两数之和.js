/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 空间复杂度特别高
 */
var twoSum = function (nums, target) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        const tempArr = nums.slice(i + 1)
        const findIndex = tempArr.findIndex((el) => el === target - current)
        if (findIndex > -1) {
            result.push(i)
            result.push(findIndex + i + 1)
            break
        }
    }
    return result
}
// @lc code=end
