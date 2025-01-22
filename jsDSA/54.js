var spiralOrder = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let result = [];

  let rowStart = 0,
    rowEnd = rows - 1;
  let colStart = 0,
    colEnd = cols - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let col = colStart; col <= colEnd; col++) {
      result.push(matrix[rowStart][col]);
    }
    rowStart++;

    for (let row = rowStart; row <= rowEnd; row++) {
      result.push(matrix[row][colEnd]);
    }
    colEnd--;
    if (rowStart <= rowEnd) {
      for (let col = colEnd; col >= colStart; col--) {
        result.push(matrix[rowEnd][col]);
      }
      rowEnd--;
    }

    if (colStart <= colEnd) {
      for (let row = rowEnd; row >= rowStart; row--) {
        result.push(matrix[row][colStart]);
      }
      colStart++;
    }
  }
};

var spiralJS = (matrix) => {
  elements = [];
  while (matrix.length > 0) {
    elements.push(...matrix.shift());
    elements.push(
      ...matrix.reduce((arr, row) => {
        arr.push(row.pop());
        return arr;
      }, [])
    );
    elements.push(...matrix.pop().reverse());
    elements.push(
      ...matrix.reduce((arr, row) => {
        arr.unshift(row.shift());
        return arr;
      }, [])
    );
  }

  return elements;
};

console.log(
  spiralJS([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
