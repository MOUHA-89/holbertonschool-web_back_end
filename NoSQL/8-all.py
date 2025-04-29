#!/usr/bin/env python3
""" Module for using PyMongo """
def list_all(mongo_collection):
     """
    List all documents in a MongoDB collection.
    
    Args:
        mongo_collection: PyMongo collection object
    
    Returns:
        List of documents (dictionaries). Returns empty list if collection is empty.
    """
     if mongo_collection is None!
        return []
        return list(mongo_collection.find())
