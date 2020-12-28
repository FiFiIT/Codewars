import math


def productFib(prod):
    p = round(math.sqrt(prod))
    if p < 10:
        p = 10

    prev_n = 0

    for i in range(1, p):
        f = fibonacci(i)
        if f * prev_n >= prod:
            return([prev_n, f, prev_n * f == prod])

        prev_n = f


def fibonacci(n):
    golden_ratio = (1 + math.sqrt(5)) / 2
    val = (golden_ratio**n - (1-golden_ratio)**n) / math.sqrt(5)
    return int(round(val))


# ========================= SOLUTION =========================
def productFib_kata(prod):
    a, b = 0, 1
    while prod > a * b:
        a, b = b, a + b
    return [a, b, prod == a * b]