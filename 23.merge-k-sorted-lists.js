/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let node;
  let head;

  if (l1.val < l2.val) {
    head = l1;
    node = head;
    l1 = l1.next;
  } else {
    head = l2;
    node = head;
    l2 = l2.next;
  }

  while (l1 && l2) {
    if (l1.val < l2.val) {
      node.next = l1;
      node = node.next;
      l1 = l1.next;
    } else {
      node.next = l2;
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

var mergeKLists = function(lists) {
  if (lists.length === 0) return null;

  let resList = mergeTwoLists(lists.shift(), lists.shift());

  while (lists.length) {
    resList = mergeTwoLists(resList, lists.shift());
  }

  return resList;
};

