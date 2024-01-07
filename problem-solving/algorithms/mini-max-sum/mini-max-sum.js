function miniMaxSum(arr) {
    const totalSum = arr.reduce((a, b) => a + b, 0);

    const minSum = totalSum - Math.max(...arr);
    const maxSum = totalSum - Math.min(...arr);

    console.log(minSum, maxSum);
}