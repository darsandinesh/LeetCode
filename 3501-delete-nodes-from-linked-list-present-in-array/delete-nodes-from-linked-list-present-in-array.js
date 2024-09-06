/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {

    const set = new Set(nums);
    let curr = new ListNode(null,head);
    let newHead = curr;

    while(curr.next){
        if(set.has(curr.next.val)){
            curr.next = curr.next.next;
        }else{
            curr = curr.next;
        }
    }
    return newHead.next
    
};