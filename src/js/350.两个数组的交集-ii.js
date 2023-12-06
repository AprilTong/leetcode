/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const result = []
    for (let i = 0; i < nums1.length; i++) {
        const findIndex = nums2.findIndex((item) => item === nums1[i])
        if (findIndex > -1) {
            result.push(nums1[i])
            nums2.splice(findIndex, 1)
        }
    }
    return result
}
// @lc code=end
