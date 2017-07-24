function attack(arr) {
    let matrix = [];
    for(let i = 0;i < arr.length; i ++){
        matrix.push(arr[i].split(' ').map(Number));
    }

    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let row = 0; row < matrix.length; row ++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                primaryDiagonal += matrix[row][col];
            }
            if (col === matrix[row].length - 1 - row) {
                secondaryDiagonal += matrix[row][col];
            }
        }
    }

    if(primaryDiagonal === secondaryDiagonal){
        for(let row = 0;row < matrix.length; row ++){
            for(let col = 0; col < matrix[row].length; col ++){
                if (row !== col && col !== matrix.length - 1 - row){
                    matrix[row][col] = primaryDiagonal;
                }
            }
        }
    }
    let result = matrix.map(row => row.join(' ')).join('\n');
    console.log(result);
}
