/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary1 = function (a, b) {
    return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)
}
// var addBinary = function (a, b) {
//     let len = Math.max()
// }
// @lc code=end
