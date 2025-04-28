#!/usr/bin/env python3
from async_comprehension import async_comprehension
import time


async def measure_runtime():
    """
    Measures the runtime of async_comprehension.
    """
    start_time = time.time()
    await async_comprehension()
    end_time = time.time()
    return end_time - start_time
