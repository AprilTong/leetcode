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
 *
 * 思路：把每个元素出现的次数存储到哈希表中，取出对应的值大于nums.length / 2的
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

/**
 *
 * @param {number[]} nums
 * @returns
 * 思路：投票法
 * 如果众数的票数+1，非众数的票数为-1；所有数字的票数和>0;
 * 如果数组的前a个数字的票数和为0，则数组剩余(n -a)个数字的票数和一定仍>0
 */
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

/**
 * 借鉴题解
 * 1. 排序，中位数肯定是出现次数最多的
 * 2. 分治法：如果a是数组nums的众数, 那么将nums分成两部分，那么a必定是至少一部分的众数。
 */
