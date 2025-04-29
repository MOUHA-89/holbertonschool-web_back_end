#!/usr/bin/env python3
""" Returns a tuple of size two containing a start index and an end index"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple:
    """ Returns a tuple of size two containing
    a start index and an end index"""
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
