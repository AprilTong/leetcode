/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 先上下交换，再对角线交换
 */
var rotate = function (matrix) {
    const length = matrix.length
    // 先上下交换
    for (let i = 0; i < Math.floor(length / 2); i++) {
        const temp = matrix[i]
        matrix[i] = matrix[length - i - 1]
        matrix[length - i - 1] = temp
    }
    // 对角线交换
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            const temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    return matrix
}
// @lc code=end

/**
 * [0, 0]---[0, 2]
 * [0, 1]---[1, 2]
 * [0, 2]---[2, 2]
 
 *
 * [1, 0]---[0, 1]
 * [1, 1]---[1, 1]
 * [1, 2]---[2, 1]
 *
 * [2, 0]---[0, 0]
 * [2, 1]---[1, 0]
 * [2, 2]---[2, 0]
 * 
 * 4*4
 * [0, 0]---[0, 3]
 * [0, 1]---[1, 3]
 * [0, 2]---[2, 3]
 * [0, 3]---[3, 3]
 * 
 * [1, 0]---[0, 2]
 * [1, 1]---[1, 2]
 * [1, 2]---[2, 2]
 * [1, 3]---[3, 2]
 * 
 * [2, 0]---[0, 1]
 * [2, 1]---[1, 1]
 * [2, 2]---[2, 1]
 * [2, 3]---[3, 1]
 * 
 * 
 * [3, 0]---[0, 0]
 * [3, 1]---[1, 0]
 * [3, 2]---[2, 0]
 * [3, 3]---[3, 0]
 */
