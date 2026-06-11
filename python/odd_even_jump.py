from typing import List


def oddEvenJumps(arr: List[int]) -> int:
    n = len(arr)
    indexes_sorted = sorted(enumerate(arr), key=lambda x: x[1])

    stack = []
    next_odd_jump = [None] * n

    for item in indexes_sorted:
        current_index = item[0]
        while len(stack) > 0 and stack[-1] < current_index:
            next_odd_jump[stack.pop()] = current_index
        stack.append(current_index)

    stack = []
    indexes_sorted = sorted(enumerate(arr), key=lambda x: x[1], reverse=True)
    next_even_jump = [None] * n

    for item in indexes_sorted:
        current_index = item[0]
        while len(stack) > 0 and stack[-1] < current_index:
            next_even_jump[stack.pop()] = current_index
        stack.append(current_index)

    odd_reachable = [False] * n
    even_reachable = [False] * n

    odd_reachable[-1] = True
    even_reachable[-1] = True

    for i in range(n - 2, -1, -1):
        odd_reachable[i] = even_reachable[next_odd_jump[i]] if next_odd_jump[i] is not None else False
        even_reachable[i] = odd_reachable[next_even_jump[i]] if next_even_jump[i] is not None else False

    return sum(odd_reachable)
