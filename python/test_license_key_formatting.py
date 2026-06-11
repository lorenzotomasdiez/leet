import pytest
from license_key_formatting import licenseKeyFormatting


@pytest.mark.parametrize("s, k, expected", [
    ("5F3Z-2e-9-w", 4, "5F3Z-2E9W"),
    ("2-5g-3-J",    2, "2-5G-3J"),
    ("--a-a-a-a--", 2, "AA-AA"),
    ("a",           1, "A"),
])
def test_license_key_formatting(s, k, expected):
    assert licenseKeyFormatting(s, k) == expected
