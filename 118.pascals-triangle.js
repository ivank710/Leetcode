/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = [];

  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      res.push([1]);
      continue;
    }

    let newRow = [1];
    let prevRow = res[res.length - 1];

    for (let j = 0; j < prevRow.length - 1; j++) {
      newRow.push(prevRow[j] + prevRow[j + 1]);
    }

    newRow.push(1);
    res.push(newRow);
  }

  return res;
};

