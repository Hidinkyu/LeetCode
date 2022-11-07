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

//  iterative Time complexit O(n) Space complexity O(1)

// const reverseList = (head) => { 
//   let [prev, cur] = [null, head];
  
//   while (cur) {
//     let next = cur.next; 
//     cur.next = prev;
//     prev = cur;
//     cur = next;
//   }
//   return prev
// };

// recursive Time complexity O(n) Space complexity O(n)

const reverseList = (head) => {
  if (!head) return null;
  let newHead = head
  if (head.next) {
    newHead = reverseList(head.next);
    head.next.next = head
  }
  head.next = null;
  return newHead;
}