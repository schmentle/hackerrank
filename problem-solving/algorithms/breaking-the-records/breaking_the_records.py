def breakingRecords(scores):
    max_breaks, min_breaks = 0, 0

    max_record, min_record = scores[0], scores[0]

    for score in scores[1:]:
        if score > max_record:
            max_breaks += 1
            max_record = score

        if score < min_record:
            min_breaks += 1
            min_record = score

    return [max_breaks, min_breaks]