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
var deleteMiddle = function(head) {

     let single = head;
    let double = head;
    let mid 
    if(!head || !head.next) return null
    while(double && double.next){
        mid = single
        single = single.next;
        double = double.next.next;
    }
    if(mid){
        mid.next = single.next
    }
    return head
    
};