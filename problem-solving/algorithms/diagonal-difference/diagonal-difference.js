function diagonalDifference(arr) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        primaryDiagonal += arr[i][i];
        secondaryDiagonal += arr[i][length - i - 1];
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);
}