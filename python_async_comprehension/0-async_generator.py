#!/usr/bin/env python3
"""
this module contains an asynchronous generator function
"""
import random
import asyncio


async def async_generator():
    """
    Yields a random number between 0 and 10 every second.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.randint(0, 10)
