/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const tempStr = s.replaceAll(/[^\w]/gi, '').replace(/\_/gi, '')
    return tempStr.toLocaleLowerCase() === tempStr.toLocaleLowerCase().split('').reverse().join('')
}
// @lc code=end
