/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 输入：s = ["h","e","l","l","o"]
 * 输出：["o","l","l","e","h"]
 */
// 方法一：使用数组的api
var reverseString = function (s) {
    return s.reverse()
}
// 方法二：两层遍历，时间复杂度o(2n)
var reverseString = function (s) {
    const map = {}
    for (let i = 0; i < s.length; i++) {
        map[i] = s[i]
    }
    for (let i = 0; i < s.length; i++) {
        s[i] = map[s.length - 1 - i]
    }
}

// 方法三：双指针
var reverseString = function (s) {
    let left = 0
    let right = s.length - 1
    while (left < right) {
        const temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
    console.log(s)
}
// @lc code=end
