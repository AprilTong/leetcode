/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 双指针
var merge = function (nums1, m, nums2, n) {
    const result = new Array(m + n).fill(0)
    // 指向第一个数组
    let i = 0
    // 指向数组2
    let j = 0
    let current = null
    while (i < m || j < n) {
        // 第一个数组已经遍历完
        if (i === m) {
            current = nums2[j++]
        } else if (j === n) {
            current = nums1[i++]
        } else if (nums1[i] < nums2[j]) {
            current = nums1[i++]
        } else {
            current = nums2[j++]
        }
        result[i + j - 1] = current
    }

    for (let k = 0; k < result.length; k++) {
        nums1[k] = result[k]
    }
}
// @lc code=end
let nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [2, 5, 6],
    n = 3
