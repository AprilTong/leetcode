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
    return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
};
var addBinary = function (a, b) {
    let len = Math.max(a.length, b.length);
    a = a.padStart(len, '0');
    b = b.padStart(len, '0');
    // 用来判定是否需要进位
    let flag = false;
    let result = '';
    for (let i = len - 1; i >= 0; i--) {
        const tempVal = Number(a[i]) + Number(b[i]) + (flag ? 1 : 0);
        flag = tempVal >= 2;
        result = `${tempVal % 2}${result}`;
    }
    flag && (result = `1${result}`);
    return result;
};
// @lc code=end
