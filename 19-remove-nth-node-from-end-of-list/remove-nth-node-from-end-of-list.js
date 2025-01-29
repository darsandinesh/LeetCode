/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

    let curr = head;
    let i = 1;
    while (curr.next) {
        i++;
        curr = curr.next
    }
    let index = i - n
    if (i == 1) {
        return null
    }
    let j = 0;
    let newCurr = head;
    let prev = null
    while (newCurr) {
        if (j == index) {
            console.log(newCurr)
            if (newCurr == head) {
                head = newCurr.next;
            } else {
                prev.next = newCurr.next;
            }
        } else {
            prev = newCurr;
        }
        j++
        newCurr = newCurr.next;
    }
    return head
};