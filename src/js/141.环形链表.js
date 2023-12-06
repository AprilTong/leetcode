/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 时间复杂度o(n),空间复杂度o(1)
 */
var hasCycle = function (head) {
    // 两个指针，一个走的慢，一个走的快， 如果有环则会相遇
    let p1 = head
    let p2 = head
    while (p1?.next && p2?.next) {
        p1 = p1.next
        p2 = p2.next.next
        if (p1 === p2) {
            return true
        }
    }
    return false
}
// @lc code=end
