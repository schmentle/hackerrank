function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    arr.forEach(num => {
        if (num > 0) {
            positive += 1;
        } else if (num < 0) {
            negative += 1;
        } else {
            zero += 1;
        }
    });

    const total = arr.length;
    console.log((positive / total).toFixed(6));
    console.log((negative / total).toFixed(6));
    console.log((zero / total).toFixed(6));
}
