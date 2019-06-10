/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//RECURSION
const reverseList = head => {
  if (!head || !head.next) return head;

  let prev = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return prev;
}


// var reverseList = function(head) {
//   if (!head) return null;
  
//   let curr = head;
//   let next;
//   let prev;

//   while (curr) {
//     next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }

//   head = prev;

//   return head;
// };

