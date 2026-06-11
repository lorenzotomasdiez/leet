import pytest
from odd_even_jump import oddEvenJumps


@pytest.mark.parametrize("arr, expected", [
    ([10, 13, 12, 14, 15], 2),
    ([2, 3, 1, 1, 4],      3),
    ([5, 1, 3, 4, 2],      3),
    ([1],                  1),
])
def test_odd_even_jumps(arr, expected):
    assert oddEvenJumps(arr) == expected
