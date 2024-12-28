/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    if (!head || !head.next) return head;

    let prev = null;
    let curr = head;
    while (curr) {
        let newCurr = curr.next;
        let count = false
        while (newCurr && curr.val === newCurr.val) {
            count = true
            newCurr = newCurr.next;
        }
        if (count) {
            if (curr == head) {
                head = newCurr;
                curr = head
            } else {
                prev.next = newCurr;
                curr = newCurr;
            }
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    return head
    
};