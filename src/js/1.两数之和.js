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
 * 暴力枚举: 时间复杂度O(n²）
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
/**
 *
 * @param {*} nums
 * @param {*} target
 * 使用map记录值和索引,key为值，value为索引
 * 时间复杂度O(n）
 */
var twoSum = function (nums, target) {
    let result = []
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        if (map[target - current] !== undefined) {
            result.push(map[target - current])
            result.push(i)
            break
        }
        map[nums[i]] = i
    }
    return result
}
