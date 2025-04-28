#!/usr/bin/env python3
"""
this module contains an asynchronous generator function
"""
from async_comprehension import async_comprehension
import time
import asyncio


async def measure_runtime():
    """
    Measures the runtime of async_comprehension.
    """
    start_time = time.time()
    await async_comprehension()
    end_time = time.time()
    return end_time - start_time
