/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    let curr = headA;
    while (curr) {
        let newCurr = headB;
        while (newCurr) {
            if (curr === newCurr) {
                return curr;
            }
            newCurr = newCurr.next;
        }
        curr = curr.next;
    }

};