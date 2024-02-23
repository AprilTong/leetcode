/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rowMap = {}
    const colMap = {}
    const areaMap = {}
    for (let i = 0; i < 9; i++) {
        rowMap[i] = []
        colMap[i] = []
        areaMap[i] = []
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const idx = Math.floor(i / 3) * 3 + Math.floor(j / 3)
            const value = board[i][j]
            if (value === '.') continue
            if (rowMap[i].includes(value) || colMap[j].includes(value) || areaMap[idx].includes(value)) return false
            rowMap[i].push(value)
            colMap[j].push(value)
            areaMap[idx].push(value)
        }
    }
    return true
}
// @lc code=end

/* 
行数：i
列数：j
[0,1,2,3,4,5,6,7,8]
*/
