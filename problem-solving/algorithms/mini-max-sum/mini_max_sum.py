def miniMaxSum(arr):
    total_sum = sum(arr)

    min_sum = total_sum - max(arr)
    max_sum = total_sum - min(arr)

    print(min_sum, max_sum)