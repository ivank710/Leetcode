// https://medium.com/outco/how-to-merge-k-sorted-arrays-c35d87aa298e

const getChildIndices = idx => {
  return [(2 * idx) + 1, (2 * idx) + 2];
};

const findMinChildIdx = (minHeap, leftIdx, rightIdx) => {
  let minChildIdx;
  let leftChild = minHeap[leftIdx];
  let rightChild = minHeap[rightIdx];

  if (leftChild !== undefined) {
    if (rightChild === undefined) {
      minChildIdx = leftIdx;
    } else {
      minChildIdx = rightChild.value < leftChild.value ? rightIdx : leftIdx;
    }
  }

  return minChildIdx;
};

const bubbleDown = (minHeap, idx) => {
  let currIdx = idx;
  let curr = minHeap[currIdx];
  let [leftIdx, rightIdx] = getChildIndices(currIdx);
  let minChildIdx = findMinChildIdx(minHeap, leftIdx, rightIdx);
  let minChild = minChildIdx === undefined ? undefined : minHeap[minChildIdx];

  while (minChild !== undefined && curr.value > minChild.value) {
    [minHeap[currIdx], minHeap[minChildIdx]] = [minHeap[minChildIdx], minHeap[currIdx]];

    currIdx = minChildIdx;

    [leftIdx, rightIdx] = getChildIndices(currIdx);

    minChildIdx = findMinChildIdx(minHeap, leftIdx, rightIdx);

    minChild = minChildIdx === undefined ? undefined : minHeap[minChildIdx];
  }
};

const heapify = minHeap => {
  for (let i = minHeap.length - 1; i >= 0; i--) {
    bubbleDown(minHeap, i);
  }
};


const mergeKSortedArr = arrays => {
  let res = [];
  let minHeap = [];

  arrays.forEach((arr, idx) => {
    minHeap.push({
      value: arr[0],
      arrIdx: idx,
      eleIdx: 0
    });
  });

  heapify(minHeap);

  while(minHeap[0].value !== Infinity) {
    let top = minHeap[0];
    res.push(top.value);
    top.eleIdx += 1;

    if (top.eleIdx >= arrays[top.arrIdx].length) {
      top.value = Infinity;
    } else {
      top.value = arrays[top.arrIdx][top.eleIdx];
    }

    bubbleDown(minHeap, 0);
  }

  return res;
};

let arrs = [
  [5, 6, 8, 16],
  [3, 7, 12, 13],
  [1, 10, 11, 15],
  [2, 4, 9, 14],
];

console.log(mergeKSortedArr(arrs));