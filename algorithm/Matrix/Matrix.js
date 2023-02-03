var matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
var diagonalDifference = function (matrix) {
    var firstDiagonal = 0;
    var secondDiagonal = 0;
    for (var i = 0; i < matrix.length; i++) {
        firstDiagonal += matrix[i][i];
        secondDiagonal += matrix[i][matrix.length - i - 1];
    }
    return Math.abs(firstDiagonal - secondDiagonal);
};
var result = diagonalDifference(matrix);
console.log("Hasil : " + result);
