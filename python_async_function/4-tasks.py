#!/usr/bin/env python3
"""
Python programm
"""
import asyncio
from typing import List
from basic_async_syntax import task_wait_random


async def task_wait_random(max_delay: int) -> float:
    """
    Function that takes an integer argument max_delay
    """
    await asyncio.sleep(max_delay)
    return max_delay


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Function that spawns task_wait_random n times with the specified max_delay
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    results = await asyncio.gather(*tasks)
    return sorted(results)
