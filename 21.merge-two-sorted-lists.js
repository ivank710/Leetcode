/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let node;
  let head;

  if (l1.val < l2.val) {
    head = new ListNode(l1.val);
    node = head;
    l1 = l1.next;
  } else {
    head = new ListNode(l2.val);
    node = head;
    l2 = l2.next;
  }

  while (l1 && l2) {
    if (l1.val < l2.val) {
      node.next = new ListNode(l1.val);
      node = node.next;
      l1 = l1.next;
    } else {
      node.next = new ListNode(l2.val);
      node = node.next;
      l2 = l2.next;
    }
  }

  if (!l1) {
    node.next = l2;
  } else {
    node.next = l1;
  }

  return head;  
};

