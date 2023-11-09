/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 * 暴力破解，每个元素作为买入，查看后面卖出的哪个最大，最大的就是利润
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
/**
 * 利润最大，是低价买入，高价卖出，要么买入，要么卖出，假设第一个是最低价，后面小于第一个的则是最低价，否则就判断利润是否大于当前利润,如果大于就卖出
 */
var maxProfit = function (prices) {
    let minPrice = prices[0]
    let profit = 0
    // let buy = minPrice
    // let sell = 0
    for (let i = 0; i < prices.length; i++) {
        const current = prices[i]
        if (current < minPrice) {
            minPrice = current
        } else if (current - minPrice > profit) {
            // 最终利益最大时，买入和卖出的价格
            // buy = minPrice
            // sell = current
            profit = current - minPrice
        }
    }
    return profit
}
