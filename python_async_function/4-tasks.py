#!/usr/bin/env python3
"""
Python programm
"""
import asyncio
from typing import List
from basic_async_syntax import task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List:
    """
    Function that spawns wait_random n times with the specified max_delay
    """
    delays = []
    for _ in range(max_delay):
        delay = await task_wait_random(max_delay)
        delays.append(delay)
    return delays
