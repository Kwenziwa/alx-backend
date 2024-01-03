#!/usr/bin/python3
""" BasicCache Module

    Defines the BasicCache class, which is a caching system
    that inherits from BaseCaching and uses a dictionary for caching.
    This caching system has no limit on the number of items it can store.
"""

from base_caching import BaseCaching

class BasicCache(BaseCaching):
    """ Class that inherits from BaseCaching and is a caching system
        This caching system doesn’t have a limit """

    def put(self, key, item):
        """ Assign to the dictionary """
        if key and item:
            self.cache_data[key] = item

    def get(self, key):
        """ Return the value linked to the provided key """
        if key is None or self.cache_data.get(key) is None:
            return None
        return self.cache_data.get(key)
