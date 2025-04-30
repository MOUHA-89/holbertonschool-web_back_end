#!/usr/bin/env python3
""" pymongo list """
from pymongo import MongoClient
from typing import List
def list_all(mongo_collection):
    """Lists all documents in a MongoDB collection"""
    documents = List(mongo_collection.find())
    return documents