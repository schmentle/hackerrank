function breakingRecords(scores) {
    let maxBreaks = 0, minBreaks = 0;
    let maxRecord = scores[0], minRecord = scores[0];

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxRecord) {
            maxBreaks++;
            maxRecord = scores[i];
        }

        if (scores[i] < minRecord) {
            minBreaks++;
            minRecord = scores[i];
        }
    }

    return [maxBreaks, minBreaks];
}
