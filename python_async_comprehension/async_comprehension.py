#!/usr/bin/env python3
"""
Python programm
"""
from async_generator import async_generator


async def async_comprehension():
    """
    Collects 10 random numbers using an async comprehension.
    """
    return [i async for i in async_generator()]
