/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];

    for (let j = 0; j < row.length; j++) {
      if (row[j] === "1") {
        count += 1;
        checkSize(i, j, grid);
      }
    }
  }
  
  return count;
};

const checkSize = (row, col, grid) => {
  if ((row < 0 || row >= grid.length) || (col < 0 || col >= grid[0].length)) {
    return;
  }

  if (grid[row][col] === "0") return;

  grid[row][col] = "0";

  checkSize(row + 1, col, grid);
  checkSize(row - 1, col, grid);
  checkSize(row, col + 1, grid);
  checkSize(row, col - 1, grid);
};  

