def sockMerchant(n, ar):
    sock_counts = {}

    for sock in ar:
        if sock in sock_counts:
            sock_counts[sock] += 1
        else:
            sock_counts[sock] = 1

    pairs = 0
    for count in sock_counts.values():
        pairs += count // 2

    return pairs