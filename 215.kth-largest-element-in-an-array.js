/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 



class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return 2 * idx;
  }

  getRightChild(idx) {
    return 2 * idx + 1;
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftUp(idx) {
    if (idx === 1) return;

    let parentIdx = this.getParent(idx);
    if (this.array[parentIdx] < this.array[idx]) {
      [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
    }

    this.siftUp(parentIdx);
  }

  deleteMax() {
    if (this.array.length === 1) return null;
    if (this.array.length === 2) return this.array.pop();

    let oldMax = this.array[1];
    this.array[1] = this.array.pop();

    this.siftDown(1);

    return oldMax;
  }

  siftDown(idx) {
    let arr = this.array;
    let leftChild = this.getLeftChild(idx);
    let rightChild = this.getRightChild(idx);
    let leftVal = this.array[leftChild];
    let rightVal = this.array[rightChild];

    if (!leftVal) leftVal = -Infinity;
    if (!rightVal) rightVal = -Infinity;

    if (this.array[idx] > leftVal && this.array[idx] > rightVal) return;

    let swapIdx;
    if (rightVal > leftVal) {
      swapIdx = rightChild;
    } else {
      swapIdx = leftChild;
    }

    [arr[idx], arr[swapIdx]] = [arr[swapIdx], arr[idx]];

    this.siftDown(swapIdx);
  }
}

const findKthLargest = (nums, k) => {
  let sorted = nums.sort((a, b) => a - b);
  return sorted[nums.length - k];
}

const findKthLargest = (nums, k) => { 
  let maxHeap = new MaxHeap();
  nums.forEach(num => maxHeap.insert(num));
  for (let i = 1; i < k; i++) maxHeap.deleteMax();
  
  return maxHeap.deleteMax();
}

// var findKthLargest = function(nums, k) {
// };

