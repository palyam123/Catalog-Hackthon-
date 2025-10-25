def print_pattern_one():
    """
    Prints the following pattern:
    0 1 2 3 4 5 6 7 8 9
    0 1 2 3 4 5 6 7 8 9
    ... (10 times)
    """
    lines = []
    for _ in range(10):
        lines.append(" ".join(map(str, range(10))))
    return "\n".join(lines)

def print_pattern_two():
    """
    Prints the following pattern:
    0
    0 1
    0 1 2
    ...
    0 1 2 3 4 5 6 7 8 9
    """
    lines = []
    for i in range(10):
        lines.append(" ".join(map(str, range(i + 1))))
    return "\n".join(lines)

def print_pattern_three():
    """
    Prints the following pattern:
    0 1 2 3 4 5 6 7 8 9
      0 1 2 3 4 5 6 7 8
        ...
          0
    """
    lines = []
    for i in range(10):
        spaces = "  " * i
        numbers = " ".join(map(str, range(10 - i)))
        lines.append(spaces + numbers)
    return "\n".join(lines)
