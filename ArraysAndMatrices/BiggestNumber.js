function biggestNumber(matrix) {
    let biggest = Number.NEGATIVE_INFINITY;

    matrix.forEach(
        r => r.forEach(
            c => biggest = Math.max(biggest,c)));
    console.log(biggest)
}

biggestNumber([[20, 50, 10],
    [8, 33, 145]]
);
