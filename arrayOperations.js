/*
Recommended 1-week plan

Instead of ALL problems:

Master 1 pattern group at a time.

Day 1 — Arrays + Traversal

Do:

max/min
reverse
move zeroes
second largest

Goal:

Day 2 — Objects / Frequency Counter

Do:

duplicates
remove duplicates
frequency map
anagrams
first non-repeating char

VERY important day.

Day 3 — Two Pointers

Do:

palindrome
pair sum
merge sorted arrays
remove duplicates sorted array

Day 4 — Sliding Window

Do:

max sum subarray
longest substring
fixed window problems
Day 5 — map/filter/reduce

Do:

transformations
grouping
totals
reduce-based frequency

Important for React.

Day 6 — Recursion + Closures

Do:

flatten array
recursive sum
recursion tracing
closure problems

Day 7 — Async JavaScript

VERY important for frontend.

Do:

debounce
throttle
Promise.all
event loop tracing
async/await

*/

//Create a function that removes duplicate values from the array / without using set.

function uniqueArray (arr){
    let unique = [];
    let seen = {};

    for (let i=0; i<arr.length; i++){
        if(!seen[arr[i]]){
            seen[arr[i]] = true;
            unique.push(arr[i]);
        }
    }
    console.log(unique)
}
uniqueArray([1,2,44,55,44,66,2]);


