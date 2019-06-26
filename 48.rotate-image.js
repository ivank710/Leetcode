/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const transpose = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  return matrix;
};

var rotate = function(matrix) {
  let transposed = transpose(matrix);

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = matrix[i].reverse();
  }

  return transposed;
};

