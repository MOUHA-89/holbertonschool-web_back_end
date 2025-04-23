#!/usr/bin/env python3
def floor(n: float) -> int:
    """
    Return the floor of a number.
    """
    if n >= 0:
        return int(n)
    else:
        return int(n) - 1
