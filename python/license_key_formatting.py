def licenseKeyFormatting(s: str, k: int) -> str:
    old_dashes_removed = s.replace("-", "")
    n = len(old_dashes_removed)
    first_group_size = (n % k) if ((n % k) != 0) else k

    first_group = old_dashes_removed[0:first_group_size].upper()
    remaining_string = old_dashes_removed[first_group_size:]
    other_groups = []

    current_group = ""

    while len(remaining_string) != 0:
        current_letter = remaining_string[0:1]
        remaining_string = remaining_string[1:]
        current_group += current_letter.upper()

        if len(current_group) >= k:
            other_groups.append(current_group)
            current_group = ""

    result = "-".join([first_group, *other_groups])

    return result
