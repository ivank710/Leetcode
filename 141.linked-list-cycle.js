/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(!head) return false;
  let runner = head;
  let walker = head;


  while (runner.next !== null && runner.next.next !== null) {
    walker = walker.next;
    runner = runner.next.next;
    if (runner === walker) return true;
  }

  return false;

  // if (!head) return false;
  // let walker = head;
  // let runner = head;

  // while (runner.next !== null && runner.next.next !== null) {
  //   walker = walker.next;
  //   runner = runner.next.next;
  //   if (walker === runner) return true;
  // }

  // return false;
};

