def plusMinus(arr):
    positive, negative, zero = 0, 0, 0

    for num in arr:
        if num > 0:
            positive += 1
        elif num < 0:
            negative += 1
        else:
            zero += 1

    total = len(arr)
    print(f"{positive / total: .6f}")
    print(f"{negative / total: .6f}")
    print(f"{zero / total: .6f}")