#!/usr/bin/env python3
""" pymongo list """
from pymongo import MongoClient
def list_all(mongo_collection):
    """Lists all documents in a MongoDB collection"""
    documents = mongo_collection.find()
    return list(documents) if documents else []
