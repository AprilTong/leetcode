/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度时间复杂度O(2n）
 */
var singleNumber = function (nums) {
    let map = {}
    let result = null
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        if (!map[current]) {
            map[current] = 1
        } else {
            map[current] = map[current] + 1
        }
    }
    for (const key in map) {
        if (map[key] === 1) {
            result = key
        }
    }
    return result
}
// @lc code=end
// 使用set，set不允许值重复
var singleNumber = function (nums) {
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        const preSize = set.size
        set.add(current)
        // 如果添加的是相同的，则移除
        if (preSize === set.size) {
            set.delete(current)
        }
    }
    return [...set][0]
}
/**
 *
 * @param {number[]} nums
 * @return {number}
 * 位运算
 * a^a=0；自己和自己异或等于0
 * a^0=a；任何数字和0异或还等于他自己
 * a^b^c=a^c^b；异或运算具有交换律
 */
var singleNumber = function (nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i]
    }
    return result
}
