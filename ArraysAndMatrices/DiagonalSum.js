function diagonalSum(matrix) {
    let mainSum = 0;
    let secondarSum = 0;

    for(let row = 0;row < matrix.length;row ++){
        mainSum += matrix[row][row];
        secondarSum += matrix[row][matrix.length-row-1];
    }
    console.log(mainSum + ' ' + secondarSum);
}

diagonalSum([[20, 40],
    [10, 60]]
);
