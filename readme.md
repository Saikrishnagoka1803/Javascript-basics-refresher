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




