#!/usr/bin/env python3
"""
Python programm
"""
from typing import List
"""
Define and annotate a function sum!_list that takes a list
"""


def sum_mixed_list(mxd_lst: List[int, float]) -> float:
    """
    Returns the sum of a mixed list of integers and floats.
    """
    return sum(mxd_lst)
