/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
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
var middleNode = function(head) {
  let runner = head;
  let walker = head;

  while (runner !== null && runner.next !== null) {
    runner = runner.next.next;
    walker = walker.next;
  }

  return walker;
};

