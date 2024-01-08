function getTotalX(a, b) {
    function calculateGcd(x, y) {
        while (y) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    function calculateLcm(x, y) {
        return x * y / calculateGcd(x, y);
    }

    let lcmA = a[0];
    for (let i = 1; i < a.length; i++) {
        lcmA = calculateLcm(lcmA, a[i]);
    }

    let gcdB = b[0];
    for (let i = 1; i < b.length; i++) {
        gcdB = calculateGcd(gcdB, b[i]);
    }

    let count = 0;
    for (let i = lcmA; i <= gcdB; i += lcmA) {
        if (gcdB % i === 0) {
            count++;
        }
    }

    return count;
}