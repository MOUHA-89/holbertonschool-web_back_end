#!/usr/bin/env python3
"""
this module contains an asynchronous generator function
"""
from async_comprehension import async_comprehension
import time
import asyncio


async def measure_runtime() -> float:
    """
    Measures the runtime of async_comprehension.
    """
    start_time = time.time()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    end_time = time.time()
    return end_time - start_time
