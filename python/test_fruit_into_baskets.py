import pytest
from fruit_into_baskets import totalFruit


@pytest.mark.parametrize("fruits, expected", [
    ([1, 2, 1],       3),
    ([0, 1, 2, 2],    3),
    ([1, 2, 3, 2, 2], 4),
])
def test_total_fruit(fruits, expected):
    assert totalFruit(fruits) == expected
