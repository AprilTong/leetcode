/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const buy = prices[i]
            const sell = prices[j]
            if (sell > buy) {
                const tempProfit = sell - buy
                if (tempProfit > profit) {
                    profit = tempProfit
                }
            }
        }
    }
    return profit
}
// @lc code=end
