/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getLength = (node) => {
  let curr = node;
  let count = 0;

  while(curr) {
    count += 1;
    curr = curr.next;
  }

  return count;
}

var getIntersectionNode = function(headA, headB) {
  let len1 = getLength(headA);   
  let len2 = getLength(headB);   

  let long;
  let short;
  let diff;

  if (len1 > len2) {
    diff = len1 - len2;
    long = headA;
    short = headB;
  } else {
    diff = len2 - len1;
    long = headB;
    short = headA;
  }

  for (let i = 0; i < diff; i++) {
    long = long.next;
  }

  while (long && short) {
    if (long === short) return long;

    long = long.next;
    short = short.next;
  }
};

