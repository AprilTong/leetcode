/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const length = prices.length
    // 二维数组，第一个元素没有持有股票，第二个元素持有股票
    // 后面每个元素的二维数组: dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + price[i])
    // dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - price[i])

    const dp = Array(length).fill([])
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    for (let i = 1; i < length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    }
    return dp[length - 1][0]
}
// @lc code=end
