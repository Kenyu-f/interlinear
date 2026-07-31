---
title: "Python"
lang: "python"
locale: "en"
localeLabel: "English"
filename: "learnpython.py"
codeLang: "python"
---

```python
# Single line comments start with a hash.
""" Multiline strings can be written
    using three "s, and are often used
    as documentation.
"""

####################################################
## 1. Primitive Datatypes and Operators
####################################################

# You have numbers
3  # => 3

# Math is what you would expect
1 + 1   # => 2
8 - 1   # => 7
10 * 2  # => 20
35 / 5  # => 7.0 (division always returns a float)

# Integer division rounds towards negative infinity
5 // 3       # => 1
5.0 // 3.0   # => 1.0
-5 // 3      # => -2

# The result of division is always a float
10 % 3  # => 1 (modulo)

# Exponentiation (x**y, x to the yth power)
2 ** 4  # => 16

# Enforce precedence with parentheses
(1 + 3) * 2  # => 8

# Boolean values are primitives (note: capitalized)
True
False

# Negate with not
not True   # => False
not False  # => True

# Boolean operators
# Note "and" and "or" are case-sensitive
True and False  # => False
False or True   # => True

# Equality is ==, inequality is !=
1 == 1  # => True
2 != 1  # => True

# You can chain comparisons!
1 < 2 < 3  # => True

# Strings are created with " or '
"This is a string."
'This is also a string.'

# Strings can be added
"Hello " + "world!"  # => "Hello world!"

# f-strings let you embed expressions
name = "World"
f"Hello, {name}!"  # => "Hello, World!"

# None is an object
None  # => None


####################################################
## 2. Variables and Collections
####################################################

# Python has a print function
print("I'm Python. Nice to meet you!")

# There is no declaration, only assignment.
some_var = 5
some_var  # => 5

# Lists store sequences
li = []
other_li = [4, 5, 6]

# Add stuff to the end of a list with append
li.append(1)     # li is now [1]
li.append(2)     # li is now [1, 2]

# Access a list like you would any array
li[0]   # => 1
li[-1]  # => 2 (last element)

# Slicing works like [start:end:step]
li = [1, 2, 3, 4, 5]
li[1:3]   # => [2, 3]
li[2:]    # => [3, 4, 5]
li[:3]    # => [1, 2, 3]
li[::2]   # => [1, 3, 5]

# Check for existence with "in"
1 in li  # => True

# Tuples are like lists but immutable
tup = (1, 2, 3)
tup[0]      # => 1
# tup[0] = 3  # Raises a TypeError

# Dictionaries store mappings
empty_dict = {}
filled_dict = {"one": 1, "two": 2, "three": 3}

# Look up values with []
filled_dict["one"]  # => 1

# Get all keys / values
list(filled_dict.keys())    # => ["one", "two", "three"]
list(filled_dict.values())  # => [1, 2, 3]

# Sets store... sets
empty_set = set()
some_set = {1, 1, 2, 2, 3, 4}  # => {1, 2, 3, 4}


####################################################
## 3. Control Flow and Iterables
####################################################

some_var = 5

# Here is an if statement.
if some_var > 10:
    print("some_var is totally bigger than 10.")
elif some_var < 10:
    print("some_var is smaller than 10.")
else:
    print("some_var is indeed 10.")


"""
For loops iterate over lists.
Prints:
    dog is a mammal
    cat is a mammal
    mouse is a mammal
"""
for animal in ["dog", "cat", "mouse"]:
    print(f"{animal} is a mammal")

# range(number) returns an iterable of numbers 0 to the given number
for i in range(4):
    print(i)  # 0, 1, 2, 3

# While loops go until a condition is no longer met
x = 0
while x < 4:
    print(x)
    x += 1  # Shorthand for x = x + 1


####################################################
## 4. Functions
####################################################

# Use "def" to create new functions
def add(x, y):
    print(f"x is {x} and y is {y}")
    return x + y  # Return values with a return statement

add(5, 6)  # => 11

# Default arguments
def add_with_default(x, y=10):
    return x + y

add_with_default(5)  # => 15

# You can define functions that take a variable number of args
def varargs(*args):
    return args

varargs(1, 2, 3)  # => (1, 2, 3)

# Lambdas are inline, anonymous functions
add_lambda = lambda x, y: x + y
add_lambda(5, 3)  # => 8


####################################################
## 5. Classes
####################################################

class Human:
    # A class attribute, shared by all instances of this class
    species = "H. sapiens"

    # __init__ is a reserved method (the constructor)
    def __init__(self, name):
        self.name = name

    # An instance method takes self as the first argument
    def say(self, msg):
        return f"{self.name}: {msg}"


# Instantiate a class
i = Human(name="Ian")
print(i.say("hi"))  # prints "Ian: hi"


####################################################
## 6. Modules
####################################################

import math
print(math.sqrt(16))  # => 4.0

# You can shorten module names
import math as m
m.sqrt(16) == math.sqrt(16)  # => True

# You can get specific functions from a module
from math import ceil, floor
print(ceil(3.7))   # => 4
print(floor(3.7))  # => 3
```
