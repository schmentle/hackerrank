def countApplesAndOranges(s, t, a, b, apples, oranges):
    apple_count = sum([1 for apple in apples if a + apple >= s and a + apple <= t])
    orange_count = sum([1 for orange in oranges if b + orange >= s and b + orange <= t])

    print(apple_count)
    print(orange_count)