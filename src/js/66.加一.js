/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let temp = 1
    for (let i = digits.length - 1; i >= 0; i--) {
        const current = digits[i] + temp
        digits[i] = current % 10
        if (current >= 10) {
            temp = parseInt(current / 10)
        } else {
            temp = 0
            break
        }
    }
    if (temp) digits.unshift(temp)
    return digits
}
// @lc code=end
