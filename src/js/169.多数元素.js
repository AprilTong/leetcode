/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = {}
    let result = null
    nums.forEach((item) => {
        if (!map[item]) {
            map[item] = 0
        }
        map[item] = map[item] + 1
        if (map[item] > nums.length / 2) {
            result = item
        }
    })
    return result
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = {}
    let result = null
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]
        if (!map[item]) map[item] = 0
        map[item] = map[item] + 1
        if (map[item] > nums.length / 2) {
            result = item
            break
        }
    }
    return result
}

var majorityElement = function (nums) {
    let count = 0
    let candidate = nums[0]
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]
        if (count === 0) candidate = item
        if (item === candidate) {
            count++
        } else {
            count--
        }
    }
    return candidate
}
