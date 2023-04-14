# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @raylin98/lotide`

**Require it:**

`const _ = require('@raylin98/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: function that asserts whether two arrays are equal
* `assertEqual`: function that asserts whether two values are equal
* `assertObjectsEqual`: function that asserts if two objects are equal
* `countLetters`: function that returns the count of each letter of a string
* `countOnly`: function that returns the count of each letter in a string but for specified letters
* `eqArrays`: function that checks if two arrays are equal
* `eqObjects`: function that checks if two objects are equal
* `findKey`: function that returns the key of an object if the value satisfies the condition of the callback function
* `findKeyByValue`: function that finds a key by a given value that has been passed
* `flatten`: function that flattens arrays within arrays to form a single array
* `head`: function that returns the first element from an array
* `letterPosition`: function that returns the indices of where each character is found within the string
* `map`: function that creates a new array based on the results of the callback function
* `middle`: function that returns the middle element of an array
* `tail`: function that returns every element after the first element of an array
* `takeUntil`: function that returns elements of an array up to a specified point based on callback
* `without`: function that removes elements of an array based on user input
