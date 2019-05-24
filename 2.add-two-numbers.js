/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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

//iterate thru list and unshift to numArr
//join numArr and convert to number
// const makeNum = list => {
//   let num = [];

//   let curr = list;
//   while (curr) {
//     num.unshift(curr.val);
//     curr = curr.next;
//   }

//   num = num.join("");
//   return num * 1;
// }

// const makeNode = num => {
//   num += "";
//   let res;

//   for (let i = num.length - 1; i >= 0; i--) {
//     let curr = num[i] * 1;
//     console.log(curr)

//     if (i === num.length - 1) {
//       res = new ListNode(curr);
//     } else {
//       res.next = new ListNode(curr);
//     }

//   }

//   return res;
// }

// var addTwoNumbers = function(l1, l2) {
//   let num1 = makeNum(l1);
//   let num2 = makeNum(l2);
//   let sum = num1 + num2;
//   let res = makeNode(sum);

//   return res;
// };

//get nums from List 
//add em
//convert to listNode 

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let head1 = l1;
  let head2 = l2;
  let curr = dummy;
  let carry = 0;

  while (head1 || head2) {
    let head1Val = head1 ? head1.val : 0;
    let head2Val = head2 ? head2.val : 0;
    let sum = carry + head1Val + head2Val;

    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    if (head1) head1 = head1.next;
    if (head2) head2 = head2.next;
  }

  if (carry > 0) curr.next = new ListNode(carry);

  return dummy.next;
};

