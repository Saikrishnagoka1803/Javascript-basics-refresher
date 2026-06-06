// understanding JS basics and interview PREP awarness

/* key topics to know in JS
1) Javascript is a synchronous single threaded language. why ?
2) Execution context:
    JS engines :
        v8 in chrome
        spyder monkey in firefox etc. --> how code gets executed inside JS engine
3) components of execution context --> variable env and execution thread
4) Call stack
    stack where JavaScript stores function execution contexts. stores the order of executions, pops in and out ECs when function is called and its ececution is finished
5) Hoisting in JS:
    Mechanism of lifting the scope of variables and functions in js.
    hoisting phenomena in js allows you to access the variables and functions before even initialising the
    clarify :
    not defined, 
    undefined
    reference errors

var is global scope, let and const are block scope
var inside function is functional scope

6) scope and scope chain
7) Temporal dead zone
8) Block scope
9) shadowing
10) closures
11) First class functions
12) Higher order functions
13) Arrow functions
14) Anonymous functions
15) SetTimeout
16) Scope variations in all of these scenarios 
17) Callbacks
18) Promises
19) Async Await
20) Event loop 
21) JS engine
22) call apply bind
23) this keyword
24) Js practice problems/ hacker rank
25) Revision

wheneve anyjs codeis created, jsenginegives
gives un withGEC,window objectandthiskeyword
snbmnbnmbxbchgdhj 

scopein js in directly propotioanal tolexicalenvgff uwhu beg     defined fev
*/

ananymous functions:
FUNCTIONS WITH no name are called anonymous functions
anonymous function looks like a function statement, and they are used in a place where functions are used as values.
for suppose in function expression, we assign an anonymous function to a variable, together is called function expression.

Pure functions: A pure function in JavaScript is a function that:
Gives the same output for same input
Has no side effects

callback functions

higher order functions 

first class functions: 
function statement:  function a(){
    console.log(a)
}
expression : var b = function (){
    console.log(b)
}
function statement and expression major difference is hoisting.
function statement is also called function declaration.

Named function expression
var k = function xyz(){
    console.log(x)
}

First class functions:
the ability of functions to be used as values and assigned it to variables, passed as arguments, or retured from another functions, and this ability is called first class functions.


Arrow functions: cane up as ES6 with let and const

Blocking the mainthread in JS
means not doing time taking process directlt in call stack instaead using async operations for suppose, set timeout
webAPIs, fetch operations, using callbacks, promises, async await.

https://api.github.com/users/

callbacks issues:
1) call back hell
2) inversion of control

Promise:
promise is an object which represents an eventual completion of an async operation. It is immutable. It is a container in the form of an object predicting future value.
Always returns an object
promise chaining practice.
remember to return promise.
.then, .catch

Async Await:
async func always returns a promise, if you dont return a promise and you intentionally return a value, then it wraps into a promise and returns.
async function getData(){
    const data = await fetch('url')
}

Await is a keyword that only be used inside an async function.


callback hell   --> have a theory
addToCart, updatePaymentInfo, completeTransaction, TransactionStatus 

promise chaining
async await all done.

useStrict explanation:
Currying and use cases

closures
call stack
execution context
event loop
promises
async/await
prototype chain
this
currying
HOFs
debounce/throttle
map/filter/reduce
pure functions
memory management
shallow vs deep copy
Browser powers 

This phase is VERY important for frontend interviews.

Problems Practice:

Best platforms for you
For JavaScript-specific practice
Frontend Mentor
Best for real frontend logic.
JavaScript.info
Probably the best JS theory site.
LeetCode
Good for problem patterns.

Do:
Easy
Medium
Avoid getting stuck on Hard initially.
BigFrontend.dev
Excellent for frontend interview coding.
Especially:
debounce
throttle
promise
event emitter

Phase 2 — Build problem-solving patterns

This is where coding skill becomes strong.

Do NOT directly jump to hard LeetCode.

Instead master patterns.

Most important patterns
Arrays & Strings

Practice:

two sum
reverse string
move zeroes
max subarray
merge intervals

Learn:

two pointers
sliding window
prefix sum
Objects / HashMaps

Practice:

frequency counter
duplicates
grouping
anagrams
Recursion

VERY important for JS thinking.

Practice:

factorial
fibonacci
flatten array
nested object traversal
Stack / Queue

Practice:

balanced parentheses
monotonic stack
browser history
Async JS problems

Since you're frontend-focused, this matters a LOT.

Implement manually:

Promise.all
debounce
throttle
polyfills
event emitter
retry APIs
async queue

These are gold for React/frontend interviews.

Phase 3 — Build things manually

This is where you become dangerous in JavaScript.

Implement these from scratch:

Beginner
custom map
custom filter
custom reduce
Intermediate
debounce
throttle
currying
memoization
deep clone
Advanced
Promise polyfills
event emitter
LRU cache
virtual DOM concept
mini React hooks understanding
For YOU specifically

Since your goal is:

React/Next.js/frontend roles
building your food app
stronger frontend interviews

Focus MORE on:

Practical JS + Async JS + Browser behavior

