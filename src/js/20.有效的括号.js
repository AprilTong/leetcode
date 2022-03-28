/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) return false;
    while (s.indexOf('()') > -1 || s.indexOf('[]') > -1 || s.indexOf('{}') > -1) {
        s = s.replace(/\(\)/, '').replace(/\{\}/g, '').replace(/\[\]/g, '');
    }
    return !s;
};
// @lc code=end
