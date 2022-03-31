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
var isValid2 = function (s) {
    if (s.length % 2 !== 0) return false;
    while (s.indexOf('()') > -1 || s.indexOf('[]') > -1 || s.indexOf('{}') > -1) {
        s = s.replace(/\(\)/, '').replace(/\{\}/g, '').replace(/\[\]/g, '');
    }
    return !s;
};
var isValid = function (s) {
    if (!s) return true;
    if (s.length % 2 !== 0) return false;
    let arr = [];
    let map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ]);
    for (let v of s) {
        if (!map.has(v)) {
            arr.push(v);
        } else {
            if (!arr.length || arr[arr.length - 1] !== map.get(v)) {
                return false;
            }
            arr.pop();
        }
    }
    return arr.length === 0;
};
// @lc code=end
