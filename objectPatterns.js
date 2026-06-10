/*
Problems:
Find maximum in array
Find minimum in array
Sum of array
Average of array
Reverse array
Count even/odd numbers
Find second largest element
Check if array is sorted
Rotate array by 1 position
Move zeroes to end
*/

// Find max in an array
let arr1 = [2,3,5,0,7,9,55,4,0,4,3,322,444];
function findMaxARR (arr){
    //console.log(Math.max(...arr));
    let max = 0;
    for (let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max
}
//console.log(findMaxARR([2,3,5,7,9,55,4,4,3,322,444]))

// find min in array

function findMinimum (arr){
    console.log(Math.min(...arr));
    let min = arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i]< min){
            min = arr[i];
        }
    }
    return min;
}
//console.log(findMinimum(arr1));

// Sum of array

function sum(arr){
    let sum = 0;
    // for (let i=0; i<arr.length; i++){
    //     sum = sum+arr[i]
    // }
    sum = arr.reduce((a, c) => a+c)
    return sum/arr.length;
}
//console.log(sum(arr1));

// reverse an array
function reverseArray(arr){
    let reversed = arr.reverse();
    // for(let i=arr.length-1; i>=0; i--){
    //     reversed.push(arr[i])
    // }
     return reversed;

}
//console.log(reverseArray(arr1));

//Count even/odd numbers

function countEvenOdd(arr){
    let even = 0;
    let odd = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]% 2 === 0) even++;
        else odd++;
    }
    return {even, odd}
}
//console.log(countEvenOdd(arr1));

//Find second largest element

function secondLargest(arr){
    // let maxToRemoved = Math.max(...arr)
    // let index = arr.indexOf(maxToRemoved);
    // let maxRemovedArray = arr.splice(index, 1);
    // return Math.max(...arr);
    //above sol not feasible for edge cases like repeated numbers or [10,10] etc
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
       
    }
     return secondLargest === -Infinity ? null : secondLargest
}
//console.log(secondLargest(arr1));

function thirdLargest(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;

    for( let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            thirdLargest = secondLargest;
            secondLargest = largest;
            largest = arr[i];       
        }
        else if(arr[i]>secondLargest && arr[i] !==largest){
           thirdLargest = secondLargest;
            secondLargest = arr[i];
            
        }
        else if(arr[i]> thirdLargest && arr[i] !== largest && arr[i] !== secondLargest){
            thirdLargest = arr[i];
        }
    }
        return thirdLargest === -Infinity ? null : thirdLargest;
}
//console.log(thirdLargest(arr1));

// Check if array is sorted

function isSorted(arr){
    for(let i=0; i< arr.length-1; i++){
        if(arr[i] > arr[i+1]) return false;
    }
    return true;
}
//console.log(isSorted(arr1))

//Rotate array by 1 position
function rotateByOne(arr){
    let last = arr[arr.length-1];
    for(let i=arr.length-1; i>0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = last;

    return arr;
}
//console.log(rotateByOne(arr1))

//Move zeroes to end
function moveZeroes(arr){
    let j=0;
    for (let i=0; i<arr.length; i++){
        if(arr[i] !== 0){
            [arr[i], arr[j]] = [arr[j], arr[i]]
             j++;
        }
       
    }
    return arr;
}
console.log(moveZeroes(arr1));