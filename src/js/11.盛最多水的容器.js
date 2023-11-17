/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * 双指针
 */
var maxArea = function (height) {
    let firstBigIndex = 0
    let secondBigIndex = height.length - 1
    let result = 0
    while (firstBigIndex < secondBigIndex) {
        result = Math.max(
            result,
            (secondBigIndex - firstBigIndex) * Math.min(height[firstBigIndex], height[secondBigIndex])
        )
        if (height[firstBigIndex] < height[secondBigIndex]) {
            firstBigIndex++
        } else {
            secondBigIndex--
        }
    }
    return result
}
// @lc code=end
