def diagonalDifference(arr):
    primary_diagonal = sum(arr[i][i] for i in range(len(arr)))

    secondary_diagonal = sum(arr[i][len(arr) - i - 1] for i in range(len(arr)))

    return abs(primary_diagonal - secondary_diagonal)