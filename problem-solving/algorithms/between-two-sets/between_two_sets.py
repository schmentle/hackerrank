def getTotalX(a, b):
    def calculate_gcd(x, y):
        while y:
            x, y = y, x % y
        return x

    def calculate_lcm(x, y):
        return x * y // calculate_gcd(x, y)

    lcm_a = a[0]
    for i in a[1:]:
        lcm_a = calculate_lcm(lcm_a, i)

    gcd_b = b[0]
    for i in b[1:]:
        gcd_b = calculate_gcd(gcd_b, i)

    count = 0
    for i in range(lcm_a, gcd_b + 1, lcm_a):
        if gcd_b % i == 0:
            count += 1

    return count