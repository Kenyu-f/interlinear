---
title: "JavaScript"
lang: "javascript"
locale: "en"
localeLabel: "English"
filename: "learnjavascript.js"
codeLang: "javascript"
---

```javascript
// Single line comments start with two slashes.
/* Multiline comments start with slash-star
   and end with star-slash */

////////////////////////////////////////////////
// 1. Numbers, Strings and Operators
////////////////////////////////////////////////

// JavaScript has one number type (which is a 64-bit IEEE 754 double)
3;      // => 3
1.5;    // => 1.5

// Basic arithmetic works as you'd expect
1 + 1;    // => 2
8 - 1;    // => 7
10 * 2;   // => 20
35 / 5;   // => 7
5 % 2;    // => 1 (remainder / modulo)
2 ** 4;   // => 16 (exponentiation)

// Enforce precedence with parentheses
(1 + 3) * 2;  // => 8

// Strings are created with ', " or backticks
"This is a string.";
'This is also a string.';

// Template literals (backticks) allow embedded expressions
const name = "World";
`Hello, ${name}!`;  // => "Hello, World!"

// Booleans
true;
false;

// Negate with !
!true;   // => false

// Equality: === checks type and value, == coerces first
1 === 1;   // => true
1 === "1"; // => false
1 == "1";  // => true (avoid using ==)

// undefined and null both represent "nothing"
undefined; // a variable that has no value yet
null;      // an intentional absence of value


////////////////////////////////////////////////
// 2. Variables, Arrays and Objects
////////////////////////////////////////////////

// Use let for variables that may change, const for ones that won't
let age = 25;
const pi = 3.14159;

// console.log prints to the console
console.log("I'm JavaScript. Nice to meet you!");

// Arrays store ordered lists of values
const arr = [1, 2, 3];
arr.push(4);       // arr is now [1, 2, 3, 4]
arr[0];             // => 1
arr[arr.length - 1]; // => 4 (last element)

// Slicing with .slice(start, end)
arr.slice(1, 3);  // => [2, 3]

// Check for existence with includes
arr.includes(2);  // => true

// Objects store key-value pairs
const person = {
  name: "Ada",
  age: 36,
};

// Access properties with dot or bracket notation
person.name;      // => "Ada"
person["age"];    // => 36

// Get all keys / values
Object.keys(person);    // => ["name", "age"]
Object.values(person);  // => ["Ada", 36]

// Destructuring pulls values out of arrays/objects
const { name: personName } = person;
const [first, second] = arr;


////////////////////////////////////////////////
// 3. Control Flow and Loops
////////////////////////////////////////////////

const someVar = 5;

// A basic if statement
if (someVar > 10) {
  console.log("someVar is totally bigger than 10.");
} else if (someVar < 10) {
  console.log("someVar is smaller than 10.");
} else {
  console.log("someVar is indeed 10.");
}

// for...of loops iterate over iterable values like arrays
for (const animal of ["dog", "cat", "mouse"]) {
  console.log(`${animal} is a mammal`);
}

// Classic for loop
for (let i = 0; i < 4; i++) {
  console.log(i);  // 0, 1, 2, 3
}

// while loops run until the condition is false
let x = 0;
while (x < 4) {
  console.log(x);
  x++;
}


////////////////////////////////////////////////
// 4. Functions
////////////////////////////////////////////////

// Function declarations
function add(x, y) {
  console.log(`x is ${x} and y is ${y}`);
  return x + y;
}

add(5, 6);  // => 11

// Default parameters
function addWithDefault(x, y = 10) {
  return x + y;
}

addWithDefault(5);  // => 15

// Rest parameters collect the remaining arguments into an array
function varargs(...args) {
  return args;
}

varargs(1, 2, 3);  // => [1, 2, 3]

// Arrow functions are a concise way to write functions
const addArrow = (x, y) => x + y;
addArrow(5, 3);  // => 8


////////////////////////////////////////////////
// 5. Classes
////////////////////////////////////////////////

class Human {
  // A static property, shared by the class itself
  static species = "H. sapiens";

  // The constructor runs when a new instance is created
  constructor(name) {
    this.name = name;
  }

  // Instance methods are available on every instance
  say(msg) {
    return `${this.name}: ${msg}`;
  }
}

// Instantiate a class with new
const i = new Human("Ada");
console.log(i.say("hi"));  // prints "Ada: hi"


////////////////////////////////////////////////
// 6. Modules
////////////////////////////////////////////////

// math.js
// export function square(x) { return x * x; }
// export const PI = 3.14159;

// main.js
// import { square, PI } from "./math.js";
// square(4); // => 16

// Promises represent an eventual value from async work
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// async/await let you write asynchronous code that reads top-to-bottom
async function run() {
  await delay(100);
  console.log("Done waiting!");
}
```
