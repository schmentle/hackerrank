function sockMerchant(n, ar) {
    const sockCounts = {};

    for (const sock of ar) {
        if (sockCounts.hasOwnProperty(sock)) {
            sockCounts[sock] += 1;
        } else {
            sockCounts[sock] = 1;
        }
    }

    let pairs = 0;
    for (const count of Object.values(sockCounts)) {
        pairs += Math.floor(count / 2);
    }

    return pairs;
}
