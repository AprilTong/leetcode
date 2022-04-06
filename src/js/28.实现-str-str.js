/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr1 = function (haystack, needle) {
    let reg = new RegExp(`${needle}`, 'ig');
    let c = reg.exec(haystack);
    return c ? c.index : -1;
};
var strStr = function (haystack, needle) {
    let i = haystack.length;
    let j = needle.length;
    for (let k = 0; k <= i - j; k++) {
        if (haystack.slice(k, k + j) === needle) {
            return k;
        }
    }
    return -1;
};
// @lc code=end
