#!/usr/bin/env python3
"""
Python programm
"""
from typing import Tuple


def to_kv(k: str, v: float) -> tuple:
    """
    Returns a tuple with the first element as the string k and
    the second element as the square of v.
    """
    return (k, v ^ 2)
