/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n === 1) return true
    let temp = 1
    while (temp < n) {
        if (temp * 2 === n) {
            return true
        }
        // 或者左移 temp = temp << 1
        temp *= 2
    }
    return false
}
/**
 *
 * @param {*} n
 * @returns
 * 时间复杂度O(1)
 */
var isPowerOfTwo = function (n) {
    return n > 0 && (n & (n - 1)) === 0
}
