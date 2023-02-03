const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];

const diagonalDifference = (matrix: number[][]): number => {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonal += matrix[i][i];
        secondDiagonal += matrix[i][matrix.length - i - 1];
    }

    return Math.abs(firstDiagonal - secondDiagonal);
};

const result = diagonalDifference(matrix);
console.log("Hasil : " + result);