#!/usr/bin/python3

# Python function from bytecode
def magic_calculation(a, b, c):
    if (a < b):
        return c
    elif (c > b):
        return a + b
    return a*b - c
from dis import dis
dis(magic_calculation)
