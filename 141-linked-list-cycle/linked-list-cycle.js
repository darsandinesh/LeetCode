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
 */
var hasCycle = function(head) {

    if(!head) return false
    let single = head
    let double = head;
    while(double && double.next){
        single = single.next;
        double = double.next.next;
        if(single === double){
            return true;
        }
    }
    return false;
    
};