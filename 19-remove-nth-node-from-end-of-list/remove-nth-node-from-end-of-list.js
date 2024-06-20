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

   let length = 0;
   let curr = head;
   
   while(curr){
    curr = curr.next;
    length++;
   }

   if(length == n){
    return head.next;
   }

   let i=1;
   let newCurr = head;

   while(i<length-n){
    newCurr = newCurr.next;
    i++
   }

   newCurr.next = newCurr.next.next;

   return head;

};