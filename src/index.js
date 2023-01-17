
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined) {
    return []
  }
  let newArr = []
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      matrix[i].reverse()
    }
    for (let k = 0; k < matrix[i].length; k++) {
      newArr.push(matrix[i][k])
    }
  }
  return newArr;
}